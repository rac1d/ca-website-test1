import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import ServiceCard from '@/components/ServiceCard';
import SectionHeading from '@/components/SectionHeading';
import { useInView } from '@/hooks/useInView';
import { services } from '@/data/site';

export default function Services() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [hash]);

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="/ our services"
          title="Services we offer"
          subtitle="From day-to-day compliance to long-term growth strategy, our Chartered Accountants provide a complete range of financial services tailored to your needs."
          crumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
        />

        {/* Grid of all services */}
        <section className="bg-cream py-20 sm:py-28" ref={ref}>
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, i) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={i}
                  inView={inView}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Detailed sections */}
        <section className="bg-navy py-20 sm:py-28 grain">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
              eyebrow="/ service details"
              title="A closer look at each service."
              dark
            />
            <div className="mt-12 space-y-8">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    id={service.id}
                    className="scroll-mt-28 rounded-2xl border border-cream/10 bg-cream/5 p-8 sm:p-10"
                  >
                    <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:gap-10">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold">
                        <Icon className="h-7 w-7 text-navy" />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-bold text-cream sm:text-3xl">
                          {service.title}
                        </h3>
                        <p className="mt-3 font-inter text-base leading-relaxed text-cream/70">
                          {service.full}
                        </p>
                        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                          {service.points.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-2.5 font-inter text-sm text-cream/75"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
