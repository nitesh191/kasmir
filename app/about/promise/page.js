import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Our Promise',
  description: 'What guests can genuinely expect from Kashir Wath — and what we do not promise.',
}

const promises = [
  'A journey curated with genuine thought — not pulled from a template.',
  'Guides who understand Kashmir deeply — its history, heritage, culture and soul.',
  'Accommodation selected personally — for character, quality and warmth.',
  'Honest advice — if something is not possible or not advisable, we will tell you.',
  'Flexibility — the willingness to adapt when the journey calls for it.',
  'Continuous support — before, during and after your travel.',
  'Cultural sensitivity — in every recommendation, every encounter, every experience.',
  'Value — not the cheapest price, but genuine worth for what you receive.',
]

const nonPromises = [
  'The cheapest price. Quality, depth and personal attention require investment.',
  "Perfect weather. Kashmir's climate is part of its character — unpredictable and beautiful.",
  'A scripted experience. Real travel involves surprise, and we embrace that.',
  'Mass-market tourism. We are not for everyone, and we are at peace with that.',
  'Instant responses. Thoughtful curation takes time. We give it the time it deserves.',
]

export default function Promise() {
  return (
    <>
      <PageHero
        image="/images/hero.jpg"
        label="About"
        title="Our Promise"
        subtitle="What you can genuinely expect. And what we honestly do not promise."
        breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'Our Promise' }]}
      />
      <section className="section-lg">
        <div className="container" style={{ maxWidth: '860px' }}>
          <RevealOnScroll>
            <div
              className="card"
              style={{
                padding: 'var(--space-10)',
                marginBottom: 'var(--space-10)',
              }}
            >
              <span className="section-label" style={{ paddingLeft: 0, justifyContent: 'flex-start' }}>
                Commitment
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                  marginTop: '0.5rem',
                  marginBottom: '1rem',
                }}
              >
                What We Promise
              </h2>
              <div className="gold-divider gold-divider-left" />
              <ul
                style={{
                  marginTop: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                }}
              >
                {promises.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: '0.9375rem',
                      color: 'var(--color-ivory-warm)',
                      paddingLeft: '1.75rem',
                      position: 'relative',
                      lineHeight: 1.7,
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        color: 'var(--color-gold)',
                      }}
                    >
                      ✦
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={1}>
            <div
              className="card"
              style={{
                padding: 'var(--space-10)',
              }}
            >
              <span className="section-label" style={{ paddingLeft: 0, justifyContent: 'flex-start' }}>
                Transparency
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                  marginTop: '0.5rem',
                  marginBottom: '1rem',
                }}
              >
                What We Do Not Promise
              </h2>
              <div className="gold-divider gold-divider-left" />
              <ul
                style={{
                  marginTop: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                }}
              >
                {nonPromises.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: '0.9375rem',
                      color: 'var(--color-warm-gray)',
                      paddingLeft: '1.75rem',
                      position: 'relative',
                      lineHeight: 1.7,
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        color: 'rgba(197, 165, 90, 0.4)',
                        fontWeight: 700,
                      }}
                    >
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      <CTASection />
    </>
  )
}
