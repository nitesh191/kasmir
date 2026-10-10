import Link from 'next/link'
import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Food & Culinary Kashmir',
  description: 'Wazwan feasts, home-cooked meals, saffron harvests, noon chai traditions — the taste of memory, identity and tradition in Kashmir.',
}

export default function FoodCulinary() {
  return (
    <>
      <PageHero
        image="/images/culture.jpg"
        label="Experiences"
        title="Food & Culinary Kashmir"
        subtitle="The taste of memory and tradition — where every meal carries centuries of identity."
        breadcrumbs={[
          { label: 'Experiences', href: '/experiences' },
          { label: 'Food & Culinary' },
        ]}
      />

      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Food in Kashmir is never just food. The 36-course Wazwan feast is a ritual of
                hospitality, hierarchy and artistry that takes an entire day to prepare. The
                simple haakh-batta of a Kashmiri Pandit household is identity distilled to a plate.
                The noon chai served in a samovar carries the warmth of generations.
              </p>
              <p>
                Our culinary experiences go beyond tasting — they connect you to the stories,
                the families and the cultural grammar that make Kashmiri food extraordinary.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-6)' }}>
            {[
              { title: 'Wazwan Experience', desc: 'The legendary 36-course Kashmiri feast — from the waza\'s kitchen to the dastarkhwan. Understand the ritual, the hierarchy and the artistry behind every course.' },
              { title: 'Home-Cooked Meals', desc: 'Eat with local families — Kashmiri Pandit cuisine, Muslim culinary traditions, vegetarian and non-vegetarian — in homes where recipes have not changed for generations.' },
              { title: 'Saffron of Pampore', desc: 'Visit the saffron fields during harvest season, meet the families who cultivate the world\'s finest spice, and understand why Kashmiri saffron is irreplaceable.' },
              { title: 'Street Food & Markets', desc: 'From the bakeries of Srinagar to the chaat stalls and the lotus root vendors — the street food of Kashmir tells its own delicious story.' },
              { title: 'Noon Chai & Kahwa', desc: 'The salt tea tradition, the saffron kahwa, the samovar culture — understand the beverages that punctuate every Kashmiri day.' },
              { title: 'Seasonal & Festival Foods', desc: 'Taher for Herath, modur pulao for celebrations, specific preparations for specific occasions — food as cultural calendar.' },
            ].map((item, i) => (
              <RevealOnScroll key={item.title} delay={i % 3}>
                <div className="card" style={{ padding: 'var(--space-8)', height: '100%' }}>
                  <span className="card-label">Culinary</span>
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
