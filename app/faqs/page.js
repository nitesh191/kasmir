'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import CTASection from '@/components/CTASection'

const faqs = [
  {
    q: 'What is Kashir Wath?',
    a: 'Kashir Wath is a premium, culturally-rooted travel company specialising in curated journeys through Kashmir. We are founded in Kashmiri Pandit heritage but welcome all travellers who seek to discover Kashmir beyond conventional tourism.',
  },
  {
    q: 'How are Kashir Wath journeys different from standard Kashmir tours?',
    a: "We do not sell packages. Every journey is personally curated based on your interests, pace and purpose. Our guides are cultural companions — not script-readers. We select every property personally. And our understanding of Kashmir's heritage, sacred geography and living traditions gives depth that standard tourism cannot match.",
  },
  {
    q: 'Who is Kashir Wath for?',
    a: 'For anyone who wants more from Kashmir than sightseeing. Whether you are a Kashmiri Pandit reconnecting with heritage, a family seeking cultural transmission, a premium traveller wanting something thoughtful, or a curious explorer seeking the real Kashir — we design journeys for you.',
  },
  {
    q: 'Is Kashir Wath only for Kashmiri Pandits?',
    a: "Absolutely not. While our cultural foundation is rooted in KP heritage, our journeys are designed for all travellers. Our KP roots give us depth and authenticity — which enriches every guest's experience, regardless of their background.",
  },
  {
    q: 'How do I start planning a journey?',
    a: 'Simply fill out our Plan Your Journey form, WhatsApp us, or email us. We begin with a conversation — understanding what you seek — and then curate a journey proposal tailored to you.',
  },
  {
    q: 'What is the best time to visit Kashmir?',
    a: 'Every season offers something different. Spring (March-May) brings blossoms and Navreh. Summer (June-August) offers mountain meadows and Jyeshta Ashtami. Autumn (September-November) brings golden chinars and saffron harvest. Winter (December-February) offers snow and Herath. We help you choose based on what you seek.',
  },
  {
    q: 'How far in advance should I plan?',
    a: 'We recommend 4-8 weeks for standard journeys and 2-3 months for peak season (April-June, September-October) or festival-timed journeys. However, we can sometimes accommodate shorter timelines.',
  },
  {
    q: 'What about safety in Kashmir?',
    a: 'Kashmir has been welcoming tourists safely for years. We monitor conditions closely, maintain local intelligence networks, and adjust itineraries as needed. Your safety and comfort are always our first priority.',
  },
  {
    q: 'Do you offer group tours?',
    a: 'We offer Small Group Journeys on select dates — intimate groups of 6-12 like-minded travellers. These are curated, not mass-market. Most of our journeys are private or family-based.',
  },
  {
    q: 'What is included in the journey price?',
    a: 'Typically: accommodation, private transport, expert cultural guide, curated experiences, meals as specified, and continuous support. We provide a detailed breakdown with every journey proposal.',
  },
  {
    q: 'Can you help with heritage / ancestral visits?',
    a: 'Yes — this is one of our specialities. We design Return to Roots journeys for Kashmiri Pandit families seeking to visit ancestral neighbourhoods, temples and places of family memory. We handle these with particular sensitivity and care.',
  },
]

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="card"
      style={{
        padding: 0,
        marginBottom: 'var(--space-4)',
        borderColor: open ? 'rgba(197, 165, 90, 0.35)' : 'rgba(255, 255, 255, 0.08)',
        background: open ? 'rgba(22, 22, 22, 0.95)' : 'var(--color-black-light)',
        transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: '100%',
          padding: '1.35rem 1.75rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          textAlign: 'left',
          color: open ? 'var(--color-gold-light)' : 'var(--color-ivory)',
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.15rem, 2vw, 1.35rem)',
          fontWeight: 400,
          cursor: 'pointer',
          background: 'none',
          border: 'none',
          transition: 'color 0.25s ease',
        }}
      >
        <span style={{ paddingRight: '1rem' }}>{faq.q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{
            color: 'var(--color-gold)',
            fontSize: '1.5rem',
            lineHeight: 1,
            flexShrink: 0,
            display: 'inline-block',
          }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div
              style={{
                padding: '0 1.75rem 1.5rem',
                color: 'var(--color-warm-gray)',
                fontSize: '0.9375rem',
                lineHeight: 1.8,
                borderTop: '1px solid rgba(197, 165, 90, 0.12)',
                paddingTop: '1rem',
              }}
            >
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
        <div className="container" style={{ maxWidth: '840px' }}>
          <RevealOnScroll>
            {faqs.map((faq, i) => (
              <FAQItem key={faq.q} faq={faq} index={i} />
            ))}
          </RevealOnScroll>
        </div>
      </section>
      <CTASection />
    </>
  )
}
