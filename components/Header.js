'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'Discover Kashir',
    href: '/discover',
    children: [
      { label: 'More Than a Destination', href: '/discover/more-than-a-destination' },
      { label: 'A Civilisation', href: '/discover/a-civilisation' },
      { label: 'Kashir Vatista', href: '/discover/kashir-vatista' },
      { label: 'Kashir Sutra', href: '/discover/kashir-sutra' },
      { label: 'Kashir Vaas', href: '/discover/kashir-vaas' },
      { label: 'Kashir Ritu', href: '/discover/kashir-ritu' },
      { label: 'Kashir Ghar Panun', href: '/discover/kashir-ghar-panun' },
    ],
  },
  {
    label: 'Panun Kashir',
    href: '/panun-kashir',
    children: [
      { label: 'Sacred Kashir', href: '/panun-kashir/sacred-kashir' },
      { label: 'Return to Roots', href: '/panun-kashir/return-to-roots' },
      { label: 'Next Generation', href: '/panun-kashir/next-generation' },
      { label: 'Remembering Kashir', href: '/panun-kashir/remembering-kashir' },
    ],
  },
  {
    label: 'Experiences',
    href: '/experiences',
    children: [
      { label: 'Heritage & History', href: '/experiences/heritage-history' },
      { label: 'Sacred & Spiritual', href: '/experiences/sacred-spiritual' },
      { label: 'Culture & Living Traditions', href: '/experiences/culture-traditions' },
      { label: 'Food & Culinary', href: '/experiences/food-culinary' },
      { label: 'Arts & Crafts', href: '/experiences/arts-crafts' },
      { label: 'Nature & Landscapes', href: '/experiences/nature' },
      { label: 'Slow Kashmir', href: '/experiences/slow-kashmir' },
    ],
  },
  {
    label: 'Journeys',
    href: '/journeys',
    children: [
      { label: 'Private Journeys', href: '/journeys/private' },
      { label: 'Small Group', href: '/journeys/small-group' },
      { label: 'Family Journeys', href: '/journeys/family' },
      { label: 'Tailor-Made', href: '/journeys/tailor-made' },
      { label: 'Premium Kashmir', href: '/journeys/premium' },
    ],
  },
  { label: 'Journal', href: '/journal' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Philosophy', href: '/about/philosophy' },
      { label: 'The Founder', href: '/about/founder' },
      { label: 'Story Behind the Name', href: '/about/story' },
      { label: 'Our Promise', href: '/about/promise' },
    ],
  },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [expandedMobile, setExpandedMobile] = useState(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setExpandedMobile(null)
  }, [pathname])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header className={`header ${scrolled ? 'header-scrolled' : ''}`} id="site-header">
        <div className="header-inner">
          <Link href="/" className="logo" aria-label="Kashir Wath — Home">
            <span className="logo-name">KASHIR WATH</span>
            <span className="logo-tagline">Soulful Journeys Through Kashir</span>
          </Link>

          <nav className="nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <div key={item.href} className="nav-item">
                <Link href={item.href} className="nav-link">
                  {item.label}
                </Link>
                {item.children && (
                  <div className="nav-dropdown">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="nav-dropdown-link"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="nav-cta">
            <Link href="/plan-your-journey" className="btn btn-primary btn-sm">
              Plan Your Journey
            </Link>
          </div>

          <button
            className={`mobile-toggle ${mobileOpen ? 'active' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className={`mobile-nav ${mobileOpen ? 'active' : ''}`}>
        {navItems.map((item) => (
          <div key={item.href}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Link href={item.href} className="mobile-nav-link">
                {item.label}
              </Link>
              {item.children && (
                <button
                  onClick={() =>
                    setExpandedMobile(expandedMobile === item.href ? null : item.href)
                  }
                  style={{
                    color: 'var(--color-gold)',
                    fontSize: '1.5rem',
                    padding: '0.5rem',
                  }}
                  aria-label={`Expand ${item.label} submenu`}
                >
                  {expandedMobile === item.href ? '−' : '+'}
                </button>
              )}
            </div>
            {item.children && expandedMobile === item.href && (
              <div style={{ paddingLeft: '1.5rem', paddingBottom: '0.5rem' }}>
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="mobile-nav-link"
                    style={{ fontSize: '1.125rem', borderBottom: 'none', color: 'var(--color-warm-gray)' }}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <div style={{ marginTop: 'var(--space-8)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Link href="/plan-your-journey" className="btn btn-primary btn-lg w-full">
            Plan Your Journey
          </Link>
          <a
            href="https://wa.me/919999999999"
            className="btn btn-outline btn-lg w-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </>
  )
}
