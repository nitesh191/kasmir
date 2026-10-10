import Link from 'next/link'
import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Kashir Vatista — Land · Water · Sacred Geography',
  description:
    'Discover Kashmir through its sacred geography — the Vitasta, ancient springs, mountains, tirthas, settlements, and the landscape that holds civilisational memory.',
}

const themes = [
  { title: 'Vitasta — The River of Kashir', text: 'The Jhelum, known in Sanskrit as Vitasta, is more than a river. It is the lifeblood of the valley — the axis around which settlements, temples, trade and culture have revolved for millennia. To understand Kashir, begin with Vitasta.' },
  { title: 'Sacred Springs — The Naag Tradition', text: 'Kashmir is dotted with hundreds of sacred springs (naag), each with its own deity, its own story, its own community of devotion. From Verinag to Kokernag, from Mattan to Kheer Bhawani — these springs are the spiritual heartbeat of Kashir.' },
  { title: 'Mountains & Passes', text: 'The Pir Panjal guards the south, the Greater Himalaya rises to the north and east. Between them, passes like Zoji La and Banihal connected Kashmir to the wider world — routes of trade, pilgrimage and empire.' },
  { title: 'Tirthas & Sacred Geography', text: 'Kashmir\'s sacred geography is not confined to temples. It includes rocks, caves, springs, confluences and mountain peaks that have been sites of worship and pilgrimage since the earliest recorded history.' },
  { title: 'Ancient Routes & Settlements', text: 'The old caravan routes, the historic towns along the Vitasta, the settlements that grew around springs and temples — understanding where people lived and how they moved reveals the deep structure of Kashmiri civilisation.' },
  { title: 'Landscape & Memory', text: 'For many Kashmiri Pandits, the landscape of Kashmir is inseparable from family memory. The view from a particular window, the taste of water from a specific spring, the walk to a neighbourhood temple — landscape carries identity.' },
]

export default function KashirVatista() {
  return (
    <>
      <PageHero
        image="/images/vatista.jpg"
        label="Kashir Vatista"
        title="Land · Water · Sacred Geography"
        subtitle="Where rivers, springs and mountains carry the memory of an ancient civilisation."
        breadcrumbs={[
          { label: 'Discover Kashir', href: '/discover' },
          { label: 'Kashir Vatista' },
        ]}
      />

      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Kashir Vatista is the first layer of understanding Kashmir. Before you meet its
                people, taste its food or enter its temples, you encounter its land — and the land
                of Kashmir is unlike any other.
              </p>
              <p>
                This is not landscape as scenery. It is landscape as civilisational memory. Every
                river, spring, mountain and settlement tells a story that stretches back thousands
                of years. To travel through Kashmir with this understanding is to see what ordinary
                tourism misses entirely.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 'var(--space-8)' }}>
            {themes.map((theme, i) => (
              <RevealOnScroll key={theme.title} delay={i % 3}>
                <div className="card" style={{ padding: 'var(--space-8)', height: '100%' }}>
                  <span className="card-label">Vatista</span>
                  <h3 className="card-title" style={{ fontSize: 'var(--text-xl)' }}>{theme.title}</h3>
                  <p className="card-text">{theme.text}</p>
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
                <img src="/images/spring.jpg" alt="Sacred spring in Kashmir" loading="lazy" />
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={2}>
              <div>
                <h2 style={{ marginBottom: '1.5rem' }}>Experience Kashir Vatista</h2>
                <div className="gold-divider gold-divider-left" />
                <p style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                  We shape journeys that connect you to the sacred geography of Kashmir —
                  not as a tourist passing through, but as a traveller who understands what they
                  are seeing.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  Walk along the banks of the Vitasta. Visit springs that have been centres of
                  devotion for millennia. Trace the ancient routes that connected Kashmir to the
                  wider world. Understand why this landscape shaped a civilisation.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link href="/experiences/nature" className="btn btn-outline">
                    Nature Experiences
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
