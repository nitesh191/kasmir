import Link from 'next/link'
import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Kashir Sutra — Ritual · Festivals · Culture · Traditions',
  description:
    'Explore the living cultural traditions of Kashmir — from Herath to Navreh, from Kheer Bhawani to Jyeshta Ashtami. Rituals, festivals and heritage that connect generations.',
}

const festivals = [
  { name: 'Herath (Maha Shivaratri)', season: 'February / March', desc: 'The most important festival of the Kashmiri Pandit calendar. Celebrated with deep devotion, specific rituals and traditional foods that carry centuries of meaning.' },
  { name: 'Navreh', season: 'March / April', desc: 'The Kashmiri New Year — marked by the sight of a thali prepared with specific auspicious items. A moment of hope, continuity and cultural identity.' },
  { name: 'Jyeshta Ashtami', season: 'May / June', desc: 'The annual pilgrimage to the Kheer Bhawani temple at Tulmul — one of the most emotionally powerful gatherings of the Kashmiri Pandit community.' },
  { name: 'Kheer Bhawani', season: 'Year-round significance', desc: 'The sacred spring temple of the Goddess Ragnya Devi. Its changing water colours, its devotional atmosphere, its role as a centre of KP identity — all are deeply significant.' },
  { name: 'Janmashtami', season: 'August / September', desc: 'Celebrated with particular devotion in Kashmir — a tradition that connects the valley\'s deep Vaishnavite heritage with pan-Indian observance.' },
  { name: 'Seasonal Rituals', season: 'Throughout the year', desc: 'From Shishur (winter solstice) to harvest celebrations, the Kashmiri calendar is marked by rituals that connect family, food, season and faith.' },
]

export default function KashirSutra() {
  return (
    <>
      <PageHero
        image="/images/sutra.jpg"
        label="Kashir Sutra"
        title="Ritual · Festivals · Culture"
        subtitle="Living traditions that connect generations — from Herath to Kheer Bhawani, from Navreh to the seasonal rituals that define Kashmiri life."
        breadcrumbs={[
          { label: 'Discover Kashir', href: '/discover' },
          { label: 'Kashir Sutra' },
        ]}
      />

      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Kashir Sutra is the cultural thread that binds Kashmir together — across time,
                across generations, across distance. It is the grammar of Kashmiri cultural life:
                the festivals, rituals, food traditions and family customs that define what it means
                to belong to this extraordinary civilisation.
              </p>
              <p>
                For a Kashmiri Pandit visitor, these traditions are familiar, intimate, deeply
                personal. For a non-KP visitor, they open a doorway into a side of Kashmir that
                ordinary tourism never reveals — a living cultural depth that transforms how you
                understand this land.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <RevealOnScroll>
            <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>
              Festivals & Rituals of Kashir
            </h2>
            <div className="gold-divider" />
          </RevealOnScroll>

          <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 'var(--space-6)' }}>
            {festivals.map((f, i) => (
              <RevealOnScroll key={f.name} delay={i % 3}>
                <div className="card" style={{ padding: 'var(--space-8)', height: '100%' }}>
                  <span className="card-label">{f.season}</span>
                  <h3 className="card-title" style={{ fontSize: 'var(--text-xl)' }}>{f.name}</h3>
                  <p className="card-text">{f.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-lg">
        <div className="container">
          <div className="content-split">
            <RevealOnScroll>
              <div>
                <h2 style={{ marginBottom: '1.5rem' }}>Food, Family & Tradition</h2>
                <div className="gold-divider gold-divider-left" />
                <p style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                  Food in Kashmir is never just food. The 36-course Wazwan feast carries centuries of
                  hospitality ritual. The haakh-batta of a simple Pandit meal is identity on a plate.
                  Festival foods — from taher to modur pulao — mark the calendar as surely as the
                  seasons do.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  Family customs — the way a bride is received, the way a newborn is welcomed,
                  the way elders are honoured — these are the invisible threads that hold Kashmiri
                  culture together. Understanding them transforms how you experience this land.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link href="/experiences/food-culinary" className="btn btn-outline">
                    Food Experiences
                  </Link>
                  <Link href="/experiences/culture-traditions" className="btn btn-outline">
                    Culture & Traditions
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={2}>
              <div className="content-image">
                <img src="/images/culture.jpg" alt="Kashmiri food and cultural traditions" loading="lazy" />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
