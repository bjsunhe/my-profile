import { motion } from 'framer-motion'
import { fadeInUp, scaleIn } from '../../utils/animations'

export default function G7Quote({ context, description, quote, quoteAuthor, stat }) {
  return (
    <motion.div variants={fadeInUp} className="space-y-6">
      {/* Context with keywords */}
      <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
        The day of the <span className="keyword-amber">UEFA Euro 2024</span> quarter-final
        — Spain vs Germany in <span className="keyword-violet">Stuttgart</span>.
      </p>

      <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
        Our <span className="keyword-primary">General Manager</span> presented my solution to{' '}
        <span className="keyword-cyan">G7</span>.
      </p>

      {/* Quote card */}
      <motion.div
        variants={scaleIn}
        className="relative rounded-2xl border-2 border-primary-200 bg-gradient-to-br from-primary-50/80 to-violet-50/50 p-6 sm:p-8"
      >
        <div className="absolute -top-4 -right-2 sm:-right-4 text-4xl sm:text-5xl opacity-20 rotate-12 select-none">
          ⚽
        </div>

        <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">
          {quoteAuthor}
        </p>

        <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-snug">
          "<span className="keyword-emerald">This is excellent.</span>{' '}
          <span className="keyword-primary">Move to production immediately.</span>"
        </blockquote>
      </motion.div>

      {/* Stat */}
      <motion.div
        variants={fadeInUp}
        className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-5 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200"
      >
        <p className="text-sm text-gray-500 font-medium">
          {stat.label}:
        </p>
        <span className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-violet-500 to-cyan-500">
          {stat.value}
        </span>
      </motion.div>
    </motion.div>
  )
}