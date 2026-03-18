import { motion } from 'framer-motion'
import { EnvelopeIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import {
  fadeInUp,
  slowStaggerContainer,
  staggerContainer,
  viewportConfig,
} from '../../utils/animations'
import { CONTACT } from '../../constants/data'

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 lg:py-40 section-padding overflow-hidden"
    >
      <ContactBackground />

      <motion.div
        className="relative z-10 max-container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <motion.p
          variants={fadeInUp}
          className="text-sm font-semibold tracking-widest uppercase mb-12 sm:mb-16 text-primary-300"
        >
          {CONTACT.sectionLabel}
        </motion.p>

        {/* Poetic lines with colored emphasis */}
        <motion.div
          variants={slowStaggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-12 sm:mb-16"
        >
          {/* Ford */}
          <motion.div variants={fadeInUp} className="overflow-hidden">
            <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-snug tracking-tight font-medium text-gray-400">
              Ford saw beyond
            </p>
          </motion.div>
          <motion.div variants={fadeInUp} className="overflow-hidden">
            <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-snug tracking-tight font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">
                faster horses.
              </span>
            </p>
          </motion.div>

          {/* Spacer */}
          <motion.div variants={fadeInUp} className="h-4 sm:h-6" />

          {/* Jobs */}
          <motion.div variants={fadeInUp} className="overflow-hidden">
            <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-snug tracking-tight font-medium text-gray-400">
              Jobs stood at the
            </p>
          </motion.div>
          <motion.div variants={fadeInUp} className="overflow-hidden">
            <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-snug tracking-tight font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-violet-400 to-cyan-400">
                intersection
              </span>
            </p>
          </motion.div>
          <motion.div variants={fadeInUp} className="overflow-hidden">
            <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-snug tracking-tight font-medium text-gray-400">
              of technology and
            </p>
          </motion.div>
          <motion.div variants={fadeInUp} className="overflow-hidden">
            <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-snug tracking-tight font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
                the liberal arts.
              </span>
            </p>
          </motion.div>
        </motion.div>

        {/* Personal statement */}
        <motion.div variants={fadeInUp} className="max-w-2xl mb-10 sm:mb-12">
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            I've spent my career learning to do both — and at{' '}
            <span className="text-white font-semibold">Bosch</span>, I have the opportunity to prove it.
          </p>
        </motion.div>

        {/* CTA text */}
        <motion.div variants={fadeInUp} className="max-w-2xl mb-8 sm:mb-10">
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            I'm happy to go deeper on any project — or discuss how I can contribute to deliver a{' '}
            <span className="text-primary-300 font-semibold">visible, high-impact win</span>.
          </p>
        </motion.div>

        {/* CTA Button + Email */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
        >
          <a
            href={`mailto:${CONTACT.email}`}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-primary-50 rounded-xl transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg shadow-white/20" />
            <span className="relative text-primary-900 flex items-center gap-3">
              <EnvelopeIcon className="w-5 h-5" />
              {CONTACT.buttonText}
              <motion.span
                className="inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowRightIcon className="w-4 h-4" />
              </motion.span>
            </span>
          </a>

          <a
            href={`mailto:${CONTACT.email}`}
            className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors font-mono tracking-wide"
          >
            {CONTACT.email}
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={fadeInUp}
          className="mt-20 sm:mt-28 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                <span className="text-white font-bold text-xs">HS</span>
              </div>
              <span className="text-sm text-gray-500">
                He Sun · {new Date().getFullYear()}
              </span>
            </div>
            <p className="text-xs text-gray-600">
              
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

function ContactBackground() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-primary-950 to-gray-950" />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 60%)',
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 60%)',
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.06) 0%, transparent 60%)',
        }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
      />
    </div>
  )
}