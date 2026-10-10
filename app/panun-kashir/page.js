import Link from 'next/link'
import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import SectionHeader from '@/components/SectionHeader'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Panun Kashir — Heritage · Memory · Reconnection',
  description:
    'A dedicated doorway for those who seek to reconnect with Kashir\'s Hindu and Kashmiri Pandit heritage, memory and cultural roots.',
}

const sections = [
  {
    title: 'Sacred Kashir',
    desc: 'Temples, tirthas, Devi traditions, Shaiva heritage, sacred geography — the spiritual landscape of Kashir that has sustained devotion for millennia.',
    href: '/panun-kashir/sacred-kashir',
    image: '/images/vatista.jpg',
  },
  {
    title: 'Return to Roots',
    desc: 'Ancestral connections, family places, old neighbourhoods, temples, memories — journeys that reconnect you with the landscape of your heritage.',
    href: '/panun-kashir/return-to-roots',
    image: '/images/ghar.jpg',
  },
  {
    title: 'Kashir for the Next Generation',
    desc: 'For parents and grandparents who want younger generations to understand their heritage — traditions, festivals, temples, language and family history.',
    href: '/panun-kashir/next-generation',
    image: '/images/culture.jpg',
  },
  {
    title: 'Remembering Kashir',
    desc: 'Memory, stories, food, family, places and cultural recollection — emotional but never political, personal but universally moving.',
    href: '/panun-kashir/remembering-kashir',
    image: '/images/sutra.jpg',
  },
]

export default function PanunKashir() {
  return (
    <>
      <PageHero
        image="/images/sutra.jpg"
        label="Panun Kashir"
        title="Our Kashmir"
        subtitle="A dedicated doorway for those who seek to reconnect with Kashir's heritage, memory and cultural roots."
        breadcrumbs={[{ label: 'Panun Kashir' }]}
      />

      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Panun Kashir — &ldquo;Our Kashmir&rdquo; — is a space within Kashir Wath
                dedicated to those for whom Kashmir is not merely a travel destination but a
                deeply personal landscape of heritage, memory and belonging.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                This is where Kashmiri Pandit heritage finds its voice within the Kashir Wath
                experience — not as a closed community offering, but as a genuine cultural
                foundation that enriches every journey we curate.
              </p>
              <p>
                Whether you are a Kashmiri Pandit seeking to reconnect with ancestral places,
                a parent wanting your children to understand their roots, or a traveller
                curious about the deeper spiritual heritage of Kashmir — Panun Kashir welcomes
                you.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <RevealOnScroll>
            <SectionHeader
              label="Explore"
              title="Doorways Into Panun Kashir"
            />
          </RevealOnScroll>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-6)', marginTop: '2rem' }}>
            {sections.map((item, i) => (
              <RevealOnScroll key={item.title} delay={i % 4}>
                <Link href={item.href} style={{ textDecoration: 'none' }}>
                  <div className="experience-card" style={{ aspectRatio: '3/4' }}>
                    <div className="experience-card-bg">
                      <img src={item.image} alt={item.title} loading="lazy" />
                    </div>
                    <div className="experience-card-overlay" />
                    <div className="experience-card-content">
                      <h3 className="experience-card-title">{item.title}</h3>
                      <p className="experience-card-text">{item.desc}</p>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-lg">
        <div className="container">
          <div className="content-split">
            <RevealOnScroll>
              <div>
                <h2 style={{ marginBottom: '1.5rem' }}>Kashir Sutra for Panun Kashir</h2>
                <div className="gold-divider gold-divider-left" />
                <p style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                  The rituals, festivals and traditions of Kashmir are not folklore — they are
                  living practice. From the precise observances of Herath to the annual pilgrimage
                  to Kheer Bhawani, from Navreh celebrations to the family customs that mark birth,
                  marriage and memory — these traditions form the cultural grammar of Kashmiri
                  Pandit identity.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  This deeper cultural entry point connects you to the spiritual and ritual
                  heritage that defines Panun Kashir — and makes every journey through Kashmir
                  richer and more meaningful.
                </p>
                <Link href="/discover/kashir-sutra" className="btn btn-outline">
                  Explore Kashir Sutra
                </Link>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={2}>
              <div className="content-image">
                <img src="/images/sutra.jpg" alt="Kashmiri Pandit cultural traditions" loading="lazy" />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Reconnect With Kashir?"
        subtitle="Whether it's your first visit or a return home, we understand what this journey means."
      />
    </>
  )
}
