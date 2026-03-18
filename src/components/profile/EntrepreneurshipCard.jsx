import { motion } from 'framer-motion'
import { hoverLift } from '../../utils/animations'
import Badge from '../common/Badge'

export default function EntrepreneurshipCard({ emoji, title, description, tag }) {
  return (
    <motion.div
      variants={hoverLift}
      initial="rest"
      whileHover="hover"
      className="glass-card p-5 sm:p-6 cursor-default border-l-4 border-l-primary"
    >
      <div className="flex items-start gap-4">
        {/* Emoji icon */}
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-2xl">
          {emoji}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 flex-wrap mb-2">
            <h4 className="text-lg font-semibold text-gray-900">
              {title}
            </h4>
            <Badge variant="success">{tag}</Badge>
          </div>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}