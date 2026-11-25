'use client'

import { useState } from 'react'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import BeyondKashirEnquiry from '@/components/BeyondKashirEnquiry'
import { beyondJourneys, JOURNEY_STATUS } from '@/lib/beyondKashirData'

export default function BeyondKashirJourneysPage() {
  const [regionFilter, setRegionFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')

  const filtered = beyondJourneys.filter((j) => {
    if (regionFilter !== 'all' && j.region !== regionFilter) return false
    if (statusFilter !== 'all' && j.status !== statusFilter) return false
    return true
  })

  return (
    <>
      <PageHero
        image="/images/hero.jpg"
        label="Beyond Kashir · Commercial Collection"
        title="Explore Curated Journeys"
        subtitle="We launch gradually with operationally vetted journeys — distinguishing clearly between active departures, upcoming seasons, and bespoke requests."
        breadcrumbs={[
          { label: 'Beyond Kashir', href: '/beyond-kashir' },
          { label: 'Explore Journeys' },
        ]}
      />

      <section className="section-lg">
        <div className="container">
          {/* Filters */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: 'var(--space-10)',
              paddingBottom: 'var(--space-6)',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {[
                { key: 'all', label: 'All Regions' },
                { key: 'jammu', label: 'Jammu' },
                { key: 'ladakh', label: 'Ladakh' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setRegionFilter(tab.key)}
                  className={`btn btn-sm ${regionFilter === tab.key ? 'btn-primary' : 'btn-outline'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {[
                { key: 'all', label: 'All Statuses' },
                { key: 'active', label: 'Active' },
                { key: 'upcoming', label: 'Upcoming' },
              ].map((st) => (
                <button
                  key={st.key}
                  type="button"
                  onClick={() => setStatusFilter(st.key)}
                  className={`btn btn-sm ${statusFilter === st.key ? 'btn-primary' : 'btn-ghost'}`}
                >
                  {st.label}
                </button>
              ))}
            </div>
          </div>

          <div className="feature-grid">
            {filtered.map((journey, i) => {
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
                          {journey.overview}
                        </p>
                        <div style={{ marginTop: '1rem', fontSize: 'var(--text-xs)', color: 'var(--color-gold-light)' }}>
                          Best Season: {journey.bestSeason}
                        </div>
                        <span style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--color-gold)', fontSize: 'var(--text-sm)', fontWeight: 500 }}>
                          View Itinerary & Enquire →
                        </span>
                      </div>
                    </div>
                  </Link>
                </RevealOnScroll>
              )
            })}
          </div>

          <div style={{ maxWidth: '820px', margin: '4rem auto 0' }}>
            <BeyondKashirEnquiry
              contextTitle="Custom Beyond Kashir Itinerary"
              region="Jammu & Ladakh"
              mode="bespoke"
            />
          </div>
        </div>
      </section>
    </>
  )
}
