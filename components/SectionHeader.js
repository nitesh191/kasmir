import Link from 'next/link'

export default function SectionHeader({
  label,
  title,
  subtitle,
  cta,
  ctaHref,
  align = 'center',
}) {
  const isLeft = align === 'left'

  return (
    <div
      className="section-header"
      style={{
        textAlign: align,
        alignItems: isLeft ? 'flex-start' : 'center',
      }}
    >
      {label && (
        <span
          className="section-label"
          style={isLeft ? { paddingLeft: 0, justifyContent: 'flex-start' } : {}}
        >
          {label}
        </span>
      )}
      {title && <h2 className="section-title">{title}</h2>}
      <div
        className={`gold-divider ${isLeft ? 'gold-divider-left' : ''}`}
        style={isLeft ? { marginLeft: 0 } : {}}
      />
      {subtitle && (
        <p
          className="section-subtitle"
          style={isLeft ? { marginLeft: 0 } : {}}
        >
          {subtitle}
        </p>
      )}
      {cta && ctaHref && (
        <div style={{ marginTop: '2rem' }}>
          <Link href={ctaHref} className="btn btn-outline">
            {cta}
          </Link>
        </div>
      )}
    </div>
  )
}
