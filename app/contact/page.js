'use client'

import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'

export default function Contact() {
  return (
    <>
      <PageHero
        image="/images/hero.jpg"
        label="Contact"
        title="Contact Kashir Wath"
        subtitle="We'd love to hear from you. Reach out however is most comfortable."
        breadcrumbs={[{ label: 'Contact' }]}
        compact
      />

      <section className="section-lg">
        <div className="container" style={{ maxWidth: '800px' }}>
          <RevealOnScroll>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-8)' }}>
              <div className="card" style={{ padding: 'var(--space-8)', textAlign: 'center' }}>
                <h3 style={{ marginBottom: '1rem', fontSize: 'var(--text-2xl)' }}>WhatsApp</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-warm-gray)', marginBottom: '1.5rem' }}>
                  The quickest way to reach us. We respond within hours.
                </p>
                <a href="https://wa.me/919999999999" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Message Us
                </a>
              </div>

              <div className="card" style={{ padding: 'var(--space-8)', textAlign: 'center' }}>
                <h3 style={{ marginBottom: '1rem', fontSize: 'var(--text-2xl)' }}>Email</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-warm-gray)', marginBottom: '1.5rem' }}>
                  For detailed enquiries and journey planning.
                </p>
                <a href="mailto:hello@kashirwath.com" className="btn btn-outline">
                  hello@kashirwath.com
                </a>
              </div>

              <div className="card" style={{ padding: 'var(--space-8)', textAlign: 'center' }}>
                <h3 style={{ marginBottom: '1rem', fontSize: 'var(--text-2xl)' }}>Phone</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-warm-gray)', marginBottom: '1.5rem' }}>
                  Speak with us directly.
                </p>
                <a href="tel:+919999999999" className="btn btn-outline">
                  +91 99999 99999
                </a>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div style={{ marginTop: 'var(--space-16)', textAlign: 'center' }}>
              <h3 style={{ marginBottom: '1rem' }}>Follow Us</h3>
              <div className="gold-divider" />
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '2rem', justifyContent: 'center' }}>
                <a href="https://instagram.com/kashirwath" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-warm-gray)', fontSize: 'var(--text-sm)' }}>Instagram</a>
                <a href="https://facebook.com/kashirwath" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-warm-gray)', fontSize: 'var(--text-sm)' }}>Facebook</a>
                <a href="https://youtube.com/@kashirwath" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-warm-gray)', fontSize: 'var(--text-sm)' }}>YouTube</a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
