import Link from 'next/link'
import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import SectionHeader from '@/components/SectionHeader'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Discover Kashir',
  description:
    'Explore Kashmir beyond conventional tourism. Discover the civilisation, sacred geography, living traditions, and cultural depth that make Kashir extraordinary.',
}

const layers = [
  {
    number: '01',
    name: 'Kashir Vatista',
    sub: 'Land · Water · Sacred Geography',
    desc: 'Where rivers, springs and mountains carry the memory of an ancient civilisation. From the sacred Vitasta to the tirthas that anchor identity.',
    image: '/images/vatista.jpg',
    href: '/discover/kashir-vatista',
  },
  {
    number: '02',
    name: 'Kashir Sutra',
    sub: 'Ritual · Festivals · Culture',
    desc: 'Living traditions that connect generations — from Herath to Kheer Bhawani, from Navreh to the seasonal rituals that define Kashmiri life.',
    image: '/images/sutra.jpg',
    href: '/discover/kashir-sutra',
  },
  {
    number: '03',
    name: 'Kashir Vaas',
    sub: 'Hospitality · Heritage · Homes',
    desc: 'Where you stay shapes how you experience. Heritage houseboats, traditional homes, slow stays, and the art of Kashmiri hospitality.',
    image: '/images/vaas.jpg',
    href: '/discover/kashir-vaas',
  },
  {
    number: '04',
    name: 'Kashir Ritu',
    sub: 'Spring · Summer · Autumn · Winter',
    desc: 'Every season reveals a different Kashir — in colour, ritual, food and light. Each one a distinct journey.',
    image: '/images/ritu.jpg',
    href: '/discover/kashir-ritu',
  },
  {
    number: '05',
    name: 'Kashir Ghar Panun',
    sub: 'Belonging · Memory · Heritage',
    desc: 'For some, Kashir is a destination. For others, it is a part of who they are. This layer speaks to both.',
    image: '/images/ghar.jpg',
    href: '/discover/kashir-ghar-panun',
  },
]

export default function DiscoverKashir() {
  return (
    <>
      <PageHero
        image="/images/discover.jpg"
        label="Discover"
        title="Discover Kashir"
        subtitle="Kashmir is not merely a place to visit. It is a civilisation to understand, a landscape that holds memory, a living culture that connects generations."
        breadcrumbs={[{ label: 'Discover Kashir' }]}
      />

      {/* Introduction */}
      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ marginBottom: '1.5rem' }}>More Than a Destination</h2>
              <div className="gold-divider" />
              <p style={{ margin: '1.5rem auto', maxWidth: '650px' }}>
                To most visitors, Kashmir means mountains, houseboats and snow. To us, it means
                something immeasurably deeper — a five-thousand-year civilisation shaped by rivers
                and sacred springs, by emperors and poets, by rituals that have survived time.
              </p>
              <p style={{ margin: '0 auto 2rem', maxWidth: '650px' }}>
                Kashir Wath invites you to see Kashmir through five interconnected layers — each
                one a doorway into understanding what makes this land extraordinary.
              </p>
              <Link href="/discover/more-than-a-destination" className="btn btn-outline">
                Read More
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Five Layers */}
      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container-wide">
          <RevealOnScroll>
            <SectionHeader
              label="Five Layers of Kashir"
              title="How We See Kashmir"
              subtitle="Five interconnected ways of understanding and experiencing Kashir — each one a doorway into something deeper."
            />
          </RevealOnScroll>

          <div className="layers-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 'var(--space-4)', marginTop: '3rem' }}>
            {layers.map((layer, i) => (
              <RevealOnScroll key={layer.name} delay={i + 1}>
                <Link href={layer.href} style={{ textDecoration: 'none' }}>
                  <div className="layer-card">
                    <div className="layer-card-bg">
                      <img src={layer.image} alt={layer.name} loading="lazy" />
                    </div>
                    <div className="layer-card-overlay" />
                    <div className="layer-card-content">
                      <div className="layer-card-number">{layer.number}</div>
                      <h3 className="layer-card-title">{layer.name}</h3>
                      <p className="layer-card-sub">{layer.sub}</p>
                      <p className="layer-card-desc">{layer.desc}</p>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* A Civilisation */}
      <section className="section-lg">
        <div className="container">
          <div className="content-split">
            <RevealOnScroll>
              <div>
                <span className="section-label" style={{ paddingLeft: 0 }}>Kashir</span>
                <h2 style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
                  A Civilisation, Not Just a Valley
                </h2>
                <div className="gold-divider gold-divider-left" />
                <p style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                  Long before Kashmir became a byword for scenic beauty, it was a seat of
                  learning, spirituality and empire. The Karkota dynasty produced rulers who rivalled
                  the great emperors of the ancient world. Shaivism found its most refined
                  philosophical expression here. Sanskrit scholars, grammarians and historians
                  walked its streets.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  This is the Kashir we want you to discover — where every spring has a name,
                  every mountain has a story, and every festival carries the weight of a thousand
                  years.
                </p>
                <Link href="/discover/a-civilisation" className="btn btn-outline">
                  Kashir — A Civilisation
                </Link>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={2}>
              <div className="content-image">
                <img src="/images/vatista.jpg" alt="Ancient Kashmir civilisation" loading="lazy" />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Kashir You Decide */}
      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
              <span className="section-label">Your Journey</span>
              <h2 style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
                Kashir, You Decide
              </h2>
              <div className="gold-divider" />
              <p style={{ margin: '1.5rem auto', maxWidth: '600px' }}>
                This is not about choosing from a menu. It is about telling us what you seek —
                and letting us shape a journey that is genuinely yours. Heritage, spirituality,
                food, family reconnection, slow discovery — whatever draws you to Kashir, we
                build the journey around it.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <Link href="/plan-your-journey" className="btn btn-primary btn-lg">
                  Plan Your Journey
                </Link>
                <Link href="/journeys/tailor-made" className="btn btn-outline btn-lg">
                  Tailor-Made Journeys
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CTASection />
    </>
  )
}
