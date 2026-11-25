import Link from 'next/link'
import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import SectionHeader from '@/components/SectionHeader'
import CTASection from '@/components/CTASection'
import JsonLd from '@/components/JsonLd'
import {
  beyondJourneys,
  JOURNEY_STATUS,
  jammuLayers,
} from '@/lib/beyondKashirData'

export const metadata = {
  title: 'Beyond Kashir — The Journey Continues (Jammu & Ladakh)',
  description:
    'Beyond Kashir is Kashir Wath’s dedicated regional expansion into Jammu and Ladakh — Curated, Bespoke, Experiential, Premium, Unscripted.',
}

const philosophyPillars = [
  {
    title: 'Curated',
    desc: 'Every journey is thoughtfully selected and researched — never a generic sightseeing directory.',
  },
  {
    title: 'Bespoke',
    desc: 'Journeys shaped around your individual interests, pace, spiritual focus, and travel style.',
  },
  {
    title: 'Experiential',
    desc: 'Meaningful encounters with heritage, traditional kitchens, and landscapes rather than checklists.',
  },
  {
    title: 'Premium',
    desc: 'Handpicked stays, mountain-ready transport, and attentive care at every step.',
  },
  {
    title: 'Unscripted',
    desc: 'Journeys that leave room for discovery, genuine encounters, and unexpected moments.',
  },
]

export default function BeyondKashirPage() {
  const activeJourneys = beyondJourneys.filter((j) => j.status === 'active').slice(0, 4)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Beyond Kashir — The Journey Continues',
    description: metadata.description,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Kashir Wath',
    },
  }

  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        image="/images/autumn.jpg"
        label="Beyond Kashir · Regional Expansion"
        title="The Journey Continues"
        subtitle="Expand the geography, not the cultural identity. Dedicated, research-led journeys across Jammu and Ladakh — each honoured in its own voice."
        breadcrumbs={[{ label: 'Beyond Kashir' }]}
      />

      {/* Brand Positioning & Philosophy */}
      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <div className="content-split">
            <RevealOnScroll>
              <div>
                <span className="section-label" style={{ paddingLeft: 0, justifyContent: 'flex-start' }}>
                  Our Guiding Principle
                </span>
                <h2 style={{ marginTop: '0.85rem', marginBottom: '1.25rem' }}>
                  Kashmir Remains Our Soul. <br />
                  <em style={{ color: 'var(--color-gold)' }}>Now the Horizon Widens.</em>
                </h2>
                <div className="gold-divider gold-divider-left" />
                <p style={{ marginTop: '1.5rem', marginBottom: '1.25rem' }}>
                  Kashir Wath remains deeply rooted in Kashmir and Kashmiri Pandit heritage. Beyond
                  Kashir is our dedicated regional expansion — allowing Jammu and Ladakh to be
                  explored with the same intelligence, sensitivity, and depth, without ever merging
                  their distinct histories into a single generic narrative.
                </p>
                <p>
                  Every region carries its own spiritual lineage, architecture, communities, and
                  mountain rhythm. Here, Dogra royal memory, Shivalik shrines, Bhaderwah’s meadows,
                  and Ladakh’s trans-Himalayan monasteries each stand on their own ground.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={2}>
              <div
                className="card"
                style={{
                  padding: 'var(--space-8)',
                  border: '1px solid rgba(197, 165, 90, 0.25)',
                }}
              >
                <span className="card-label">Brand Philosophy</span>
                <h3 className="card-title" style={{ marginBottom: '1.5rem' }}>
                  Five Pillars of Beyond Kashir
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                  {philosophyPillars.map((p) => (
                    <div
                      key={p.title}
                      style={{
                        borderBottom: '1px solid rgba(255,255,255,0.06)',
                        paddingBottom: '0.85rem',
                      }}
                    >
                      <strong
                        style={{
                          color: 'var(--color-gold-light)',
                          fontFamily: 'var(--font-body)',
                          fontSize: 'var(--text-sm)',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          display: 'block',
                          marginBottom: '0.25rem',
                        }}
                      >
                        {p.title}
                      </strong>
                      <p style={{ fontSize: 'var(--text-sm)', margin: 0 }}>{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Two Independent Regional Entry Points */}
      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <SectionHeader
              label="Two Distinct Worlds"
              title="Choose Your Region"
              subtitle="Jammu and Ladakh are presented as independent regional identities — each with its own geography, spiritual traditions, and curated journeys."
            />
          </RevealOnScroll>

          <div
            className="feature-grid"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              marginTop: '3rem',
              gap: 'var(--space-8)',
            }}
          >
            {/* Jammu Card */}
            <RevealOnScroll delay={1}>
              <Link href="/beyond-kashir/jammu" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                <div
                  className="layer-card"
                  style={{ minHeight: '460px', height: '100%' }}
                >
                  <div className="layer-card-bg">
                    <img
                      src="/images/discover.jpg"
                      alt="Jammu — Sacred Shivaliks, Dogra Heritage & Himalayan Valleys"
                      loading="lazy"
                    />
                  </div>
                  <div className="layer-card-overlay" />
                  <div className="layer-card-content">
                    <span className="layer-card-number">Region 01 · Duggar & Pir Panjal</span>
                    <h3 className="layer-card-name">Discover Jammu</h3>
                    <p className="layer-card-sub">
                      Devpath · Virasat · Parvat Path · Prakriti
                    </p>
                    <p className="layer-card-desc">
                      From ancient Shiva and Shakti shrines to Dogra palaces, Basohli miniature art,
                      Bhaderwah’s cedar valleys, and traditional Duggar kitchens.
                    </p>
                    <span
                      style={{
                        display: 'inline-block',
                        marginTop: '1.25rem',
                        color: 'var(--color-gold)',
                        fontSize: 'var(--text-sm)',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Enter Jammu →
                    </span>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>

            {/* Ladakh Card */}
            <RevealOnScroll delay={2}>
              <Link href="/beyond-kashir/ladakh" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                <div
                  className="layer-card"
                  style={{ minHeight: '460px', height: '100%' }}
                >
                  <div className="layer-card-bg">
                    <img
                      src="/images/winter.jpg"
                      alt="Ladakh — Trans-Himalayan Monasteries & High Passes"
                      loading="lazy"
                    />
                  </div>
                  <div className="layer-card-overlay" />
                  <div className="layer-card-content">
                    <span className="layer-card-number">Region 02 · Trans-Himalaya</span>
                    <h3 className="layer-card-name">Discover Ladakh</h3>
                    <p className="layer-card-sub">
                      Monasteries · High Passes · Balti & Changpa Heritage
                    </p>
                    <p className="layer-card-desc">
                      Centuries-old Buddhist gompas, high-altitude lakes, apricot-blossom villages,
                      and slow acclimatised passages across Nubra, Sham, and Changthang.
                    </p>
                    <span
                      style={{
                        display: 'inline-block',
                        marginTop: '1.25rem',
                        color: 'var(--color-gold)',
                        fontSize: 'var(--text-sm)',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Enter Ladakh →
                    </span>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Jammu Four Layers Overview */}
      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <RevealOnScroll>
            <SectionHeader
              label="Jammu Architecture"
              title="Four Main Layers of Jammu"
              subtitle="Every destination in Jammu is organised by its true purpose and identity — separating destination discovery from bookable itineraries."
              cta="Explore Jammu Architecture"
              ctaHref="/beyond-kashir/jammu"
            />
          </RevealOnScroll>

          <div className="feature-grid" style={{ marginTop: '3rem' }}>
            {jammuLayers.map((layer, idx) => (
              <RevealOnScroll key={layer.slug} delay={(idx % 2) + 1}>
                <Link
                  href={`/beyond-kashir/jammu/${layer.slug}`}
                  style={{ textDecoration: 'none', display: 'block', height: '100%' }}
                >
                  <div className="card" style={{ padding: 'var(--space-8)', height: '100%' }}>
                    <span className="card-label">
                      Layer {layer.number} · {layer.subtitle}
                    </span>
                    <h3 className="card-title" style={{ fontSize: 'var(--text-2xl)' }}>
                      {layer.name}
                    </h3>
                    <p className="card-text">{layer.usp}</p>
                    <span
                      style={{
                        display: 'inline-block',
                        marginTop: '1.25rem',
                        color: 'var(--color-gold)',
                        fontSize: 'var(--text-sm)',
                        fontWeight: 500,
                      }}
                    >
                      Discover {layer.name} →
                    </span>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Discover vs Explore Journeys */}
      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <SectionHeader
              label="Explore Journeys"
              title="Operationally Ready Curated Journeys"
              subtitle="We distinguish clearly between destinations we introduce and journeys we are currently equipped to deliver with trusted local partners."
              cta="View All Journeys"
              ctaHref="/beyond-kashir/journeys"
            />
          </RevealOnScroll>

          <div className="feature-grid" style={{ marginTop: '3rem' }}>
            {activeJourneys.map((journey, i) => {
              const statusMeta = JOURNEY_STATUS[journey.status]
              return (
                <RevealOnScroll key={journey.slug} delay={(i % 2) + 1}>
                  <Link
                    href={`/beyond-kashir/journeys/${journey.slug}`}
                    style={{ textDecoration: 'none', display: 'block', height: '100%' }}
                  >
                    <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <div className="card-image">
                        <img src={journey.heroImage} alt={journey.title} loading="lazy" />
                      </div>
                      <div className="card-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                          <span className="card-label" style={{ margin: 0 }}>
                            {journey.region.toUpperCase()} · {journey.duration}
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
                          {journey.subtitle}
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
                          View Itinerary & Enquire →
                        </span>
                      </div>
                    </div>
                  </Link>
                </RevealOnScroll>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection
        label="Beyond Kashir"
        title="Shape Your Jammu or Ladakh Journey"
        subtitle="Whether you seek a sacred pilgrimage, a Dogra heritage walk, or a quiet Himalayan meadow, we curate every detail around you."
        primaryCta="Plan Your Journey"
        primaryHref="/plan-your-journey?region=Beyond%20Kashir"
      />
    </>
  )
}
