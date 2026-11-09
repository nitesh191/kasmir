import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Our Philosophy',
  description:
    'The principles that guide every Kashir Wath journey — depth over spectacle, understanding over sightseeing, connection over consumption.',
}

const principles = [
  {
    title: 'Kashmir Deserves to Be Understood',
    text: 'Not just visited. Not just photographed. Understood — as a civilisation, as a living culture, as a landscape of profound meaning. Every journey we curate begins with this conviction.',
  },
  {
    title: 'Heritage Is Not a Marketing Label',
    text: 'Our Kashmiri Pandit roots are not a selling point — they are our cultural foundation. They give us the depth, the vocabulary, and the sensitivity to share Kashmir with integrity.',
  },
  {
    title: 'People Before Logistics',
    text: 'The finest journey is not the one with the best hotel — it is the one with the best guide, the most meaningful encounter, the conversation that changes how you see the world.',
  },
  {
    title: 'Less Is More',
    text: 'We believe in fewer destinations visited deeply rather than many destinations rushed through. A single temple understood is worth more than ten temples photographed.',
  },
  {
    title: 'Every Guest Is Unique',
    text: 'We do not sell packages. We curate journeys. The difference is intention — understanding what each guest truly seeks and shaping an experience that honours that.',
  },
  {
    title: 'Responsible Engagement',
    text: 'With the land, the people, the culture. We tread carefully, contribute meaningfully, and ensure that tourism strengthens rather than depletes the communities we work with.',
  },
]

export default function Philosophy() {
  return (
    <>
      <PageHero
        image="/images/discover.jpg"
        label="About"
        title="Our Philosophy"
        subtitle="Depth over spectacle. Understanding over sightseeing. Connection over consumption."
        breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'Our Philosophy' }]}
      />
      <section className="section-lg">
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            {principles.map((item, i) => (
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
