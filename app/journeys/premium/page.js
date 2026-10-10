import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Premium Kashmir Journeys',
  description: 'The finest stays, the most thoughtful experiences, impeccable service — premium curated journeys through Kashmir.',
}

export default function PremiumJourneys() {
  return (
    <>
      <PageHero
        image="/images/vaas.jpg"
        label="Journeys"
        title="Premium Kashmir"
        subtitle="The finest stays, the most thoughtful experiences, impeccable service."
        breadcrumbs={[{ label: 'Journeys', href: '/journeys' }, { label: 'Premium' }]}
      />
      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Premium at Kashir Wath does not mean the most expensive hotel or the fanciest
                vehicle. It means the most considered journey — where every detail reflects
                thought, care and genuine understanding of what makes an experience memorable.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Our Premium Kashmir Journeys combine the finest available accommodation with
                expert cultural guidance, exclusive access to experiences and people, impeccable
                logistics, and a level of personal attention that makes you feel genuinely looked
                after — not just well-serviced.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-6)' }}>
            {[
              { title: 'Finest Stays', desc: 'The best heritage houseboats, the most characterful hotels, premium properties — chosen for quality, warmth and authenticity.' },
              { title: 'Expert Cultural Guidance', desc: 'Guides who are scholars, storytellers and local specialists — people who transform sightseeing into understanding.' },
              { title: 'Exclusive Access', desc: 'Private visits to artisan workshops, home meals with local families, access to sites and experiences not available to standard visitors.' },
              { title: 'Impeccable Logistics', desc: 'Premium vehicles, seamless transfers, attention to comfort — everything arranged so you can focus on the experience.' },
              { title: 'Personal Attention', desc: 'A dedicated journey manager from enquiry to farewell — someone who knows your preferences and anticipates your needs.' },
              { title: 'Culinary Excellence', desc: 'The finest Kashmiri cuisine — from Wazwan masters to home-cooked family meals — prepared with care and cultural context.' },
            ].map((item, i) => (
              <RevealOnScroll key={item.title} delay={i % 3}>
                <div className="card" style={{ padding: 'var(--space-8)', height: '100%' }}>
                  <span className="card-label">Premium</span>
                  <h3 className="card-title" style={{ fontSize: 'var(--text-xl)' }}>{item.title}</h3>
                  <p className="card-text">{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Enquire About Premium Journeys" subtitle="Share your vision. We'll design something exceptional." />
    </>
  )
}
