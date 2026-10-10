import Link from 'next/link'
import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Kashir — A Civilisation',
  description:
    'Before Kashmir was a destination, it was one of the great seats of Indian civilisation — shaped by emperors, philosophers, scholars and sacred traditions.',
}

const eras = [
  { era: 'The Ancient Foundations', period: 'Before 600 CE', desc: 'From the mythic Satisar lake to the Gonanda dynasty — the earliest recorded chapters of Kashir\'s civilisational story.' },
  { era: 'The Karkota Golden Age', period: '600–855 CE', desc: 'The reign of Lalitaditya Muktapida, builder of the Martand Sun Temple, whose empire stretched from Central Asia to the Bay of Bengal.' },
  { era: 'The Utpala & Lohara Dynasties', period: '855–1339 CE', desc: 'Avantivarman\'s engineering genius, Queen Didda\'s political mastery, and the flowering of Kashmir Shaivism under Abhinavagupta.' },
  { era: 'The Sultanate Period', period: '1339–1586 CE', desc: 'A transformative era that reshaped Kashmir\'s religious and cultural landscape, bringing new architectural traditions and social changes.' },
  { era: 'Mughal, Afghan & Sikh Rule', period: '1586–1846 CE', desc: 'From Akbar\'s garden-building to the turbulence of Afghan and Sikh governance — centuries that left deep marks on Kashmir\'s character.' },
  { era: 'The Dogra Period & Modern Kashir', period: '1846–Present', desc: 'The Treaty of Amritsar, the emergence of modern Kashmiri identity, and the contemporary story of a civilisation navigating change.' },
]

export default function ACivilisation() {
  return (
    <>
      <PageHero
        image="/images/vatista.jpg"
        label="Discover Kashir"
        title="A Civilisation"
        subtitle="Five thousand years of history. One extraordinary valley. A civilisation that shaped thought, art, philosophy and faith."
        breadcrumbs={[
          { label: 'Discover Kashir', href: '/discover' },
          { label: 'A Civilisation' },
        ]}
      />

      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                When visitors arrive in Kashmir, they see mountains, lakes and gardens. What they
                rarely see is the civilisation beneath — the layers of history, thought and
                creativity that make this valley one of the most remarkable cultural landscapes
                on earth.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Kashmir produced Kalhana, whose Rajatarangini is India&apos;s first genuine
                historical chronicle. It gave the world Kashmir Shaivism, a philosophical tradition
                of extraordinary depth. It nurtured Sanskrit grammarians, astronomers, poets and
                political theorists whose influence extended far beyond the valley.
              </p>
              <p>
                This page offers a doorway into that civilisational depth — not as academic history,
                but as a living foundation that shapes the Kashir you experience today.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <RevealOnScroll>
            <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>
              The Arc of Kashir&apos;s History
            </h2>
            <div className="gold-divider" />
          </RevealOnScroll>

          <div style={{ marginTop: '3rem', display: 'grid', gap: 'var(--space-6)', maxWidth: '900px', margin: '3rem auto 0' }}>
            {eras.map((item, i) => (
              <RevealOnScroll key={item.era} delay={i % 4}>
                <div className="card" style={{ padding: 'var(--space-8)' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                    <h3 style={{ fontSize: 'var(--text-2xl)' }}>{item.era}</h3>
                    <span style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>
                      {item.period}
                    </span>
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-warm-gray)' }}>
                    {item.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <p style={{ fontFamily: 'var(--font-accent)', fontStyle: 'italic', fontSize: 'var(--text-lg)', color: 'var(--color-warm-gray)', maxWidth: '600px', margin: '0 auto 2rem' }}>
                Explore these chapters in depth through the Kashir Journal — our knowledge platform
                dedicated to Kashir&apos;s history, culture and civilisation.
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
