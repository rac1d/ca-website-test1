import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Service } from '@/data/site';

type Props = {
  service: Service;
  index?: number;
  inView?: boolean;
  detailed?: boolean;
};

export default function ServiceCard({
  service,
  index = 0,
  inView = true,
  detailed = false,
}: Props) {
  const Icon = service.icon;

  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white p-7 transition-all duration-500 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="absolute left-0 top-0 h-full w-1 bg-primary transition-all duration-500 group-hover:w-1.5" />

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft">
        <Icon className="h-6 w-6 text-primary" />
      </div>

      <h3 className="mt-5 font-display text-2xl font-bold text-navy">
        {service.title}
      </h3>
      <p className="mt-2.5 flex-1 font-inter text-sm leading-relaxed text-navy/65">
        {service.short}
      </p>

      {detailed && (
        <ul className="mt-5 space-y-2">
          {service.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2 font-inter text-sm text-navy/70"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {point}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex items-center gap-1.5 font-grotesk text-sm font-bold text-navy/60 transition-colors group-hover:text-primary">
        <span>Read more</span>
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </div>
  );
}

export function ServiceCardLink({
  service,
  index = 0,
  inView = true,
}: Props) {
  return (
    <Link to={`/services#${service.id}`} className="block h-full">
      <ServiceCard service={service} index={index} inView={inView} />
    </Link>
  );
}
