import { clientLogos } from '@/data/site';

export default function Marquee() {
  return (
    <div className="border-y border-navy/10 bg-cream py-6 overflow-hidden">
      <p className="mb-3 px-5 text-center font-mono-display text-[0.65rem] font-bold uppercase tracking-[0.22em] text-navy/55 sm:px-8">
        Trusted by businesses across India
      </p>
      <div className="relative flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-12 pr-12">
          {clientLogos.map((logo, i) => (
            <span
              key={i}
              className="font-display text-xl font-bold text-navy/30 whitespace-nowrap transition-colors hover:text-navy/60"
            >
              {logo}
            </span>
          ))}
        </div>
        <div
          className="flex shrink-0 animate-marquee items-center gap-12 pr-12"
          aria-hidden
        >
          {clientLogos.map((logo, i) => (
            <span
              key={i}
              className="font-display text-xl font-bold text-navy/30 whitespace-nowrap transition-colors hover:text-navy/60"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
