import Link from 'next/link'
import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import LegalNav from '@/components/LegalNav'

export const metadata = {
  title: 'Legal & Travel Policies | Kashir Wath',
  description:
    'Complete legal, booking, safety and travel policies governing Kashir Wath journeys, heritage experiences, and website operations.',
}

const primaryPolicies = [
  {
    num: '01',
    title: 'Terms & Conditions',
    badge: 'Master Document',
    href: '/terms',
    desc: 'The master contract governing website access, itinerary bookings, traveller duties, payment terms, and liability limits across all Kashir Wath services.',
  },
  {
    num: '02',
    title: 'Booking, Cancellation & Refund Policy',
    badge: 'Operational Policy',
    href: '/policies/booking',
    desc: 'Comprehensive procedures for booking confirmations, scheduled payments, tier-based cancellation refunds, non-refundable suppliers, and force majeure travel interruptions.',
  },
  {
    num: '03',
    title: 'Website Disclaimer & Intellectual Property',
    badge: 'Legal & IP',
    href: '/policies/disclaimer',
    desc: 'Legal protections safeguarding our proprietary cultural research, curated journey routes, written texts, photographs, brand identity, and trademark rights.',
  },
  {
    num: '04',
    title: 'Travel & Safety Policy',
    badge: 'Safety Guidelines',
    href: '/policies/travel-safety',
    desc: 'Essential guest safety guidelines, high-altitude acclimatisation protocols, seasonal mountain road advisories, vehicle standards, and emergency preparedness in Kashmir.',
  },
  {
    num: '05',
    title: 'Responsible Travel Policy',
    badge: 'Ethics & Heritage',
    href: '/policies/responsible-travel',
    desc: 'Our code of ethical exploration — honouring sacred shrines, respecting Kashmiri Pandit traditions, minimising environmental impact, and supporting local artisan communities.',
  },
  {
    num: '06',
    title: 'Modification & Rescheduling Policy',
    badge: 'Booking Rules',
    href: '/policies/modification',
    desc: 'Clear terms and administrative procedures for guest-initiated date changes, itinerary alterations, guest name substitutions, and rescheduling requests.',
  },
  {
    num: '07',
    title: 'Complaints & Grievance Redressal',
    badge: 'Guest Protection',
    href: '/policies/complaints',
    desc: 'Our transparent 3-level grievance redressal framework ensuring prompt on-ground assistance, formal written review, and timely dispute resolution for our guests.',
  },
  {
    num: '08',
    title: 'Privacy Policy',
    badge: 'Data Protection',
    href: '/privacy',
    desc: 'Our strict commitments regarding personal data collection, guest privacy, secure communications, and transparent information practices.',
  },
]

const integratedPolicies = [
  {
    num: '09',
    title: 'Children & Senior Citizens Travel Policy',
    status: 'Integrated in Master Terms',
    desc: 'Special travel considerations, guardian consents, physical suitability guidelines, and pacing recommendations for families travelling with children or elderly members. Fully governed under Section 15 of our Master Terms & Conditions and Travel Safety Guidelines.',
    href: '/terms#children-seniors',
    linkText: 'View Terms & Conditions §15',
  },
  {
    num: '10',
    title: 'Health, Safety & Risk Disclosure Policy',
    status: 'Integrated in Master Terms',
    desc: 'Pre-existing medical disclosure requirements, high-altitude advisories, and the contractual assumption of inherent mountain travel risks. Governed under Sections 12–14 of our Master Terms & Conditions and Travel & Safety Policy.',
    href: '/policies/travel-safety',
    linkText: 'View Travel & Safety Policy',
  },
  {
    num: '11',
    title: 'Force Majeure & Unforeseen Events Policy',
    status: 'Integrated in Booking Policy',
    desc: 'Detailed handling of weather blockades, road closures, government travel restrictions, airline disruptions, and severe disruptions beyond reasonable control. Established under Section 7 of our Booking Policy and Section 19 of our Master Terms.',
    href: '/policies/booking#force-majeure',
    linkText: 'View Booking Policy §7',
  },
]

export default function PoliciesHubPage() {
  return (
    <>
      <PageHero
        image="/images/hero.jpg"
        label="Governance & Trust"
        title="Legal & Travel Policies"
        subtitle="Soulful Journeys Through Kashir — Complete frameworks governing your bookings, travel safety, intellectual property and our shared journey."
        breadcrumbs={[{ label: 'Policies' }]}
        compact
      />

      <section className="legal-page">
        <div className="legal-container">
          <RevealOnScroll>
            <LegalNav />
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="legal-intro">
              <p>
                KASHIR WATH curates meaningful, heritage-led journeys through Kashmir. We believe that
                meaningful travel is rooted in mutual trust, cultural respect, transparent commitments,
                and unwavering guest safety. The following policy framework sets out our operational
                standards, legal terms, guest protections, and ethical guidelines.
              </p>
            </div>
          </RevealOnScroll>

          {/* Primary Policies Grid */}
          <RevealOnScroll>
            <div className="legal-section" style={{ marginBottom: 'var(--space-8)' }}>
              <span className="legal-section-number">Section 01</span>
              <h2>Published Policies & Frameworks</h2>
              <p>
                Please review the individual policies applicable to your journey, website usage, or
                service enquiry. Each document provides full, unabridged terms governing our relationship.
              </p>
            </div>

            <div className="policy-grid">
              {primaryPolicies.map((p) => (
                <Link key={p.href} href={p.href} className="policy-card">
                  <div>
                    <div className="policy-card-meta">
                      <span className="policy-card-num">{p.num}</span>
                      <span className="policy-card-badge">{p.badge}</span>
                    </div>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </div>
                  <div className="policy-card-action">
                    Read Policy <span>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </RevealOnScroll>

          {/* Integrated Policies Section */}
          <RevealOnScroll>
            <div className="legal-section" style={{ marginTop: 'var(--space-12)', marginBottom: 'var(--space-8)' }}>
              <span className="legal-section-number">Section 02</span>
              <h2>Specialised & Integrated Guidelines</h2>
              <p>
                The following policy frameworks are integrated directly within our published Master Terms
                & Conditions and Booking Policy documents. They form an indivisible part of your travel
                agreement with KASHIR WATH.
              </p>
            </div>

            <div className="policy-grid">
              {integratedPolicies.map((p) => (
                <div key={p.num} className="policy-card" style={{ cursor: 'default' }}>
                  <div>
                    <div className="policy-card-meta">
                      <span className="policy-card-num">{p.num}</span>
                      <span className="policy-card-badge pending">{p.status}</span>
                    </div>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </div>
                  <Link href={p.href} className="policy-card-action" style={{ textDecoration: 'none' }}>
                    {p.linkText} <span>→</span>
                  </Link>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* Contact & Governance Info */}
          <RevealOnScroll>
            <div className="legal-section" style={{ marginTop: 'var(--space-12)' }}>
              <span className="legal-section-number">Section 03</span>
              <h2>Governance, Transparency & Guest Redressal</h2>
              <p>
                KASHIR WATH is committed to resolving all guest enquiries, booking modifications, and
                grievances promptly and fairly. If you have any questions regarding these policies, please
                reach out through our official channels:
              </p>
              <div
                style={{
                  background: 'var(--color-black-light)',
                  border: 'var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-6)',
                  marginTop: 'var(--space-4)',
                }}
              >
                <p style={{ margin: 0, lineHeight: 1.9 }}>
                  <strong>Brand:</strong> KASHIR WATH<br />
                  <strong>Tagline:</strong> Soulful Journeys Through Kashir<br />
                  <strong>Website:</strong> [Insert Official Website URL]<br />
                  <strong>Official Email:</strong> [Insert Official Business Email]<br />
                  <strong>Proprietor:</strong> [Insert Full Legal Name]<br />
                  <strong>Principal Place of Business:</strong> [Insert Complete Business Address], New Delhi, Delhi, India<br />
                  <strong>GSTIN:</strong> [Insert GSTIN, if applicable]
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Footer */}
          <RevealOnScroll>
            <div className="legal-footer">
              <p className="legal-brand">KASHIR WATH</p>
              <p className="legal-tagline">Soulful Journeys Through Kashir</p>
              <p>
                Ethical travel · Cultural integrity · Uncompromising guest care · Kashmir preserved
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
