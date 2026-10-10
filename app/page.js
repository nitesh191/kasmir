import Link from 'next/link'
import RevealOnScroll from '@/components/RevealOnScroll'
import SectionHeader from '@/components/SectionHeader'

const layers = [
  {
    number: '01',
    name: 'Kashir Vatista',
    sub: 'Land · Water · Sacred Geography',
    desc: 'Where rivers, springs and mountains carry the memory of an ancient civilisation.',
    image: '/images/vatista.jpg',
    href: '/discover/kashir-vatista',
  },
  {
    number: '02',
    name: 'Kashir Sutra',
    sub: 'Ritual · Festivals · Culture',
    desc: 'Living traditions that connect generations — from Herath to Kheer Bhawani.',
    image: '/images/sutra.jpg',
    href: '/discover/kashir-sutra',
  },
  {
    number: '03',
    name: 'Kashir Vaas',
    sub: 'Hospitality · Heritage · Homes',
    desc: 'Where you stay shapes how you experience. Heritage houseboats, homes, slow stays.',
    image: '/images/vaas.jpg',
    href: '/discover/kashir-vaas',
  },
  {
    number: '04',
    name: 'Kashir Ritu',
    sub: 'Spring · Summer · Autumn · Winter',
    desc: 'Every season reveals a different Kashir — in colour, ritual, food and light.',
    image: '/images/ritu.jpg',
    href: '/discover/kashir-ritu',
  },
  {
    number: '05',
    name: 'Kashir Ghar Panun',
    sub: 'Belonging · Memory · Heritage',
    desc: 'For some, Kashir is a destination. For others, it is a part of who they are.',
    image: '/images/ghar.jpg',
    href: '/discover/kashir-ghar-panun',
  },
]

const experiences = [
  {
    title: 'Heritage & History',
    text: 'Walk through centuries of civilisation',
    image: '/images/discover.jpg',
    href: '/experiences/heritage-history',
  },
  {
    title: 'Sacred & Spiritual',
    text: 'Temples, tirthas and living faith',
    image: '/images/vatista.jpg',
    href: '/experiences/sacred-spiritual',
  },
  {
    title: 'Food & Culinary',
    text: 'The taste of memory and tradition',
    image: '/images/culture.jpg',
    href: '/experiences/food-culinary',
  },
  {
    title: 'Arts & Crafts',
    text: 'Hands that shape a thousand-year legacy',
    image: '/images/sutra.jpg',
    href: '/experiences/arts-crafts',
  },
  {
    title: 'Nature & Landscapes',
    text: 'Mountains, meadows and sacred waters',
    image: '/images/hero.jpg',
    href: '/experiences/nature',
  },
  {
    title: 'Slow Kashmir',
    text: 'Less rushing, more noticing',
    image: '/images/vaas.jpg',
    href: '/experiences/slow-kashmir',
  },
]

const seasons = [
  {
    name: 'Spring',
    months: 'March — May',
    desc: 'Cherry blossoms, tulip gardens, and Navreh — the Kashmiri New Year.',
    image: '/images/spring.jpg',
  },
  {
    name: 'Summer',
    months: 'June — August',
    desc: 'Meadows in bloom, Amarnath Yatra, and the heights of Sonamarg.',
    image: '/images/summer.jpg',
  },
  {
    name: 'Autumn',
    months: 'September — November',
    desc: 'Golden chinars, saffron harvest, and the quiet beauty of departure.',
    image: '/images/autumn.jpg',
  },
  {
    name: 'Winter',
    months: 'December — February',
    desc: 'Snow, kangri warmth, Shishur celebrations, and the soul of Kashir.',
    image: '/images/winter.jpg',
  },
]

const steps = [
  { title: 'Tell Us', text: 'Share what you seek from Kashir' },
  { title: 'Understand', text: 'We listen and shape your vision' },
  { title: 'Curate', text: 'A journey crafted for you' },
  { title: 'Refine', text: 'Together we perfect every detail' },
  { title: 'Travel', text: 'Experience Kashir with meaning' },
  { title: 'Remember', text: 'The journey stays with you' },
]

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero" id="hero">
        <div className="hero-bg">
          <img
            src="/images/hero.jpg"
            alt="Dal Lake Kashmir at golden hour with a shikara boat and snow-capped mountains"
            loading="eager"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-label">Kashir Wath</span>
          <h1 className="hero-title">
            Soulful Journeys
            <br />
            Through <em>Kashir</em>
          </h1>
          <p className="hero-subtitle">
            Kashmir ko sirf ghooma nahi jaata… rishta banaya jaata hai.
          </p>
          <div className="hero-actions">
            <Link href="/plan-your-journey" className="btn btn-primary btn-lg">
              Plan Your Journey
            </Link>
            <Link href="/discover" className="btn btn-ghost btn-lg">
              Discover Kashir
            </Link>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Explore</span>
          <div className="hero-scroll-line" />
        </div>
      </section>

      {/* ===== WHAT IS KASHIR WATH ===== */}
      <section className="section-lg" id="what-is-kashir-wath">
        <div className="container">
          <RevealOnScroll>
            <SectionHeader
              label="What is Kashir Wath?"
              title="More Than a Tour. A Way of Seeing."
              subtitle="Kashir Wath is a way of journeying through Kashmir — with depth, sensitivity, and genuine cultural understanding."
            />
          </RevealOnScroll>

          <div className="content-split" style={{ marginTop: '4rem' }}>
            <RevealOnScroll>
              <div className="content-image">
                <img
                  src="/images/discover.jpg"
                  alt="Kashmir valley with ancient temples and rice terraces"
                  loading="lazy"
                />
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={2}>
              <div>
                <h3 style={{ marginBottom: '1.5rem' }}>
                  Kashir as More Than a Destination
                </h3>
                <p style={{ marginBottom: '1.5rem' }}>
                  To us, Kashmir is not merely a place to visit. It is a civilisation to
                  understand, a landscape that holds memory, a living culture that
                  connects generations. Every spring, every temple, every meal carries
                  centuries of meaning.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  Kashir Wath is rooted in Kashmiri Pandit heritage — yet open to
                  everyone who seeks to discover Kashmir beyond conventional tourism.
                  Whether you are returning to a homeland you have always carried
                  within, or discovering it for the first time, we shape every journey
                  with intention.
                </p>
                <div className="gold-divider gold-divider-left" />
                <p
                  style={{
                    fontFamily: 'var(--font-accent)',
                    fontStyle: 'italic',
                    fontSize: 'var(--text-lg)',
                    color: 'var(--color-gold)',
                    marginTop: '1.5rem',
                  }}
                >
                  "For some, Kashir is a destination. For others, it is a part of who
                  they are. We honour both."
                </p>
                <Link
                  href="/discover/more-than-a-destination"
                  className="btn btn-outline"
                  style={{ marginTop: '2rem' }}
                >
                  Discover Kashir
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ===== FIVE LAYERS ===== */}
      <section
        className="section-lg"
        id="five-layers"
        style={{ background: 'var(--color-black-light)' }}
      >
        <div className="container-wide">
          <RevealOnScroll>
            <SectionHeader
              label="Five Layers of Kashir"
              title="How We See Kashmir"
              subtitle="Five interconnected ways of understanding and experiencing Kashir — each one a doorway into something deeper."
            />
          </RevealOnScroll>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: 'var(--space-4)',
              marginTop: '3rem',
            }}
            className="layers-grid"
          >
            {layers.map((layer, i) => (
              <RevealOnScroll key={layer.name} delay={i + 1}>
                <Link href={layer.href} style={{ textDecoration: 'none' }}>
                  <div className="layer-card">
                    <div className="layer-card-bg">
                      <img src={layer.image} alt={layer.name} loading="lazy" />
                    </div>
                    <div className="layer-card-overlay" />
                    <div className="layer-card-content">
                      <div className="layer-card-number">{layer.number}</div>
                      <h3 className="layer-card-title">{layer.name}</h3>
                      <p className="layer-card-sub">{layer.sub}</p>
                      <p className="layer-card-desc">{layer.desc}</p>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PANUN KASHIR ===== */}
      <section className="section-lg" id="panun-kashir">
        <div className="container">
          <div className="content-split">
            <RevealOnScroll>
              <div>
                <span className="section-label" style={{ paddingLeft: 0 }}>
                  Panun Kashir
                </span>
                <h2 style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
                  Reconnect With Your Roots
                </h2>
                <div className="gold-divider gold-divider-left" />
                <p style={{ marginBottom: '1.5rem', marginTop: '1.5rem' }}>
                  For those who carry Kashir within them — in memory, in ritual, in the
                  stories their families told — Panun Kashir is a dedicated doorway. A
                  space to rediscover sacred temples, ancestral neighbourhoods, and the
                  cultural grammar of home.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  Whether you are a grandparent wanting to share Kashir with the next
                  generation, or a young person seeking to understand where you come
                  from, this is your invitation to return — not just physically, but
                  spiritually and emotionally.
                </p>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                  <Link href="/panun-kashir" className="btn btn-primary">
                    Explore Panun Kashir
                  </Link>
                  <Link href="/panun-kashir/return-to-roots" className="btn btn-outline">
                    Return to Roots
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={2}>
              <div className="content-image">
                <img
                  src="/images/sutra.jpg"
                  alt="Traditional Kashmiri Pandit prayer ceremony"
                  loading="lazy"
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCES ===== */}
      <section
        className="section-lg"
        id="experiences"
        style={{ background: 'var(--color-black-light)' }}
      >
        <div className="container">
          <RevealOnScroll>
            <SectionHeader
              label="Experiences"
              title="Kashmir, Experienced Differently"
              subtitle="Beyond sightseeing. Every experience is designed to connect you with the living culture, history and soul of Kashir."
            />
          </RevealOnScroll>

          <div className="experience-grid">
            {experiences.map((exp, i) => (
              <RevealOnScroll key={exp.title} delay={(i % 3) + 1}>
                <Link href={exp.href} style={{ textDecoration: 'none' }}>
                  <div className="experience-card">
                    <div className="experience-card-bg">
                      <img src={exp.image} alt={exp.title} loading="lazy" />
                    </div>
                    <div className="experience-card-overlay" />
                    <div className="experience-card-content">
                      <h3 className="experience-card-title">{exp.title}</h3>
                      <p className="experience-card-text">{exp.text}</p>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/experiences" className="btn btn-outline">
              All Experiences
            </Link>
          </div>
        </div>
      </section>

      {/* ===== JOURNEYS ===== */}
      <section className="section-lg" id="journeys">
        <div className="container">
          <RevealOnScroll>
            <SectionHeader
              label="Journeys"
              title="Curated, Not Packaged"
              subtitle="Every Kashir Wath journey is shaped around you — your interests, your pace, your reasons for seeking Kashir."
            />
          </RevealOnScroll>

          <div className="feature-grid" style={{ marginTop: '3rem' }}>
            {[
              {
                title: 'Private Journeys',
                desc: 'Exclusively yours. Every moment curated with personal attention.',
                href: '/journeys/private',
              },
              {
                title: 'Family & Multi-Generational',
                desc: 'Share Kashir across generations — heritage, stories, and new memories.',
                href: '/journeys/family',
              },
              {
                title: 'Tailor-Made Journeys',
                desc: 'Tell us what you seek. We shape the journey around it.',
                href: '/journeys/tailor-made',
              },
              {
                title: 'Premium Kashmir',
                desc: 'The finest stays, the most thoughtful experiences, impeccable service.',
                href: '/journeys/premium',
              },
              {
                title: 'Small Group Journeys',
                desc: 'Intimate groups, shared discovery, curated moments together.',
                href: '/journeys/small-group',
              },
              {
                title: 'Special Interest',
                desc: 'Heritage, spirituality, food, photography — journeys built around passion.',
                href: '/journeys/special-interest',
              },
            ].map((journey, i) => (
              <RevealOnScroll key={journey.title} delay={(i % 3) + 1}>
                <Link href={journey.href} style={{ textDecoration: 'none' }}>
                  <div
                    className="card"
                    style={{ padding: 'var(--space-8)', height: '100%' }}
                  >
                    <span className="card-label">Journey</span>
                    <h3
                      className="card-title"
                      style={{ fontSize: 'var(--text-xl)' }}
                    >
                      {journey.title}
                    </h3>
                    <p className="card-text">{journey.desc}</p>
                    <span
                      style={{
                        display: 'inline-block',
                        marginTop: '1.5rem',
                        color: 'var(--color-gold)',
                        fontSize: 'var(--text-sm)',
                        fontWeight: 500,
                      }}
                    >
                      Explore →
                    </span>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SEASONS ===== */}
      <section
        className="section-lg"
        id="seasons"
        style={{ background: 'var(--color-black-light)' }}
      >
        <div className="container">
          <RevealOnScroll>
            <SectionHeader
              label="Kashir Ritu"
              title="Kashmir Through the Seasons"
              subtitle="Every season reveals a different Kashir — in colour, ritual, food and character."
            />
          </RevealOnScroll>

          <div className="seasons-grid">
            {seasons.map((season, i) => (
              <RevealOnScroll key={season.name} delay={i + 1}>
                <div className="season-card">
                  <div className="season-card-bg">
                    <img src={season.image} alt={`Kashmir in ${season.name}`} loading="lazy" />
                  </div>
                  <div className="season-card-overlay" />
                  <div className="season-card-content">
                    <h3 className="season-card-name">{season.name}</h3>
                    <p className="season-card-months">{season.months}</p>
                    <p className="season-card-desc">{season.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section-lg" id="how-it-works">
        <div className="container">
          <RevealOnScroll>
            <SectionHeader
              label="How It Works"
              title="Your Journey, From Thought to Memory"
              subtitle="A thoughtful process that ensures every detail reflects what you seek from Kashir."
            />
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="steps" style={{ marginTop: '4rem' }}>
              {steps.map((step, i) => (
                <div key={step.title} className="step">
                  <div className="step-number">{i + 1}</div>
                  <h4 className="step-title">{step.title}</h4>
                  <p className="step-text">{step.text}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== STAY PHILOSOPHY ===== */}
      <section
        className="section-lg"
        id="stay-philosophy"
        style={{ background: 'var(--color-black-light)' }}
      >
        <div className="container">
          <div className="content-split">
            <RevealOnScroll>
              <div className="content-image">
                <img
                  src="/images/vaas.jpg"
                  alt="Heritage houseboat on Dal Lake"
                  loading="lazy"
                />
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={2}>
              <div>
                <span className="section-label" style={{ paddingLeft: 0 }}>
                  Stay & Service
                </span>
                <h2 style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
                  Where You Stay Shapes How You Experience
                </h2>
                <div className="gold-divider gold-divider-left" />
                <p style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                  We select every property personally. Heritage houseboats with history
                  in their woodwork. Boutique hotels that understand Kashmiri
                  hospitality. Homes that invite you into a living culture. Nothing is
                  chosen from a catalogue.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  Our service standards — from the vehicle that receives you to the
                  guide who walks with you — are shaped by a simple principle: every
                  detail should feel considered, not just arranged.
                </p>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                  <Link href="/stay-service/philosophy" className="btn btn-outline">
                    Our Stay Philosophy
                  </Link>
                  <Link href="/stay-service/service-standards" className="btn btn-ghost">
                    Service Standards
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ===== GUEST STORIES ===== */}
      <section className="section-lg" id="guest-stories">
        <div className="container-narrow">
          <RevealOnScroll>
            <SectionHeader
              label="Our Guests"
              title="Journeys With Our Guests"
            />
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="testimonial">
              <div className="testimonial-quote">
                I have visited Kashmir many times. But this was the first time I
                truly saw it. The temples my grandmother described, the springs
                she remembered, the food that tasted exactly like home — Kashir
                Wath understood what this journey meant to our family.
              </div>
              <p className="testimonial-author">Anita Kaul Mattoo</p>
              <p className="testimonial-journey">
                Private Family Journey · September 2024
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="testimonial" style={{ marginTop: '2rem' }}>
              <div className="testimonial-quote">
                We expected a beautiful trip. What we got was a deeply moving
                cultural education. The guide knew every temple, every story, every
                hidden spring. This is not a tour company — it is a cultural
                bridge.
              </div>
              <p className="testimonial-author">Raghav & Priya Sharma</p>
              <p className="testimonial-journey">
                Heritage & Spiritual Journey · October 2024
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== FOUNDER ===== */}
      <section
        className="section-lg"
        id="founder"
        style={{ background: 'var(--color-black-light)' }}
      >
        <div className="container">
          <div className="content-split">
            <RevealOnScroll>
              <div>
                <span className="section-label" style={{ paddingLeft: 0 }}>
                  The Founder
                </span>
                <h2 style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
                  A Personal Journey Became a Purpose
                </h2>
                <div className="gold-divider gold-divider-left" />
                <p style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                  Kashir Wath was born from a deeply personal relationship with
                  Kashmir — one shaped by heritage, memory, and a conviction that
                  this extraordinary land deserves to be shared with intelligence,
                  sensitivity and care.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  As a Kashmiri Pandit who has spent years retracing, researching and
                  rediscovering Kashir, the founder brings something that no tour
                  operator manual can teach — a genuine understanding of what Kashmir
                  means to those who carry it within them, and what it can mean to
                  those discovering it for the first time.
                </p>
                <Link href="/about/founder" className="btn btn-outline">
                  Read the Full Story
                </Link>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={2}>
              <div className="content-image">
                <img
                  src="/images/founder.jpg"
                  alt="Founder of Kashir Wath"
                  loading="lazy"
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ===== KASHIR JOURNAL PREVIEW ===== */}
      <section className="section-lg" id="journal-preview">
        <div className="container">
          <RevealOnScroll>
            <SectionHeader
              label="Kashir Journal"
              title="Stories, History & Perspectives"
              subtitle="A knowledge platform — not a blog. Explore the civilisation, culture and spirit of Kashir through thoughtful writing."
              cta="Read the Journal"
              ctaHref="/journal"
            />
          </RevealOnScroll>

          <div className="feature-grid" style={{ marginTop: '3rem' }}>
            {[
              {
                title: 'Lalitaditya Muktapida: Kashmir\'s Greatest Emperor',
                category: 'History & Civilisation',
                desc: 'The Karkota dynasty ruler who built an empire from Kashmir to Central Asia.',
              },
              {
                title: 'Kheer Bhawani: The Living Goddess of Kashir',
                category: 'Spirituality',
                desc: 'Understanding the sacred spring temple that connects every Kashmiri Pandit to home.',
              },
              {
                title: 'The Art of Wazwan: More Than a Feast',
                category: 'Food & Culture',
                desc: 'How a 36-course meal carries centuries of Kashmiri hospitality, ritual and identity.',
              },
            ].map((article) => (
              <RevealOnScroll key={article.title}>
                <div className="card" style={{ height: '100%' }}>
                  <div className="card-content">
                    <span className="card-label">{article.category}</span>
                    <h3
                      className="card-title"
                      style={{ fontSize: 'var(--text-xl)' }}
                    >
                      {article.title}
                    </h3>
                    <p className="card-text">{article.desc}</p>
                    <span
                      style={{
                        display: 'inline-block',
                        marginTop: '1.5rem',
                        color: 'var(--color-gold)',
                        fontSize: 'var(--text-sm)',
                        fontWeight: 500,
                      }}
                    >
                      Read Article →
                    </span>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PLAN YOUR JOURNEY CTA ===== */}
      <section
        className="section-lg"
        id="plan-cta"
        style={{
          background: 'linear-gradient(180deg, var(--color-black) 0%, var(--color-black-soft) 50%, var(--color-black) 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/images/hero.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15,
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <RevealOnScroll>
            <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
              <span className="section-label">Begin</span>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
                  fontWeight: 300,
                  marginBottom: '1.5rem',
                  marginTop: '1rem',
                }}
              >
                Ready to Journey Through <em style={{ color: 'var(--color-gold)' }}>Kashir</em>?
              </h2>
              <div className="gold-divider" />
              <p
                style={{
                  fontFamily: 'var(--font-accent)',
                  fontStyle: 'italic',
                  fontSize: 'var(--text-lg)',
                  color: 'var(--color-warm-gray)',
                  marginBottom: '2.5rem',
                  marginTop: '1.5rem',
                }}
              >
                Tell us what you seek. We will shape a journey that is truly yours.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/plan-your-journey" className="btn btn-primary btn-lg">
                  Plan Your Journey
                </Link>
                <a
                  href="https://wa.me/919999999999"
                  className="btn btn-outline btn-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
