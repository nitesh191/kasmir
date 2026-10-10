import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'The Story Behind the Name',
  description: 'Kashir + Wath — the meaning behind the name Kashir Wath and the thought that shaped it.',
}

export default function Story() {
  return (
    <>
      <PageHero
        image="/images/vatista.jpg"
        label="About"
        title="The Story Behind the Name"
        subtitle="Kashir + Wath — two words that carry the entire philosophy."
        breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'Story Behind the Name' }]}
      />
      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2 style={{ marginBottom: '1.5rem' }}>Kashir</h2>
              <div className="gold-divider gold-divider-left" />
              <p style={{ marginTop: '1.5rem', marginBottom: '2.5rem' }}>
                <em>Kashir</em> is the ancient Sanskrit-origin name for the land we know as
                Kashmir. It carries a weight that the anglicised version does not — a connection
                to the civilisational identity of the valley, to the texts that describe it, to
                the traditions that name it. When we say Kashir, we are invoking five thousand
                years of meaning.
              </p>

              <h2 style={{ marginBottom: '1.5rem' }}>Wath</h2>
              <div className="gold-divider gold-divider-left" />
              <p style={{ marginTop: '1.5rem', marginBottom: '2.5rem' }}>
                <em>Wath</em> in Kashmiri means a path, a way, a route. But it carries more
                than a directional meaning. It suggests a way of journeying — with purpose, with
                understanding, with the awareness that the path itself is part of the destination.
              </p>

              <h2 style={{ marginBottom: '1.5rem' }}>Kashir Wath</h2>
              <div className="gold-divider gold-divider-left" />
              <p style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                Together, the name means: <em>The Way of Kashir</em>. A way of seeing Kashmir.
                A way of journeying through it. A way of understanding what it truly is.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                The name was chosen deliberately — not as a clever brand name, but as a genuine
                expression of what we believe travel in Kashmir should be. Not a package. Not a
                tour. A way. A path with depth, intention and meaning.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-accent)',
                  fontStyle: 'italic',
                  fontSize: 'var(--text-xl)',
                  color: 'var(--color-gold)',
                  marginTop: '2rem',
                }}
              >
                Soulful Journeys Through Kashir.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      <CTASection />
    </>
  )
}
