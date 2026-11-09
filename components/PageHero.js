import Link from 'next/link'

export default function PageHero({
  image,
  label,
  title,
  subtitle,
  breadcrumbs = [],
  compact = false,
}) {
  return (
    <section className={`page-hero ${compact ? 'page-hero-compact' : ''}`}>
      <div className="page-hero-bg">
        <img
          src={image || '/images/hero.jpg'}
          alt={title}
          loading="eager"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="page-hero-overlay" />
      <div className="page-hero-content">
        {breadcrumbs.length > 0 && (
          <nav className="page-hero-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center' }}>
                <span className="separator" style={{ margin: '0 0.4rem' }}> / </span>
                {crumb.href ? (
                  <Link href={crumb.href}>{crumb.label}</Link>
                ) : (
                  <span style={{ color: 'var(--color-gold-light)', fontWeight: 500 }}>
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}
        {label && (
          <span
            className="section-label"
            style={{
              paddingLeft: 0,
              justifyContent: 'flex-start',
              marginBottom: '0.5rem',
            }}
          >
            {label}
          </span>
        )}
        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.25rem, 5vw, 4rem)',
            fontWeight: 300,
            lineHeight: 1.15,
            letterSpacing: '-0.01em',
            color: '#FFFFFF',
            marginTop: '0.5rem',
            marginBottom: '1rem',
            maxWidth: '900px',
            textShadow: '0 2px 18px rgba(0, 0, 0, 0.7)',
          }}
        >
          {title}
        </h1>
        <div className="gold-divider gold-divider-left" />
        {subtitle && (
          <p
            style={{
              fontFamily: 'var(--font-accent)',
              fontStyle: 'italic',
              fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
              color: 'var(--color-ivory-warm)',
              marginTop: '1.25rem',
              maxWidth: '680px',
              lineHeight: 1.6,
              textShadow: '0 2px 12px rgba(0, 0, 0, 0.8)',
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
