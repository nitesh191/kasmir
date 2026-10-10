import Link from 'next/link'

export default function SectionHeader({
  label,
  title,
  subtitle,
  cta,
  ctaHref,
  align = 'center',
}) {
  return (
    <div className="section-header" style={{ textAlign: align }}>
      {label && <span className="section-label">{label}</span>}
      {title && <h2 className="section-title">{title}</h2>}
      <div className="gold-divider" style={align === 'left' ? { marginLeft: 0 } : {}} />
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
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
