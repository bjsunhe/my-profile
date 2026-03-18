import { motion } from 'framer-motion'
import { fadeInUp } from '../../utils/animations'
import TypingEffect from '../common/TypingEffect'
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

export default function CodeBlock({ intro, description, pipeline }) {
  return (
    <motion.div variants={fadeInUp} className="space-y-4">
      {/* Build header */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center">
          <WrenchScrewdriverIcon className="w-4 h-4 text-primary" />
        </div>
        <h4 className="text-base sm:text-lg font-bold text-gray-900">
          The Build
        </h4>
      </div>

      {/* Intro text */}
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-primary-50 text-primary text-xs font-bold uppercase tracking-wider">
          {intro}
        </span>
      </div>

      <p className="text-sm sm:text-base text-gray-600 italic">
        {description}
      </p>

      {/* Code terminal */}
      <div className="rounded-xl overflow-hidden shadow-lg">
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-800">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="ml-2 text-xs text-gray-400 font-mono">
            pipeline.py
          </span>
        </div>

        {/* Terminal body */}
        <div className="bg-gray-900 p-5 sm:p-6 min-h-[180px]">
          <TypingEffect
            lines={pipeline}
            speed={30}
            lineDelay={400}
            className="text-sm sm:text-base leading-relaxed"
          />
        </div>
      </div>
    </motion.div>
  )
}