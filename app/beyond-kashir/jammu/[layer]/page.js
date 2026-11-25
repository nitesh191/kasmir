import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import SectionHeader from '@/components/SectionHeader'
import BeyondKashirEnquiry from '@/components/BeyondKashirEnquiry'
import JsonLd from '@/components/JsonLd'
import {
  jammuLayers,
  jammuCollections,
  beyondDestinations,
  beyondJourneys,
  JOURNEY_STATUS,
  getJammuPillarBySlug,
} from '@/lib/beyondKashirData'

export function generateStaticParams() {
  return [...jammuLayers, ...jammuCollections].map((item) => ({
    layer: item.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { layer } = await params
  const pillar = getJammuPillarBySlug(layer)
  if (!pillar) return { title: 'Beyond Kashir · Jammu' }
  return {
    title: pillar.seo.title,
    description: pillar.seo.description,
  }
}

export default async function JammuLayerPage({ params }) {
  const { layer } = await params
  const pillar = getJammuPillarBySlug(layer)
  if (!pillar) notFound()

  const destinations = beyondDestinations.filter((d) =>
    pillar.destinationSlugs?.includes(d.slug)
  )

  const relatedJourneys = beyondJourneys.filter((j) =>
    j.region === 'jammu' &&
    (j.layerBadges.some((b) => b.toLowerCase().includes(pillar.name.toLowerCase())) ||
      destinations.some((d) => d.linkedJourneySlugs.includes(j.slug)))
  )

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${pillar.name} — ${pillar.subtitle}`,
    description: pillar.seo.description,
  }

  const allPillars = [...jammuLayers, ...jammuCollections]

  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        image={pillar.heroImage}
        label={`Beyond Kashir · Jammu · ${
          pillar.type === 'main_layer'
            ? 'Main Layer'
            : pillar.type === 'seasonal_collection'
            ? 'Seasonal Compass'
            : 'Experience Collection'
        }`}
        title={`${pillar.name}: ${pillar.subtitle}`}
        subtitle={pillar.tagline}
        breadcrumbs={[
          { label: 'Beyond Kashir', href: '/beyond-kashir' },
          { label: 'Jammu', href: '/beyond-kashir/jammu' },
          { label: pillar.name },
        ]}
      />

      {/* Quick Pillar Switcher */}
      <section style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'var(--color-black-light)' }}>
        <div className="container" style={{ padding: '1rem var(--space-6)' }}>
          <nav className="legal-nav" style={{ marginBottom: 0, paddingBottom: 0, borderBottom: 'none' }} aria-label="Jammu Layers & Collections">
            {allPillars.map((item) => (
              <Link
                key={item.slug}
                href={`/beyond-kashir/jammu/${item.slug}`}
                className={item.slug === pillar.slug ? 'active' : ''}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* Introduction, Philosophy & Curation Principle */}
      <section className="section-lg">
        <div className="container">
          <div className="content-split">
            <RevealOnScroll>
              <div>
                <span className="section-label" style={{ paddingLeft: 0, justifyContent: 'flex-start' }}>
                  {pillar.number} · {pillar.name}
                </span>
                <h2 style={{ marginTop: '0.75rem', marginBottom: '1.25rem' }}>
                  Why {pillar.name} Exists
                </h2>
                <div className="gold-divider gold-divider-left" />
                {pillar.intro.map((para, i) => (
                  <p key={i} style={{ marginTop: '1.25rem' }}>
                    {para}
                  </p>
                ))}
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={2}>
              <div
                className="card"
                style={{
                  padding: 'var(--space-8)',
                  border: '1px solid rgba(197, 165, 90, 0.28)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                }}
              >
                <div>
                  <span className="card-label">Unique Proposition</span>
                  <p style={{ color: 'var(--color-ivory)', fontSize: 'var(--text-base)', margin: 0 }}>
                    {pillar.usp}
                  </p>
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1rem' }}>
                  <span className="card-label">Curation Principle</span>
                  <p style={{ fontSize: 'var(--text-sm)', margin: 0 }}>{pillar.curationPrinciple}</p>
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1rem' }}>
                  <span className="card-label">Designed For</span>
                  <p style={{ fontSize: 'var(--text-sm)', margin: 0 }}>{pillar.forWhom}</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Layer-specific Themes OR Experience Highlights OR Ritu Seasons */}
      {pillar.themes && (
        <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
          <div className="container">
            <RevealOnScroll>
              <SectionHeader
                label="Curated Scope"
                title={`What ${pillar.name} Covers`}
                subtitle="Organised by meaning and cultural significance rather than generic sightseeing lists."
              />
            </RevealOnScroll>

            <div className="feature-grid" style={{ marginTop: '3rem' }}>
              {pillar.themes.map((theme, idx) => (
                <RevealOnScroll key={theme.title} delay={(idx % 2) + 1}>
                  <div className="card" style={{ padding: 'var(--space-8)', height: '100%' }}>
                    <span className="card-label">Theme {String(idx + 1).padStart(2, '0')}</span>
                    <h3 className="card-title" style={{ fontSize: 'var(--text-xl)' }}>
                      {theme.title}
                    </h3>
                    <p className="card-text" style={{ marginBottom: '1.25rem' }}>
                      {theme.description}
                    </p>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      {theme.places.map((p) => (
                        <li
                          key={p}
                          style={{
                            fontSize: 'var(--text-sm)',
                            color: 'var(--color-ivory-warm)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                          }}
                        >
                          <span style={{ color: 'var(--color-gold)' }}>&bull;</span> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {pillar.highlights && (
        <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
          <div className="container-narrow">
            <RevealOnScroll>
              <SectionHeader
                label="Experiential Scope"
                title={`Experiences Inside ${pillar.name}`}
              />
              <div className="card" style={{ padding: 'var(--space-8)', marginTop: '2.5rem' }}>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                  {pillar.highlights.map((h) => (
                    <li
                      key={h}
                      style={{
                        color: 'var(--color-ivory-warm)',
                        fontSize: 'var(--text-base)',
                        borderBottom: '1px solid rgba(255,255,255,0.06)',
                        paddingBottom: '0.75rem',
                        display: 'flex',
                        gap: '0.75rem',
                      }}
                    >
                      <span style={{ color: 'var(--color-gold)' }}>&#10022;</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      )}

      {pillar.seasons && (
        <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
          <div className="container">
            <RevealOnScroll>
              <SectionHeader
                label="Seasonal Compass"
                title="When to Experience Jammu"
                subtitle="Connecting all seven Jammu layers and collections through the changing year."
              />
            </RevealOnScroll>

            <div className="feature-grid" style={{ marginTop: '3rem' }}>
              {pillar.seasons.map((s, idx) => (
                <RevealOnScroll key={s.name} delay={(idx % 2) + 1}>
                  <div className="card" style={{ padding: 'var(--space-8)', height: '100%' }}>
                    <span className="card-label">{s.months}</span>
                    <h3 className="card-title" style={{ fontSize: 'var(--text-2xl)' }}>
                      {s.name} — {s.focus}
                    </h3>
                    <p className="card-text" style={{ marginBottom: '1.25rem' }}>
                      {s.summary}
                    </p>
                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                      {s.layers.map((l) => (
                        <span
                          key={l}
                          style={{
                            fontSize: '0.7rem',
                            padding: '0.25rem 0.65rem',
                            borderRadius: '9999px',
                            border: '1px solid rgba(197, 165, 90, 0.35)',
                            color: 'var(--color-gold-light)',
                          }}
                        >
                          {l}
                        </span>
                      ))}
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Discover Destinations (Canonical Links) */}
      {destinations.length > 0 && (
        <section className="section-lg">
          <div className="container">
            <RevealOnScroll>
              <SectionHeader
                label="A · Discover Destinations"
                title={`Places & Narratives in ${pillar.name}`}
                subtitle="Each destination maintains one canonical profile — exploring history, significance, best season, and practical considerations."
              />
            </RevealOnScroll>

            <div className="feature-grid" style={{ marginTop: '3rem' }}>
              {destinations.map((dest, i) => (
                <RevealOnScroll key={dest.slug} delay={(i % 2) + 1}>
                  <Link
                    href={`/beyond-kashir/destinations/${dest.slug}`}
                    style={{ textDecoration: 'none', display: 'block', height: '100%' }}
                  >
                    <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <div className="card-image">
                        <img src={dest.heroImage} alt={dest.name} loading="lazy" />
                      </div>
                      <div className="card-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <span className="card-label">{dest.bestSeason}</span>
                        <h3 className="card-title" style={{ fontSize: 'var(--text-xl)' }}>
                          {dest.name}
                        </h3>
                        <p className="card-text" style={{ flex: 1 }}>
                          {dest.subtitle}
                        </p>
                        <span
                          style={{
                            display: 'inline-block',
                            marginTop: '1.25rem',
                            color: 'var(--color-gold)',
                            fontSize: 'var(--text-sm)',
                            fontWeight: 500,
                          }}
                        >
                          Read Destination Story →
                        </span>
                      </div>
                    </div>
                  </Link>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* B. Explore Journeys */}
      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <RevealOnScroll>
            <SectionHeader
              label="B · Explore Journeys"
              title={`Curated Journeys Connected to ${pillar.name}`}
              subtitle="Operationally ready itineraries and bespoke planning options."
            />
          </RevealOnScroll>

          {relatedJourneys.length > 0 && (
            <div className="feature-grid" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
              {relatedJourneys.map((journey) => {
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
                      <h3 className="card-title" style={{ fontSize: 'var(--text-xl)' }}>
                        {journey.title}
                      </h3>
                      <p className="card-text">{journey.overview}</p>
                      <span style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--color-gold)', fontSize: 'var(--text-sm)', fontWeight: 500 }}>
                        Explore Itinerary →
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}

          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <BeyondKashirEnquiry
              contextTitle={`${pillar.name} (${pillar.subtitle})`}
              region="Jammu"
              mode="bespoke"
            />
          </div>
        </div>
      </section>
    </>
  )
}
