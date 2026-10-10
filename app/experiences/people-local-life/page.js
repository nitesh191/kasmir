import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'People & Local Life',
  description: 'Conversations, encounters, local markets — experience the human texture of Kashmir through its people.',
}

export default function PeopleLocalLife() {
  return (
    <>
      <PageHero
        image="/images/culture.jpg"
        label="Experiences"
        title="People & Local Life"
        subtitle="Conversations, encounters, local markets — the human texture of Kashmir."
        breadcrumbs={[{ label: 'Experiences', href: '/experiences' }, { label: 'People & Local Life' }]}
      />
      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                The most memorable moment of any journey is often a conversation. A shopkeeper
                who tells you the history of his neighbourhood. An artisan who shows you the
                apprenticeship marks on his hands. A boatman who sings a Kashmiri song as the
                sun sets over Dal. A family who insists you stay for one more cup of tea.
              </p>
              <p>
                Kashir Wath deliberately creates space for these encounters — not scripted
                interactions, but genuine human moments that reveal the warmth, wit and wisdom
                of Kashmir&apos;s people.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-6)' }}>
            {[
              { title: 'Market Walks', desc: 'The bazaars of Srinagar, the floating markets of Dal, the village haats — markets are where Kashmir\'s daily life reveals itself.' },
              { title: 'Artisan Encounters', desc: 'Meet the weavers, the carvers, the embroiderers — people whose hands carry centuries of tradition and skill.' },
              { title: 'Home Visits', desc: 'Share a meal, share a conversation, share time — in homes where hospitality is a cultural value, not a business.' },
              { title: 'Local Guides & Storytellers', desc: 'The people who walk with you are not tour guides — they are cultural companions, scholars, and storytellers.' },
              { title: 'Village Life', desc: 'Beyond the cities, Kashmir\'s villages offer a quieter, deeper encounter with the rhythms of daily life.' },
              { title: 'Community Traditions', desc: 'Witness how communities gather, celebrate, worship and live — the social fabric of Kashmir.' },
            ].map((item, i) => (
              <RevealOnScroll key={item.title} delay={i % 3}>
                <div className="card" style={{ padding: 'var(--space-8)', height: '100%' }}>
                  <span className="card-label">People</span>
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
