import { useInView } from '@/hooks/useInView';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import { company } from '@/data/site';

const reasons = [
  'A team of qualified Chartered Accountants with 15+ years of practice',
  'Single point of contact for all your tax and compliance needs',
  'Proactive reminders so you never miss a deadline',
  'Transparent fees with no hidden charges',
];

export default function WhyUs() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="why" className="bg-cream py-20 sm:py-28" ref={ref}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="order-2 lg:order-1">
            <p className="font-mono-display text-sm font-bold uppercase tracking-wider text-gold-dark">
              / why {company.shortName.toLowerCase()}
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-navy sm:text-5xl">
              Trusted expertise,
              <br />
              personal attention.
            </h2>
            <p className="mt-5 max-w-md font-inter text-lg leading-relaxed text-navy/65">
              We treat every client as a long-term partner. Whether you are an
              individual filer or a growing company, you get direct access to
              experienced CAs who understand your goals and respond promptly.
            </p>

            <ul className="mt-7 space-y-3">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold">
                    <Check className="h-3 w-3 text-navy" strokeWidth={3} />
                  </span>
                  <span className="font-inter text-base text-navy/75">{reason}</span>
                </li>
              ))}
            </ul>

            <Link to="/about" className="btn-navy mt-8 text-base px-7 py-3.5">
              Learn about us
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.pexels.com/photos/7433839/pexels-photo-7433839.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Professionals discussing financial reports"
                className="h-80 w-full object-cover sm:h-96"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
