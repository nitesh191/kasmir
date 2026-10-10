'use client'

import { useEffect, useRef } from 'react'

export default function RevealOnScroll({ children, className = '', delay = 0 }) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${delay > 0 ? `reveal-delay-${delay}` : ''} ${className}`}
    >
      {children}
    </div>
  )
}
