import Link from 'next/link'
import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import SectionHeader from '@/components/SectionHeader'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Journeys — Curated, Not Packaged',
  description: 'Every Kashir Wath journey is shaped around you — your interests, your pace, your reasons for seeking Kashir. Private, family, tailor-made and premium.',
}

const journeyTypes = [
  { title: 'Private Journeys', desc: 'Exclusively yours. Every moment curated with personal attention, expert guides, and the flexibility to follow your instincts.', href: '/journeys/private', label: 'Exclusive' },
  { title: 'Small Group Journeys', desc: 'Intimate groups of like-minded travellers. Shared discovery, curated moments, the camaraderie of collective exploration.', href: '/journeys/small-group', label: 'Intimate' },
  { title: 'Family & Multi-Generational', desc: 'Share Kashir across generations — heritage, stories, new memories. Designed for families travelling together.', href: '/journeys/family', label: 'Family' },
  { title: 'Tailor-Made Journeys', desc: 'Tell us what you seek. We shape the journey around it. No templates, no fixed itineraries — entirely yours.', href: '/journeys/tailor-made', label: 'Custom' },
  { title: 'Premium Kashmir', desc: 'The finest stays, the most thoughtful experiences, impeccable service. For travellers who expect the exceptional.', href: '/journeys/premium', label: 'Premium' },
  { title: 'Special Interest', desc: 'Heritage, spirituality, food, photography, cultural reconnection — journeys built around a specific passion or purpose.', href: '/journeys/special-interest', label: 'Focused' },
]

export default function Journeys() {
  return (
    <>
      <PageHero
        image="/images/hero.jpg"
        label="Journeys"
        title="Curated, Not Packaged"
        subtitle="Every Kashir Wath journey is shaped around you — your interests, your pace, your reasons for seeking Kashir."
        breadcrumbs={[{ label: 'Journeys' }]}
      />

      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <p style={{ margin: '0 auto' }}>
                We do not sell packages. We do not offer fixed itineraries that every traveller
                follows. Every Kashir Wath journey begins with a conversation — understanding
                what you seek, what matters to you, what would make this journey feel genuinely
                yours. Then we curate. Then we refine. Then you travel.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <RevealOnScroll>
            <SectionHeader
              label="Journey Types"
              title="Choose Your Way of Travelling"
            />
          </RevealOnScroll>

          <div className="feature-grid" style={{ marginTop: '2rem' }}>
            {journeyTypes.map((j, i) => (
              <RevealOnScroll key={j.title} delay={i % 3}>
                <Link href={j.href} style={{ textDecoration: 'none' }}>
                  <div className="card" style={{ padding: 'var(--space-8)', height: '100%' }}>
                    <span className="card-label">{j.label}</span>
                    <h3 className="card-title" style={{ fontSize: 'var(--text-xl)' }}>{j.title}</h3>
                    <p className="card-text">{j.desc}</p>
                    <span style={{ display: 'inline-block', marginTop: '1.5rem', color: 'var(--color-gold)', fontSize: 'var(--text-sm)', fontWeight: 500 }}>
                      Explore →
                    </span>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-lg">
        <div className="container">
          <div className="content-split">
            <RevealOnScroll>
              <div>
                <span className="section-label" style={{ paddingLeft: 0 }}>How It Works</span>
                <h2 style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
                  From Thought to Memory
                </h2>
                <div className="gold-divider gold-divider-left" />
                <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {[
                    { step: '01', title: 'Tell Us', text: 'Share what you seek from Kashir — dates, interests, travel style, special requirements.' },
                    { step: '02', title: 'Understand', text: 'We listen, ask questions, and shape your vision into a clear journey concept.' },
                    { step: '03', title: 'Curate', text: 'We craft a detailed journey — stays, experiences, guides, transport — tailored to you.' },
                    { step: '04', title: 'Refine', text: 'Together we perfect every detail until the journey feels exactly right.' },
                    { step: '05', title: 'Travel', text: 'Experience Kashir with meaning, support and care throughout.' },
                    { step: '06', title: 'Remember', text: 'The journey stays with you — and the relationship continues.' },
                  ].map((s) => (
                    <div key={s.step} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <span style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-2xl)', color: 'var(--color-gold)', opacity: 0.4, minWidth: '2.5rem' }}>{s.step}</span>
                      <div>
                        <h4 style={{ fontSize: 'var(--text-lg)', marginBottom: '0.25rem' }}>{s.title}</h4>
                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-warm-gray)' }}>{s.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={2}>
              <div className="content-image">
                <img src="/images/discover.jpg" alt="Journey curation process" loading="lazy" />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
