// src/components/belief/BeliefSection.jsx
import { motion } from 'framer-motion'
import SectionWrapper from '../common/SectionWrapper'
import BeforeAfterRow from './BeforeAfterRow'
import {
  fadeInUp,
  staggerContainer,
  viewportConfig,
} from '../../utils/animations'
import { BELIEF } from '../../constants/data'

export default function BeliefSection() {
  return (
    <SectionWrapper id="belief" background="transparent">
      {/* Custom header */}
      <div className="mb-16 sm:mb-20">
        <motion.p
          variants={fadeInUp}
          className="text-sm font-semibold tracking-widest uppercase mb-4 text-primary"
        >
          {BELIEF.sectionLabel}
        </motion.p>

        <motion.h2
          variants={fadeInUp}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-violet-500 to-cyan-500">
            {BELIEF.title}
          </span>
          <br />
          <span className="text-gray-900">{BELIEF.titleLine2}</span>
        </motion.h2>
      </div>

      {/* Before / After Comparisons */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="space-y-5 sm:space-y-6 mb-16 sm:mb-20"
      >
        {/* Column headers */}
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-2"
        >
          <div className="hidden md:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gray-300" />
            <span className="text-xs font-bold tracking-widest uppercase text-gray-400">
              Before
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary">
              After
            </span>
          </div>
        </motion.div>

        {BELIEF.comparisons.map((comparison, index) => (
          <BeforeAfterRow
            key={index}
            before={comparison.before}
            after={comparison.after}
            index={index}
          />
        ))}
      </motion.div>

      {/* Closing Statement */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <p className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-violet-500 to-cyan-500">
            Digital department
          </span>
          <span className="text-gray-900"> becomes a </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-500">
            strategic driver
          </span>
          <span className="text-gray-900"> of </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500">
            enterprise transformation
          </span>
          <span className="text-gray-900">.</span>
        </p>
      </motion.div>
    </SectionWrapper>
  )
}