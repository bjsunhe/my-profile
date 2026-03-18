import { motion } from 'framer-motion'
import { fadeInUp, fastStaggerContainer, scaleIn } from '../../utils/animations'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function PainPointCard({ title, description, stats }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="rounded-2xl border border-amber-200/80 bg-amber-50/50 p-5 sm:p-6"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
          <ExclamationTriangleIcon className="w-4 h-4 text-amber-600" />
        </div>
        <h4 className="text-base sm:text-lg font-bold text-gray-900">
          The Pain Point
        </h4>
      </div>

      {/* Title */}
      <p className="text-lg sm:text-xl font-semibold text-amber-800 mb-3">
        {title}
      </p>

      {/* Description */}
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
        {description}
      </p>

      {/* Stats */}
      <motion.div
        variants={fastStaggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap gap-2 sm:gap-3"
      >
        {stats.map((stat, index) => (
          <motion.span
            key={index}
            variants={scaleIn}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-100/80 text-amber-800 text-sm font-medium"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            {stat}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  )
}