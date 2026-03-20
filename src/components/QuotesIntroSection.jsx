// src/components/QuotesIntroSection.jsx
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import {
  CpuChipIcon,
  CubeTransparentIcon,
  CircleStackIcon,
  CommandLineIcon,
  BoltIcon,
  SparklesIcon,
  GlobeAltIcon,
  SignalIcon,
  CloudIcon,
  CogIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  BeakerIcon,
  WrenchScrewdriverIcon,
  ShareIcon,
  ServerIcon,
} from '@heroicons/react/24/outline'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.4,
    },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function QuotesIntroSection() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.08], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.08], [1, 0.96])

  const handleScrollDown = () => {
    const heroSection = document.getElementById('hero')
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.section
      id="quotes-intro"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ opacity, scale }}
    >
      <QuoteBackground />

      <FloatingIcon Icon={CpuChipIcon} left="6%" top="10%" size={28} dur={18} delay={0} />
      <FloatingIcon Icon={CubeTransparentIcon} left="88%" top="7%" size={32} dur={22} delay={1} />
      <FloatingIcon Icon={CircleStackIcon} left="93%" top="42%" size={24} dur={16} delay={3} />
      <FloatingIcon Icon={CommandLineIcon} left="4%" top="52%" size={28} dur={20} delay={2} />
      <FloatingIcon Icon={BoltIcon} left="14%" top="82%" size={24} dur={17} delay={4} />
      <FloatingIcon Icon={SparklesIcon} left="82%" top="78%" size={28} dur={19} delay={1.5} />
      <FloatingIcon Icon={GlobeAltIcon} left="44%" top="4%" size={24} dur={21} delay={2.5} />
      <FloatingIcon Icon={SignalIcon} left="74%" top="18%" size={22} dur={15} delay={3.5} />
      <FloatingIcon Icon={CloudIcon} left="22%" top="15%" size={30} dur={23} delay={0.5} />
      <FloatingIcon Icon={CogIcon} left="91%" top="68%" size={26} dur={18} delay={4.5} />
      <FloatingIcon Icon={LightBulbIcon} left="30%" top="88%" size={24} dur={20} delay={1.8} />
      <FloatingIcon Icon={RocketLaunchIcon} left="64%" top="90%" size={28} dur={16} delay={3.2} />
      <FloatingIcon Icon={BeakerIcon} left="54%" top="10%" size={22} dur={24} delay={5} />
      <FloatingIcon Icon={WrenchScrewdriverIcon} left="38%" top="70%" size={24} dur={19} delay={2.8} />
      <FloatingIcon Icon={ShareIcon} left="10%" top="36%" size={26} dur={21} delay={0.8} />
      <FloatingIcon Icon={ServerIcon} left="68%" top="50%" size={22} dur={17} delay={3.8} />

      <motion.div
        className="relative z-20 w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-16 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.blockquote
          variants={fadeInUp}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.25] tracking-tight text-gray-900 max-w-4xl mx-auto"
        >
          <span className="text-gray-900">
            If I had asked people what they wanted,
          </span>
          <br className="hidden sm:block" />{' '}
          <span className="text-gray-900">they would have said </span>
          <span
            className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 animate-gradient-shift"
            style={{ backgroundSize: '200% 200%' }}
          >
            faster horses
          </span>
          <span className="text-gray-900">.</span>
        </motion.blockquote>

        <motion.div
          variants={fadeInUp}
          className="mt-8 sm:mt-10 flex items-center justify-center gap-3"
        >
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-primary-300/50" />
          <span className="text-base sm:text-lg text-gray-400 font-medium tracking-wide">
            — Henry Ford
          </span>
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-primary-300/50" />
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-20 sm:mt-28">
          <button
            onClick={handleScrollDown}
            className="group inline-flex flex-col items-center gap-2 text-gray-400 hover:text-primary transition-colors duration-300"
            aria-label="Scroll to main content"
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
    </motion.section>
  )
}

function FloatingIcon({ Icon, left, top, size, dur, delay }) {
  return (
    <motion.div
      className="absolute z-10 pointer-events-none"
      style={{ left, top }}
      animate={{
        y: [0, -16, 4, -20, 0],
        x: [0, 8, -4, 10, 0],
        rotate: [0, 5, -3, 6, 0],
        opacity: [0.35, 0.18, 0.35, 0.15, 0.35],
      }}
      transition={{
        duration: dur,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      <Icon
        style={{ width: size, height: size }}
        className="text-primary-400"
        strokeWidth={1.2}
      />
    </motion.div>
  )
}

function QuoteBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient — no amber/yellow, cool violet tint throughout */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse 60% 50% at 80% 30%, rgba(139, 92, 246, 0.07) 0%, transparent 50%),
            radial-gradient(ellipse 60% 50% at 20% 70%, rgba(6, 182, 212, 0.05) 0%, transparent 50%),
            radial-gradient(ellipse 80% 60% at 50% 100%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
            linear-gradient(180deg, #ffffff 0%, #fdfcff 30%, #faf8ff 70%, #faf8ff 100%)
          `,
        }}
      />

      {/* Grid pattern */}
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

      {/* Floating orb — top left (violet, replaces amber) */}
      <motion.div
        className="absolute -top-20 left-[5%] w-[500px] h-[500px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 60%)',
        }}
        animate={{
          scale: [1, 1.12, 1],
          x: [0, 25, 0],
          y: [0, -15, 0],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating orb — right center (violet) */}
      <motion.div
        className="absolute top-[35%] -right-20 w-[450px] h-[450px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 60%)',
        }}
        animate={{
          scale: [1, 1.15, 1],
          x: [0, -20, 0],
          opacity: [0.5, 0.85, 0.5],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Floating orb — bottom center (cyan) */}
      <motion.div
        className="absolute bottom-[5%] left-[30%] w-[400px] h-[400px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(6, 182, 212, 0.07) 0%, transparent 60%)',
        }}
        animate={{
          scale: [1, 1.18, 1],
          y: [0, -20, 0],
          opacity: [0.4, 0.75, 0.4],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
      />

      {/* Center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(79, 70, 229, 0.03) 0%, transparent 50%)',
        }}
      />
    </div>
  )
}