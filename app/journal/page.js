import Link from 'next/link'
import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import SectionHeader from '@/components/SectionHeader'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'The Kashir Journal — Stories, History & Perspectives',
  description: 'A knowledge platform — not a blog. Explore the civilisation, culture, spirituality and spirit of Kashir through thoughtful writing.',
}

const categories = [
  'History & Civilisation', 'Culture', 'Spirituality', 'People',
  'Food', 'Places', 'Seasons', 'Travel Guides', 'Kashir Perspectives',
]

const featuredArticles = [
  { title: 'Lalitaditya Muktapida: Kashmir\'s Greatest Emperor', category: 'History & Civilisation', desc: 'The Karkota dynasty ruler who built an empire from Kashmir to Central Asia and created the monumental Martand Sun Temple.' },
  { title: 'Kheer Bhawani: The Living Goddess of Kashir', category: 'Spirituality', desc: 'Understanding the sacred spring temple that connects every Kashmiri Pandit to home — its history, devotion and living significance.' },
  { title: 'The Art of Wazwan: More Than a Feast', category: 'Food & Culture', desc: 'How a 36-course meal carries centuries of Kashmiri hospitality, ritual, hierarchy and identity.' },
  { title: 'Satisar to Kashyap: The Origin Story of Kashmir', category: 'History & Civilisation', desc: 'From the mythic lake drained by Kashyap Rishi to the valley that bears his name — the foundational narrative of Kashir.' },
  { title: 'The Chinar Tree: More Than a Leaf', category: 'Culture', desc: 'Why the chinar is the symbol of Kashmir — its history, its biology, its cultural weight and its autumn gold.' },
  { title: 'Kashmir Through the Rajatarangini', category: 'History & Civilisation', desc: 'Kalhana\'s chronicle — India\'s first genuine historical text — and what it reveals about the valley\'s extraordinary past.' },
]

export default function Journal() {
  return (
    <>
      <PageHero
        image="/images/discover.jpg"
        label="Kashir Journal"
        title="Stories, History & Perspectives"
        subtitle="A knowledge platform — not a blog. The civilisation, culture and spirit of Kashir through thoughtful writing."
        breadcrumbs={[{ label: 'Kashir Journal' }]}
      />

      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <p style={{ margin: '0 auto' }}>
                The Kashir Journal is where the deeper stories live — the history, the people,
                the traditions, the places and the perspectives that shape our understanding
                of this extraordinary civilisation. This is not an SEO article dump. It is a
                genuine knowledge platform, written with care and depth.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <RevealOnScroll>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 'var(--space-8)' }}>
              {categories.map((cat) => (
                <span key={cat} style={{ padding: '0.5rem 1.25rem', border: 'var(--border-gold)', borderRadius: 'var(--radius-full)', fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-gold)', cursor: 'pointer', transition: 'all 0.2s' }}>
                  {cat}
                </span>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <RevealOnScroll>
            <SectionHeader label="Featured" title="Recent & Featured Articles" />
          </RevealOnScroll>
          <div className="feature-grid" style={{ marginTop: '2rem' }}>
            {featuredArticles.map((article, i) => (
              <RevealOnScroll key={article.title} delay={i % 3}>
                <div className="card" style={{ height: '100%' }}>
                  <div className="card-content">
                    <span className="card-label">{article.category}</span>
                    <h3 className="card-title" style={{ fontSize: 'var(--text-xl)' }}>{article.title}</h3>
                    <p className="card-text">{article.desc}</p>
                    <span style={{ display: 'inline-block', marginTop: '1.5rem', color: 'var(--color-gold)', fontSize: 'var(--text-sm)', fontWeight: 500 }}>
                      Read Article →
                    </span>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
              <span className="section-label">Coming Soon</span>
              <h2 style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                The History of Kashir
              </h2>
              <div className="gold-divider" />
              <p style={{ margin: '1.5rem auto', maxWidth: '600px' }}>
                A comprehensive series exploring Kashmir&apos;s civilisational history — from
                Kashyap Rishi and the Gonanda dynasty through the Karkota golden age, the
                Sultanate period, Mughal rule, and into the modern era. Deep, readable,
                respectful history — not textbook summaries.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CTASection />
    </>
  )
}
