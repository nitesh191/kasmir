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
          'linear-gradient(180deg, var(--color-black) 0%, var(--color-black-soft) 50%, var(--color-black) 100%)',
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
          opacity: 0.12,
        }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          <span className="section-label">{label}</span>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
              fontWeight: 300,
              marginBottom: '1.5rem',
              marginTop: '1rem',
            }}
          >
            {title}
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
            {subtitle}
          </p>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
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
