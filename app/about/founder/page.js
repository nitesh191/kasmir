import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'The Founder',
  description: 'The personal story, travel experience, philosophy and reason behind Kashir Wath — a personal journey that became a purpose.',
}

export default function Founder() {
  return (
    <>
      <PageHero
        image="/images/founder.jpg"
        label="About"
        title="The Founder"
        subtitle="A personal journey that became a purpose."
        breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'The Founder' }]}
      />
      <section className="section-lg">
        <div className="container">
          <div className="content-split">
            <RevealOnScroll>
              <div>
                <p style={{ marginBottom: '1.5rem' }}>
                  Kashir Wath was born from a deeply personal relationship with Kashmir — one
                  shaped by heritage, memory, and a conviction that this extraordinary land
                  deserves to be shared with intelligence, sensitivity and care.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  As a Kashmiri Pandit who has spent years retracing, researching and rediscovering
                  Kashir, the founder brings something that no tour operator manual can teach — a
                  genuine understanding of what Kashmir means to those who carry it within them,
                  and what it can mean to those discovering it for the first time.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  The decision to create Kashir Wath came from a realisation: conventional Kashmir
                  tourism misses almost everything that makes this place extraordinary. The temples,
                  the sacred springs, the civilisational depth, the living traditions, the food as
                  cultural identity — none of this features in the standard tour. And yet, this is
                  precisely what gives Kashmir its soul.
                </p>
                <p>
                  Kashir Wath exists to bridge that gap — to create journeys that share the real
                  Kashmir with anyone who seeks it, whether they are returning to a homeland they
                  have always carried within, or discovering it for the first time.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={2}>
              <div className="content-image">
                <img src="/images/founder.jpg" alt="Founder of Kashir Wath" loading="lazy" />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
              <p
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(var(--text-2xl), 3vw, var(--text-3xl))',
                  color: 'var(--color-ivory)',
                  lineHeight: 1.5,
                  marginBottom: '2rem',
                }}
              >
                &ldquo;I did not create Kashir Wath to build a business. I created it because
                Kashmir deserves to be shared the way it deserves to be understood — with depth,
                with sensitivity, and with love.&rdquo;
              </p>
              <div className="gold-divider" />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CTASection />
    </>
  )
}
