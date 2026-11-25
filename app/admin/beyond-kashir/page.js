'use client'

import { useState } from 'react'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import {
  beyondDestinations as initialDestinations,
  beyondJourneys as initialJourneys,
  jammuLayers,
  jammuCollections,
  JOURNEY_STATUS,
} from '@/lib/beyondKashirData'

const STORAGE_KEY = 'kashir_wath_beyond_cms_v1'

function loadInitialCms() {
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) return JSON.parse(saved)
    } catch {
      // Fallback to bundled data
    }
  }
  return {
    destinations: initialDestinations,
    journeys: initialJourneys,
  }
}

export default function BeyondKashirCmsPage() {
  const [cms, setCms] = useState(loadInitialCms)
  const [activeTab, setActiveTab] = useState('journeys')
  const [notice, setNotice] = useState('')

  // New Destination form state
  const [newDest, setNewDest] = useState({
    name: '',
    slug: '',
    region: 'jammu',
    primaryLayer: 'devpath',
    subtitle: '',
    bestSeason: '',
    background: '',
    seoTitle: '',
  })

  // New Journey form state
  const [newJourney, setNewJourney] = useState({
    title: '',
    slug: '',
    region: 'jammu',
    status: 'upcoming',
    duration: '',
    route: '',
    bestSeason: '',
    overview: '',
  })

  const persist = (next) => {
    setCms(next)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      setNotice('Saved to local CMS workspace.')
    } catch {
      setNotice('Updated in memory.')
    }
  }

  const updateJourneyStatus = (slug, status) => {
    const next = {
      ...cms,
      journeys: cms.journeys.map((j) => (j.slug === slug ? { ...j, status } : j)),
    }
    persist(next)
  }

  const deleteJourney = (slug) => {
    const next = {
      ...cms,
      journeys: cms.journeys.filter((j) => j.slug !== slug),
    }
    persist(next)
  }

  const deleteDestination = (slug) => {
    const next = {
      ...cms,
      destinations: cms.destinations.filter((d) => d.slug !== slug),
    }
    persist(next)
  }

  const handleAddDestination = (e) => {
    e.preventDefault()
    const slug =
      newDest.slug.trim() ||
      newDest.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    const item = {
      slug,
      region: newDest.region,
      name: newDest.name,
      primaryLayer: newDest.primaryLayer,
      collections: [],
      subtitle: newDest.subtitle,
      heroImage: '/images/discover.jpg',
      bestSeason: newDest.bestSeason || 'October — March',
      background: newDest.background,
      significance: newDest.background,
      highlights: ['Curated local exploration'],
      practicalNotes: 'Arranged upon consultation.',
      linkedJourneySlugs: [],
      seoTitle: newDest.seoTitle || `${newDest.name} — Beyond Kashir`,
    }
    persist({ ...cms, destinations: [item, ...cms.destinations] })
    setNewDest({
      name: '',
      slug: '',
      region: 'jammu',
      primaryLayer: 'devpath',
      subtitle: '',
      bestSeason: '',
      background: '',
      seoTitle: '',
    })
  }

  const handleAddJourney = (e) => {
    e.preventDefault()
    const slug =
      newJourney.slug.trim() ||
      newJourney.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    const item = {
      slug,
      region: newJourney.region,
      status: newJourney.status,
      layerBadges: [newJourney.region === 'ladakh' ? 'Ladakh' : 'Jammu'],
      title: newJourney.title,
      subtitle: newJourney.route,
      duration: newJourney.duration || '4 Days / 3 Nights',
      route: newJourney.route,
      heroImage: '/images/hero.jpg',
      bestSeason: newJourney.bestSeason || 'October — March',
      accommodation: 'Curated boutique stays',
      transport: 'Private SUV',
      groupOption: 'Private or Small Group',
      overview: newJourney.overview,
      highlights: ['Curated regional experiences'],
      inclusions: ['Selected accommodation and private transport'],
      exclusions: ['Flights / rail fares'],
      authorisationNote: 'Subject to seasonal conditions & official permissions.',
    }
    persist({ ...cms, journeys: [item, ...cms.journeys] })
    setNewJourney({
      title: '',
      slug: '',
      region: 'jammu',
      status: 'upcoming',
      duration: '',
      route: '',
      bestSeason: '',
      overview: '',
    })
  }

  const handleExportJson = () => {
    const blob = new Blob([JSON.stringify(cms, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'beyond-kashir-cms-export.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleReset = () => {
    localStorage.removeItem(STORAGE_KEY)
    setCms({ destinations: initialDestinations, journeys: initialJourneys })
    setNotice('Reset to default Beyond Kashir content.')
  }

  return (
    <>
      <PageHero
        image="/images/discover.jpg"
        label="Owner CMS Studio"
        title="Beyond Kashir Content Manager"
        subtitle="Manage journey availability statuses, destinations, layers, and SEO metadata without developer intervention."
        breadcrumbs={[
          { label: 'Beyond Kashir', href: '/beyond-kashir' },
          { label: 'CMS Studio' },
        ]}
        compact
      />

      <section className="section-lg">
        <div className="container">
          {/* Toolbar */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '2rem',
              paddingBottom: '1.25rem',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                className={`btn btn-sm ${activeTab === 'journeys' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setActiveTab('journeys')}
              >
                Journeys ({cms.journeys.length})
              </button>
              <button
                type="button"
                className={`btn btn-sm ${activeTab === 'destinations' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setActiveTab('destinations')}
              >
                Destinations ({cms.destinations.length})
              </button>
              <button
                type="button"
                className={`btn btn-sm ${activeTab === 'layers' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setActiveTab('layers')}
              >
                Layers & Collections ({jammuLayers.length + jammuCollections.length})
              </button>
            </div>

            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              <button type="button" className="btn btn-outline btn-sm" onClick={handleExportJson}>
                Export JSON
              </button>
              <button type="button" className="btn btn-ghost btn-sm" onClick={handleReset}>
                Reset Defaults
              </button>
            </div>
          </div>

          {notice && (
            <div
              style={{
                marginBottom: '1.5rem',
                padding: '0.75rem 1rem',
                background: 'rgba(197, 165, 90, 0.1)',
                border: '1px solid rgba(197, 165, 90, 0.35)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--color-gold-light)',
                fontSize: 'var(--text-sm)',
              }}
            >
              {notice}
            </div>
          )}

          {/* JOURNEYS STATUS & MANAGEMENT */}
          {activeTab === 'journeys' && (
            <div style={{ display: 'grid', gap: '2rem' }}>
              <div className="card" style={{ padding: 'var(--space-6)' }}>
                <h3 className="card-title" style={{ marginBottom: '1rem' }}>
                  Journey Status Control
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {cms.journeys.map((j) => {
                    const meta = JOURNEY_STATUS[j.status] || JOURNEY_STATUS.enquiry_only
                    return (
                      <div
                        key={j.slug}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          flexWrap: 'wrap',
                          gap: '1rem',
                          padding: '1rem',
                          background: 'rgba(255,255,255,0.02)',
                          border: '1px solid rgba(255,255,255,0.07)',
                          borderRadius: 'var(--radius-md)',
                        }}
                      >
                        <div>
                          <span style={{ fontSize: '0.7rem', color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                            {j.region} &bull; {j.duration} &bull; /{j.slug}
                          </span>
                          <h4 style={{ margin: '0.2rem 0', fontSize: 'var(--text-lg)' }}>{j.title}</h4>
                          <span style={{ fontSize: 'var(--text-xs)', color: meta.color }}>
                            {meta.label}
                          </span>
                        </div>

                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                          <select
                            aria-label={`Status for ${j.title}`}
                            value={j.status}
                            onChange={(e) => updateJourneyStatus(j.slug, e.target.value)}
                            className="form-select"
                            style={{ width: 'auto', padding: '0.4rem 0.75rem', fontSize: 'var(--text-xs)' }}
                          >
                            <option value="active">Active</option>
                            <option value="upcoming">Upcoming</option>
                            <option value="enquiry_only">Enquiry Only</option>
                            <option value="unavailable">Temporarily Unavailable</option>
                          </select>
                          <button
                            type="button"
                            onClick={() => deleteJourney(j.slug)}
                            className="btn btn-ghost btn-sm"
                            style={{ color: '#e57373' }}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <form onSubmit={handleAddJourney} className="card" style={{ padding: 'var(--space-6)', display: 'grid', gap: '1rem' }}>
                <h3 className="card-title">Add New Journey</h3>
                <div className="form-grid">
                  <input
                    required
                    className="form-input"
                    placeholder="Journey Title *"
                    value={newJourney.title}
                    onChange={(e) => setNewJourney({ ...newJourney, title: e.target.value })}
                  />
                  <input
                    className="form-input"
                    placeholder="Editable URL Slug (auto if blank)"
                    value={newJourney.slug}
                    onChange={(e) => setNewJourney({ ...newJourney, slug: e.target.value })}
                  />
                </div>
                <div className="form-grid">
                  <select
                    className="form-select"
                    value={newJourney.region}
                    onChange={(e) => setNewJourney({ ...newJourney, region: e.target.value })}
                  >
                    <option value="jammu">Jammu</option>
                    <option value="ladakh">Ladakh</option>
                  </select>
                  <select
                    className="form-select"
                    value={newJourney.status}
                    onChange={(e) => setNewJourney({ ...newJourney, status: e.target.value })}
                  >
                    <option value="active">Active</option>
                    <option value="upcoming">Upcoming</option>
                    <option value="enquiry_only">Enquiry Only</option>
                    <option value="unavailable">Temporarily Unavailable</option>
                  </select>
                </div>
                <div className="form-grid">
                  <input
                    className="form-input"
                    placeholder="Duration (e.g. 4 Days / 3 Nights)"
                    value={newJourney.duration}
                    onChange={(e) => setNewJourney({ ...newJourney, duration: e.target.value })}
                  />
                  <input
                    className="form-input"
                    placeholder="Route (e.g. Jammu · Bhaderwah · Jai)"
                    value={newJourney.route}
                    onChange={(e) => setNewJourney({ ...newJourney, route: e.target.value })}
                  />
                </div>
                <textarea
                  className="form-textarea"
                  placeholder="Journey overview & highlights..."
                  value={newJourney.overview}
                  onChange={(e) => setNewJourney({ ...newJourney, overview: e.target.value })}
                />
                <div>
                  <button type="submit" className="btn btn-primary">
                    Create Journey
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* DESTINATIONS MANAGEMENT */}
          {activeTab === 'destinations' && (
            <div style={{ display: 'grid', gap: '2rem' }}>
              <div className="card" style={{ padding: 'var(--space-6)' }}>
                <h3 className="card-title" style={{ marginBottom: '1rem' }}>
                  Canonical Destinations
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {cms.destinations.map((d) => (
                    <div
                      key={d.slug}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '1rem',
                        padding: '0.85rem 1rem',
                        border: '1px solid rgba(255,255,255,0.07)',
                        borderRadius: 'var(--radius-md)',
                      }}
                    >
                      <div>
                        <span style={{ fontSize: '0.7rem', color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                          {d.region} &bull; {d.primaryLayer} &bull; /{d.slug}
                        </span>
                        <h4 style={{ margin: '0.15rem 0', fontSize: 'var(--text-base)' }}>{d.name}</h4>
                        <p style={{ margin: 0, fontSize: 'var(--text-xs)' }}>{d.bestSeason}</p>
                      </div>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <Link href={`/beyond-kashir/destinations/${d.slug}`} className="btn btn-outline btn-sm">
                          View
                        </Link>
                        <button
                          type="button"
                          onClick={() => deleteDestination(d.slug)}
                          className="btn btn-ghost btn-sm"
                          style={{ color: '#e57373' }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <form onSubmit={handleAddDestination} className="card" style={{ padding: 'var(--space-6)', display: 'grid', gap: '1rem' }}>
                <h3 className="card-title">Add Regional Destination</h3>
                <div className="form-grid">
                  <input
                    required
                    className="form-input"
                    placeholder="Destination Name *"
                    value={newDest.name}
                    onChange={(e) => setNewDest({ ...newDest, name: e.target.value })}
                  />
                  <input
                    className="form-input"
                    placeholder="SEO URL Slug (auto if blank)"
                    value={newDest.slug}
                    onChange={(e) => setNewDest({ ...newDest, slug: e.target.value })}
                  />
                </div>
                <div className="form-grid">
                  <select
                    className="form-select"
                    value={newDest.primaryLayer}
                    onChange={(e) => setNewDest({ ...newDest, primaryLayer: e.target.value })}
                  >
                    {jammuLayers.map((l) => (
                      <option key={l.slug} value={l.slug}>
                        Layer: {l.name}
                      </option>
                    ))}
                  </select>
                  <input
                    className="form-input"
                    placeholder="Best Season (e.g. May — October)"
                    value={newDest.bestSeason}
                    onChange={(e) => setNewDest({ ...newDest, bestSeason: e.target.value })}
                  />
                </div>
                <input
                  className="form-input"
                  placeholder="SEO Meta Title"
                  value={newDest.seoTitle}
                  onChange={(e) => setNewDest({ ...newDest, seoTitle: e.target.value })}
                />
                <textarea
                  className="form-textarea"
                  placeholder="Historical background & cultural significance..."
                  value={newDest.background}
                  onChange={(e) => setNewDest({ ...newDest, background: e.target.value })}
                />
                <div>
                  <button type="submit" className="btn btn-primary">
                    Add Destination
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* LAYERS & COLLECTIONS OVERVIEW */}
          {activeTab === 'layers' && (
            <div className="feature-grid">
              {[...jammuLayers, ...jammuCollections].map((item) => (
                <div key={item.slug} className="card" style={{ padding: 'var(--space-6)' }}>
                  <span className="card-label">
                    {item.number} · {item.type.replace('_', ' ')}
                  </span>
                  <h3 className="card-title">{item.name}</h3>
                  <p className="card-text" style={{ marginBottom: '1rem' }}>
                    {item.seo.description}
                  </p>
                  <Link href={`/beyond-kashir/jammu/${item.slug}`} className="btn btn-outline btn-sm">
                    Open Layer Page →
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
