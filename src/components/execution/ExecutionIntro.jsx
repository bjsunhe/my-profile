// src/components/execution/ExecutionIntro.jsx
import { motion } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import {
  BoltIcon,
  ArrowPathIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function ExecutionIntro() {
  const handleScrollDown = () => {
    const section = document.getElementById('execution')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ExecutionIntroBackground />

      <motion.div
        className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-16 text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Label */}
        <motion.div variants={fadeInUp} className="mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50/80 backdrop-blur-sm border border-primary-200/60 text-primary-700 text-sm font-medium shadow-sm">
            <BoltIcon className="w-4 h-4" />
            HOW I EXECUTE
          </span>
        </motion.div>

        {/* Title */}
        <motion.div variants={fadeInUp} className="mb-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            <span className="text-gray-900">Three </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-violet-500 to-cyan-500 animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}>
              Dates
            </span>
          </h2>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mt-1">
            <span className="text-gray-900">One </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500">
              Pattern
            </span>
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          className="text-lg sm:text-xl md:text-2xl text-gray-500 font-medium max-w-2xl mx-auto mb-14 sm:mb-16"
        >
          Fail fast, fail cheap.{' '}
          <span className="text-gray-900 font-semibold">Just do it.</span>
        </motion.p>

        {/* Three date pills */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-3 mb-16 sm:mb-20"
        >
          <DatePill
            date="May 13, 2024"
            label="The Inflection Point"
            icon={<BoltIcon className="w-4 h-4" />}
            color="amber"
          />
          <ConnectorArrow />
          <DatePill
            date="June 2024"
            label="The Proof"
            icon={<ArrowPathIcon className="w-4 h-4" />}
            color="primary"
          />
          <ConnectorArrow />
          <DatePill
            date="July 5, 2024"
            label="Kick-off ⚽"
            icon={<RocketLaunchIcon className="w-4 h-4" />}
            color="emerald"
          />
        </motion.div>

        {/* Timeline hint */}
        {/* <motion.p
          variants={fadeInUp}
          className="text-sm text-gray-400 font-medium mb-2"
        >
          From new AI model release to production approval
        </motion.p>
        <motion.div variants={fadeInUp} className="mb-12 sm:mb-16">
          <span className="inline-block text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-cyan-500">
            {'< 2 months'}
          </span>
        </motion.div> */}

        {/* Scroll */}
          {/* Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 1.2 }}
        >
          <button
            onClick={handleScrollDown}
            className="group inline-flex flex-col items-center gap-2 text-gray-400 hover:text-primary transition-colors duration-300"
            aria-label="Scroll to execution details"
          >
            <span className="text-xs font-medium tracking-widest uppercase">
              See the story
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <ChevronDownIcon className="w-5 h-5" />
            </motion.div>
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}

/* ─── Date Pill ─── */
function DatePill({ date, label, icon, color }) {
  const colorMap = {
    amber: {
      bg: 'bg-amber-50/80',
      border: 'border-amber-200/60',
      text: 'text-amber-700',
      icon: 'text-amber-500',
    },
    primary: {
      bg: 'bg-primary-50/80',
      border: 'border-primary-200/60',
      text: 'text-primary-700',
      icon: 'text-primary-500',
    },
    emerald: {
      bg: 'bg-emerald-50/80',
      border: 'border-emerald-200/60',
      text: 'text-emerald-700',
      icon: 'text-emerald-500',
    },
  }

  const c = colorMap[color]

  return (
    <motion.div
      className={`flex flex-col items-center gap-1.5 px-5 py-3 rounded-2xl ${c.bg} backdrop-blur-sm border ${c.border} shadow-sm`}
      whileHover={{ y: -2, scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className={`flex items-center gap-1.5 ${c.icon}`}>
        {icon}
        <span className={`text-xs font-semibold tracking-wide uppercase ${c.text}`}>
          {label}
        </span>
      </div>
      <span className="text-sm font-bold text-gray-900">{date}</span>
    </motion.div>
  )
}

/* ─── Connector Arrow ─── */
function ConnectorArrow() {
  return (
    <div className="hidden sm:flex items-center text-gray-300">
      <div className="w-6 h-px bg-gray-300" />
      <svg className="w-3 h-3 -ml-px" fill="currentColor" viewBox="0 0 12 12">
        <path d="M4 1l5 5-5 5V1z" />
      </svg>
    </div>
  )
}

/* ─── Background ─── */
function ExecutionIntroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.07) 0%, transparent 50%),
            radial-gradient(ellipse 60% 50% at 75% 30%, rgba(6, 182, 212, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse 60% 50% at 25% 70%, rgba(16, 185, 129, 0.05) 0%, transparent 50%),
            radial-gradient(ellipse 80% 60% at 50% 100%, rgba(79, 70, 229, 0.06) 0%, transparent 50%),
            linear-gradient(180deg, #faf8ff 0%, #ffffff 40%, #f8faff 100%)
          `,
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(79, 70, 229, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79, 70, 229, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Orbs */}
      <motion.div
        className="absolute -top-20 right-[10%] w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 60%)',
        }}
        animate={{
          scale: [1, 1.12, 1],
          x: [0, 25, 0],
          y: [0, -15, 0],
          opacity: [0.5, 0.85, 0.5],
        }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute top-[45%] -left-20 w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.07) 0%, transparent 60%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 20, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <motion.div
        className="absolute bottom-[8%] right-[8%] w-[350px] h-[350px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.06) 0%, transparent 60%)',
        }}
        animate={{
          scale: [1, 1.18, 1],
          y: [0, -20, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(79, 70, 229, 0.03) 0%, transparent 50%)',
        }}
      />
    </div>
  )
}