import Link from 'next/link'
import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Kashir Vaas — Hospitality · Heritage · Homes',
  description:
    'Discover Kashmir through its tradition of hospitality — heritage houseboats, traditional homes, slow stays, and carefully selected properties.',
}

export default function KashirVaas() {
  return (
    <>
      <PageHero
        image="/images/vaas.jpg"
        label="Kashir Vaas"
        title="Hospitality · Heritage · Homes"
        subtitle="Where you stay shapes how you experience. Heritage houseboats, homes, slow stays, and the art of Kashmiri hospitality."
        breadcrumbs={[
          { label: 'Discover Kashir', href: '/discover' },
          { label: 'Kashir Vaas' },
        ]}
      />

      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                In Kashmir, hospitality is not a service industry. It is a cultural value that runs
                through every home, every houseboat, every shared meal. The concept of mehmaan-nawazi
                — the art of receiving a guest — is woven into the fabric of Kashmiri identity.
              </p>
              <p>
                Kashir Vaas explores this dimension of Kashmir — not simply where you sleep, but how
                the place you stay connects you to the living culture of the valley. From century-old
                houseboats with carved walnut interiors to heritage homes where families still welcome
                guests as they have for generations.
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
                <img src="/images/vaas.jpg" alt="Heritage houseboat on Dal Lake" loading="lazy" />
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={2}>
              <div>
                <h2 style={{ marginBottom: '1.5rem' }}>Houseboats of Dal</h2>
                <div className="gold-divider gold-divider-left" />
                <p style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                  The houseboat tradition of Kashmir dates back over a century. Each vessel is a
                  floating work of art — carved walnut ceilings, hand-embroidered furnishings, and
                  the gentle rhythm of life on water.
                </p>
                <p>
                  We select houseboats not from catalogues but from personal knowledge. Every
                  property we recommend has been visited, evaluated and chosen for its character,
                  cleanliness, warmth and authenticity.
                </p>
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
                <h2 style={{ marginBottom: '1.5rem' }}>Heritage Properties & Homes</h2>
                <div className="gold-divider gold-divider-left" />
                <p style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                  Beyond houseboats, Kashmir offers heritage properties that carry history in their
                  walls — converted merchant houses, restored wooden architecture, and boutique
                  properties that understand what Kashmiri hospitality truly means.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  We also connect guests with local homes — not as homestays in the backpacker sense,
                  but as genuine cultural encounters where a family opens its doors and its kitchen
                  to share the warmth of Kashmiri domestic life.
                </p>
                <Link href="/stay-service/philosophy" className="btn btn-outline">
                  Our Stay Philosophy
                </Link>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={2}>
              <div className="content-image">
                <img src="/images/culture.jpg" alt="Heritage property in Kashmir" loading="lazy" />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ marginBottom: '1.5rem' }}>Slow Stays</h2>
              <div className="gold-divider" />
              <p style={{ margin: '1.5rem auto', maxWidth: '600px' }}>
                The most memorable stays in Kashmir are not the most luxurious — they are the most
                genuine. A morning chai on a houseboat deck. An afternoon conversation with a host
                who knows every story of the neighbourhood. An evening meal cooked with recipes that
                have not changed in generations.
              </p>
              <p style={{ margin: '0 auto 2rem', maxWidth: '600px' }}>
                Kashir Wath curates stays that prioritise depth over gloss, character over star
                ratings, and genuine human warmth over corporate hospitality.
              </p>
              <Link href="/experiences/slow-kashmir" className="btn btn-outline">
                Discover Slow Kashmir
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CTASection />
    </>
  )
}
