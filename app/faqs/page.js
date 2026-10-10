'use client'

import { useState } from 'react'
import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import CTASection from '@/components/CTASection'

const faqs = [
  { q: 'What is Kashir Wath?', a: 'Kashir Wath is a premium, culturally-rooted travel company specialising in curated journeys through Kashmir. We are founded in Kashmiri Pandit heritage but welcome all travellers who seek to discover Kashmir beyond conventional tourism.' },
  { q: 'How are Kashir Wath journeys different from standard Kashmir tours?', a: 'We do not sell packages. Every journey is personally curated based on your interests, pace and purpose. Our guides are cultural companions — not script-readers. We select every property personally. And our understanding of Kashmir\'s heritage, sacred geography and living traditions gives depth that standard tourism cannot match.' },
  { q: 'Who is Kashir Wath for?', a: 'For anyone who wants more from Kashmir than sightseeing. Whether you are a Kashmiri Pandit reconnecting with heritage, a family seeking cultural transmission, a premium traveller wanting something thoughtful, or a curious explorer seeking the real Kashir — we design journeys for you.' },
  { q: 'Is Kashir Wath only for Kashmiri Pandits?', a: 'Absolutely not. While our cultural foundation is rooted in KP heritage, our journeys are designed for all travellers. Our KP roots give us depth and authenticity — which enriches every guest\'s experience, regardless of their background.' },
  { q: 'How do I start planning a journey?', a: 'Simply fill out our Plan Your Journey form, WhatsApp us, or email us. We begin with a conversation — understanding what you seek — and then curate a journey proposal tailored to you.' },
  { q: 'What is the best time to visit Kashmir?', a: 'Every season offers something different. Spring (March-May) brings blossoms and Navreh. Summer (June-August) offers mountain meadows and Jyeshta Ashtami. Autumn (September-November) brings golden chinars and saffron harvest. Winter (December-February) offers snow and Herath. We help you choose based on what you seek.' },
  { q: 'How far in advance should I plan?', a: 'We recommend 4-8 weeks for standard journeys and 2-3 months for peak season (April-June, September-October) or festival-timed journeys. However, we can sometimes accommodate shorter timelines.' },
  { q: 'What about safety in Kashmir?', a: 'Kashmir has been welcoming tourists safely for years. We monitor conditions closely, maintain local intelligence networks, and adjust itineraries as needed. Your safety and comfort are always our first priority.' },
  { q: 'Do you offer group tours?', a: 'We offer Small Group Journeys on select dates — intimate groups of 6-12 like-minded travellers. These are curated, not mass-market. Most of our journeys are private or family-based.' },
  { q: 'What is included in the journey price?', a: 'Typically: accommodation, private transport, expert cultural guide, curated experiences, meals as specified, and continuous support. We provide a detailed breakdown with every journey proposal.' },
  { q: 'Can you help with heritage / ancestral visits?', a: 'Yes — this is one of our specialities. We design Return to Roots journeys for Kashmiri Pandit families seeking to visit ancestral neighbourhoods, temples and places of family memory. We handle these with particular sensitivity and care.' },
]

function FAQ({ faq }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="card" style={{ padding: 0, marginBottom: 'var(--space-3)' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          padding: 'var(--space-6)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          textAlign: 'left',
          color: 'var(--color-ivory)',
          fontFamily: 'var(--font-heading)',
          fontSize: 'var(--text-xl)',
          fontWeight: 400,
          cursor: 'pointer',
          background: 'none',
          border: 'none',
        }}
      >
        <span>{faq.q}</span>
        <span style={{ color: 'var(--color-gold)', fontSize: 'var(--text-2xl)', flexShrink: 0, marginLeft: '1rem' }}>
          {open ? '−' : '+'}
        </span>
      </button>
      {open && (
        <div style={{ padding: '0 var(--space-6) var(--space-6)', color: 'var(--color-warm-gray)', fontSize: 'var(--text-sm)', lineHeight: 1.8 }}>
          {faq.a}
        </div>
      )}
    </div>
  )
}

export default function FAQs() {
  return (
    <>
      <PageHero
        image="/images/hero.jpg"
        label="FAQs"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about travelling with Kashir Wath."
        breadcrumbs={[{ label: 'FAQs' }]}
        compact
      />
      <section className="section-lg">
        <div className="container" style={{ maxWidth: '800px' }}>
          <RevealOnScroll>
            {faqs.map((faq, i) => (
              <FAQ key={i} faq={faq} />
            ))}
          </RevealOnScroll>
        </div>
      </section>
      <CTASection />
    </>
  )
}
