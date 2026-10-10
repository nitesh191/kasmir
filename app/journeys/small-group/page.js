import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Small Group Journeys',
  description: 'Intimate groups of like-minded travellers exploring Kashmir together — shared discovery, curated moments, meaningful connections.',
}

export default function SmallGroupJourneys() {
  return (
    <>
      <PageHero
        image="/images/discover.jpg"
        label="Journeys"
        title="Small Group Journeys"
        subtitle="Intimate groups, shared discovery, curated moments together."
        breadcrumbs={[{ label: 'Journeys', href: '/journeys' }, { label: 'Small Group' }]}
      />
      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Some journeys are enriched by shared discovery. Kashir Wath&apos;s Small Group
                Journeys bring together like-minded travellers — typically six to twelve people —
                for carefully curated itineraries that balance togetherness with personal space.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                These are not bus tours. They are thoughtfully assembled groups who share an
                interest in Kashmir&apos;s heritage, culture or spirituality — travelling with
                expert guides, staying in characterful properties, and sharing meals and
                conversations that turn fellow travellers into friends.
              </p>
              <p>
                Small Group Journeys are scheduled on select dates throughout the year, often
                aligned with festivals, seasons or cultural events that benefit from collective
                experience.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)' }}>
            {[
              { title: 'Intimate Numbers', desc: 'Groups of 6-12 travellers — small enough for personal attention, large enough for shared energy.' },
              { title: 'Expert Leadership', desc: 'Led by Kashir Wath\'s own guides — people who know Kashmir deeply and care about the quality of your experience.' },
              { title: 'Curated Dates', desc: 'Aligned with seasons, festivals and events — so your journey coincides with the best Kashmir has to offer.' },
              { title: 'Shared Experiences', desc: 'Meals together, discovery together, conversations that deepen understanding — the best of collective travel.' },
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

      <CTASection title="Join a Small Group Journey" subtitle="Enquire about upcoming dates and itineraries." />
    </>
  )
}
