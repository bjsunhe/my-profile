import { motion } from 'framer-motion'
import SectionWrapper from '../common/SectionWrapper'
import SectionHeader from '../common/SectionHeader'
import ValueCard from './ValueCard'
import { fadeInUp, staggerContainer, viewportConfig } from '../../utils/animations'
import { VALUE } from '../../constants/data'

export default function ValueSection() {
  return (
    <SectionWrapper id="value" background="surface">
      <SectionHeader
        label={VALUE.sectionLabel}
        title={VALUE.title}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20"
      >
        {VALUE.cards.map((card, index) => (
          <ValueCard key={index} {...card} index={index} />
        ))}
      </motion.div>

      {/* Closing Statement with keywords */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="relative"
      >
        <motion.div
          variants={fadeInUp}
          className="w-16 h-1 bg-gradient-to-r from-primary via-violet-500 to-cyan-500 rounded-full mx-auto mb-8 sm:mb-10"
        />

        <motion.div
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-4">
            When we deliver measurable impact —{' '}
            <span className="keyword-emerald">€250,000</span> here,{' '}
            <span className="keyword-cyan">50% effort reduction</span> there — consistently across
            multiple value chains, digital department is no longer a support function.
          </p>

          <motion.p
            variants={fadeInUp}
            className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-violet-500 to-cyan-500">
              Digital department becomes a strategic driver of enterprise transformation.
            </span>
          </motion.p>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}