'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function BeyondKashirEnquiry({
  contextTitle,
  region = 'Jammu',
  journeySlug = '',
  mode = 'journey', // 'journey' | 'bespoke'
}) {
  const [sent, setSent] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [dates, setDates] = useState('')
  const [notes, setNotes] = useState('')

  const whatsappText = encodeURIComponent(
    `Namaskar Kashir Wath, I would like to enquire about ${contextTitle} (${region}) under Beyond Kashir.`
  )
  const whatsappHref = `https://wa.me/919999999999?text=${whatsappText}`

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div
      className="card"
      style={{
        padding: 'var(--space-8)',
        border: '1px solid rgba(197, 165, 90, 0.28)',
        background:
          'linear-gradient(180deg, rgba(20, 20, 20, 0.98) 0%, rgba(12, 12, 12, 0.98) 100%)',
      }}
    >
      <span className="section-label" style={{ paddingLeft: 0, justifyContent: 'flex-start' }}>
        {mode === 'bespoke' ? 'Bespoke Curation' : 'Journey Enquiry'}
      </span>
      <h3
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'var(--text-2xl)',
          color: '#FFFFFF',
          marginTop: '0.5rem',
          marginBottom: '0.75rem',
        }}
      >
        {mode === 'bespoke'
          ? `Enquire for a Bespoke Journey: ${contextTitle}`
          : `Plan ${contextTitle}`}
      </h3>
      <p style={{ fontSize: 'var(--text-sm)', marginBottom: '1.5rem' }}>
        Pricing is shaped around your preferred travel dates, accommodation tier, and private
        arrangements. Share your details or connect directly via WhatsApp.
      </p>

      {sent ? (
        <div
          style={{
            padding: 'var(--space-6)',
            background: 'rgba(197, 165, 90, 0.08)',
            border: '1px solid rgba(197, 165, 90, 0.35)',
            borderRadius: 'var(--radius-md)',
          }}
        >
          <p style={{ color: 'var(--color-gold-light)', fontWeight: 500, marginBottom: '0.5rem' }}>
            Enquiry Received — {contextTitle}
          </p>
          <p style={{ fontSize: 'var(--text-sm)', marginBottom: '1rem' }}>
            Thank you, {name || 'Traveller'}. Our Beyond Kashir curation desk will respond within
            24 hours with a tailored route and availability note.
          </p>
          <button
            type="button"
            className="btn btn-outline btn-sm"
            onClick={() => setSent(false)}
          >
            Send Another Note
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="form-grid" style={{ gap: '1rem' }}>
            <div>
              <label className="form-label" htmlFor={`bk-name-${journeySlug || 'custom'}`}>
                Full Name *
              </label>
              <input
                id={`bk-name-${journeySlug || 'custom'}`}
                type="text"
                required
                className="form-input"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="form-label" htmlFor={`bk-email-${journeySlug || 'custom'}`}>
                Email *
              </label>
              <input
                id={`bk-email-${journeySlug || 'custom'}`}
                type="email"
                required
                className="form-input"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="form-grid" style={{ gap: '1rem' }}>
            <div>
              <label className="form-label" htmlFor={`bk-phone-${journeySlug || 'custom'}`}>
                Phone / WhatsApp *
              </label>
              <input
                id={`bk-phone-${journeySlug || 'custom'}`}
                type="tel"
                required
                className="form-input"
                placeholder="+91 98..."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <label className="form-label" htmlFor={`bk-dates-${journeySlug || 'custom'}`}>
                Preferred Window & Guests
              </label>
              <input
                id={`bk-dates-${journeySlug || 'custom'}`}
                type="text"
                className="form-input"
                placeholder="e.g. October · 4 Guests"
                value={dates}
                onChange={(e) => setDates(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="form-label" htmlFor={`bk-notes-${journeySlug || 'custom'}`}>
              What draws you to this journey?
            </label>
            <textarea
              id={`bk-notes-${journeySlug || 'custom'}`}
              className="form-textarea"
              rows={3}
              placeholder="Share pace, spiritual or heritage interests, or accommodation preferences..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              style={{ minHeight: '90px' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginTop: '0.25rem' }}>
            <button type="submit" className="btn btn-primary">
              Request Curated Proposal
            </button>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              WhatsApp Enquiry
            </a>
            <Link
              href={`/plan-your-journey?region=${encodeURIComponent(region)}${
                journeySlug ? `&journey=${encodeURIComponent(journeySlug)}` : ''
              }`}
              className="btn btn-ghost"
            >
              Full Journey Planner →
            </Link>
          </div>
        </form>
      )}
    </div>
  )
}
