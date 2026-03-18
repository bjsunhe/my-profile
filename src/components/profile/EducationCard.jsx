import { motion } from 'framer-motion'
import { hoverLift } from '../../utils/animations'

export default function EducationCard({ emoji, degree, school, years }) {
  return (
    <motion.div
      variants={hoverLift}
      initial="rest"
      whileHover="hover"
      className="glass-card p-5 sm:p-6 cursor-default"
    >
      <div className="flex items-start gap-4">
        {/* Emoji icon */}
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-2xl">
          {emoji}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h4 className="text-lg font-semibold text-gray-900 leading-tight">
            {degree}
          </h4>
          <p className="text-sm text-gray-600 mt-1">
            {school}
          </p>
          <p className="text-sm text-gray-400 mt-1 font-medium">
            {years}
          </p>
        </div>
      </div>
    </motion.div>
  )
}