import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { company, navLinks, services } from '@/data/site';

export default function Footer() {
  return (
    <footer className="bg-navy pt-16 pb-8 grain">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gold">
                <span className="font-display text-lg font-bold text-navy">A</span>
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-cream">
                {company.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs font-inter text-sm leading-relaxed text-cream/60">
              Chartered Accountants & Financial Consultancy. Trusted by
              individuals and businesses across India for compliance, tax, and
              growth advisory.
            </p>
            <div className="mt-5 flex gap-3">
              <a href={company.social.linkedin} aria-label="LinkedIn" className="group flex h-9 w-9 items-center justify-center rounded-lg bg-cream/5 border border-cream/10 transition-colors hover:bg-accent hover:border-accent">
                <Linkedin className="h-4 w-4 text-cream group-hover:text-navy" />
              </a>
              <a href={company.social.twitter} aria-label="Twitter" className="group flex h-9 w-9 items-center justify-center rounded-lg bg-cream/5 border border-cream/10 transition-colors hover:bg-accent hover:border-accent">
                <Twitter className="h-4 w-4 text-cream group-hover:text-navy" />
              </a>
              <a href={company.social.facebook} aria-label="Facebook" className="group flex h-9 w-9 items-center justify-center rounded-lg bg-cream/5 border border-cream/10 transition-colors hover:bg-accent hover:border-accent">
                <Facebook className="h-4 w-4 text-cream group-hover:text-navy" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-grotesk text-sm font-bold uppercase tracking-wider text-accent">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="font-inter text-sm text-cream/60 transition-colors hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-grotesk text-sm font-bold uppercase tracking-wider text-accent">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link to={`/services#${service.id}`} className="font-inter text-sm text-cream/60 transition-colors hover:text-accent">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-grotesk text-sm font-bold uppercase tracking-wider text-accent">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href={`mailto:${company.email}`} className="font-inter text-sm text-cream/60 transition-colors hover:text-accent">
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href={`tel:${company.phoneTel}`} className="font-inter text-sm text-cream/60 transition-colors hover:text-accent">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="font-inter text-sm text-cream/60">
                  {company.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-6 sm:flex-row">
          <p className="font-mono-display text-xs text-cream/40">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <span className="font-inter text-xs text-cream/40">
            Chartered Accountants · Bengaluru, India
          </span>
          <Link
            to="/contact"
            className="flex items-center gap-1.5 font-grotesk text-xs font-semibold text-cream/70 transition-colors hover:text-accent"
          >
            Get in touch
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
