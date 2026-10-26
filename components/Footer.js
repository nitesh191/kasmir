import Link from 'next/link'

const footerLinks = {
  discover: {
    title: 'Discover',
    links: [
      { label: 'Discover Kashir', href: '/discover' },
      { label: 'Kashir Vatista', href: '/discover/kashir-vatista' },
      { label: 'Kashir Sutra', href: '/discover/kashir-sutra' },
      { label: 'Panun Kashir', href: '/panun-kashir' },
      { label: 'Sacred Kashir', href: '/panun-kashir/sacred-kashir' },
    ],
  },
  experiences: {
    title: 'Experiences',
    links: [
      { label: 'Heritage & History', href: '/experiences/heritage-history' },
      { label: 'Sacred & Spiritual', href: '/experiences/sacred-spiritual' },
      { label: 'Food & Culinary', href: '/experiences/food-culinary' },
      { label: 'Arts & Crafts', href: '/experiences/arts-crafts' },
      { label: 'Slow Kashmir', href: '/experiences/slow-kashmir' },
    ],
  },
  journeys: {
    title: 'Journeys',
    links: [
      { label: 'Private Journeys', href: '/journeys/private' },
      { label: 'Family Journeys', href: '/journeys/family' },
      { label: 'Tailor-Made', href: '/journeys/tailor-made' },
      { label: 'Premium Kashmir', href: '/journeys/premium' },
      { label: 'Plan Your Journey', href: '/plan-your-journey' },
    ],
  },
  about: {
    title: 'Kashir Wath',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'The Founder', href: '/about/founder' },
      { label: 'Kashir Journal', href: '/journal' },
      { label: 'Contact', href: '/contact' },
      { label: 'FAQs', href: '/faqs' },
    ],
  },
}

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <div className="container-wide">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo" style={{ textDecoration: 'none' }}>
              <span className="logo-name">KASHIR WATH</span>
              <span className="logo-tagline">Soulful Journeys Through Kashir</span>
            </Link>
            <p>
              Rooted deeply in Kashmiri Pandit heritage, yet open to all who seek to
              discover Kashir beyond conventional tourism. We curate journeys of meaning,
              memory and discovery.
            </p>
            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
              <Link href="/plan-your-journey" className="btn btn-primary btn-sm">
                Plan Your Journey
              </Link>
            </div>
          </div>

          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="footer-heading">{section.title}</h4>
              <div className="footer-links">
                {section.links.map((link) => (
                  <Link key={link.href} href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Kashir Wath. All rights reserved. |{' '}
            <Link href="/privacy" className="footer-link">
              Privacy
            </Link>{' '}
            |{' '}
            <Link href="/terms" className="footer-link">
              Terms
            </Link>{' '}
            |{' '}
            <Link href="/policies/booking" className="footer-link">
              Booking Policy
            </Link>
          </p>
          <div className="footer-social">
            <a
              href="https://instagram.com/kashirwath"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com/kashirwath"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a
              href="https://youtube.com/@kashirwath"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
