import Link from 'next/link'
import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Private Journeys',
  description: 'Exclusively yours. Every moment curated with personal attention, expert guides, and the flexibility to follow your instincts in Kashmir.',
}

export default function PrivateJourneys() {
  return (
    <>
      <PageHero
        image="/images/hero.jpg"
        label="Journeys"
        title="Private Journeys"
        subtitle="Exclusively yours. Every moment curated with personal attention and the freedom to follow your instincts."
        breadcrumbs={[{ label: 'Journeys', href: '/journeys' }, { label: 'Private Journeys' }]}
      />
      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                A Private Journey with Kashir Wath means complete exclusivity. Your own guide,
                your own vehicle, your own schedule — shaped entirely around what you want to
                see, experience and understand. No shared timelines, no compromises, no group
                dynamics.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                This is how Kashmir is best experienced — at your own pace, with expert company,
                and with the flexibility to spend an extra hour at a temple that moves you, or to
                change plans because the light is perfect for a walk along the Vitasta.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <RevealOnScroll>
            <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>What&apos;s Included</h2>
            <div className="gold-divider" />
          </RevealOnScroll>
          <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)' }}>
            {[
              { title: 'Expert Private Guide', desc: 'A knowledgeable guide dedicated exclusively to you — not a script-reader, but a genuine cultural companion.' },
              { title: 'Private Transport', desc: 'Comfortable, well-maintained vehicles with experienced drivers who know every road and shortcut.' },
              { title: 'Curated Stays', desc: 'Handpicked accommodation — heritage houseboats, boutique hotels, or heritage properties — selected for character and quality.' },
              { title: 'Flexible Itinerary', desc: 'A detailed plan that can bend — because the best moments in Kashmir often arrive unplanned.' },
              { title: 'Local Encounters', desc: 'Access to artisans, families, scholars and local specialists that standard tourism doesn\'t reach.' },
              { title: 'Continuous Support', desc: 'From the moment you arrive to the moment you depart — we are available, attentive, and responsive.' },
            ].map((item, i) => (
              <RevealOnScroll key={item.title} delay={i % 3}>
                <div className="card" style={{ padding: 'var(--space-8)', height: '100%' }}>
                  <h3 className="card-title" style={{ fontSize: 'var(--text-xl)' }}>{item.title}</h3>
                  <p className="card-text">{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Plan Your Private Journey" subtitle="Tell us what you seek. We'll shape a journey that is exclusively, entirely yours." />
    </>
  )
}
