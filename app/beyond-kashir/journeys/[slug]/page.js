import { notFound } from 'next/navigation'
import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import BeyondKashirEnquiry from '@/components/BeyondKashirEnquiry'
import JsonLd from '@/components/JsonLd'
import {
  beyondJourneys,
  JOURNEY_STATUS,
  getJourneyBySlug,
} from '@/lib/beyondKashirData'

export function generateStaticParams() {
  return beyondJourneys.map((j) => ({ slug: j.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const journey = getJourneyBySlug(slug)
  if (!journey) return { title: 'Journey | Beyond Kashir' }
  return {
    title: `${journey.title} — Beyond Kashir`,
    description: `${journey.duration} · ${journey.route}. ${journey.overview}`,
  }
}

export default async function BeyondJourneyDetailPage({ params }) {
  const { slug } = await params
  const journey = getJourneyBySlug(slug)
  if (!journey) notFound()

  const statusMeta = JOURNEY_STATUS[journey.status]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: journey.title,
    description: journey.overview,
    touristType: journey.layerBadges,
  }

  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        image={journey.heroImage}
        label={`Beyond Kashir · ${journey.region.toUpperCase()} · ${journey.duration}`}
        title={journey.title}
        subtitle={journey.subtitle}
        breadcrumbs={[
          { label: 'Beyond Kashir', href: '/beyond-kashir' },
          { label: 'Journeys', href: '/beyond-kashir/journeys' },
          { label: journey.title },
        ]}
      />

      <section className="section-lg">
        <div className="container">
          {/* Status & Route Banner */}
          <div
            className="card"
            style={{
              padding: 'var(--space-6) var(--space-8)',
              marginBottom: 'var(--space-12)',
              border: '1px solid rgba(197, 165, 90, 0.28)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div>
              <span className="card-label" style={{ marginBottom: '0.25rem' }}>
                Curated Route
              </span>
              <p style={{ color: 'var(--color-ivory)', margin: 0, fontWeight: 500 }}>
                {journey.route}
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '0.35rem 0.9rem',
                  borderRadius: '9999px',
                  color: statusMeta.color,
                  background: statusMeta.bg,
                  border: `1px solid ${statusMeta.border}`,
                }}
              >
                {statusMeta.label}
              </span>
            </div>
          </div>

          <div className="content-split">
            <RevealOnScroll>
              <div>
                <span className="section-label" style={{ paddingLeft: 0, justifyContent: 'flex-start' }}>
                  Journey Narrative
                </span>
                <h2 style={{ marginTop: '0.75rem', marginBottom: '1.25rem' }}>
                  Overview & Highlights
                </h2>
                <div className="gold-divider gold-divider-left" />
                <p style={{ marginTop: '1.5rem', marginBottom: '1.75rem' }}>
                  {journey.overview}
                </p>

                <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: '1rem', color: 'var(--color-gold-light)' }}>
                  Key Experiences
                </h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                  {journey.highlights.map((h) => (
                    <li key={h} style={{ color: 'var(--color-ivory-warm)', fontSize: 'var(--text-base)', display: 'flex', gap: '0.6rem' }}>
                      <span style={{ color: 'var(--color-gold)' }}>&#10022;</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="form-grid" style={{ gap: '1.5rem' }}>
                  <div className="card" style={{ padding: 'var(--space-6)' }}>
                    <span className="card-label">Inclusions</span>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
                      {journey.inclusions.map((inc) => (
                        <li key={inc} style={{ fontSize: 'var(--text-sm)', color: 'var(--color-warm-gray)' }}>
                          + {inc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="card" style={{ padding: 'var(--space-6)' }}>
                    <span className="card-label">Exclusions</span>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
                      {journey.exclusions.map((exc) => (
                        <li key={exc} style={{ fontSize: 'var(--text-sm)', color: 'var(--color-warm-gray)' }}>
                          &minus; {exc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={2}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                <div className="card" style={{ padding: 'var(--space-8)' }}>
                  <span className="card-label">Journey Specifications</span>
                  <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[
                      { label: 'Duration', val: journey.duration },
                      { label: 'Best Season', val: journey.bestSeason },
                      { label: 'Accommodation Approach', val: journey.accommodation },
                      { label: 'Transportation', val: journey.transport },
                      { label: 'Departure Format', val: journey.groupOption },
                      { label: 'Pricing Model', val: 'Enquiry-based bespoke pricing tailored to dates & stay tier' },
                    ].map((spec) => (
                      <div key={spec.label} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.75rem' }}>
                        <strong style={{ color: 'var(--color-gold-light)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block' }}>
                          {spec.label}
                        </strong>
                        <p style={{ margin: '0.2rem 0 0', fontSize: 'var(--text-sm)' }}>{spec.val}</p>
                      </div>
                    ))}
                    <div>
                      <strong style={{ color: 'var(--color-gold-light)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block' }}>
                        Transparency & Official Authorisation
                      </strong>
                      <p style={{ margin: '0.2rem 0 0', fontSize: 'var(--text-xs)' }}>
                        {journey.authorisationNote}
                      </p>
                    </div>
                  </div>
                </div>

                <BeyondKashirEnquiry
                  contextTitle={journey.title}
                  region={journey.region === 'ladakh' ? 'Ladakh' : 'Jammu'}
                  journeySlug={journey.slug}
                  mode="journey"
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  )
}
