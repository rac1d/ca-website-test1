import { useState } from 'react';
import { PlayCircle } from 'lucide-react';
import { hasYouTubeId, type ModuleItem } from '@/data/site';

type Props = {
  module: ModuleItem;
  index?: number;
  inView?: boolean;
};

export default function ModuleCard({
  module,
  index = 0,
  inView = true,
}: Props) {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const youtubeId = module.youtubeId;
  const canPlay = hasYouTubeId(youtubeId);
  const isPlaying = canPlay && playingId === youtubeId;

  return (
    <div
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all duration-500 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="relative flex aspect-video shrink-0 items-center justify-center bg-navy">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-hover to-primary" />
        {isPlaying ? (
          <iframe
            className="absolute inset-0 h-full w-full border-0"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&playsinline=1`}
            title={`YouTube tutorial: ${module.title}`}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <>
            {canPlay && (
              <button
                type="button"
                aria-label={`Play video: ${module.title}`}
                onClick={() => setPlayingId(youtubeId)}
                className="absolute inset-0 grid place-items-center focus-visible:outline-accent focus-visible:outline-offset-[-4px]"
              >
                <img
                  src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                  onError={(event) => { event.currentTarget.hidden = true; }}
                />
                <span className="relative rounded-full bg-navy/80 p-2 text-accent transition-transform duration-300 group-hover:scale-110">
                  <PlayCircle className="h-12 w-12" aria-hidden="true" />
                </span>
              </button>
            )}
            <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-navy/60 px-3 py-1 font-mono-display text-[0.65rem] font-bold uppercase tracking-wider text-accent backdrop-blur-sm">
              {module.category}
            </span>
          </>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold text-navy">
          {module.title}
        </h3>
        <p className="mt-2 flex-1 font-inter text-sm leading-relaxed text-navy/65">
          {module.desc}
        </p>
        <p className="mt-4 font-mono-display text-[0.7rem] font-bold uppercase tracking-wider text-navy/75">
          {canPlay ? 'Video tutorial' : 'Video not yet available'}
        </p>
        {canPlay && (
          <button
            type="button"
            aria-label={isPlaying ? undefined : `Play tutorial: ${module.title}`}
            onClick={() => setPlayingId(isPlaying ? null : youtubeId)}
            className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full border-2 border-primary px-5 py-2.5 font-grotesk text-sm font-bold text-primary transition-all duration-300 hover:border-primary-hover hover:bg-primary hover:text-white active:scale-95"
          >
            {isPlaying ? 'Back to thumbnail' : 'Play video'}
          </button>
        )}
      </div>
    </div>
  );
}
