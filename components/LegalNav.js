'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const legalLinks = [
  { label: 'All Policies', href: '/policies' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Booking & Cancellation', href: '/policies/booking' },
  { label: 'Disclaimer & IP', href: '/policies/disclaimer' },
  { label: 'Responsible Travel', href: '/policies/responsible-travel' },
  { label: 'Travel & Safety', href: '/policies/travel-safety' },
  { label: 'Modification', href: '/policies/modification' },
  { label: 'Complaints', href: '/policies/complaints' },
  { label: 'Privacy Policy', href: '/privacy' },
]

export default function LegalNav() {
  const pathname = usePathname()

  const isSubPolicy = pathname !== '/policies'

  return (
    <div className="legal-nav-wrapper">
      {isSubPolicy && (
        <div className="legal-nav-header">
          <Link href="/policies" className="legal-back-link">
            <span aria-hidden="true">←</span> Back to all policies
          </Link>
        </div>
      )}
      <nav className="legal-nav" aria-label="Legal & Policies navigation">
        {legalLinks.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href === '/policies/disclaimer' &&
              pathname === '/policies/website-disclaimer-intellectual-property') ||
            (link.href === '/policies/modification' &&
              pathname === '/policies/modification-rescheduling')

          return (
            <Link
              key={link.href}
              href={link.href}
              className={isActive ? 'active' : ''}
            >
              {link.label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

