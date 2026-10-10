import Link from 'next/link'
import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Heritage & History Experiences',
  description: 'Walk through centuries of civilisation — ancient temples, royal ruins, and the layers of history that shaped Kashmir.',
}

export default function HeritageHistory() {
  return (
    <>
      <PageHero
        image="/images/discover.jpg"
        label="Experiences"
        title="Heritage & History"
        subtitle="Walk through centuries of civilisation — where every stone tells a story and every ruin holds an empire."
        breadcrumbs={[
          { label: 'Experiences', href: '/experiences' },
          { label: 'Heritage & History' },
        ]}
      />

      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Kashmir&apos;s history is not confined to museums. It is written in the landscape —
                in temple ruins that rival the great monuments of Southeast Asia, in the engineering
                works of ninth-century kings, in the trade routes that once connected this valley
                to the Silk Road.
              </p>
              <p>
                Our heritage experiences are designed to bring this history alive — not as a
                lecture, but as a lived encounter with the civilisational depth of Kashir.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-6)' }}>
            {[
              { title: 'Ancient Temple Architecture', desc: 'The Martand Sun Temple, Avantiswamin, Pandrethan — masterworks of Kashmiri temple architecture that reveal an empire\'s ambition and devotion.' },
              { title: 'Royal Ruins & Fortifications', desc: 'From Hari Parbat fort to the remains of Parihasapura — the seats of power that governed one of Asia\'s great civilisations.' },
              { title: 'Old Srinagar Heritage Walks', desc: 'The wooden architecture, the bridges, the shrines and the lanes of old Srinagar — a city whose built heritage tells centuries of stories.' },
              { title: 'Mughal Gardens & Legacy', desc: 'Shalimar, Nishat, Chashme Shahi — the Mughal gardens are not merely beautiful spaces but statements of imperial vision and horticultural mastery.' },
              { title: 'Archaeological Encounters', desc: 'Visit lesser-known sites that reveal the deep layers of Kashmir\'s past — from Neolithic settlements to medieval ruins.' },
              { title: 'Rajatarangini Trail', desc: 'Follow the geography of Kalhana\'s great chronicle — the rivers, the temples, the cities and the battlefields that shaped Kashmiri history.' },
            ].map((item, i) => (
              <RevealOnScroll key={item.title} delay={i % 3}>
                <div className="card" style={{ padding: 'var(--space-8)', height: '100%' }}>
                  <span className="card-label">Heritage</span>
                  <h3 className="card-title" style={{ fontSize: 'var(--text-xl)' }}>{item.title}</h3>
                  <p className="card-text">{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-accent)', fontStyle: 'italic', fontSize: 'var(--text-xl)', color: 'var(--color-warm-gray)', marginBottom: '2rem' }}>
                Every heritage experience is led by guides who understand not just the facts,
                but the significance — who can connect a ninth-century inscription to a living
                tradition, and a ruined temple to the empire that built it.
              </p>
              <Link href="/journal" className="btn btn-outline">
                Read the Kashir Journal
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CTASection />
    </>
  )
}
