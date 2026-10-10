import Link from 'next/link'
import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import SectionHeader from '@/components/SectionHeader'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'About Kashir Wath',
  description: 'Rooted deeply in Kashmiri Pandit heritage, yet open to all who seek to discover Kashir beyond conventional tourism.',
}

export default function About() {
  return (
    <>
      <PageHero
        image="/images/founder.jpg"
        label="About"
        title="About Kashir Wath"
        subtitle="Rooted deeply in Kashmiri Pandit heritage, yet open to all who seek to discover Kashir beyond conventional tourism."
        breadcrumbs={[{ label: 'About' }]}
      />

      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Kashir Wath was born from a simple conviction: Kashmir deserves to be understood,
                not just visited. Its five-thousand-year civilisation, its sacred geography, its
                living traditions, its culinary heritage, its artistic excellence — all of this is
                missed by conventional tourism. And all of it is what makes Kashmir extraordinary.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                We are rooted in Kashmiri Pandit heritage — not as a marketing position, but as a
                genuine cultural foundation that shapes everything we do. This heritage gives us
                the depth to understand what Kashmir means to those for whom it is deeply personal.
                And it gives us the knowledge to share that depth with everyone who seeks a
                deeper encounter with this remarkable land.
              </p>
              <p>
                Kashir Wath is not a conventional tour operator. It is a bridge — between heritage
                and discovery, between memory and experience, between the Kashmir that tourists see
                and the Kashir that truly exists.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <RevealOnScroll>
            <SectionHeader label="Explore" title="Know Us Better" />
          </RevealOnScroll>
          <div className="feature-grid" style={{ marginTop: '2rem' }}>
            {[
              { title: 'Why Kashir Wath', desc: 'What makes us different — and why it matters for your journey.', href: '/about/why-kashir-wath' },
              { title: 'Our Philosophy', desc: 'The principles that guide every journey we curate.', href: '/about/philosophy' },
              { title: 'Story Behind the Name', desc: 'Kashir + Wath — what the name means and the thought behind it.', href: '/about/story' },
              { title: 'The Founder', desc: 'A personal journey that became a purpose.', href: '/about/founder' },
              { title: 'Our Promise', desc: 'What guests can genuinely expect — and what we do not promise.', href: '/about/promise' },
            ].map((item, i) => (
              <RevealOnScroll key={item.title} delay={i % 3}>
                <Link href={item.href} style={{ textDecoration: 'none' }}>
                  <div className="card" style={{ padding: 'var(--space-8)', height: '100%' }}>
                    <h3 className="card-title" style={{ fontSize: 'var(--text-xl)' }}>{item.title}</h3>
                    <p className="card-text">{item.desc}</p>
                    <span style={{ display: 'inline-block', marginTop: '1.5rem', color: 'var(--color-gold)', fontSize: 'var(--text-sm)', fontWeight: 500 }}>Read More →</span>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
