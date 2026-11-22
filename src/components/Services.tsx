import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { services } from '@/data/site';
import { ServiceCardLink } from '@/components/ServiceCard';
import SectionHeading from '@/components/SectionHeading';

export default function Services() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="services" className="bg-navy py-20 sm:py-28 grain" ref={ref}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="/ what we do"
            title={
              <>
                Comprehensive financial
                <br />
                &amp; compliance services.
              </>
            }
            dark
          />
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 font-grotesk text-sm font-bold text-gold transition-colors hover:text-gold-light"
          >
            View all services
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCardLink
              key={service.id}
              service={service}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
