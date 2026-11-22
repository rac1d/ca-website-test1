import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { company, navLinks } from '@/data/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (to: string) =>
    location.pathname === to ||
    (to === '/blog' && location.pathname.startsWith('/blog/'));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b border-border transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-sm py-3'
            : 'bg-white py-4'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
          <Link to="/" className="group flex min-w-0 items-center gap-2.5 lg:shrink-0">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy transition-transform duration-300 group-hover:rotate-[-6deg]">
              <span className="font-display text-lg font-bold text-brand-gold">A</span>
            </div>
            <span className="font-display text-base font-bold leading-tight tracking-tight text-navy sm:text-xl">
              {company.name}
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex xl:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  aria-current={location.pathname === link.to ? 'page' : undefined}
                  className={`rounded-full px-3 py-2.5 font-inter text-sm font-semibold transition-colors duration-200 hover:bg-primary-soft hover:text-primary ${
                    active ? 'bg-primary-soft text-primary' : 'text-navy/75'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden shrink-0 items-center lg:flex">
            <Link to="/contact" className="btn-navy px-5 py-3 font-inter">
              Get in touch
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-white text-primary transition-colors hover:bg-primary-soft lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-300 lg:hidden ${
          menuOpen ? 'visible opacity-100 pointer-events-auto' : 'invisible opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-navy/40 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-72 max-w-[calc(100vw-1.5rem)] overflow-y-auto bg-white shadow-2xl transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-border px-6 py-5">
            <span className="font-inter text-lg font-semibold text-navy">Menu</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-primary transition-colors hover:bg-primary-soft"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-col gap-1 px-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                aria-current={location.pathname === link.to ? 'page' : undefined}
                className={`rounded-xl px-4 py-3 font-inter text-base font-semibold transition-colors hover:bg-primary-soft hover:text-primary ${
                  isActive(link.to) ? 'bg-primary-soft text-primary' : 'text-navy/75'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-navy mt-4 justify-center font-inter">
              Get in touch
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
