'use client'

import { useState } from 'react'
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
        <div className="container" style={{ maxWidth: '900px' }}>
          <RevealOnScroll>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: 'var(--space-16) 0' }}>
                <h2 style={{ marginBottom: '1.5rem', color: 'var(--color-gold)' }}>
                  Thank You
                </h2>
                <div className="gold-divider" />
                <p style={{ margin: '1.5rem auto', maxWidth: '500px', fontSize: 'var(--text-lg)' }}>
                  Your enquiry has been received. We will review your details and respond within
                  24 hours with thoughtful suggestions for your journey.
                </p>
                <p style={{ fontFamily: 'var(--font-accent)', fontStyle: 'italic', color: 'var(--color-gold)', fontSize: 'var(--text-xl)', marginTop: '2rem' }}>
                  Kashir awaits.
                </p>
              </div>
            ) : (
              <form className="plan-form" onSubmit={handleSubmit}>
                <h2 style={{ marginBottom: '0.5rem' }}>Tell Us About Your Journey</h2>
                <p style={{ marginBottom: '2rem', fontSize: 'var(--text-sm)' }}>
                  Every field helps us understand what you seek. Share as much or as little as you wish.
                </p>

                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Your Name *</label>
                    <input className="form-input" type="text" id="name" name="name" required placeholder="Full name" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email *</label>
                    <input className="form-input" type="email" id="email" name="email" required placeholder="your@email.com" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone / WhatsApp</label>
                    <input className="form-input" type="tel" id="phone" name="phone" placeholder="+91 ..." />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="guests">Number of Guests</label>
                    <input className="form-input" type="text" id="guests" name="guests" placeholder="e.g. 2 adults, 1 child" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="dates">Preferred Travel Dates</label>
                    <input className="form-input" type="text" id="dates" name="dates" placeholder="e.g. October 2025 / flexible" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="duration">Duration</label>
                    <input className="form-input" type="text" id="duration" name="duration" placeholder="e.g. 5-7 days" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="type">Type of Journey</label>
                    <select className="form-select" id="type" name="type">
                      <option value="">Select...</option>
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
                    <label className="form-label" htmlFor="budget">Approximate Budget Range</label>
                    <select className="form-select" id="budget" name="budget">
                      <option value="">Select...</option>
                      <option value="moderate">Moderate</option>
                      <option value="premium">Premium</option>
                      <option value="luxury">Luxury</option>
                      <option value="flexible">Flexible / Open</option>
                    </select>
                  </div>
                  <div className="form-group full-width">
                    <label className="form-label" htmlFor="interests">What interests you most about Kashmir?</label>
                    <textarea className="form-textarea" id="interests" name="interests" placeholder="Heritage, spirituality, food, nature, family reconnection, slow travel, specific places..." rows={3} />
                  </div>
                  <div className="form-group full-width">
                    <label className="form-label" htmlFor="details">Anything else you'd like us to know?</label>
                    <textarea className="form-textarea" id="details" name="details" placeholder="Special requirements, accessibility needs, specific places you want to visit, family history connections..." rows={4} />
                  </div>
                </div>

                <div style={{ marginTop: 'var(--space-8)', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <button type="submit" className="btn btn-primary btn-lg">
                    Send Enquiry
                  </button>
                  <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-warm-gray)' }}>
                    We respond within 24 hours.
                  </span>
                </div>
              </form>
            )}
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-lg" style={{ background: 'var(--color-black-light)' }}>
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
              <span className="section-label">Prefer a conversation?</span>
              <h2 style={{ marginTop: '1rem', marginBottom: '1rem' }}>Contact Us Directly</h2>
              <div className="gold-divider" />
              <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                <a href="https://wa.me/919999999999" className="btn btn-outline btn-lg" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-warm-gray)' }}>
                  Email: <a href="mailto:hello@kashirwath.com" style={{ color: 'var(--color-gold)' }}>hello@kashirwath.com</a>
                </p>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-warm-gray)' }}>
                  Phone: <a href="tel:+919999999999" style={{ color: 'var(--color-gold)' }}>+91 99999 99999</a>
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
