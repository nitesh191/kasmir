import Link from 'next/link'
import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Culture & Living Traditions',
  description: 'Music, dance, craft, ritual — experience the living cultural grammar of Kashmir, practised and preserved across generations.',
}

export default function CultureTraditions() {
  return (
    <>
      <PageHero
        image="/images/sutra.jpg"
        label="Experiences"
        title="Culture & Living Traditions"
        subtitle="Music, dance, craft, ritual — the cultural grammar of Kashir, alive and practised."
        breadcrumbs={[
          { label: 'Experiences', href: '/experiences' },
          { label: 'Culture & Living Traditions' },
        ]}
      />

      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                The culture of Kashmir is not a preserved artefact — it is a living practice.
                In the rhythms of Rouf dance, in the call of the Sufi shrines, in the precise
                rituals of a Kashmiri Pandit wedding, in the language of patterns woven into a
                pashmina shawl — culture in Kashir breathes, adapts and endures.
              </p>
              <p>
                Our cultural experiences connect you to these traditions through direct encounter —
                not observation from a distance, but genuine participation and understanding.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-6)' }}>
            {[
              { title: 'Music & Performance', desc: 'From Sufi devotional music to classical Kashmiri compositions — encounter the musical traditions that express the soul of the valley.' },
              { title: 'Dance & Movement', desc: 'Rouf, Hafiz Nagma and other traditional dance forms — understanding the cultural context that gives each movement meaning.' },
              { title: 'Festival Participation', desc: 'Experience Kashmiri festivals not as spectators but as participants — understanding the rituals, the food, the prayers and the meaning.' },
              { title: 'Language & Cultural Vocabulary', desc: 'Learn key Kashmiri words, phrases and cultural concepts that deepen your understanding of everything you encounter.' },
              { title: 'Traditional Ceremonies', desc: 'Witness or participate in traditional ceremonies — from prayer rituals to seasonal celebrations — with cultural context and respect.' },
              { title: 'Community Encounters', desc: 'Meet local communities, hear their stories, understand their traditions — the human connections that make travel meaningful.' },
            ].map((item, i) => (
              <RevealOnScroll key={item.title} delay={i % 3}>
                <div className="card" style={{ padding: 'var(--space-8)', height: '100%' }}>
                  <span className="card-label">Culture</span>
                  <h3 className="card-title" style={{ fontSize: 'var(--text-xl)' }}>{item.title}</h3>
                  <p className="card-text">{item.desc}</p>
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
