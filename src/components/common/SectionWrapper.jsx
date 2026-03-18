import { motion } from 'framer-motion'
import { staggerContainer, viewportConfig } from '../../utils/animations'

export default function SectionWrapper({
  id,
  children,
  className = '',
  background = 'white', // 'white' | 'surface' | 'dark' | 'transparent'
}) {
  const bgClasses = {
    white: 'bg-white/60 backdrop-blur-sm',
    surface: 'bg-gray-50/40 backdrop-blur-sm',
    dark: 'bg-primary-950 text-white',
    transparent: 'bg-transparent',
  }

  return (
    <section
      id={id}
      className={`relative py-24 sm:py-32 section-padding ${bgClasses[background] || ''} ${className}`}
    >
      <motion.div
        className="max-container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        {children}
      </motion.div>
    </section>
  )
}