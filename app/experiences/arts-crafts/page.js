import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Arts, Crafts & Handwork',
  description: 'Pashmina, papier-mâché, walnut wood, kani weaving — experience the living craft traditions of Kashmir.',
}

export default function ArtsCrafts() {
  return (
    <>
      <PageHero
        image="/images/sutra.jpg"
        label="Experiences"
        title="Arts, Crafts & Handwork"
        subtitle="Hands that shape a thousand-year legacy — the living craft traditions of Kashmir."
        breadcrumbs={[
          { label: 'Experiences', href: '/experiences' },
          { label: 'Arts & Crafts' },
        ]}
      />

      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Kashmir&apos;s craft traditions are among the finest in the world — not in a museum
                sense, but as living practices passed from master to apprentice across generations.
                A single pashmina shawl can take eighteen months to weave. A papier-mâché box
                carries patterns that originated in the imperial workshops of the fourteenth century.
              </p>
              <p>
                Our craft experiences take you into the workshops and homes where these traditions
                live — to meet the hands that create them and understand the cultural knowledge
                they carry.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-6)' }}>
            {[
              { title: 'Pashmina & Shahtoosh', desc: 'From the raw fibre of the Changthangi goat to the finished shawl — understand the entire journey of the world\'s finest textile.' },
              { title: 'Kani Weaving', desc: 'The ancient technique of pattern weaving using small wooden bobbins — a craft that requires extraordinary patience and skill.' },
              { title: 'Papier-Mâché', desc: 'The intricate painted paper craft of Kashmir — from the preparation of the base to the detailed brushwork that creates miniature masterpieces.' },
              { title: 'Walnut Wood Carving', desc: 'The sculptural tradition of Kashmiri woodwork — from furniture to decorative panels, each piece carries the mark of the master.' },
              { title: 'Carpet Weaving', desc: 'Kashmiri carpets — hand-knotted with silk and wool — are among the world\'s most valued. Visit looms and understand the craft.' },
              { title: 'Copperware & Metal Craft', desc: 'The engraved copperware of Kashmir — samovars, plates, vessels — each piece hammered and detailed by hand.' },
            ].map((item, i) => (
              <RevealOnScroll key={item.title} delay={i % 3}>
                <div className="card" style={{ padding: 'var(--space-8)', height: '100%' }}>
                  <span className="card-label">Craft</span>
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
