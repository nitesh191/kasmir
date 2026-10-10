import Link from 'next/link'
import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'More Than a Destination',
  description:
    'Kashmir is landscape, civilisation, memory, spirituality, culture and living traditions. Discover why Kashir is more than a destination.',
}

export default function MoreThanADestination() {
  return (
    <>
      <PageHero
        image="/images/discover.jpg"
        label="Discover Kashir"
        title="More Than a Destination"
        subtitle="Kashmir is landscape, civilisation, memory, spirituality, culture and living traditions — all at once."
        breadcrumbs={[
          { label: 'Discover Kashir', href: '/discover' },
          { label: 'More Than a Destination' },
        ]}
      />

      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2 style={{ marginBottom: '1.5rem' }}>
                Kashir as Landscape
              </h2>
              <div className="gold-divider gold-divider-left" />
              <p style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                The valley of Kashmir sits cradled between the Pir Panjal and the Greater Himalaya,
                watered by the Vitasta (Jhelum) and fed by hundreds of springs that ancient texts
                describe with reverence. This is not landscape as scenery. This is landscape as
                sacred geography — where every river has a lineage, every spring a devotion, every
                mountain peak a mythic resonance.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                To travel through Kashmir with this understanding is to move through a living map
                of meaning. The meadows of Sonamarg are not merely golden — they sit along ancient
                trade routes that once connected Kashmir to Central Asia. The waters of Dal are not
                simply picturesque — they mirror a culture of habitation, commerce and devotion that
                stretches back millennia.
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
                <img src="/images/vatista.jpg" alt="Sacred geography of Kashmir" loading="lazy" />
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={2}>
              <div>
                <h2 style={{ marginBottom: '1.5rem' }}>Kashir as Civilisation</h2>
                <div className="gold-divider gold-divider-left" />
                <p style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                  Before it was a tourist destination, Kashmir was one of the great seats of
                  Indian civilisation. Its rulers — from the Gonanda dynasty to the Karkotas,
                  from Avantivarman to Lalitaditya — built empires, patronised art, and
                  created institutions of learning that attracted scholars from across Asia.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  Kashmir gave the world some of its most refined philosophical traditions.
                  Kashmir Shaivism, rooted in the non-dual Trika tradition, represents one of
                  the most sophisticated spiritual systems ever developed. Kalhana&apos;s
                  Rajatarangini remains the first genuine historical chronicle in Indian
                  literature.
                </p>
                <Link href="/discover/a-civilisation" className="btn btn-outline">
                  Explore Kashir — A Civilisation
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
                <h2 style={{ marginBottom: '1.5rem' }}>Kashir as Memory</h2>
                <div className="gold-divider gold-divider-left" />
                <p style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                  For hundreds of thousands of Kashmiri Pandits, Kashmir is not simply a place
                  on a map. It is the landscape of family memory — the neighbourhood where a
                  grandmother grew up, the temple where a great-grandfather prayed, the spring
                  whose water tasted like no other.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  Kashir Wath understands this dimension of Kashmir intimately. When we curate
                  a journey that touches on memory and heritage, we do so with the sensitivity
                  and depth that only genuine understanding can provide.
                </p>
                <Link href="/panun-kashir" className="btn btn-outline">
                  Explore Panun Kashir
                </Link>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={2}>
              <div className="content-image">
                <img src="/images/ghar.jpg" alt="Memory and heritage of Kashmir" loading="lazy" />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2 style={{ marginBottom: '1.5rem' }}>Kashir as Spirituality</h2>
              <div className="gold-divider gold-divider-left" />
              <p style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                Kashmir&apos;s spiritual heritage is not a chapter in a textbook. It is a living
                tradition. The great Shaiva masters — Abhinavagupta, Vasugupta, Somananda —
                developed a philosophy of consciousness that continues to inspire seekers
                worldwide. The sacred springs (naag) that dot the valley are not merely geological
                features — they are places of worship, pilgrimage and deep devotion.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                From the Devi traditions at Kheer Bhawani to the ancient Shiva temples at
                Martand and Avantiswamin, Kashmir&apos;s spiritual landscape offers something rare:
                an encounter with a living, breathing tradition that predates written history.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-lg">
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2 style={{ marginBottom: '1.5rem' }}>Kashir as Culture & Living Traditions</h2>
              <div className="gold-divider gold-divider-left" />
              <p style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                The culture of Kashmir is not a museum exhibit. It is alive in the hands of
                pashmina weavers, in the rhythms of Rouf dance, in the 36 courses of a Wazwan
                feast, in the festivals that mark the Kashmiri calendar with precision and
                devotion.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                When Kashir Wath curates an experience, we connect you to these living traditions
                — not as spectators, but as participants in something real. A meal cooked by a
                local family. A conversation with an artisan whose craft is centuries old. A
                festival witnessed with understanding, not just curiosity.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                <Link href="/experiences" className="btn btn-primary">
                  Explore Experiences
                </Link>
                <Link href="/discover/kashir-sutra" className="btn btn-outline">
                  Kashir Sutra
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CTASection />
    </>
  )
}
