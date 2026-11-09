'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'

export default function PlanYourJourney() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        image="/images/hero.jpg"
        label="Begin"
        title="Plan Your Journey"
        subtitle="Tell us what you seek from Kashir. We'll shape a journey that is truly yours."
        breadcrumbs={[{ label: 'Plan Your Journey' }]}
        compact
      />

      <section className="section-lg">
        <div className="container" style={{ maxWidth: '920px' }}>
          <RevealOnScroll>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="thank-you"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    textAlign: 'center',
                    padding: 'var(--space-16) var(--space-8)',
                    background: 'var(--color-black-light)',
                    border: '1px solid rgba(197, 165, 90, 0.35)',
                    borderRadius: 'var(--radius-xl)',
                    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
                  }}
                >
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      border: '1px solid var(--color-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem',
                      color: 'var(--color-gold)',
                      fontSize: '1.75rem',
                    }}
                  >
                    ✦
                  </div>
                  <h2
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'clamp(2rem, 4vw, 3rem)',
                      color: 'var(--color-gold)',
                      marginBottom: '1rem',
                    }}
                  >
                    Thank You
                  </h2>
                  <div className="gold-divider" />
                  <p
                    style={{
                      margin: '1.5rem auto',
                      maxWidth: '560px',
                      fontSize: 'var(--text-lg)',
                      color: 'var(--color-ivory-warm)',
                      lineHeight: 1.7,
                    }}
                  >
                    Your enquiry has been received with care. We will review your details
                    and respond within 24 hours with thoughtful, personalised suggestions
                    for your journey.
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-accent)',
                      fontStyle: 'italic',
                      color: 'var(--color-gold-bright)',
                      fontSize: 'var(--text-2xl)',
                      marginTop: '2.5rem',
                    }}
                  >
                    Kashir awaits.
                  </p>
                </motion.div>
              ) : (
                <form className="plan-form" onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '2.5rem' }}>
                    <span className="section-label" style={{ paddingLeft: 0, justifyContent: 'flex-start' }}>
                      Curated Journeys
                    </span>
                    <h2
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                        marginTop: '0.5rem',
                        marginBottom: '0.5rem',
                      }}
                    >
                      Tell Us About Your Journey
                    </h2>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--color-warm-gray)', maxWidth: '640px' }}>
                      Every field helps us understand what you seek. Share as much or as little as you wish — no rigid packages, only personal curation.
                    </p>
                  </div>

                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">
                        Your Name *
                      </label>
                      <input
                        className="form-input"
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Full name"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">
                        Email Address *
                      </label>
                      <input
                        className="form-input"
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">
                        Phone / WhatsApp
                      </label>
                      <input
                        className="form-input"
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+91 ..."
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="guests">
                        Number of Guests
                      </label>
                      <input
                        className="form-input"
                        type="text"
                        id="guests"
                        name="guests"
                        placeholder="e.g. 2 adults, 1 child"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="dates">
                        Preferred Travel Dates
                      </label>
                      <input
                        className="form-input"
                        type="text"
                        id="dates"
                        name="dates"
                        placeholder="e.g. October 2025 / flexible"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="duration">
                        Expected Duration
                      </label>
                      <input
                        className="form-input"
                        type="text"
                        id="duration"
                        name="duration"
                        placeholder="e.g. 5-7 days"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="type">
                        Type of Journey
                      </label>
                      <select className="form-select" id="type" name="type">
                        <option value="">Select style...</option>
                        <option value="private">Private Journey</option>
                        <option value="family">Family / Multi-Generational</option>
                        <option value="small-group">Small Group</option>
                        <option value="tailor-made">Tailor-Made</option>
                        <option value="premium">Premium Kashmir</option>
                        <option value="special">Special Interest</option>
                        <option value="roots">Return to Roots</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="budget">
                        Approximate Budget Range
                      </label>
                      <select className="form-select" id="budget" name="budget">
                        <option value="">Select range...</option>
                        <option value="moderate">Moderate</option>
                        <option value="premium">Premium</option>
                        <option value="luxury">Luxury</option>
                        <option value="flexible">Flexible / Open</option>
                      </select>
                    </div>
                    <div className="form-group full-width">
                      <label className="form-label" htmlFor="interests">
                        What interests you most about Kashmir?
                      </label>
                      <textarea
                        className="form-textarea"
                        id="interests"
                        name="interests"
                        placeholder="Heritage, sacred geography, temples, food, nature, family reconnection, slow travel, specific regions..."
                        rows={3}
                      />
                    </div>
                    <div className="form-group full-width">
                      <label className="form-label" htmlFor="details">
                        Anything else you&apos;d like us to know?
                      </label>
                      <textarea
                        className="form-textarea"
                        id="details"
                        name="details"
                        placeholder="Special requirements, accessibility needs, specific places you want to visit, family history connections..."
                        rows={4}
                      />
                    </div>
                  </div>

                  <div
                    style={{
                      marginTop: 'var(--space-8)',
                      display: 'flex',
                      gap: '1.5rem',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                    }}
                  >
                    <button type="submit" className="btn btn-primary btn-lg">
                      Send Enquiry
                    </button>
                    <span
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--color-warm-gray)',
                        letterSpacing: '0.02em',
                      }}
                    >
                      ✦ We review and respond within 24 hours.
                    </span>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </RevealOnScroll>
        </div>
      </section>

      {/* Direct Contact Alternative */}
      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
              <span className="section-label">Prefer a conversation?</span>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  marginTop: '0.75rem',
                  marginBottom: '1rem',
                }}
              >
                Contact Us Directly
              </h2>
              <div className="gold-divider" />
              <p
                style={{
                  color: 'var(--color-warm-gray)',
                  fontSize: '0.9375rem',
                  marginBottom: '2rem',
                }}
              >
                If you prefer speaking with us directly or asking quick questions before submitting your requirements, we are easily reached.
              </p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  alignItems: 'center',
                }}
              >
                <a
                  href="https://wa.me/919999999999"
                  className="btn btn-outline btn-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
                <div
                  style={{
                    display: 'flex',
                    gap: '2rem',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    marginTop: '1rem',
                    fontSize: '0.9375rem',
                    color: 'var(--color-warm-gray)',
                  }}
                >
                  <span>
                    Email:{' '}
                    <a
                      href="mailto:hello@kashirwath.com"
                      style={{ color: 'var(--color-gold)' }}
                    >
                      hello@kashirwath.com
                    </a>
                  </span>
                  <span>
                    Phone:{' '}
                    <a
                      href="tel:+919999999999"
                      style={{ color: 'var(--color-gold)' }}
                    >
                      +91 99999 99999
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
