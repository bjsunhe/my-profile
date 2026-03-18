import { motion } from 'framer-motion'
import { fadeInUp } from '../../utils/animations'
import AnimatedCounter from '../common/AnimatedCounter'
import { ChartBarIcon } from '@heroicons/react/24/outline'

export default function SavingsCounter({ description, savings }) {
  return (
    <motion.div variants={fadeInUp} className="space-y-6">
      {/* Description */}
      <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
        {description}
      </p>

      {/* Savings card */}
      <div className="relative rounded-2xl overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary to-primary-800" />

        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Content */}
        <div className="relative p-8 sm:p-10 text-center">
          {/* Label */}
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary-200 mb-4">
            {savings.label}
          </p>

          {/* Big number */}
          <div className="mb-4">
            <AnimatedCounter
              target={savings.amount}
              prefix={savings.prefix}
              suffix={savings.suffix}
              duration={2500}
              separator={true}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight"
            />
          </div>

          {/* Note */}
          <p className="text-sm sm:text-base text-primary-200 font-medium">
            {savings.note}
          </p>
        </div>
      </div>
    </motion.div>
  )
}