import Link from 'next/link'
import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Sacred Kashir — Temples · Tirthas · Shaiva Heritage',
  description:
    'Discover the sacred landscape of Kashmir — temples, tirthas, Devi traditions, Shaiva heritage, pilgrimage sites and the living spirituality of Kashir.',
}

const sacredPlaces = [
  { name: 'Kheer Bhawani (Tulmul)', desc: 'The sacred spring temple of Ragnya Devi — the emotional and spiritual centre of Kashmiri Pandit devotion. The changing colours of its waters carry deep significance.' },
  { name: 'Martand Sun Temple', desc: 'The monumental eighth-century sun temple built by Lalitaditya Muktapida — one of the most significant archaeological sites in South Asia.' },
  { name: 'Shankaracharya Temple', desc: 'Perched atop Gopadari hill in Srinagar, this ancient Shiva temple offers panoramic views and a direct connection to Kashmir\'s Shaiva traditions.' },
  { name: 'Avantiswamin Temple (Avantipora)', desc: 'Built by King Avantivarman in the ninth century — a masterwork of Kashmiri temple architecture dedicated to Vishnu and Shiva.' },
  { name: 'Hari Parbat', desc: 'The sacred hill that rises above Srinagar — home to the Sharika Devi temple and centuries of devotional history.' },
  { name: 'Sacred Springs (Naag)', desc: 'Hundreds of sacred springs dot the valley — each with its own deity, its own legend, its own community of worship. Verinag, Kokernag, Achabal, Mattan and countless others.' },
]

export default function SacredKashir() {
  return (
    <>
      <PageHero
        image="/images/vatista.jpg"
        label="Sacred Kashir"
        title="Temples · Tirthas · Heritage"
        subtitle="The sacred landscape of Kashir — where devotion, architecture and geology meet in places of extraordinary spiritual power."
        breadcrumbs={[
          { label: 'Panun Kashir', href: '/panun-kashir' },
          { label: 'Sacred Kashir' },
        ]}
      />

      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Kashmir&apos;s sacred geography is unlike anything else in the Indian subcontinent.
                Here, spirituality is not confined to temple walls — it flows through springs,
                rises with mountain peaks, and resonates in caves and rock formations that have
                been sites of worship since before recorded history.
              </p>
              <p>
                From the great Shaiva and Vaishnava temples built by Kashmir&apos;s emperors to
                the intimate sacred springs where families have prayed for generations, Sacred
                Kashir invites you to engage with a living spiritual tradition of extraordinary
                depth.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <RevealOnScroll>
            <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Sacred Places of Kashir</h2>
            <div className="gold-divider" />
          </RevealOnScroll>

          <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 'var(--space-6)' }}>
            {sacredPlaces.map((place, i) => (
              <RevealOnScroll key={place.name} delay={i % 3}>
                <div className="card" style={{ padding: 'var(--space-8)', height: '100%' }}>
                  <span className="card-label">Sacred Site</span>
                  <h3 className="card-title" style={{ fontSize: 'var(--text-xl)' }}>{place.name}</h3>
                  <p className="card-text">{place.desc}</p>
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
              <div className="content-image">
                <img src="/images/discover.jpg" alt="Kashmir Shaiva heritage" loading="lazy" />
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={2}>
              <div>
                <h2 style={{ marginBottom: '1.5rem' }}>Kashmir Shaivism</h2>
                <div className="gold-divider gold-divider-left" />
                <p style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                  Kashmir Shaivism — the non-dual Trika tradition — is one of the most
                  sophisticated spiritual philosophies ever developed. Thinkers like
                  Vasugupta, Somananda, Utpaladeva and Abhinavagupta created a system of
                  thought that continues to inspire scholars and seekers worldwide.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  When you visit the places where these masters lived and taught, the
                  philosophy comes alive — rooted in the landscape, in the springs, in the
                  very air of the valley.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link href="/experiences/sacred-spiritual" className="btn btn-outline">
                    Sacred Experiences
                  </Link>
                  <Link href="/plan-your-journey" className="btn btn-primary">
                    Plan Your Journey
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
