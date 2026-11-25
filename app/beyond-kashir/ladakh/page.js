import Link from 'next/link'
import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import SectionHeader from '@/components/SectionHeader'
import CTASection from '@/components/CTASection'
import BeyondKashirEnquiry from '@/components/BeyondKashirEnquiry'
import JsonLd from '@/components/JsonLd'
import { ladakhData, beyondJourneys, JOURNEY_STATUS } from '@/lib/beyondKashirData'

export const metadata = {
  title: 'Discover Ladakh — Monasteries, High Passes & Living Villages | Beyond Kashir',
  description:
    'Explore Ladakh’s distinct Buddhist, Balti, and Changpa heritage through slow, acclimatised trans-Himalayan journeys under Beyond Kashir.',
}

export default function LadakhPage() {
  const ladakhJourneys = beyondJourneys.filter((j) => j.region === 'ladakh')

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: 'Ladakh — Beyond Kashir',
    description: metadata.description,
  }

  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        image={ladakhData.heroImage}
        label="Beyond Kashir · Ladakh"
        title="Discover Ladakh"
        subtitle={ladakhData.tagline}
        breadcrumbs={[
          { label: 'Beyond Kashir', href: '/beyond-kashir' },
          { label: 'Discover Ladakh' },
        ]}
      />

      {/* Distinct Identity Intro */}
      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container-narrow">
          <RevealOnScroll>
            <div style={{ textAlign: 'center' }}>
              <span className="section-label">Trans-Himalayan Identity</span>
              <h2 style={{ marginTop: '0.75rem', marginBottom: '1.5rem' }}>
                A High-Altitude World <em style={{ color: 'var(--color-gold)' }}>Unto Itself</em>
              </h2>
              <div className="gold-divider" />
              {ladakhData.intro.map((para, i) => (
                <p key={i} style={{ margin: '1.25rem auto 0', maxWidth: '68ch' }}>
                  {para}
                </p>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Ladakh Pillars */}
      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <SectionHeader
              label="Ladakh Architecture"
              title="Three Expressions of Ladakh"
              subtitle="Shaped around Ladakh’s own monastic traditions, high-altitude ecology, and resilient mountain communities."
            />
          </RevealOnScroll>

          <div className="feature-grid" style={{ marginTop: '3rem' }}>
            {ladakhData.pillars.map((pillar, i) => (
              <RevealOnScroll key={pillar.number} delay={i + 1}>
                <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div className="card-image">
                    <img src={pillar.image} alt={pillar.name} loading="lazy" />
                  </div>
                  <div className="card-content" style={{ flex: 1 }}>
                    <span className="card-label">
                      {pillar.number} · {pillar.subtitle}
                    </span>
                    <h3 className="card-title" style={{ fontSize: 'var(--text-xl)' }}>
                      {pillar.name}
                    </h3>
                    <p className="card-text">{pillar.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1.25rem' }}>
                      {pillar.places.map((pl) => (
                        <span
                          key={pl}
                          style={{
                            fontSize: '0.72rem',
                            padding: '0.25rem 0.65rem',
                            border: '1px solid rgba(197, 165, 90, 0.3)',
                            borderRadius: '9999px',
                            color: 'var(--color-gold-light)',
                          }}
                        >
                          {pl}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Seasons */}
      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <RevealOnScroll>
            <SectionHeader
              label="Seasonal Windows"
              title="Ladakh Through the Year"
              subtitle="High passes and monastic festivals follow strict Himalayan weather rhythms."
            />
          </RevealOnScroll>

          <div className="feature-grid" style={{ marginTop: '3rem' }}>
            {ladakhData.seasons.map((s, i) => (
              <RevealOnScroll key={s.title} delay={(i % 2) + 1}>
                <div className="card" style={{ padding: 'var(--space-8)', height: '100%' }}>
                  <span className="card-label">Season {String(i + 1).padStart(2, '0')}</span>
                  <h3 className="card-title" style={{ fontSize: 'var(--text-xl)' }}>
                    {s.title}
                  </h3>
                  <p className="card-text">{s.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Ladakh Journeys & Enquiry */}
      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <SectionHeader
              label="Explore Journeys"
              title="Curated Ladakh Itineraries"
              subtitle="Paced carefully for altitude acclimatisation, authentic monastery encounters, and eco-sensitive stays."
            />
          </RevealOnScroll>

          <div style={{ marginTop: '3rem', display: 'grid', gap: 'var(--space-10)' }}>
            {ladakhJourneys.map((journey) => {
              const statusMeta = JOURNEY_STATUS[journey.status]
              return (
                <div
                  key={journey.slug}
                  className="card"
                  style={{ padding: 'var(--space-8)', border: '1px solid rgba(197, 165, 90, 0.25)' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
                    <span className="card-label" style={{ margin: 0 }}>
                      {journey.duration} · {journey.bestSeason}
                    </span>
                    <span
                      style={{
                        fontSize: '0.6875rem',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '9999px',
                        color: statusMeta.color,
                        background: statusMeta.bg,
                        border: `1px solid ${statusMeta.border}`,
                      }}
                    >
                      {statusMeta.label}
                    </span>
                  </div>
                  <h3 className="card-title" style={{ fontSize: 'var(--text-3xl)' }}>
                    {journey.title}
                  </h3>
                  <p style={{ color: 'var(--color-gold-light)', fontSize: 'var(--text-sm)', marginBottom: '1rem' }}>
                    Route: {journey.route}
                  </p>
                  <p className="card-text" style={{ marginBottom: '1.5rem' }}>
                    {journey.overview}
                  </p>
                  <Link href={`/beyond-kashir/journeys/${journey.slug}`} className="btn btn-primary">
                    View Full Itinerary & Enquire
                  </Link>
                </div>
              )
            })}

            <BeyondKashirEnquiry
              contextTitle="Bespoke Ladakh Journey"
              region="Ladakh"
              mode="bespoke"
            />
          </div>
        </div>
      </section>

      <CTASection
        label="Beyond Kashir · Ladakh"
        title="Ready to Cross the High Passes?"
        subtitle="Speak with our team to craft an acclimatised, unhurried Ladakh journey."
        primaryCta="Plan Your Journey"
        primaryHref="/plan-your-journey?region=Ladakh"
      />
    </>
  )
}
