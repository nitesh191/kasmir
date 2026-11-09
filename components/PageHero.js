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
        <h1 className="page-hero-title">
          {title}
        </h1>
        <div className="gold-divider gold-divider-left" />
        {subtitle && (
          <p className="page-hero-subtitle">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
