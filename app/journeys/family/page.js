import Link from 'next/link'
import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Family & Multi-Generational Journeys',
  description: 'Share Kashmir across generations — heritage, stories, and new memories. Designed for families travelling together to discover or reconnect with Kashir.',
}

export default function FamilyJourneys() {
  return (
    <>
      <PageHero
        image="/images/ghar.jpg"
        label="Journeys"
        title="Family & Multi-Generational"
        subtitle="Share Kashir across generations — heritage, stories, and new memories woven together."
        breadcrumbs={[{ label: 'Journeys', href: '/journeys' }, { label: 'Family Journeys' }]}
      />
      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                A family journey to Kashmir is not simply a holiday. It is an opportunity for
                grandparents to share what they remember, for parents to create new connections,
                and for children to experience the land that shaped their family&apos;s identity.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Whether you are a Kashmiri Pandit family reconnecting with ancestral heritage or a
                family discovering Kashmir for the first time, we design journeys that work for
                every generation — with pacing, activities and experiences that respect different
                energy levels, interests and needs.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-6)' }}>
            {[
              { title: 'Multi-Generational Pacing', desc: 'Activities calibrated for different ages — gentle walks for elders, engaging experiences for children, meaningful moments for everyone.' },
              { title: 'Heritage Reconnection', desc: 'For KP families — visit ancestral neighbourhoods, temples and places of family memory with guides who understand the significance.' },
              { title: 'Cultural Transmission', desc: 'Experiences designed to pass heritage to the next generation — not through lectures, but through lived encounters with tradition.' },
              { title: 'Family-Friendly Stays', desc: 'Properties chosen for comfort, space and warmth — where families can be together without compromise.' },
              { title: 'Shared Meals', desc: 'Traditional Kashmiri meals in homes and heritage settings — food as family experience and cultural education.' },
              { title: 'Memory-Making', desc: 'Photography, storytelling, journal-keeping — tools to capture the journey for future generations.' },
            ].map((item, i) => (
              <RevealOnScroll key={item.title} delay={i % 3}>
                <div className="card" style={{ padding: 'var(--space-8)', height: '100%' }}>
                  <span className="card-label">Family</span>
                  <h3 className="card-title" style={{ fontSize: 'var(--text-xl)' }}>{item.title}</h3>
                  <p className="card-text">{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Plan a Family Journey" subtitle="Tell us about your family — ages, interests, heritage connections — and we'll design a journey that works for everyone." />
    </>
  )
}
