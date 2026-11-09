'use client'

import { motion, useReducedMotion } from 'framer-motion'

export default function RevealOnScroll({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.7,
  style = {},
  ...props
}) {
  const shouldReduceMotion = useReducedMotion()

  // Calculate delay in seconds
  const delaySec = typeof delay === 'number' && delay > 10 ? delay / 1000 : delay * 0.12

  // Initial offset based on direction
  const offset = {
    up: { y: 28, x: 0 },
    down: { y: -28, x: 0 },
    left: { x: 28, y: 0 },
    right: { x: -28, y: 0 },
    none: { x: 0, y: 0 },
  }[direction] || { y: 28, x: 0 }

  if (shouldReduceMotion) {
    return (
      <div className={className} style={style} {...props}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: duration,
        delay: delaySec,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
