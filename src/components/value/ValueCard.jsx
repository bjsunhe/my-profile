import { motion } from 'framer-motion'
import { fadeInUp, fastStaggerContainer, scaleIn } from '../../utils/animations'
import Badge from '../common/Badge'

export default function ValueCard({
  emoji,
  title,
  description,
  tags,
  quote,
  progression,
  index,
}) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{
        y: -6,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      className="relative group h-full"
    >
      <div className="h-full rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 transition-all duration-300 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-100/50 flex flex-col">
        {/* Top accent line */}
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Emoji + Number */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-3xl sm:text-4xl">{emoji}</span>
          <span className="text-5xl sm:text-6xl font-bold text-gray-100 group-hover:text-primary-50 transition-colors select-none">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-6 flex-1">
          {description}
        </p>

        {/* Bottom content — varies by card type */}
        <div className="mt-auto">
          {/* Tags variant */}
          {tags && <TagsRow tags={tags} />}

          {/* Quote variant */}
          {quote && <QuoteBlock quote={quote} />}

          {/* Progression variant */}
          {progression && <ProgressionBar progression={progression} />}
        </div>
      </div>
    </motion.div>
  )
}

/**
 * Row of metric tags (ROI, Cycle Time, etc.)
 */
function TagsRow({ tags }) {
  return (
    <motion.div
      variants={fastStaggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-wrap gap-2"
    >
      {tags.map((tag) => (
        <motion.span
          key={tag}
          variants={scaleIn}
          className="inline-flex items-center px-3 py-1.5 rounded-lg bg-primary-50 text-primary-700 text-sm font-semibold"
        >
          {tag}
        </motion.span>
      ))}
    </motion.div>
  )
}

/**
 * Inline quote block
 */
function QuoteBlock({ quote }) {
  return (
    <div className="relative rounded-xl bg-gray-50 border border-gray-100 p-4">
      <span className="absolute -top-2 left-3 text-3xl text-primary-200 font-serif leading-none select-none">
        "
      </span>
      <p className="text-sm sm:text-base font-semibold text-gray-700 italic pl-4">
        {quote}
      </p>
    </div>
  )
}

/**
 * Demo → Enterprise Product progression bar
 */
function ProgressionBar({ progression }) {
  return (
    <div className="relative">
      {/* Track */}
      <div className="flex items-center gap-0">
        {progression.map((step, index) => (
          <div key={index} className="flex items-center">
            {/* Node */}
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                  index === progression.length - 1
                    ? 'bg-primary text-white'
                    : 'bg-primary-100 text-primary-700'
                }`}
              >
                {index === 0 ? '🔬' : '🏭'}
              </div>
              <span className="mt-2 text-xs sm:text-sm font-semibold text-gray-700">
                {step}
              </span>
            </div>

            {/* Connector */}
            {index < progression.length - 1 && (
              <div className="flex-1 mx-3 sm:mx-4">
                <div className="relative h-0.5 bg-primary-100 min-w-[60px] sm:min-w-[80px]">
                  {/* Animated fill */}
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-primary rounded-full"
                    initial={{ width: '0%' }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.5 }}
                  />
                  {/* Arrow */}
                  <div className="absolute -right-1 top-1/2 -translate-y-1/2">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path
                        d="M1 1l3 3-3 3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}