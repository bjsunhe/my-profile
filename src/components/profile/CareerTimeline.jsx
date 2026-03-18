import { motion } from 'framer-motion'
import { fadeInUp, fastStaggerContainer, scaleIn } from '../../utils/animations'
import Badge from '../common/Badge'

export default function CareerTimeline({ career }) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{
        y: -4,
        transition: { duration: 0.25, ease: 'easeOut' },
      }}
      className="glass-card p-5 sm:p-6 cursor-default"
    >
      {/* Role Progression — Hero element */}
      <div className="mb-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-2xl">🏢</span>

          <span className="text-base sm:text-lg font-bold text-gray-900">
            JMP
          </span>

          <ProgressionArrow />

          <span className="text-base sm:text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-violet-500">
            AI & Automation Solution Architect
          </span>
        </div>
      </div>

      {/* Company & Duration — secondary line */}
      <p className="text-sm text-gray-500 font-medium mb-4">
        <span className="keyword-primary">6 Years</span> at Bosch
      </p>

      {/* Tags */}
      <motion.div
        variants={fastStaggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap gap-2"
      >
        {career.tags.map((tag) => (
          <Badge key={tag} variant="primary">
            {tag}
          </Badge>
        ))}
      </motion.div>
    </motion.div>
  )
}

function ProgressionArrow() {
  return (
    <svg
      width="28"
      height="12"
      viewBox="0 0 28 12"
      fill="none"
      className="flex-shrink-0"
    >
      <defs>
        <linearGradient id="arrowGrad" x1="0" y1="6" x2="28" y2="6" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <path
        d="M0 6h24m0 0l-4-4m4 4l-4 4"
        stroke="url(#arrowGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}