import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import BeyondKashirEnquiry from '@/components/BeyondKashirEnquiry'
import JsonLd from '@/components/JsonLd'
import {
  beyondDestinations,
  beyondJourneys,
  JOURNEY_STATUS,
  getDestinationBySlug,
  getJammuPillarBySlug,
} from '@/lib/beyondKashirData'

export function generateStaticParams() {
  return beyondDestinations.map((dest) => ({
    slug: dest.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const dest = getDestinationBySlug(slug)
  if (!dest) return { title: 'Destination | Beyond Kashir' }
  return {
    title: `${dest.name} — Beyond Kashir`,
    description: `${dest.subtitle}. ${dest.background}`,
  }
}

export default async function DestinationDetailPage({ params }) {
  const { slug } = await params
  const dest = getDestinationBySlug(slug)
  if (!dest) notFound()

  const primaryPillar = getJammuPillarBySlug(dest.primaryLayer)
  const linkedJourneys = beyondJourneys.filter((j) =>
    dest.linkedJourneySlugs.includes(j.slug)
  )

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: dest.name,
    description: dest.background,
  }

  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        image={dest.heroImage}
        label={`Discover ${dest.region.toUpperCase()} · ${primaryPillar?.name || dest.primaryLayer}`}
        title={dest.name}
        subtitle={dest.subtitle}
        breadcrumbs={[
          { label: 'Beyond Kashir', href: '/beyond-kashir' },
          { label: 'Jammu', href: '/beyond-kashir/jammu' },
          ...(primaryPillar
            ? [{ label: primaryPillar.name, href: `/beyond-kashir/jammu/${primaryPillar.slug}` }]
            : []),
          { label: dest.name },
        ]}
      />

      <section className="section-lg">
        <div className="container">
          <div className="content-split">
            <RevealOnScroll>
              <div>
                <span className="section-label" style={{ paddingLeft: 0, justifyContent: 'flex-start' }}>
                  Destination Story
                </span>
                <h2 style={{ marginTop: '0.75rem', marginBottom: '1.25rem' }}>
                  Background & Significance
                </h2>
                <div className="gold-divider gold-divider-left" />
                <p style={{ marginTop: '1.5rem', marginBottom: '1.25rem' }}>
                  {dest.background}
                </p>
                <p style={{ marginBottom: '1.75rem' }}>
                  {dest.significance}
                </p>

                <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: '1rem', color: 'var(--color-gold-light)' }}>
                  Key Highlights
                </h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {dest.highlights.map((h) => (
                    <li key={h} style={{ color: 'var(--color-ivory-warm)', fontSize: 'var(--text-base)', display: 'flex', gap: '0.6rem' }}>
                      <span style={{ color: 'var(--color-gold)' }}>&bull;</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={2}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                <div className="card" style={{ padding: 'var(--space-8)', border: '1px solid rgba(197, 165, 90, 0.25)' }}>
                  <span className="card-label">Practical Travel Considerations</span>
                  <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                      <strong style={{ color: 'var(--color-gold-light)', fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block' }}>
                        Best Season
                      </strong>
                      <p style={{ margin: '0.25rem 0 0', fontSize: 'var(--text-sm)' }}>{dest.bestSeason}</p>
                    </div>
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.85rem' }}>
                      <strong style={{ color: 'var(--color-gold-light)', fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block' }}>
                        Travel & Access Notes
                      </strong>
                      <p style={{ margin: '0.25rem 0 0', fontSize: 'var(--text-sm)' }}>{dest.practicalNotes}</p>
                    </div>
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.85rem' }}>
                      <strong style={{ color: 'var(--color-gold-light)', fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.45rem' }}>
                        Connected Layers & Collections
                      </strong>
                      <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
                        {[dest.primaryLayer, ...(dest.collections || [])].map((slugItem) => {
                          const p = getJammuPillarBySlug(slugItem)
                          if (!p) return null
                          return (
                            <Link
                              key={slugItem}
                              href={`/beyond-kashir/jammu/${p.slug}`}
                              style={{
                                fontSize: '0.72rem',
                                padding: '0.25rem 0.7rem',
                                borderRadius: '9999px',
                                border: '1px solid rgba(197, 165, 90, 0.35)',
                                color: 'var(--color-gold)',
                              }}
                            >
                              {p.name}
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Linked Bookable Journeys OR Bespoke Enquiry */}
      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          {linkedJourneys.length > 0 ? (
            <>
              <div style={{ marginBottom: '2.5rem' }}>
                <span className="section-label" style={{ paddingLeft: 0, justifyContent: 'flex-start' }}>
                  Explore Journeys
                </span>
                <h2 style={{ marginTop: '0.5rem' }}>
                  Curated Journeys Including {dest.name}
                </h2>
              </div>
              <div className="feature-grid" style={{ marginBottom: '3rem' }}>
                {linkedJourneys.map((journey) => {
                  const statusMeta = JOURNEY_STATUS[journey.status]
                  return (
                    <Link
                      key={journey.slug}
                      href={`/beyond-kashir/journeys/${journey.slug}`}
                      style={{ textDecoration: 'none', display: 'block', height: '100%' }}
                    >
                      <div className="card" style={{ padding: 'var(--space-8)', height: '100%' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                          <span className="card-label" style={{ margin: 0 }}>{journey.duration}</span>
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
                        <h3 className="card-title">{journey.title}</h3>
                        <p className="card-text">{journey.overview}</p>
                        <span style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--color-gold)', fontSize: 'var(--text-sm)', fontWeight: 500 }}>
                          View Itinerary & Enquire →
                        </span>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </>
          ) : null}

          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <BeyondKashirEnquiry
              contextTitle={dest.name}
              region={dest.region === 'ladakh' ? 'Ladakh' : 'Jammu'}
              mode="bespoke"
            />
          </div>
        </div>
      </section>
    </>
  )
}
