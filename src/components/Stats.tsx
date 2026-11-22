import { useInView, useCountUp } from '@/hooks/useInView';
import { stats } from '@/data/site';

function StatCard({
  stat,
  start,
  index,
}: {
  stat: (typeof stats)[number];
  start: boolean;
  index: number;
}) {
  const count = useCountUp(stat.value, 2000, start);
  const Icon = stat.icon;

  return (
    <div
      className={`relative rounded-2xl border border-navy/10 bg-white p-7 transition-all duration-500 ${
        start ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy">
        <Icon className="h-5 w-5 text-gold" />
      </div>
      <p className="mt-6 font-display text-4xl font-bold text-navy sm:text-5xl">
        {stat.prefix}
        {count}
        {stat.suffix}
      </p>
      <p className="mt-2 font-inter text-sm text-navy/65">
        {stat.label}
      </p>
    </div>
  );
}

export default function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="bg-cream py-20 sm:py-28" ref={ref}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} start={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
