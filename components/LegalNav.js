'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const legalLinks = [
  { label: 'Booking & Cancellation Policy', href: '/policies/booking' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
]

export default function LegalNav() {
  const pathname = usePathname()

  return (
    <nav className="legal-nav" aria-label="Legal pages">
      {legalLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={pathname === link.href ? 'active' : ''}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
