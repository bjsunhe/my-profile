import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, viewportConfig } from '../../utils/animations'

/**
 * A single timeline event with date marker, label, and children content.
 */
export default function TimelineEvent({ date, label, emoji, children }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="relative pl-0 sm:pl-20 mb-16 sm:mb-24 last:mb-0"
    >
      {/* Timeline dot — visible on sm+ */}
      <div className="absolute left-3 sm:left-6 top-1 hidden sm:flex items-center justify-center">
        <div className="relative">
          {/* Outer ring */}
          <div className="w-5 h-5 rounded-full border-2 border-primary bg-white" />
          {/* Inner dot */}
          <div className="absolute inset-1 rounded-full bg-primary" />
        </div>
      </div>

      {/* Date & Label header */}
      <motion.div variants={fadeInUp} className="mb-6 sm:mb-8">
        <div className="flex items-center gap-3 flex-wrap">
          {/* Mobile-only emoji */}
          <span className="text-2xl sm:hidden">{emoji}</span>

          <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 text-primary text-sm font-bold tracking-wide">
            {date}
          </span>

          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
            {label}
          </h3>
        </div>
      </motion.div>

      {/* Event content */}
      <div className="space-y-6 sm:space-y-8">
        {children}
      </div>
    </motion.div>
  )
}