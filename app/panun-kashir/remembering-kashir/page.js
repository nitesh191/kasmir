import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Remembering Kashir — Memory · Stories · Heritage',
  description:
    'Memory, stories, food, family, places and cultural recollection — the emotional landscape of Kashmiri heritage and belonging.',
}

export default function RememberingKashir() {
  return (
    <>
      <PageHero
        image="/images/ghar.jpg"
        label="Remembering"
        title="Remembering Kashir"
        subtitle="Memory, stories, food, family, places — the emotional landscape of belonging."
        breadcrumbs={[
          { label: 'Panun Kashir', href: '/panun-kashir' },
          { label: 'Remembering Kashir' },
        ]}
      />

      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Kashir lives in memory. In the recipe for dum aloo that a grandmother carried
                when she left. In the photograph of a house that no longer stands. In the name
                of a spring that a father mentioned every Herath. In the song that a mother
                hummed without knowing she was passing on something ancient.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Remembering Kashir is not about nostalgia alone. It is about understanding that
                memory is a form of knowledge — that the stories families carry are as much a
                part of Kashmir&apos;s civilisation as its temples and manuscripts.
              </p>
              <p>
                This page honours those memories — not with grief, but with the quiet dignity
                they deserve. And it invites you to transform memory into experience, by returning
                to the land that holds it all.
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
                <img src="/images/culture.jpg" alt="Kashmiri food and family" loading="lazy" />
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={2}>
              <div>
                <h2 style={{ marginBottom: '1.5rem' }}>The Food of Memory</h2>
                <div className="gold-divider gold-divider-left" />
                <p style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                  Kashmiri food is never just sustenance. It is identity on a plate. The particular
                  spice mix of a family&apos;s dum aloo. The way noon chai is prepared — not just the
                  recipe, but the ritual. The taste of nadir monji, haakh, modur pulao, taher —
                  each dish carries a story, a season, a meaning.
                </p>
                <p>
                  When we include food experiences in a journey, we do so with this understanding.
                  A meal cooked in a Kashmiri home is not a culinary tourism exercise — it is an
                  act of cultural sharing.
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
                <h2 style={{ marginBottom: '1.5rem' }}>Places of Memory</h2>
                <div className="gold-divider gold-divider-left" />
                <p style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                  For every Kashmiri Pandit family, there is a geography of memory — specific
                  places that hold specific meanings. A house, a lane, a shop, a school, a bridge,
                  a tree. These are not monuments in the conventional sense. They are personal
                  landmarks that anchor identity to place.
                </p>
                <p>
                  Kashir Wath can help you visit these places — with guides who understand the
                  sensitivity of the experience, with time built into the journey for reflection,
                  and with the knowledge that some places have changed and some connections
                  may be unexpected.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={2}>
              <div className="content-image">
                <img src="/images/discover.jpg" alt="Places of memory in Kashmir" loading="lazy" />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
              <p
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(var(--text-2xl), 3vw, var(--text-4xl))',
                  color: 'var(--color-ivory)',
                  lineHeight: 1.4,
                  marginBottom: '2rem',
                }}
              >
                &ldquo;The places may have changed. The memory has not. And sometimes, standing
                where your family once stood is all you need to understand who you are.&rdquo;
              </p>
              <div className="gold-divider" />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CTASection />
    </>
  )
}
