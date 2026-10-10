import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Our Promise',
  description: 'What guests can genuinely expect from Kashir Wath — and what we do not promise.',
}

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
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2 style={{ marginBottom: '1.5rem' }}>What We Promise</h2>
              <div className="gold-divider gold-divider-left" />
              <ul style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem' }}>
                {[
                  'A journey curated with genuine thought — not pulled from a template.',
                  'Guides who understand Kashmir deeply — its history, heritage, culture and soul.',
                  'Accommodation selected personally — for character, quality and warmth.',
                  'Honest advice — if something is not possible or not advisable, we will tell you.',
                  'Flexibility — the willingness to adapt when the journey calls for it.',
                  'Continuous support — before, during and after your travel.',
                  'Cultural sensitivity — in every recommendation, every encounter, every experience.',
                  'Value — not the cheapest price, but genuine worth for what you receive.',
                ].map((item) => (
                  <li key={item} style={{ fontSize: 'var(--text-base)', color: 'var(--color-warm-gray)', paddingLeft: '1.5rem', position: 'relative', lineHeight: 1.7 }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--color-gold)' }}>✦</span>
                    {item}
                  </li>
                ))}
              </ul>

              <h2 style={{ marginBottom: '1.5rem' }}>What We Do Not Promise</h2>
              <div className="gold-divider gold-divider-left" />
              <ul style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  'The cheapest price. Quality, depth and personal attention require investment.',
                  'Perfect weather. Kashmir\'s climate is part of its character — unpredictable and beautiful.',
                  'A scripted experience. Real travel involves surprise, and we embrace that.',
                  'Mass-market tourism. We are not for everyone, and we are at peace with that.',
                  'Instant responses. Thoughtful curation takes time. We give it the time it deserves.',
                ].map((item) => (
                  <li key={item} style={{ fontSize: 'var(--text-base)', color: 'var(--color-warm-gray)', paddingLeft: '1.5rem', position: 'relative', lineHeight: 1.7 }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--color-cool-gray)' }}>—</span>
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
