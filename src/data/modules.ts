import { useEffect, useState } from 'react';
import { hasYouTubeId, type ModuleItem } from '@/data/site';
import { createPublicSanityClient } from '@/lib/sanity';

type VideoModuleDocument = {
  _id: string;
  title: string | null;
  description: string | null;
  category: string | null;
  youtubeUrl: string | null;
};

type VideoModule = { documentId: string; module: ModuleItem };

type VideoModulesRequest =
  | { status: 'loading' }
  | { status: 'error' }
  | { status: 'ready'; data: VideoModule[] };

const videoModulesQuery = `
  *[_type == "videoModule"] | order(displayOrder asc, _id asc) {
    _id, title, description, category, youtubeUrl
  }
`;

function getYouTubeId(value: string | null): string | null {
  if (!value) return null;

  let url: URL;
  try {
    url = new URL(value);
  } catch {
    return null;
  }

  if (url.protocol !== 'https:' || url.port || url.username || url.password) return null;

  if (url.hostname === 'youtu.be') {
    return url.pathname.slice(1);
  }

  const isYouTubeHost = ['youtube.com', 'www.youtube.com', 'm.youtube.com'].includes(url.hostname);
  return isYouTubeHost && url.pathname === '/watch' ? url.searchParams.get('v') : null;
}

async function listVideoModules(signal: AbortSignal): Promise<VideoModule[]> {
  const client = createPublicSanityClient();
  const documents = await client.fetch<VideoModuleDocument[]>(videoModulesQuery, {}, { signal });

  return documents.flatMap(({ _id, title, description, category, youtubeUrl }, index) => {
    const youtubeId = getYouTubeId(youtubeUrl);
    if (!title || !description || !category || !hasYouTubeId(youtubeId)) return [];

    return [{
      documentId: _id,
      // ModuleCard accepts the legacy numeric ID. The page keys cards by document ID.
      module: { id: index + 1, title, desc: description, category, youtubeId },
    }];
  });
}

export function useVideoModules(): VideoModulesRequest {
  const [result, setResult] = useState<VideoModulesRequest>({ status: 'loading' });

  useEffect(() => {
    const controller = new AbortController();
    void listVideoModules(controller.signal).then(
      (data) => {
        if (!controller.signal.aborted) setResult({ status: 'ready', data });
      },
      () => {
        if (!controller.signal.aborted) setResult({ status: 'error' });
      },
    );
    return () => controller.abort();
  }, []);

  return result;
}
