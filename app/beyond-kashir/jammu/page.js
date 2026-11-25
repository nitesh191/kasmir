import Link from 'next/link'
import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import SectionHeader from '@/components/SectionHeader'
import CTASection from '@/components/CTASection'
import JsonLd from '@/components/JsonLd'
import {
  jammuLayers,
  jammuCollections,
  beyondJourneys,
  JOURNEY_STATUS,
} from '@/lib/beyondKashirData'

export const metadata = {
  title: 'Discover Jammu — Sacred Shivaliks, Dogra Heritage & Himalayan Valleys',
  description:
    'Explore Jammu through four main layers (Devpath, Virasat, Parvat Path, Prakriti), three experience collections (Lokanubhav, Zayka, Anubhav), and Ritu seasonal journeys.',
}

export default function JammuLandingPage() {
  const jammuJourneys = beyondJourneys.filter((j) => j.region === 'jammu')

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: 'Jammu — Beyond Kashir',
    description: metadata.description,
    touristType: ['Spiritual', 'Cultural Heritage', 'Nature & Mountains', 'Culinary'],
  }

  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        image="/images/discover.jpg"
        label="Beyond Kashir · Jammu"
        title="Discover Jammu"
        subtitle="From ancient Shiva and Shakti shrines to Dogra palaces, Basohli miniature art, Bhaderwah’s cedar valleys, and the flavours of Duggar."
        breadcrumbs={[
          { label: 'Beyond Kashir', href: '/beyond-kashir' },
          { label: 'Discover Jammu' },
        ]}
      />

      {/* Introduction */}
      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container-narrow">
          <RevealOnScroll>
            <div style={{ textAlign: 'center' }}>
              <span className="section-label">The Land of Duggar</span>
              <h2 style={{ marginTop: '0.75rem', marginBottom: '1.5rem' }}>
                More Than a Gateway. <em style={{ color: 'var(--color-gold)' }}>A Civilisation in Its Own Right.</em>
              </h2>
              <div className="gold-divider" />
              <p style={{ margin: '1.75rem auto 1.25rem', maxWidth: '68ch' }}>
                For too long, Jammu has been treated merely as a transit point. Yet between the
                Shivalik hills, the Chenab basin, and the Pir Panjal ranges lies a deeply distinct
                world — shaped by Dogra, Pahari, Bhaderwahi, and Gujjar-Bakarwal traditions,
                ancient temple architecture, and sacred mountain geography.
              </p>
              <p style={{ margin: '0 auto', maxWidth: '68ch' }}>
                We organise Jammu into <strong>Four Main Layers</strong>,{' '}
                <strong>Three Experience Collections</strong>, and a connecting{' '}
                <strong>Seasonal Compass (Ritu)</strong> — keeping destination discovery clearly
                separate from operationally ready journeys.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Four Main Layers */}
      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <SectionHeader
              label="A · Four Main Layers"
              title="The Foundations of Jammu"
              subtitle="Each layer has its own purpose and curation rule — ensuring spiritual journeys remain in Devpath and mountain retreats in Parvat Path."
            />
          </RevealOnScroll>

          <div className="feature-grid" style={{ marginTop: '3rem' }}>
            {jammuLayers.map((layer, i) => (
              <RevealOnScroll key={layer.slug} delay={(i % 2) + 1}>
                <Link
                  href={`/beyond-kashir/jammu/${layer.slug}`}
                  style={{ textDecoration: 'none', display: 'block', height: '100%' }}
                >
                  <div className="layer-card" style={{ minHeight: '420px', height: '100%' }}>
                    <div className="layer-card-bg">
                      <img src={layer.heroImage} alt={layer.name} loading="lazy" />
                    </div>
                    <div className="layer-card-overlay" />
                    <div className="layer-card-content">
                      <span className="layer-card-number">
                        {layer.number} · Main Layer
                      </span>
                      <h3 className="layer-card-name">{layer.name}</h3>
                      <p className="layer-card-sub">{layer.subtitle}</p>
                      <p className="layer-card-desc">{layer.usp}</p>
                      <span
                        style={{
                          display: 'inline-block',
                          marginTop: '1rem',
                          color: 'var(--color-gold)',
                          fontSize: 'var(--text-sm)',
                          fontWeight: 500,
                        }}
                      >
                        Explore {layer.name} →
                      </span>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Three Experience Collections + Ritu */}
      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <RevealOnScroll>
            <SectionHeader
              label="B & C · Experience & Seasonal Collections"
              title="Living Culture, Duggar Cuisine & Outdoor Trails"
              subtitle="Cross-layer collections drawing destinations and human encounters from across all four pillars of Jammu."
            />
          </RevealOnScroll>

          <div className="feature-grid" style={{ marginTop: '3rem' }}>
            {jammuCollections.map((col, i) => (
              <RevealOnScroll key={col.slug} delay={(i % 2) + 1}>
                <Link
                  href={`/beyond-kashir/jammu/${col.slug}`}
                  style={{ textDecoration: 'none', display: 'block', height: '100%' }}
                >
                  <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div className="card-image">
                      <img src={col.heroImage} alt={col.name} loading="lazy" />
                    </div>
                    <div className="card-content" style={{ flex: 1 }}>
                      <span className="card-label">
                        {col.number} ·{' '}
                        {col.type === 'seasonal_collection'
                          ? 'Seasonal Collection'
                          : 'Experience Collection'}
                      </span>
                      <h3 className="card-title" style={{ fontSize: 'var(--text-2xl)' }}>
                        {col.name} — {col.subtitle}
                      </h3>
                      <p className="card-text">{col.usp}</p>
                      <span
                        style={{
                          display: 'inline-block',
                          marginTop: '1.25rem',
                          color: 'var(--color-gold)',
                          fontSize: 'var(--text-sm)',
                          fontWeight: 500,
                        }}
                      >
                        Explore {col.name} →
                      </span>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Section: Explore Jammu Journeys */}
      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <SectionHeader
              label="Explore Journeys · Commercial Launch"
              title="Curated Jammu Itineraries"
              subtitle="Active journeys backed by vetted local stays and transport, plus upcoming expeditions."
              cta="All Beyond Kashir Journeys"
              ctaHref="/beyond-kashir/journeys"
            />
          </RevealOnScroll>

          <div className="feature-grid" style={{ marginTop: '3rem' }}>
            {jammuJourneys.map((journey, i) => {
              const statusMeta = JOURNEY_STATUS[journey.status]
              return (
                <RevealOnScroll key={journey.slug} delay={(i % 2) + 1}>
                  <Link
                    href={`/beyond-kashir/journeys/${journey.slug}`}
                    style={{ textDecoration: 'none', display: 'block', height: '100%' }}
                  >
                    <div className="card" style={{ padding: 'var(--space-8)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                        <span className="card-label" style={{ margin: 0 }}>
                          {journey.duration}
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
                      <h3 className="card-title" style={{ fontSize: 'var(--text-xl)' }}>
                        {journey.title}
                      </h3>
                      <p className="card-text" style={{ flex: 1 }}>
                        {journey.overview}
                      </p>
                      <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gold-light)', marginTop: '1rem', marginBottom: 0 }}>
                        Route: {journey.route}
                      </p>
                    </div>
                  </Link>
                </RevealOnScroll>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection
        label="Custom Jammu"
        title="Design a Bespoke Jammu Journey"
        subtitle="Combine Devpath shrines, Dogra heritage walks, or Bhaderwah retreats into an itinerary paced entirely for you."
        primaryCta="Plan Your Journey"
        primaryHref="/plan-your-journey?region=Jammu"
      />
    </>
  )
}
