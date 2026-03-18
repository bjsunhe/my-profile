import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * Animates a number from 0 to `target` when scrolled into view.
 *
 * @param {number} target - The final number
 * @param {string} prefix - e.g. "€"
 * @param {string} suffix - e.g. "%"
 * @param {number} duration - Animation duration in ms
 * @param {boolean} separator - Use thousand separators
 */
export default function AnimatedCounter({
  target,
  prefix = '',
  suffix = '',
  duration = 2000,
  separator = true,
  className = '',
}) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    const startTime = performance.now()

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, target, duration])

  const formatted = separator
    ? count.toLocaleString('en-US')
    : count.toString()

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {prefix}
      {formatted}
      {suffix}
    </motion.span>
  )
}