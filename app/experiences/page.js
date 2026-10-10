import Link from 'next/link'
import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import SectionHeader from '@/components/SectionHeader'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Experiences — Kashmir, Experienced Differently',
  description:
    'Beyond sightseeing. Explore Kashmir through heritage, spirituality, culture, food, arts, nature, and the philosophy of slow travel.',
}

const experiences = [
  { title: 'Heritage & History', desc: 'Walk through centuries of civilisation — ancient temples, royal ruins, and the layers of history that shaped Kashir.', image: '/images/discover.jpg', href: '/experiences/heritage-history' },
  { title: 'Sacred & Spiritual', desc: 'Temples, tirthas, sacred springs and living faith — the spiritual landscape of Kashmir.', image: '/images/vatista.jpg', href: '/experiences/sacred-spiritual' },
  { title: 'Culture & Living Traditions', desc: 'Music, dance, craft, ritual — the cultural grammar of Kashir, alive and practised.', image: '/images/sutra.jpg', href: '/experiences/culture-traditions' },
  { title: 'Food & Culinary', desc: 'Wazwan feasts, home-cooked meals, saffron harvests — the taste of memory and tradition.', image: '/images/culture.jpg', href: '/experiences/food-culinary' },
  { title: 'Arts, Crafts & Handwork', desc: 'Pashmina, papier-mâché, walnut wood, kani weaving — hands that shape a thousand-year legacy.', image: '/images/sutra.jpg', href: '/experiences/arts-crafts' },
  { title: 'Nature & Landscapes', desc: 'Mountains, meadows, rivers, lakes — the sacred geography and natural beauty of Kashir.', image: '/images/hero.jpg', href: '/experiences/nature' },
  { title: 'People & Local Life', desc: 'Conversations, encounters, local markets — the human texture of Kashmir.', image: '/images/culture.jpg', href: '/experiences/people-local-life' },
  { title: 'Slow Kashmir', desc: 'Less rushing, more noticing. Baithak, conversations, local encounters and meaningful time.', image: '/images/vaas.jpg', href: '/experiences/slow-kashmir' },
]

export default function Experiences() {
  return (
    <>
      <PageHero
        image="/images/culture.jpg"
        label="Experiences"
        title="Kashmir, Experienced Differently"
        subtitle="Beyond sightseeing. Every experience is designed to connect you with the living culture, history and soul of Kashir."
        breadcrumbs={[{ label: 'Experiences' }]}
      />

      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <p style={{ margin: '0 auto' }}>
                Every Kashir Wath experience is designed with intention. We don&apos;t simply take you
                to places — we connect you with the meaning behind them. A temple visit becomes a
                lesson in civilisation. A meal becomes a journey through culinary history. A walk
                through a market becomes an encounter with living craft traditions.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <RevealOnScroll>
            <SectionHeader
              label="Explore"
              title="Ways to Experience Kashir"
            />
          </RevealOnScroll>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)', marginTop: '2rem' }}>
            {experiences.map((exp, i) => (
              <RevealOnScroll key={exp.title} delay={i % 4}>
                <Link href={exp.href} style={{ textDecoration: 'none' }}>
                  <div className="experience-card" style={{ aspectRatio: '3/4' }}>
                    <div className="experience-card-bg">
                      <img src={exp.image} alt={exp.title} loading="lazy" />
                    </div>
                    <div className="experience-card-overlay" />
                    <div className="experience-card-content">
                      <h3 className="experience-card-title">{exp.title}</h3>
                      <p className="experience-card-text">{exp.desc}</p>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
              <span className="section-label">Seasons</span>
              <h2 style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                Kashmir Through the Seasons
              </h2>
              <div className="gold-divider" />
              <p style={{ margin: '1.5rem auto', maxWidth: '600px' }}>
                Each season in Kashmir offers entirely different experiences — from spring blossoms
                and Navreh celebrations to autumn saffron harvests and winter Herath devotions.
                The season you choose shapes the journey you experience.
              </p>
              <Link href="/discover/kashir-ritu" className="btn btn-outline">
                Explore Seasons
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CTASection />
    </>
  )
}
