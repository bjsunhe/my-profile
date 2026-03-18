import { motion } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { HERO } from '../constants/data'
import { slowStaggerContainer, fadeInUp } from '../utils/animations'

export default function HeroSection() {
  const handleScrollDown = () => {
    const profileSection = document.getElementById('profile')
    if (profileSection) {
      profileSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Rich gradient background */}
      <HeroBackground />

      {/* Main content */}
      <motion.div
        className="relative z-10 max-container section-padding text-center"
        variants={slowStaggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Availability Badge */}
        <motion.div variants={fadeInUp} className="mb-10 sm:mb-12">
          <AvailabilityBadge text={HERO.badge} />
        </motion.div>

        {/* Headline */}
        <div className="mb-8">
          {/* Line 1: At the */}
          <motion.div variants={fadeInUp} className="overflow-hidden">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] text-gray-900">
              At the
            </h1>
          </motion.div>

          {/* Line 2: Intersection — multicolor gradient */}
          <motion.div variants={fadeInUp} className="overflow-hidden">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-violet-500 to-cyan-500 animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}>
                Intersection
              </span>
            </h1>
          </motion.div>

          {/* Line 3: of Business & AI — keywords colored */}
          <motion.div variants={fadeInUp} className="overflow-hidden">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
              <span className="text-gray-900">of </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-500">
                Business
              </span>
              <span className="text-gray-900"> & </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
                AI
              </span>
            </h1>
          </motion.div>
        </div>

        {/* Subtitle with colored keywords */}
        <motion.p
          variants={fadeInUp}
          className="text-lg sm:text-xl max-w-2xl mx-auto font-medium"
        >
          <span className="text-primary font-semibold">AI-Native Business Process Designer</span>
          <span className="text-gray-400"> · </span>
          <span className="text-emerald-600 font-semibold">Zero-to-One Builder</span>
        </motion.p>

        {/* Scroll indicator */}
        <motion.div variants={fadeInUp} className="mt-16 sm:mt-20">
          <button
            onClick={handleScrollDown}
            className="group inline-flex flex-col items-center gap-2 text-gray-400 hover:text-primary transition-colors"
            aria-label="Scroll to content"
          >
            <span className="text-xs font-medium tracking-widest uppercase">
              Scroll
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

function AvailabilityBadge({ text }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50/80 backdrop-blur-sm border border-emerald-200/60 text-emerald-700 text-sm font-medium shadow-sm">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
      </span>
      {text}
    </span>
  )
}

function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient — warm violet to cool blue */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 60% 50% at 80% 20%, rgba(6, 182, 212, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse 60% 50% at 20% 80%, rgba(245, 158, 11, 0.05) 0%, transparent 50%),
            radial-gradient(ellipse 80% 60% at 50% 100%, rgba(79, 70, 229, 0.06) 0%, transparent 50%),
            linear-gradient(180deg, #faf8ff 0%, #ffffff 40%, #f8faff 100%)
          `,
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(79, 70, 229, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79, 70, 229, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating orb — top right (violet) */}
      <motion.div
        className="absolute -top-20 right-[10%] w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 60%)',
        }}
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating orb — left center (cyan) */}
      <motion.div
        className="absolute top-[40%] -left-20 w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 60%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 20, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Floating orb — bottom right (amber) */}
      <motion.div
        className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.06) 0%, transparent 60%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          y: [0, -25, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      {/* Center radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(79, 70, 229, 0.04) 0%, transparent 50%)',
        }}
      />
    </div>
  )
}