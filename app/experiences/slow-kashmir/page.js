import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Slow Kashmir',
  description: 'Less rushing, more noticing. The philosophy of slow travel in Kashmir — baithak, conversations, local encounters, and meaningful time.',
}

export default function SlowKashmir() {
  return (
    <>
      <PageHero
        image="/images/vaas.jpg"
        label="Experiences"
        title="Slow Kashmir"
        subtitle="Less rushing, more noticing. The art of being present in Kashir."
        breadcrumbs={[
          { label: 'Experiences', href: '/experiences' },
          { label: 'Slow Kashmir' },
        ]}
      />

      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                The conventional tourism model says: see as much as possible, as quickly as
                possible. Kashir Wath believes the opposite. The most meaningful experiences in
                Kashmir happen when you slow down — when you sit with a cup of noon chai and
                watch the light change over Dal Lake, when you spend an afternoon in an
                artisan&apos;s workshop, when you walk a neighbourhood instead of driving through it.
              </p>
              <p>
                Slow Kashmir is not an itinerary. It is a philosophy. It shapes how we design
                every journey — building in time for the unplanned, the unscripted, the
                genuinely human moments that turn a trip into a memory.
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
                <img src="/images/vaas.jpg" alt="Slow life on Dal Lake" loading="lazy" />
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={2}>
              <div>
                <h2 style={{ marginBottom: '1.5rem' }}>What Slow Kashmir Looks Like</h2>
                <div className="gold-divider gold-divider-left" />
                <ul style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    'Morning chai on a houseboat deck, watching kingfishers',
                    'An afternoon baithak (sitting) with a local storyteller',
                    'Walking the back lanes of old Srinagar without a schedule',
                    'A long, unhurried meal cooked by a family who takes pride in every dish',
                    'Evening conversations with your guide about Kashir\'s history',
                    'Time to simply sit by a sacred spring and be present',
                    'A full day in one place — rather than racing between three',
                    'The luxury of saying "let\'s stay a little longer"',
                  ].map((item) => (
                    <li key={item} style={{ fontSize: 'var(--text-sm)', color: 'var(--color-warm-gray)', paddingLeft: '1.5rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--color-gold)', fontSize: 'var(--text-lg)' }}>·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="section-lg">
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
                &ldquo;The best things in Kashmir don&apos;t happen on schedule. They happen
                when you stop and let the place come to you.&rdquo;
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
