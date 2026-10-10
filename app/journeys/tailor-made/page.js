import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Tailor-Made Journeys',
  description: 'Tell us what you seek. We shape the journey around it. No templates, no fixed itineraries — entirely yours.',
}

export default function TailorMade() {
  return (
    <>
      <PageHero
        image="/images/ritu.jpg"
        label="Journeys"
        title="Tailor-Made Journeys"
        subtitle="Tell us what you seek. We shape the journey around it."
        breadcrumbs={[{ label: 'Journeys', href: '/journeys' }, { label: 'Tailor-Made' }]}
      />
      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Every traveller comes to Kashmir for different reasons. Some seek heritage and
                temples. Others want mountains and meadows. Some want to reconnect with ancestral
                places. Others want a slow, contemplative journey through culture and cuisine.
                Many want a combination of everything.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                A Tailor-Made Journey starts with your vision and ends with an itinerary that
                feels like it was created specifically for you — because it was. No templates.
                No repeating patterns. No compromise between what you want and what we offer.
              </p>
              <p>
                The process is simple: you tell us what you seek, we listen carefully, we
                propose a journey, we refine together, and when everything feels right — you travel.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <RevealOnScroll>
            <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>What Can Be Tailored</h2>
            <div className="gold-divider" />
          </RevealOnScroll>
          <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-6)' }}>
            {['Duration & Pace', 'Destinations & Routes', 'Accommodation Style', 'Experience Focus', 'Cultural Depth', 'Budget Range', 'Group Size & Composition', 'Special Requirements'].map((item, i) => (
              <RevealOnScroll key={item} delay={i % 4}>
                <div className="card" style={{ padding: 'var(--space-6)', textAlign: 'center' }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-xl)', color: 'var(--color-ivory)' }}>{item}</h3>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Start Your Tailor-Made Journey" subtitle="Tell us everything — and we'll build something that is entirely, uniquely yours." />
    </>
  )
}
