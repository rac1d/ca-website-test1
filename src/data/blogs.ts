import { useEffect, useState } from 'react';
import type { PortableTextBlock } from '@portabletext/react';
import { createPublicSanityClient } from '@/lib/sanity';

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: { src: string; alt: string } | null;
  publishedOn: string;
  topic: string;
};

export type BlogArticle = BlogPost & {
  body: PortableTextBlock[];
  author: string | null;
  seoTitle: string | null;
  metaDescription: string | null;
};

const postFields = `
  "id": _id,
  "slug": slug.current,
  title,
  excerpt,
  "topic": category,
  publishedOn,
  "featuredImage": select(defined(featuredImage.asset->url) => {
    "src": featuredImage.asset->url + "?w=1200&auto=format",
    "alt": coalesce(featuredImage.alt, "")
  })
`;
const publishedPosts = '*[_type == "post" && defined(slug.current)]';
let client: ReturnType<typeof createPublicSanityClient> | undefined;

function getClient() {
  return (client ??= createPublicSanityClient());
}

async function listBlogPosts(_key: string, signal: AbortSignal): Promise<BlogPost[]> {
  return getClient().fetch(
    `${publishedPosts} | order(publishedOn desc, _id asc) { ${postFields} }`,
    {},
    { signal },
  );
}

async function findBlogPost(slug: string, signal: AbortSignal): Promise<BlogArticle | null> {
  return getClient().fetch(
    `(${publishedPosts}[slug.current == $slug] | order(_id asc))[0] {
      ${postFields}, author, "body": coalesce(body, []), seoTitle, metaDescription
    }`,
    { slug },
    { signal },
  );
}

type RequestState<T> =
  | { status: 'loading' }
  | { status: 'error' }
  | { status: 'ready'; data: T };

function useBlogRequest<T>(
  key: string,
  load: (key: string, signal: AbortSignal) => Promise<T>,
): RequestState<T> {
  const [result, setResult] = useState<{ key: string; state: RequestState<T> }>();

  useEffect(() => {
    const controller = new AbortController();
    void load(key, controller.signal).then(
      (data) => {
        if (!controller.signal.aborted) setResult({ key, state: { status: 'ready', data } });
      },
      () => {
        if (!controller.signal.aborted) setResult({ key, state: { status: 'error' } });
      },
    );
    return () => controller.abort();
  }, [key, load]);

  return result?.key === key ? result.state : { status: 'loading' };
}

export function useBlogPosts() {
  return useBlogRequest('blog', listBlogPosts);
}

export function useBlogArticle(slug: string | undefined) {
  return useBlogRequest(slug ?? '', findBlogPost);
}

const dateFormatter = new Intl.DateTimeFormat('en-IN', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

export function formatBlogDate(date: string): string {
  return dateFormatter.format(new Date(date));
}
