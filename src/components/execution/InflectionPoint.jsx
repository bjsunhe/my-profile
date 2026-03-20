import { motion } from 'framer-motion'
import { fadeInUp } from '../../utils/animations'

export default function InflectionPoint({ context, insight, insightHighlight }) {
  return (
    <motion.div variants={fadeInUp} className="space-y-4">
      {/* Context with highlighted keyword */}
      <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
        OpenAI released <span className="keyword-cyan">GPT-4o</span> — capable of reasoning across{' '}
        <span className="keyword-violet">text and vision</span> in real time.
      </p>

      {/* Insight */}
      <div className="relative pl-5 border-l-2 border-primary-300">
        <p className="text-base text-gray-500 mb-2">
          {insight}
        </p>
        {/* <p className="text-base sm:text-lg font-semibold text-gray-800 leading-relaxed">
          <span className="keyword-cyan">Vision capability</span> at that level means{' '}
          <span className="keyword-primary">enterprise document workflows</span> can be{' '}
          <span className="keyword-emerald">fundamentally redesigned</span>.
        </p> */}
      </div>
    </motion.div>
  )
}