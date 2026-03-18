import { motion } from 'framer-motion'
import { fadeInUp } from '../../utils/animations'

/**
 * Consistent section header with label, title, and optional subtitle.
 */
export default function SectionHeader({ label, title, subtitle, light = false }) {
  return (
    <div className="mb-16 sm:mb-20">
      {label && (
        <motion.p
          variants={fadeInUp}
          className={`text-sm font-semibold tracking-widest uppercase mb-4 ${
            light ? 'text-primary-300' : 'text-primary'
          }`}
        >
          {label}
        </motion.p>
      )}

      <motion.h2
        variants={fadeInUp}
        className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance ${
          light ? 'text-white' : 'text-gray-900'
        }`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className={`mt-4 text-lg sm:text-xl max-w-2xl ${
            light ? 'text-gray-300' : 'text-gray-500'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}