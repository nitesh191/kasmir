import Link from 'next/link'

export default function CTASection({
  label = 'Begin',
  title = 'Ready to Journey Through Kashir?',
  subtitle = 'Tell us what you seek. We will shape a journey that is truly yours.',
  primaryCta = 'Plan Your Journey',
  primaryHref = '/plan-your-journey',
  secondaryCta = 'WhatsApp Us',
  secondaryHref = 'https://wa.me/919999999999',
}) {
  return (
    <section
      className="section-lg"
      style={{
        background:
          'radial-gradient(ellipse at 50% 50%, rgba(20, 20, 20, 0.95) 0%, rgba(10, 10, 10, 0.98) 100%)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(197, 165, 90, 0.15)',
        borderBottom: '1px solid rgba(197, 165, 90, 0.15)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.08,
          filter: 'grayscale(40%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '320px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)',
        }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
          <span className="section-label">{label}</span>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
              fontWeight: 300,
              lineHeight: 1.15,
              color: '#FFFFFF',
              letterSpacing: '-0.01em',
              marginBottom: '1rem',
              marginTop: '0.75rem',
            }}
          >
            {title}
          </h2>
          <div className="gold-divider" />
          <p
            style={{
              fontFamily: 'var(--font-accent)',
              fontStyle: 'italic',
              fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
              color: 'var(--color-ivory-warm)',
              marginBottom: '2.5rem',
              marginTop: '1.25rem',
              lineHeight: 1.6,
            }}
          >
            {subtitle}
          </p>
          <div
            style={{
              display: 'flex',
              gap: '1.25rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            {primaryCta && (
              <Link href={primaryHref} className="btn btn-primary btn-lg">
                {primaryCta}
              </Link>
            )}
            {secondaryCta && (
              <a
                href={secondaryHref}
                className="btn btn-outline btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                {secondaryCta}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
