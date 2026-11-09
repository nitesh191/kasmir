'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

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
      setScrolled(window.scrollY > 30)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Reset mobile menu when route changes
  const [prevPathname, setPrevPathname] = useState(pathname)
  if (prevPathname !== pathname) {
    setPrevPathname(pathname)
    setMobileOpen(false)
    setExpandedMobile(null)
  }

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setMobileOpen(false)
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  // Helper to determine if a route or its children are active
  const isItemActive = (item) => {
    if (item.href === '/') {
      return pathname === '/'
    }
    if (pathname === item.href) return true
    if (pathname.startsWith(item.href + '/')) return true
    if (item.children) {
      return item.children.some(
        (child) => pathname === child.href || pathname.startsWith(child.href + '/')
      )
    }
    return false
  }

  return (
    <>
      <header
        className={`header ${scrolled ? 'header-scrolled' : ''}`}
        id="site-header"
      >
        <div className="header-inner">
          <Link href="/" className="logo" aria-label="Kashir Wath — Home">
            <span className="logo-name">Kashir Wath</span>
            <span className="logo-tagline">Soulful Journeys Through Kashir</span>
          </Link>

          <nav className="nav" aria-label="Main navigation">
            {navItems.map((item) => {
              const active = isItemActive(item)
              return (
                <div key={item.href} className="nav-item">
                  <Link
                    href={item.href}
                    className={`nav-link ${active ? 'active' : ''}`}
                    style={active ? { color: 'var(--color-gold)' } : undefined}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="nav-dropdown">
                      {item.children.map((child) => {
                        const childActive = pathname === child.href
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`nav-dropdown-link ${childActive ? 'active' : ''}`}
                            style={
                              childActive
                                ? {
                                    color: 'var(--color-gold)',
                                    background: 'rgba(197, 165, 90, 0.08)',
                                    borderLeftColor: 'var(--color-gold)',
                                  }
                                : undefined
                            }
                          >
                            {child.label}
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          <div className="nav-cta">
            <Link href="/plan-your-journey" className="btn btn-primary btn-sm">
              Plan Your Journey
            </Link>
          </div>

          <button
            className={`mobile-toggle ${mobileOpen ? 'active' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer with Framer Motion */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-nav active"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Dedicated Top Bar inside Drawer with explicit Close Button */}
            <div className="mobile-nav-topbar">
              <Link
                href="/"
                className="logo"
                onClick={() => setMobileOpen(false)}
                aria-label="Kashir Wath — Home"
              >
                <span className="logo-name">Kashir Wath</span>
                <span className="logo-tagline">Soulful Journeys Through Kashir</span>
              </Link>
              <button
                type="button"
                className="mobile-nav-close-btn"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <span className="mobile-nav-close-text">CLOSE</span>
                <span className="mobile-nav-close-icon" aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="mobile-nav-inner">
              <div className="mobile-nav-list">
                {navItems.map((item, idx) => {
                  const active = isItemActive(item)
                  return (
                    <motion.div
                      key={item.href}
                      className="mobile-nav-item"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.035, duration: 0.25 }}
                    >
                      <div className="mobile-nav-row">
                        <Link
                          href={item.href}
                          className={`mobile-nav-link ${active ? 'active' : ''}`}
                          onClick={() => {
                            if (!item.children) setMobileOpen(false)
                          }}
                        >
                          {item.label}
                        </Link>
                        {item.children && (
                          <button
                            type="button"
                            onClick={() =>
                              setExpandedMobile(
                                expandedMobile === item.href ? null : item.href
                              )
                            }
                            className={`mobile-nav-expand ${expandedMobile === item.href ? 'expanded' : ''}`}
                            aria-label={`Toggle ${item.label} submenu`}
                            aria-expanded={expandedMobile === item.href}
                          >
                            {expandedMobile === item.href ? '−' : '+'}
                          </button>
                        )}
                      </div>
                      {item.children && expandedMobile === item.href && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.22 }}
                          className="mobile-subnav"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`mobile-subnav-link ${pathname === child.href ? 'active' : ''}`}
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </motion.div>
                  )
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
                className="mobile-nav-actions"
              >
                <Link
                  href="/plan-your-journey"
                  className="btn btn-primary btn-lg"
                  onClick={() => setMobileOpen(false)}
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  Plan Your Journey
                </Link>
                <a
                  href="https://wa.me/919999999999"
                  className="btn btn-outline btn-lg"
                  onClick={() => setMobileOpen(false)}
                  style={{ width: '100%', textAlign: 'center' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
