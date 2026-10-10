import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Nature & Landscapes',
  description: 'Mountains, meadows, rivers, lakes and sacred waters — the natural beauty and sacred geography of Kashmir.',
}

export default function Nature() {
  return (
    <>
      <PageHero
        image="/images/hero.jpg"
        label="Experiences"
        title="Nature & Landscapes"
        subtitle="Mountains, meadows, sacred waters — the landscape of Kashmir is not scenery. It is story."
        breadcrumbs={[
          { label: 'Experiences', href: '/experiences' },
          { label: 'Nature & Landscapes' },
        ]}
      />

      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                The natural landscape of Kashmir is among the most dramatic on earth. The Pir Panjal
                range guards the south, the Greater Himalaya rises to the north. Between them lies
                a valley watered by sacred rivers, fed by ancient springs, and carpeted with meadows
                that change character with every season.
              </p>
              <p>
                Our nature experiences are not adventure tourism in the conventional sense. They
                are encounters with landscape as meaning — understanding why these mountains, rivers
                and meadows are sacred, how they shaped civilisation, and what they reveal about
                the deeper character of Kashir.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-6)' }}>
            {[
              { title: 'Mountain Walks & Treks', desc: 'From gentle valley walks to high-altitude treks — discover Kashmir\'s mountains at your own pace, with guides who know every trail.' },
              { title: 'Lakes & Waterways', desc: 'Dal Lake by shikara, Wular Lake at dawn, Manasbal in spring — the waterways of Kashmir offer some of its most serene experiences.' },
              { title: 'Meadows & Highlands', desc: 'Sonamarg, Gulmarg, Yusmarg, Doodhpathri — the alpine meadows of Kashmir are among the most beautiful landscapes in the Himalayas.' },
              { title: 'Sacred Rivers & Springs', desc: 'Walk along the banks of the Vitasta, visit the great sacred springs — understanding water as the lifeblood of Kashmiri civilisation.' },
              { title: 'Garden Walks', desc: 'The Mughal gardens, the Botanical gardens, and the intimate private gardens — Kashmir\'s horticultural heritage is exceptional.' },
              { title: 'Wildlife & Bird Encounters', desc: 'From the Dachigam wildlife sanctuary to the wetlands of Hokersar — encounter the fauna that shares this extraordinary landscape.' },
            ].map((item, i) => (
              <RevealOnScroll key={item.title} delay={i % 3}>
                <div className="card" style={{ padding: 'var(--space-8)', height: '100%' }}>
                  <span className="card-label">Nature</span>
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
