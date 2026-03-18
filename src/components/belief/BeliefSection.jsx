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

      {/* Closing Statement with colored keywords */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-3xl"
      >
        <motion.div
          variants={fadeInUp}
          className="relative pl-6 border-l-4 border-gradient-to-b from-primary via-violet-500 to-cyan-500"
          style={{
            borderImage: 'linear-gradient(to bottom, #4f46e5, #8b5cf6, #06b6d4) 1',
          }}
        >
          <p className="text-lg sm:text-xl text-gray-500 mb-2">
            The future of work is not humans <span className="keyword-rose">OR</span> AI.
          </p>
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-snug mb-2">
            It's <span className="keyword-emerald">humans</span>{' '}
            <span className="keyword-primary">AND</span>{' '}
            <span className="keyword-cyan">AI agents</span> collaborating —
          </p>
          <p className="text-lg sm:text-xl text-gray-500">
            and many routine steps simply{' '}
            <span className="keyword-violet">disappearing</span>.
          </p>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}