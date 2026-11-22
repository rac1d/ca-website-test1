import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';

const perks = [
  'Free 30-minute consultation',
  'Fixed, transparent pricing',
  'No long-term contracts',
  'Direct access to your CA',
];

export default function CTA() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-navy px-8 py-14 sm:px-16 sm:py-20 grain">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
            <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-navy-300/10 blur-3xl" />
            <div className="absolute right-[10%] top-[15%] h-10 w-10 rounded-lg border-2 border-accent/30" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-cream sm:text-5xl">
              Let's make your
              <br />
              <span className="text-accent">finances work</span> for you.
            </h2>
            <p className="mt-5 max-w-xl font-inter text-lg text-cream/60">
              Book a free consultation and we will review your compliance, tax,
              and growth needs — with clear next steps and no obligation.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="btn-primary px-8 py-4 text-base"
              >
                Get in touch
                <ArrowUpRight className="h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="btn-ghost text-base px-8 py-4"
              >
                Explore services
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {perks.map((perk) => (
                <div key={perk} className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-accent">
                    <Check className="h-3 w-3 text-navy" strokeWidth={3} />
                  </div>
                  <span className="font-inter text-sm text-cream/70">{perk}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
