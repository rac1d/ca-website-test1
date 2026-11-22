import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

type Crumb = { label: string; to?: string };

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
  showContact?: boolean;
};

export default function PageHeader({ eyebrow, title, subtitle, crumbs, showContact = true }: Props) {
  return (
    <section className="relative overflow-hidden bg-navy pt-32 pb-16 sm:pt-40 sm:pb-20 grain">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-20 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {crumbs && (
          <nav className="mb-5 flex items-center gap-2 font-mono-display text-xs text-cream/50">
            {crumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {crumb.to ? (
                  <Link to={crumb.to} className="transition-colors hover:text-gold">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gold">{crumb.label}</span>
                )}
                {i < crumbs.length - 1 && <span>/</span>}
              </span>
            ))}
          </nav>
        )}
        <p className="font-mono-display text-sm font-bold uppercase tracking-wider text-gold">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-cream sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl font-inter text-lg leading-relaxed text-cream/65">
            {subtitle}
          </p>
        )}
        {showContact && (
          <Link to="/contact" className="btn-primary mt-8 text-base px-7 py-3.5">
            Get in touch
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </section>
  );
}
