import { motion } from 'framer-motion'
import { fadeInLeft, fadeInRight } from '../../utils/animations'

// Keyword highlights for each "after" card
const AFTER_HIGHLIGHTS = [
  {
    render: () => (
      <>
        <span className="keyword-emerald">Humans setting intent</span>, <span className="keyword-cyan">AI executing tasks</span>
      </>
    ),
  },
  {
    render: () => (
      <>
        Processes designed to be <span className="keyword-primary">agent-executable</span> & <span className="keyword-violet">auditable</span>
      </>
    ),
  },
  {
    render: () => (
      <>
        A <span className="keyword-amber">fundamentally different</span> way of working
      </>
    ),
  },
]

export default function BeforeAfterRow({ before, after, index }) {
  const afterHighlight = AFTER_HIGHLIGHTS[index]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      {/* BEFORE card */}
      <motion.div variants={fadeInLeft} className="relative group">
        <div className="md:hidden flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-gray-300" />
          <span className="text-xs font-bold tracking-widest uppercase text-gray-400">
            Before
          </span>
        </div>

        <div className="relative rounded-2xl border border-gray-200 bg-white/60 backdrop-blur-sm p-5 sm:p-6 transition-all duration-300 group-hover:border-gray-300 overflow-hidden">
          <div className="relative flex items-start gap-3">
            <div className="flex-shrink-0 mt-1">
              <div className="w-6 h-6 rounded-md bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-xs font-bold">{index + 1}</span>
              </div>
            </div>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed line-through decoration-gray-300">
              {before}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Arrow connector (mobile) */}
      <div className="flex md:hidden justify-center -my-1">
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-primary">
            <path
              d="M10 3v12m0 0l-4-4m4 4l4-4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>

      {/* AFTER card */}
      <motion.div variants={fadeInRight} className="relative group">
        <div className="md:hidden flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-xs font-bold tracking-widest uppercase text-primary">
            After
          </span>
        </div>

        <div className="relative rounded-2xl border-2 border-primary-200 bg-primary-50/50 backdrop-blur-sm p-5 sm:p-6 transition-all duration-300 group-hover:border-primary-300 group-hover:shadow-lg group-hover:shadow-primary-100/50 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-colors" />

          <div className="relative flex items-start gap-3">
            <div className="flex-shrink-0 mt-1">
              <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
                <span className="text-white text-xs font-bold">{index + 1}</span>
              </div>
            </div>
            <p className="text-base sm:text-lg text-gray-800 font-medium leading-relaxed">
              {afterHighlight ? afterHighlight.render() : after}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}