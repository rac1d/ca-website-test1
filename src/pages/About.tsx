import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import SectionHeading from '@/components/SectionHeading';
import { useInView } from '@/hooks/useInView';
import { Link } from 'react-router-dom';
import { Target, Eye, ArrowUpRight } from 'lucide-react';
import { company, team, coreValues, missionVision } from '@/data/site';

export default function About() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="/ about us"
          title="About Apex Financial Advisors"
          subtitle={company.intro}
          crumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
        />

        {/* Company intro + image */}
        <section className="bg-cream py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="https://images.pexels.com/photos/7698799/pexels-photo-7698799.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Team collaborating on financial reports"
                  className="h-80 w-full object-cover sm:h-96"
                  loading="lazy"
                />
              </div>
              <div>
                <SectionHeading
                  eyebrow="/ our story"
                  title="A firm built on trust and precision."
                />
                <p className="mt-5 font-inter text-lg leading-relaxed text-navy/70">
                  Founded in {company.founded}, {company.name} began with a
                  simple conviction: individuals and businesses deserve a
                  Chartered Accountant who is both technically excellent and
                  genuinely approachable.
                </p>
                <p className="mt-4 font-inter text-base leading-relaxed text-navy/65">
                  Over the years we have grown into a full-service practice
                  serving clients across Bengaluru and beyond — from
                  first-time tax filers and professionals to established
                  companies managing complex compliance. Our team stays current
                  with changing law so our clients always receive advice they
                  can rely on.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-navy py-20 sm:py-28 grain">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border border-cream/10 bg-cream/5 p-8 sm:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold">
                  <Target className="h-6 w-6 text-navy" />
                </div>
                <h3 className="mt-5 font-display text-3xl font-bold text-cream">
                  Our Mission
                </h3>
                <p className="mt-3 font-inter text-lg leading-relaxed text-cream/70">
                  {missionVision.mission}
                </p>
              </div>
              <div className="rounded-2xl border border-cream/10 bg-cream/5 p-8 sm:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold">
                  <Eye className="h-6 w-6 text-navy" />
                </div>
                <h3 className="mt-5 font-display text-3xl font-bold text-cream">
                  Our Vision
                </h3>
                <p className="mt-3 font-inter text-lg leading-relaxed text-cream/70">
                  {missionVision.vision}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core values */}
        <section className="bg-cream py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
              eyebrow="/ core values"
              title="The principles that guide us."
              align="center"
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {coreValues.map((value, i) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className={`rounded-2xl border border-navy/10 bg-white p-7 transition-all duration-500 ${
                      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy">
                      <Icon className="h-5 w-5 text-gold" />
                    </div>
                    <h3 className="mt-4 font-display text-xl font-bold text-navy">
                      {value.title}
                    </h3>
                    <p className="mt-2 font-inter text-sm leading-relaxed text-navy/65">
                      {value.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-cream py-20 sm:py-28" ref={ref}>
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
              eyebrow="/ our team"
              title="Meet the people behind Apex."
              subtitle="A team of qualified Chartered Accountants and specialists dedicated to your financial success."
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member, i) => (
                <div
                  key={member.name}
                  className={`group rounded-2xl border border-navy/10 bg-white p-7 text-center transition-all duration-500 hover:border-gold/40 hover:shadow-lg ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-navy font-display text-2xl font-bold text-gold">
                    {member.initials}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-navy">
                    {member.name}
                  </h3>
                  <p className="mt-1 font-grotesk text-xs font-semibold uppercase tracking-wider text-gold-dark">
                    {member.role}
                  </p>
                  <p className="mt-3 font-inter text-sm leading-relaxed text-navy/60">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link to="/contact" className="btn-navy text-base px-7 py-3.5">
                Work with us
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
