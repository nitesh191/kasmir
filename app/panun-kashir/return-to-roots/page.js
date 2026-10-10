import Link from 'next/link'
import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Return to Roots — Ancestral Connections',
  description:
    'For those seeking ancestral connections, family places, old neighbourhoods, temples and memories — journeys of heritage reconnection with Kashir.',
}

export default function ReturnToRoots() {
  return (
    <>
      <PageHero
        image="/images/ghar.jpg"
        label="Return to Roots"
        title="Reconnect With Your Heritage"
        subtitle="A journey back to the places, temples and neighbourhoods that shaped your family's story."
        breadcrumbs={[
          { label: 'Panun Kashir', href: '/panun-kashir' },
          { label: 'Return to Roots' },
        ]}
      />

      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                For many Kashmiri Pandits, there is a journey that has been waiting — sometimes
                for years, sometimes for decades. The journey back to the place their family
                called home. The neighbourhood they heard about in stories. The temple where
                their grandparents prayed. The spring whose water their mother described.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Kashir Wath understands the emotional weight of this journey. We do not treat it
                as a tour. We treat it as an act of reconnection — sensitive, personal, and shaped
                entirely around what you and your family need from the experience.
              </p>
              <p>
                Whether you know exactly where your family lived or have only fragments of
                information, we can help you trace the connection — carefully, respectfully,
                and with genuine understanding of what this journey means.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <div className="content-split">
            <RevealOnScroll>
              <div>
                <h2 style={{ marginBottom: '1.5rem' }}>What a Return Journey Can Include</h2>
                <div className="gold-divider gold-divider-left" />
                <ul style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    'Visit to ancestral neighbourhoods and family properties',
                    'Sacred sites and temples connected to your family\'s devotion',
                    'Local guides who understand the history of specific areas',
                    'Time for reflection, prayer and personal connection',
                    'Documentation through photography and storytelling',
                    'Connections with local community members',
                    'Traditional meals prepared in the style your family remembers',
                    'Multi-generational experiences for families travelling together',
                  ].map((item) => (
                    <li key={item} style={{ fontSize: 'var(--text-sm)', color: 'var(--color-warm-gray)', paddingLeft: '1.5rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--color-gold)', fontSize: 'var(--text-lg)' }}>·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={2}>
              <div className="content-image">
                <img src="/images/sutra.jpg" alt="Heritage reconnection journey" loading="lazy" />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <div className="testimonial" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div className="testimonial-quote">
                I took my children to see the house where their grandfather grew up. They
                touched the walls. They walked the lane. They understood something that years
                of stories could never fully convey. This was the most meaningful journey of
                our lives.
              </div>
              <p className="testimonial-author">A Kashir Wath Guest</p>
              <p className="testimonial-journey">Return to Roots · Private Family Journey</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CTASection
        title="Ready to Return?"
        subtitle="This is a deeply personal journey. Share what you're seeking and we'll shape it with the care it deserves."
      />
    </>
  )
}
