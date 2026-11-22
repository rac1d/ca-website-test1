import { useInView } from '@/hooks/useInView';
import { Quote } from 'lucide-react';
import { testimonials } from '@/data/site';
import SectionHeading from '@/components/SectionHeading';

function TestimonialCard({
  testimonial,
  index,
  inView,
}: {
  testimonial: (typeof testimonials)[number];
  index: number;
  inView: boolean;
}) {
  return (
    <div
      className={`h-full rounded-2xl border border-navy/10 bg-white p-7 transition-all duration-600 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <Quote className="h-8 w-8 text-gold opacity-40" fill="currentColor" />
      <p className="mt-4 font-display text-xl font-medium leading-snug text-navy">
        "{testimonial.quote}"
      </p>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy font-display text-lg font-bold text-gold">
          {testimonial.author.charAt(0)}
        </div>
        <div>
          <p className="font-grotesk text-sm font-bold text-navy">
            {testimonial.author}
          </p>
          <p className="font-inter text-xs text-navy/60">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="bg-cream py-20 sm:py-28 grain" ref={ref}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14">
          <SectionHeading
            eyebrow="/ client stories (sample content)"
            title={
              <>
                What our clients
                <br />
                say about us.
              </>
            }
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard
              key={i}
              testimonial={testimonial}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
