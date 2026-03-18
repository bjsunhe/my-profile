import { motion } from 'framer-motion'
import {
  fadeInUp,
  staggerContainer,
  scaleIn,
  viewportConfig,
} from '../../utils/animations'
import {
  EyeIcon,
  LinkIcon,
  RocketLaunchIcon,
  PresentationChartBarIcon,
  MapIcon,
} from '@heroicons/react/24/outline'

const STEP_ICONS = [
  EyeIcon,
  LinkIcon,
  RocketLaunchIcon,
  PresentationChartBarIcon,
  MapIcon,
]

export default function RepeatablePattern({ title, description, steps }) {
  return (
    <div>
      {/* Header */}
      <motion.div
        variants={fadeInUp}
        className="text-center mb-10 sm:mb-12"
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          {title}
        </h3>
        <p className="text-base sm:text-lg text-gray-500">
          {description}
        </p>
      </motion.div>

      {/* Steps */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="relative"
      >
        {/* Connecting line (desktop) */}
        <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {steps.map((step, index) => {
            const Icon = STEP_ICONS[index]
            return (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.25 },
                }}
                className="relative flex flex-col items-center text-center p-5 sm:p-6 rounded-2xl bg-white border border-gray-200 hover:border-primary-200 hover:shadow-lg transition-all cursor-default"
              >
                {/* Step number */}
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold mb-3">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-primary" />
                </div>

                {/* Label */}
                <p className="text-sm font-semibold text-gray-800 leading-snug">
                  {step}
                </p>

                {/* Arrow connector (mobile/tablet between cards) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute -bottom-3 left-1/2 -translate-x-1/2 text-primary-300">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M6 0v10m0 0L2 6m4 4l4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}