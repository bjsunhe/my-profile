import { motion } from 'framer-motion'
import {
  fadeInUp,
  staggerContainer,
  viewportConfig,
} from '../../utils/animations'
import AnimatedCounter from '../common/AnimatedCounter'

export default function OtherProjects({ projects, closingNote }) {
  return (
    <div>
      {/* Header */}
      <motion.div variants={fadeInUp} className="mb-8">
        <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
          Other Delivered Projects
        </h3>
      </motion.div>

      {/* Project cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8"
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </motion.div>

      {/* Closing note */}
      <motion.p
        variants={fadeInUp}
        className="text-sm sm:text-base text-gray-500 italic text-center"
      >
        {closingNote}
      </motion.p>
    </div>
  )
}

function ProjectCard({ metric, suffix, label, description }) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{
        y: -4,
        transition: { duration: 0.25 },
      }}
      className="relative rounded-2xl overflow-hidden cursor-default group"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />

      {/* Subtle accent glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/20 blur-3xl group-hover:bg-primary/30 transition-colors" />

      {/* Content */}
      <div className="relative p-6 sm:p-8">
        {/* Big metric */}
        <div className="mb-3">
          <AnimatedCounter
            target={metric}
            suffix={suffix}
            duration={2000}
            separator={false}
            className="text-4xl sm:text-5xl font-bold text-white"
          />
        </div>

        {/* Label */}
        <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
          {label}
        </h4>

        {/* Description */}
        <p className="text-sm text-gray-400">
          {description}
        </p>
      </div>
    </motion.div>
  )
}