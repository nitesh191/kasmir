import Link from 'next/link'
import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Kashir for the Next Generation',
  description:
    'Help younger generations understand their Kashmiri heritage — traditions, festivals, temples, language, cultural vocabulary, family history and connection to Kashir.',
}

export default function NextGeneration() {
  return (
    <>
      <PageHero
        image="/images/culture.jpg"
        label="Next Generation"
        title="Kashir for the Next Generation"
        subtitle="Because heritage is not inherited automatically. It must be shared, experienced and understood."
        breadcrumbs={[
          { label: 'Panun Kashir', href: '/panun-kashir' },
          { label: 'Next Generation' },
        ]}
      />

      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                For parents and grandparents who carry Kashmir in their hearts, there is a quiet
                concern: will the next generation understand? Will they know what Herath means —
                not just the name, but the devotion? Will they feel the pull of a sacred spring?
                Will they taste haakh-batta and recognise it as identity, not just food?
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Kashir Wath designs journeys specifically for families who want to bridge this gap —
                not through lectures or textbooks, but through lived experience. When a child walks
                through the temple their great-grandmother described, when they see the mountains
                their grandfather painted, when they taste the water of a spring their family has
                worshipped at for centuries — something shifts. Heritage becomes real.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <RevealOnScroll>
            <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>
              What the Next Generation Can Experience
            </h2>
            <div className="gold-divider" />
          </RevealOnScroll>

          <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-6)' }}>
            {[
              { title: 'Heritage Walks', desc: 'Walking through the neighbourhoods, temples and markets that shaped their family\'s story — guided by people who understand the significance.' },
              { title: 'Cultural Immersion', desc: 'Participating in rituals, learning traditional songs, understanding the cultural vocabulary that connects them to their roots.' },
              { title: 'Food & Kitchen Traditions', desc: 'Cooking with local families, learning recipes that have been passed down for generations, understanding food as cultural identity.' },
              { title: 'Craft Encounters', desc: 'Meeting artisans, understanding the pashmina tradition, watching walnut wood carving — connecting with the material culture of Kashir.' },
              { title: 'Storytelling & Memory', desc: 'Hearing stories from local guides and community members, recording family connections, building a living archive of heritage.' },
              { title: 'Nature & Sacred Geography', desc: 'Understanding why specific mountains, springs and rivers matter — not just as scenery but as the spiritual landscape of their heritage.' },
            ].map((item, i) => (
              <RevealOnScroll key={item.title} delay={i % 3}>
                <div className="card" style={{ padding: 'var(--space-8)', height: '100%' }}>
                  <span className="card-label">Experience</span>
                  <h3 className="card-title" style={{ fontSize: 'var(--text-xl)' }}>{item.title}</h3>
                  <p className="card-text">{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Share Kashmir With the Next Generation"
        subtitle="A family journey that bridges generations. Tell us about your family and we'll shape an experience that brings heritage to life."
      />
    </>
  )
}
