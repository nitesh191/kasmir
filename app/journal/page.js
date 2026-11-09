'use client'

import { useState } from 'react'
import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import SectionHeader from '@/components/SectionHeader'
import CTASection from '@/components/CTASection'

const categories = [
  'All',
  'History & Civilisation',
  'Culture',
  'Spirituality',
  'Food & Culture',
]

const featuredArticles = [
  {
    title: "Lalitaditya Muktapida: Kashmir's Greatest Emperor",
    category: 'History & Civilisation',
    desc: 'The Karkota dynasty ruler who built an empire from Kashmir to Central Asia and created the monumental Martand Sun Temple.',
  },
  {
    title: 'Kheer Bhawani: The Living Goddess of Kashir',
    category: 'Spirituality',
    desc: 'Understanding the sacred spring temple that connects every Kashmiri Pandit to home — its history, devotion and living significance.',
  },
  {
    title: 'The Art of Wazwan: More Than a Feast',
    category: 'Food & Culture',
    desc: 'How a 36-course meal carries centuries of Kashmiri hospitality, ritual, hierarchy and identity.',
  },
  {
    title: 'Satisar to Kashyap: The Origin Story of Kashmir',
    category: 'History & Civilisation',
    desc: 'From the mythic lake drained by Kashyap Rishi to the valley that bears his name — the foundational narrative of Kashir.',
  },
  {
    title: 'The Chinar Tree: More Than a Leaf',
    category: 'Culture',
    desc: 'Why the chinar is the symbol of Kashmir — its history, its biology, its cultural weight and its autumn gold.',
  },
  {
    title: 'Kashmir Through the Rajatarangini',
    category: 'History & Civilisation',
    desc: "Kalhana's chronicle — India's first genuine historical text — and what it reveals about the valley's extraordinary past.",
  },
]

export default function Journal() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredArticles =
    activeCategory === 'All'
      ? featuredArticles
      : featuredArticles.filter((art) => art.category === activeCategory)

  return (
    <>
      <PageHero
        image="/images/discover.jpg"
        label="Kashir Journal"
        title="Stories, History & Perspectives"
        subtitle="A knowledge platform — not a blog. The civilisation, culture and spirit of Kashir through thoughtful writing."
        breadcrumbs={[{ label: 'Kashir Journal' }]}
      />

      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
              <span className="section-label">Editorial</span>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  marginTop: '0.5rem',
                  marginBottom: '1rem',
                }}
              >
                A Repository of Memory & Meaning
              </h2>
              <div className="gold-divider" />
              <p
                style={{
                  margin: '1.5rem auto 0',
                  color: 'var(--color-warm-gray)',
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                }}
              >
                The Kashir Journal is where deeper stories live — the history, the people,
                the traditions, the sacred geography and the perspectives that shape our
                understanding of this extraordinary civilisation. Written with intellectual rigor,
                reverence and care.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <RevealOnScroll>
            <SectionHeader label="Curated Writing" title="Featured Articles & Perspectives" />
            <div
              style={{
                display: 'flex',
                gap: '0.65rem',
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginBottom: 'var(--space-12)',
              }}
            >
              {categories.map((cat) => {
                const isActive = activeCategory === cat
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{
                      padding: '0.5rem 1.25rem',
                      border: isActive
                        ? '1px solid var(--color-gold)'
                        : '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 'var(--radius-full)',
                      fontSize: 'var(--text-xs)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: isActive ? '#0A0A0A' : 'var(--color-warm-gray)',
                      background: isActive ? 'var(--color-gold)' : 'transparent',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      fontWeight: 600,
                    }}
                  >
                    {cat}
                  </button>
                )
              })}
            </div>
          </RevealOnScroll>

          <div className="feature-grid">
            {filteredArticles.map((article, i) => (
              <RevealOnScroll key={article.title} delay={i % 3}>
                <div
                  className="card"
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div className="card-content">
                    <span className="card-label">{article.category}</span>
                    <h3
                      className="card-title"
                      style={{ fontSize: 'var(--text-xl)', marginTop: '0.25rem' }}
                    >
                      {article.title}
                    </h3>
                    <p className="card-text">{article.desc}</p>
                  </div>
                  <div style={{ padding: '0 var(--space-6) var(--space-6)' }}>
                    <span
                      style={{
                        display: 'inline-block',
                        color: 'var(--color-gold)',
                        fontSize: 'var(--text-sm)',
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                      }}
                    >
                      Read Essay &rarr;
                    </span>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <div
              style={{
                maxWidth: '760px',
                margin: '0 auto',
                textAlign: 'center',
                padding: 'var(--space-12) var(--space-8)',
                background: 'var(--color-black-light)',
                border: '1px solid rgba(197, 165, 90, 0.25)',
                borderRadius: 'var(--radius-xl)',
              }}
            >
              <span className="section-label">Forthcoming Volume</span>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                  marginTop: '0.75rem',
                  marginBottom: '1rem',
                }}
              >
                The Chronicle of Kashir
              </h2>
              <div className="gold-divider" />
              <p
                style={{
                  margin: '1.5rem auto 0',
                  maxWidth: '620px',
                  color: 'var(--color-warm-gray)',
                  lineHeight: 1.8,
                }}
              >
                A comprehensive editorial series exploring Kashmir&apos;s civilisational
                chronicles — from the sacred emergence of Satisar and the Gonanda monarchs,
                through the golden age of Karkota, the temple builders, the mystic Shaiva
                philosophers, to the living legacy of today.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CTASection />
    </>
  )
}
