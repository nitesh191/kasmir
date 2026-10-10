import Link from 'next/link'
import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Kashir Ritu — Kashmir Through the Seasons',
  description:
    'Every season reveals a different Kashir — in colour, ritual, food and character. Discover spring, summer, autumn and winter in Kashmir.',
}

const seasons = [
  {
    name: 'Spring — Sonth',
    months: 'March — May',
    image: '/images/spring.jpg',
    highlights: ['Cherry blossoms blanket Srinagar', 'Tulip gardens open', 'Navreh — Kashmiri New Year', 'Almond orchards bloom', 'Village markets come alive', 'Perfect trekking weather begins'],
    desc: 'Spring in Kashmir is not just beautiful — it is a statement of renewal. After months of snow, the valley erupts into colour. Navreh marks the Kashmiri New Year, a moment of deep cultural significance. The air carries the scent of almond and cherry blossom.',
  },
  {
    name: 'Summer — Grishm',
    months: 'June — August',
    image: '/images/summer.jpg',
    highlights: ['Mountain meadows in full bloom', 'Amarnath Yatra pilgrimage', 'Sonamarg and Pahalgam at their finest', 'Jyeshta Ashtami at Kheer Bhawani', 'Highest passes open', 'Longest days, warmest light'],
    desc: 'Summer is when Kashmir\'s mountains reveal their full majesty. The meadows of Gulmarg turn into carpets of wildflowers. The high passes open for trekkers. Jyeshta Ashtami draws devotees to Kheer Bhawani in one of the most moving gatherings of the Kashmiri Pandit community.',
  },
  {
    name: 'Autumn — Harud',
    months: 'September — November',
    image: '/images/autumn.jpg',
    highlights: ['Golden chinar trees', 'Saffron harvest in Pampore', 'Crystal-clear mountain views', 'Apple and walnut harvest', 'Quiet beauty, fewer crowds', 'The most photogenic season'],
    desc: 'Autumn is Kashmir\'s most painterly season. The chinars turn gold and amber. The saffron fields of Pampore bloom in violet. The air sharpens. There is a quality of light in autumn Kashmir that photographers travel the world to find.',
  },
  {
    name: 'Winter — Wandh',
    months: 'December — February',
    image: '/images/winter.jpg',
    highlights: ['Snow transforms the valley', 'Kangri warmth and kahwa', 'Shishur celebrations', 'Herath (Maha Shivaratri)', 'Skiing at Gulmarg', 'The deep soul of Kashir'],
    desc: 'Winter in Kashmir is not for everyone — but for those who embrace it, it is the most soulful season. Snow softens the landscape. The kangri (hand-warmer) and kahwa (saffron tea) become constant companions. Herath, the most sacred night of the Kashmiri Pandit calendar, falls in winter.',
  },
]

export default function KashirRitu() {
  return (
    <>
      <PageHero
        image="/images/ritu.jpg"
        label="Kashir Ritu"
        title="Kashmir Through the Seasons"
        subtitle="Every season reveals a different Kashir — in colour, ritual, food and character."
        breadcrumbs={[
          { label: 'Discover Kashir', href: '/discover' },
          { label: 'Kashir Ritu' },
        ]}
      />

      {seasons.map((season, idx) => (
        <section
          key={season.name}
          className="section-lg"
          style={idx % 2 === 1 ? { background: 'var(--color-black-light)' } : {}}
        >
          <div className="container">
            <div className="content-split" style={idx % 2 === 1 ? { direction: 'rtl' } : {}}>
              <RevealOnScroll>
                <div style={idx % 2 === 1 ? { direction: 'ltr' } : {}}>
                  <span className="section-label" style={{ paddingLeft: 0 }}>{season.months}</span>
                  <h2 style={{ marginTop: '0.75rem', marginBottom: '1.5rem' }}>{season.name}</h2>
                  <div className="gold-divider gold-divider-left" />
                  <p style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>{season.desc}</p>
                  <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem 2rem', marginBottom: '2rem' }}>
                    {season.highlights.map((h) => (
                      <li key={h} style={{ fontSize: 'var(--text-sm)', color: 'var(--color-warm-gray)', position: 'relative', paddingLeft: '1rem' }}>
                        <span style={{ position: 'absolute', left: 0, color: 'var(--color-gold)' }}>·</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={2}>
                <div className="content-image" style={idx % 2 === 1 ? { direction: 'ltr' } : {}}>
                  <img src={season.image} alt={`Kashmir in ${season.name}`} loading="lazy" />
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>
      ))}

      <CTASection
        title="When Will You Journey Through Kashir?"
        subtitle="Every season offers something different. Tell us when you'd like to travel and we'll shape a journey that captures the best of that moment."
      />
    </>
  )
}
