import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import ModuleCard from '@/components/ModuleCard';
import SectionHeading from '@/components/SectionHeading';
import { useInView } from '@/hooks/useInView';
import { hasYouTubeId, modules } from '@/data/site';
import { Info } from 'lucide-react';

export default function Modules() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="/ modules & resources"
          title="Modules & Video Tutorials"
          subtitle="Watch conversations from The Nikhil Madrasi Show on health, community, wealth, technology, and culture."
          crumbs={[{ label: 'Home', to: '/' }, { label: 'Modules' }]}
        />

        <section className="bg-cream py-20 sm:py-28" ref={ref}>
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            {/* Note banner */}
            <div className="mb-12 flex items-start gap-3 rounded-2xl border border-border bg-primary-soft px-6 py-4">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <p className="font-inter text-sm leading-relaxed text-navy/70">
                {modules.some(({ youtubeId }) => hasYouTubeId(youtubeId))
                  ? 'Select the play button on any video to watch it here.'
                  : 'Video tutorials are not yet available. You can browse the module topics below.'}
              </p>
            </div>

            <SectionHeading
              eyebrow="/ learning modules"
              title="Browse the module library."
            />

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {modules.map((module, i) => (
                <ModuleCard
                  key={module.id}
                  module={module}
                  index={i}
                  inView={inView}
                />
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
