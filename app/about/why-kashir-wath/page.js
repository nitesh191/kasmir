import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Why Kashir Wath',
  description: 'What makes Kashir Wath different — and why it matters for your journey through Kashmir.',
}

const reasons = [
  {
    title: 'We Understand Kashmir Differently',
    text: 'Our cultural foundation — rooted in Kashmiri Pandit heritage — gives us a depth of understanding that no training course can replicate. We know the sacred geography because it is our sacred geography. We know the festivals because we celebrate them. We know the food because it is our food.',
  },
  {
    title: "We Curate, We Don't Package",
    text: 'Every journey starts with a conversation, not a catalogue. We listen to what you seek, we shape an experience around it, and we refine until it feels right. There are no fixed itineraries, no group slots, no one-size-fits-all solutions.',
  },
  {
    title: 'Our Guides Are Cultural Companions',
    text: 'The people who travel with you are not script-reading tour guides. They are knowledgeable, culturally fluent, deeply connected to the places they share — people who can explain a ninth-century inscription and recommend the best haakh in Srinagar in the same conversation.',
  },
  {
    title: 'We Choose Every Detail Personally',
    text: "Every hotel, every houseboat, every vehicle, every experience — personally evaluated. We don't choose from databases. We choose from personal knowledge, repeat visits, and genuine relationships with the people who host our guests.",
  },
  {
    title: 'We Serve Both Audiences With Integrity',
    text: 'For Kashmiri Pandits seeking reconnection, we offer depth, sensitivity and cultural understanding. For wider travellers seeking discovery, we offer a Kashmir that ordinary tourism never reveals. Both audiences receive genuine value — not marketing.',
  },
  {
    title: 'We Care About What Comes After',
    text: "The relationship doesn't end when you return home. We follow up, we stay in touch, and when you're ready to return to Kashir — and many guests do — we remember everything about what mattered to you.",
  },
]

export default function WhyKashirWath() {
  return (
    <>
      <PageHero
        image="/images/discover.jpg"
        label="About"
        title="Why Kashir Wath"
        subtitle="What makes us different — and why it matters for your journey."
        breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'Why Kashir Wath' }]}
      />
      <section className="section-lg">
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            {reasons.map((item, i) => (
              <RevealOnScroll key={item.title} delay={i % 3}>
                <div
                  className="card"
                  style={{
                    padding: 'var(--space-8)',
                    marginBottom: 'var(--space-8)',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'clamp(1.35rem, 2vw, 1.65rem)',
                      marginBottom: '0.75rem',
                      color: 'var(--color-ivory)',
                    }}
                  >
                    {item.title}
                  </h3>
                  <div className="gold-divider gold-divider-left" style={{ margin: '0.75rem 0 1rem' }} />
                  <p style={{ color: 'var(--color-warm-gray)', lineHeight: 1.8 }}>
                    {item.text}
                  </p>
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
