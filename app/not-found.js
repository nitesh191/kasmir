import Link from 'next/link'

export const metadata = {
  title: '404 — Page Not Found | Kashir Wath',
  description: 'The path you are looking for does not exist. Let us help you find your way through Kashir.',
}

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: '82vh',
        minHeight: '82dvh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 'calc(var(--header-height) + 3rem) var(--space-6) var(--space-16)',
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
          opacity: 0.05,
          filter: 'grayscale(100%)',
        }}
      />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '640px', margin: '0 auto' }}>
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(5rem, 12vw, 9rem)',
            fontWeight: 300,
            color: 'var(--color-gold)',
            opacity: 0.25,
            display: 'block',
            lineHeight: 1,
            marginBottom: 'var(--space-2)',
            letterSpacing: '0.05em',
          }}
        >
          404
        </span>
        <span className="section-label">Path Not Found</span>
        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3.25rem)',
            fontWeight: 300,
            marginTop: '0.75rem',
            marginBottom: '1rem',
            color: '#FFFFFF',
          }}
        >
          This Path Has Not Been Charted
        </h1>
        <div className="gold-divider" />
        <p
          style={{
            fontFamily: 'var(--font-accent)',
            fontStyle: 'italic',
            fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
            color: 'var(--color-ivory-warm)',
            marginTop: '1.25rem',
            marginBottom: '2.5rem',
            lineHeight: 1.65,
          }}
        >
          The page you seek may have shifted or does not exist. Allow us to guide you back to familiar trails through Kashir.
        </p>
        <div
          style={{
            display: 'flex',
            gap: '1.25rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link href="/" className="btn btn-primary btn-lg">
            Return to Home
          </Link>
          <Link href="/discover" className="btn btn-outline btn-lg">
            Discover Kashir
          </Link>
        </div>
      </div>
    </section>
  )
}
