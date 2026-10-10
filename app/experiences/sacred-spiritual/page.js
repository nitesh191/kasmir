import Link from 'next/link'
import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Sacred & Spiritual Experiences',
  description: 'Temples, tirthas, sacred springs and living faith — experience the spiritual landscape of Kashmir with depth and understanding.',
}

export default function SacredSpiritual() {
  return (
    <>
      <PageHero
        image="/images/vatista.jpg"
        label="Experiences"
        title="Sacred & Spiritual"
        subtitle="Temples, tirthas, sacred springs and living faith — the spiritual landscape of Kashmir."
        breadcrumbs={[
          { label: 'Experiences', href: '/experiences' },
          { label: 'Sacred & Spiritual' },
        ]}
      />

      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Kashmir&apos;s spiritual heritage is extraordinary in its depth and diversity.
                From the refined non-dual philosophy of Kashmir Shaivism to the Devi traditions
                centred on sacred springs, from ancient temple architecture to living pilgrimage
                routes — the sacred dimension of Kashir offers something profound to every seeker.
              </p>
              <p>
                Our sacred experiences are not tourist visits to religious sites. They are
                encounters with living traditions — guided by people who understand the devotional,
                philosophical and historical significance of each place.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-6)' }}>
            {[
              { title: 'Temple Pilgrimages', desc: 'Visit Kashmir\'s most significant temples — from the monumental Martand to the intimate neighbourhood shrines — with guides who understand their history and living devotion.' },
              { title: 'Sacred Springs & Naag', desc: 'The sacred springs of Kashmir are centres of worship, pilgrimage and community. Visit Kheer Bhawani, Verinag, Mattan and other springs with cultural context.' },
              { title: 'Kashmir Shaivism Encounters', desc: 'Explore the philosophical landscape of Kashmir Shaivism — the places where Abhinavagupta, Vasugupta and other masters lived and taught.' },
              { title: 'Festival Experiences', desc: 'Time your journey to coincide with Herath, Navreh, Jyeshta Ashtami or other sacred festivals — and experience them with understanding.' },
              { title: 'Meditation & Reflection', desc: 'Quiet spaces, sacred settings and time for contemplation — built into journeys for those who seek spiritual depth.' },
              { title: 'Amarnath & Pilgrimage Routes', desc: 'Support for travellers undertaking traditional pilgrimage routes with logistical care and cultural understanding.' },
            ].map((item, i) => (
              <RevealOnScroll key={item.title} delay={i % 3}>
                <div className="card" style={{ padding: 'var(--space-8)', height: '100%' }}>
                  <span className="card-label">Sacred</span>
                  <h3 className="card-title" style={{ fontSize: 'var(--text-xl)' }}>{item.title}</h3>
                  <p className="card-text">{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
