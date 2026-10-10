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
              <span key={i}>
                <span className="separator"> / </span>
                {crumb.href ? (
                  <Link href={crumb.href}>{crumb.label}</Link>
                ) : (
                  <span style={{ color: 'var(--color-gold)' }}>{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {label && <span className="section-label" style={{ paddingLeft: 0 }}>{label}</span>}
        <h1 style={{ marginTop: '0.75rem', marginBottom: '1rem' }}>{title}</h1>
        <div className="gold-divider gold-divider-left" />
        {subtitle && (
          <p
            style={{
              fontFamily: 'var(--font-accent)',
              fontStyle: 'italic',
              fontSize: 'var(--text-xl)',
              color: 'var(--color-warm-gray)',
              marginTop: '1rem',
              maxWidth: '600px',
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
