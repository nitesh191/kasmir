import Link from 'next/link'
import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Special Interest Journeys',
  description: 'Heritage, spirituality, food, photography, cultural reconnection — journeys built around a specific passion or purpose in Kashmir.',
}

const interests = [
  { title: 'Heritage & History', desc: 'Deep-dive into Kashmir\'s civilisational past — temples, ruins, the Rajatarangini trail, and the layers of empire.', href: '/experiences/heritage-history' },
  { title: 'Sacred & Spiritual', desc: 'Temples, tirthas, Kashmir Shaivism, Devi traditions — journeys designed for seekers and pilgrims.', href: '/experiences/sacred-spiritual' },
  { title: 'Culture & Traditions', desc: 'Music, dance, ritual, festival — immerse yourself in the living cultural grammar of Kashir.', href: '/experiences/culture-traditions' },
  { title: 'Food & Culinary', desc: 'Wazwan, home-cooked meals, saffron harvest, kitchen traditions — journeys for food lovers and cultural explorers.', href: '/experiences/food-culinary' },
  { title: 'Photography', desc: 'Light, landscape, people, architecture — Kashmir through the lens, guided by those who know where to look and when.' },
  { title: 'Family Reconnection', desc: 'For Kashmiri Pandit families — trace ancestral connections, visit family places, share heritage with the next generation.', href: '/panun-kashir/return-to-roots' },
  { title: 'Seasonal Journeys', desc: 'Spring blossoms, autumn gold, winter snow — journeys timed to the rhythms of Kashmir\'s seasons.', href: '/discover/kashir-ritu' },
  { title: 'Arts & Craft Discovery', desc: 'Pashmina, papier-mâché, walnut wood, carpets — meet the artisans and understand their craft traditions.', href: '/experiences/arts-crafts' },
]

export default function SpecialInterest() {
  return (
    <>
      <PageHero
        image="/images/sutra.jpg"
        label="Journeys"
        title="Special Interest Journeys"
        subtitle="Journeys built around a specific passion or purpose — because the best travel follows genuine curiosity."
        breadcrumbs={[{ label: 'Journeys', href: '/journeys' }, { label: 'Special Interest' }]}
      />
      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <p style={{ margin: '0 auto' }}>
                When a journey is shaped around a genuine interest — heritage, food, spirituality,
                photography, family reconnection — it acquires a depth and focus that general
                tourism cannot match. Special Interest Journeys let you pursue what matters most
                to you, with expert guidance and carefully curated encounters.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-6)' }}>
            {interests.map((item, i) => (
              <RevealOnScroll key={item.title} delay={i % 4}>
                {item.href ? (
                  <Link href={item.href} style={{ textDecoration: 'none' }}>
                    <div className="card" style={{ padding: 'var(--space-8)', height: '100%' }}>
                      <span className="card-label">Interest</span>
                      <h3 className="card-title" style={{ fontSize: 'var(--text-xl)' }}>{item.title}</h3>
                      <p className="card-text">{item.desc}</p>
                      <span style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--color-gold)', fontSize: 'var(--text-sm)', fontWeight: 500 }}>Learn More →</span>
                    </div>
                  </Link>
                ) : (
                  <div className="card" style={{ padding: 'var(--space-8)', height: '100%' }}>
                    <span className="card-label">Interest</span>
                    <h3 className="card-title" style={{ fontSize: 'var(--text-xl)' }}>{item.title}</h3>
                    <p className="card-text">{item.desc}</p>
                  </div>
                )}
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="What's Your Kashir?" subtitle="Tell us your interest and we'll build a journey around it." />
    </>
  )
}
