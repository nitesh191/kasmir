import Link from 'next/link'

export const metadata = {
  title: '404 — Page Not Found',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 'var(--space-8)',
      }}
    >
      <div>
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(4rem, 10vw, 8rem)',
            fontWeight: 300,
            color: 'var(--color-gold)',
            opacity: 0.3,
            display: 'block',
            lineHeight: 1,
            marginBottom: 'var(--space-4)',
          }}
        >
          404
        </span>
        <h1
          style={{
            fontSize: 'clamp(var(--text-2xl), 4vw, var(--text-4xl))',
            marginBottom: 'var(--space-4)',
          }}
        >
          This Path Does Not Exist
        </h1>
        <div className="gold-divider" />
        <p
          style={{
            fontFamily: 'var(--font-accent)',
            fontStyle: 'italic',
            fontSize: 'var(--text-lg)',
            color: 'var(--color-warm-gray)',
            marginTop: 'var(--space-6)',
            marginBottom: 'var(--space-8)',
            maxWidth: '400px',
            margin: 'var(--space-6) auto var(--space-8)',
          }}
        >
          The page you are looking for may have moved or does not exist.
          Let us help you find your way through Kashir.
        </p>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link href="/" className="btn btn-primary">
            Return Home
          </Link>
          <Link href="/discover" className="btn btn-outline">
            Discover Kashir
          </Link>
          <Link href="/plan-your-journey" className="btn btn-ghost">
            Plan Your Journey
          </Link>
        </div>
      </div>
    </section>
  )
}
