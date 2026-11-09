'use client'

import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import CTASection from '@/components/CTASection'

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
        <div className="container" style={{ maxWidth: '920px' }}>
          <RevealOnScroll>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: 'var(--space-6)',
              }}
            >
              <div
                className="card"
                style={{
                  padding: 'var(--space-8)',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      border: '1px solid var(--color-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.25rem',
                      color: 'var(--color-gold)',
                      fontSize: '1.25rem',
                    }}
                  >
                    ✦
                  </div>
                  <h3
                    style={{
                      marginBottom: '0.75rem',
                      fontSize: 'var(--text-2xl)',
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    WhatsApp
                  </h3>
                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-warm-gray)',
                      marginBottom: '1.75rem',
                      lineHeight: 1.7,
                    }}
                  >
                    The quickest way to reach us. We respond within a few hours.
                  </p>
                </div>
                <a
                  href="https://wa.me/919999999999"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: '100%' }}
                >
                  Message Us
                </a>
              </div>

              <div
                className="card"
                style={{
                  padding: 'var(--space-8)',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      border: '1px solid var(--color-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.25rem',
                      color: 'var(--color-gold)',
                      fontSize: '1.25rem',
                    }}
                  >
                    ✉
                  </div>
                  <h3
                    style={{
                      marginBottom: '0.75rem',
                      fontSize: 'var(--text-2xl)',
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    Email
                  </h3>
                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-warm-gray)',
                      marginBottom: '1.75rem',
                      lineHeight: 1.7,
                    }}
                  >
                    For detailed journey planning and cultural enquiries.
                  </p>
                </div>
                <a
                  href="mailto:hello@kashirwath.com"
                  className="btn btn-outline"
                  style={{ width: '100%' }}
                >
                  hello@kashirwath.com
                </a>
              </div>

              <div
                className="card"
                style={{
                  padding: 'var(--space-8)',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      border: '1px solid var(--color-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.25rem',
                      color: 'var(--color-gold)',
                      fontSize: '1.25rem',
                    }}
                  >
                    ☎
                  </div>
                  <h3
                    style={{
                      marginBottom: '0.75rem',
                      fontSize: 'var(--text-2xl)',
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    Phone
                  </h3>
                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-warm-gray)',
                      marginBottom: '1.75rem',
                      lineHeight: 1.7,
                    }}
                  >
                    Speak with our journey curators directly.
                  </p>
                </div>
                <a
                  href="tel:+919999999999"
                  className="btn btn-outline"
                  style={{ width: '100%' }}
                >
                  +91 99999 99999
                </a>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div
              style={{
                marginTop: 'var(--space-16)',
                textAlign: 'center',
                padding: 'var(--space-10)',
                background: 'var(--color-black-light)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 'var(--radius-lg)',
              }}
            >
              <span className="section-label">Connect</span>
              <h3
                style={{
                  marginTop: '0.5rem',
                  marginBottom: '1rem',
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'var(--text-2xl)',
                }}
              >
                Follow Our Journey
              </h3>
              <div className="gold-divider" />
              <p
                style={{
                  maxWidth: '520px',
                  margin: '1rem auto 1.5rem',
                  color: 'var(--color-warm-gray)',
                  fontSize: '0.9375rem',
                }}
              >
                Stories, photographs, and quiet reflections from across Kashmir.
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <a
                  href="https://instagram.com/kashirwath"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost btn-sm"
                >
                  Instagram &rarr;
                </a>
                <a
                  href="https://facebook.com/kashirwath"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost btn-sm"
                >
                  Facebook &rarr;
                </a>
                <a
                  href="https://youtube.com/@kashirwath"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost btn-sm"
                >
                  YouTube &rarr;
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CTASection />
    </>
  )
}
