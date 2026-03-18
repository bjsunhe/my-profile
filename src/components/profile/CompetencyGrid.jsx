import { motion } from 'framer-motion'
import {
  CpuChipIcon,
  ArrowPathIcon,
  CircleStackIcon,
  UserGroupIcon,
  BoltIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline'
import { fadeInUp, staggerContainer, viewportConfig } from '../../utils/animations'

// Map icon string names to actual components
const ICON_MAP = {
  CpuChipIcon,
  ArrowPathIcon,
  CircleStackIcon,
  UserGroupIcon,
  BoltIcon,
  GlobeAltIcon,
}

export default function CompetencyGrid({ competencies }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
    >
      {competencies.map((comp, index) => (
        <CompetencyCard key={index} {...comp} />
      ))}
    </motion.div>
  )
}

function CompetencyCard({ icon, title, description }) {
  const IconComponent = ICON_MAP[icon]

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{
        y: -4,
        transition: { duration: 0.25, ease: 'easeOut' },
      }}
      className="group glass-card p-5 sm:p-6 cursor-default transition-colors hover:border-primary-200"
    >
      {/* Icon */}
      <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary-100">
        {IconComponent && (
          <IconComponent className="w-5 h-5 text-primary transition-colors" />
        )}
      </div>

      {/* Title */}
      <h4 className="text-base font-semibold text-gray-900 mb-2 leading-tight">
        {title}
      </h4>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}