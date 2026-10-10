import Link from 'next/link'
import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Kashir Ghar Panun — Belonging · Memory · Heritage',
  description:
    'For some, Kashir is a destination. For others, it is a part of who they are. Explore the emotional landscape of belonging, memory and heritage.',
}

export default function KashirGharPanun() {
  return (
    <>
      <PageHero
        image="/images/ghar.jpg"
        label="Kashir Ghar Panun"
        title="Belonging · Memory · Heritage"
        subtitle="For some, Kashir is a destination. For others, it is a part of who they are."
        breadcrumbs={[
          { label: 'Discover Kashir', href: '/discover' },
          { label: 'Kashir Ghar Panun' },
        ]}
      />

      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Kashir Ghar Panun is perhaps the most emotionally powerful of the five layers.
                It speaks to a truth that sets Kashir apart from any other travel destination:
                for hundreds of thousands of people, this is not merely a place to visit — it
                is the landscape of their identity.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                The Kashmiri Pandit community, dispersed since the early 1990s, carries Kashmir
                within them in ways that transcend geography. In the recipes that grandmothers
                still cook. In the festivals still celebrated with precision. In the names of
                springs and temples that children learn from their parents, though they may
                never have visited them.
              </p>
              <p>
                This layer invites both those who carry this memory and those discovering it for
                the first time to engage with the deep emotional geography of Kashir.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <div className="content-split">
            <RevealOnScroll>
              <div className="content-image">
                <img src="/images/sutra.jpg" alt="Kashmiri Pandit heritage" loading="lazy" />
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={2}>
              <div>
                <h2 style={{ marginBottom: '1.5rem' }}>Ancestral Places & Temples</h2>
                <div className="gold-divider gold-divider-left" />
                <p style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                  Every Kashmiri Pandit family has its map — the neighbourhood in Srinagar or
                  the village in the hinterland where their ancestors lived. The temple where
                  prayers were offered. The spring whose water tasted like no other. The school,
                  the market, the walnut tree.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  Kashir Wath can help you trace these connections — carefully, sensitively, and
                  with the understanding that these are not tourist attractions but deeply personal
                  landscapes of belonging.
                </p>
                <Link href="/panun-kashir/return-to-roots" className="btn btn-outline">
                  Return to Roots
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="section-lg">
        <div className="container">
          <div className="content-split">
            <RevealOnScroll>
              <div>
                <h2 style={{ marginBottom: '1.5rem' }}>For the Next Generation</h2>
                <div className="gold-divider gold-divider-left" />
                <p style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                  Perhaps the most important journey Kashir Wath can facilitate is the one where
                  grandparents, parents and children travel together — where the elder generation
                  shares what they remember, and the younger generation sees, for the first time,
                  the land that shaped their family&apos;s identity.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  These are not ordinary family holidays. They are acts of cultural transmission —
                  ensuring that the next generation understands their heritage not from photographs
                  and stories alone, but from standing on the soil where it all began.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link href="/panun-kashir/next-generation" className="btn btn-outline">
                    Kashir for the Next Generation
                  </Link>
                  <Link href="/journeys/family" className="btn btn-primary">
                    Family Journeys
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={2}>
              <div className="content-image">
                <img src="/images/ghar.jpg" alt="Kashmiri family heritage" loading="lazy" />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ marginBottom: '1.5rem' }}>Food, Stories & Memory</h2>
              <div className="gold-divider" />
              <p style={{ margin: '1.5rem auto', maxWidth: '600px' }}>
                The taste of dum aloo cooked the way a grandmother made it. The particular aroma of
                noon chai. The story of how a family left, what they carried, what they left behind.
                These are the textures of Kashir Ghar Panun — the emotional substance of belonging.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-accent)',
                  fontStyle: 'italic',
                  fontSize: 'var(--text-xl)',
                  color: 'var(--color-gold)',
                  margin: '2rem auto',
                  maxWidth: '500px',
                }}
              >
                &ldquo;Home is not where you live. Home is what lives in you.&rdquo;
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CTASection />
    </>
  )
}
