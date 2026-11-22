import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import { company } from '@/data/site';

const heroPoints = [
  'GST & Income Tax compliance',
  'Statutory & internal audits',
  'Business registration & advisory',
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy pt-32 pb-20 sm:pt-40 sm:pb-32 grain">
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-20 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute top-40 -left-20 h-80 w-80 rounded-full bg-navy-300/15 blur-3xl" />
        <div className="absolute right-[8%] top-[18%] hidden h-10 w-10 rounded-lg border-2 border-accent/30 lg:block" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="font-mono-display text-xs font-bold uppercase tracking-wider text-accent">
                Chartered Accountants · Est. {company.founded}
              </span>
            </div>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-cream sm:text-5xl lg:text-6xl">
              {company.tagline}
            </h1>

            <p className="mt-6 max-w-xl font-inter text-lg leading-relaxed text-cream/70">
              {company.intro}
            </p>

            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
              {heroPoints.map((point) => (
                <li key={point} className="flex items-center gap-2 font-inter text-sm text-cream/80">
                  <Check className="h-4 w-4 text-accent" strokeWidth={3} />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link to="/contact" className="btn-primary text-base px-8 py-4">
                Get in touch
                <ArrowUpRight className="h-5 w-5" />
              </Link>
              <Link to="/services" className="btn-ghost text-base px-8 py-4">
                Explore services
              </Link>
            </div>
          </div>

          {/* Right image */}
          <div className="relative hidden lg:block">
            <div className="relative overflow-hidden rounded-2xl border border-cream/10 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7433853/pexels-photo-7433853.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Business professionals in a strategic meeting"
                className="h-[32rem] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-accent px-5 py-4 shadow-xl">
              <p className="font-mono-display text-xs font-bold uppercase tracking-wider text-navy">
                Trusted since
              </p>
              <p className="font-display text-2xl font-bold text-navy">
                {company.founded}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
