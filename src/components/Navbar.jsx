import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { NAV_LINKS } from '../constants/data'
import { useActiveSection } from '../hooks/useActiveSection'

const sectionIds = NAV_LINKS.map((link) => link.href.replace('#', ''))

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const isContactSection = activeSection === 'contact'

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? isContactSection
              ? 'bg-gray-950/90 backdrop-blur-md border-b border-white/5'
              : 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-container section-padding">
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="flex items-center gap-2 group"
            >
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center transition-transform group-hover:scale-105">
                <span className="text-white font-bold text-sm">HS</span>
              </div>
              <span
                className={`font-semibold text-sm hidden sm:block transition-colors ${
                  isContactSection && scrolled ? 'text-white' : 'text-gray-900'
                }`}
              >
                He Sun
              </span>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const id = link.href.replace('#', '')
                const isActive = activeSection === id

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="relative px-4 py-2 text-sm font-medium transition-colors rounded-lg group"
                  >
                    <span
                      className={`relative z-10 transition-colors ${
                        isActive
                          ? 'text-primary'
                          : isContactSection && scrolled
                          ? 'text-gray-300 group-hover:text-white'
                          : 'text-gray-600 group-hover:text-gray-900'
                      }`}
                    >
                      {link.label}
                    </span>

                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className={`absolute inset-0 rounded-lg ${
                          isContactSection && scrolled ? 'bg-white/10' : 'bg-primary-50'
                        }`}
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </a>
                )
              })}

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="ml-3 inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
              >
                <EnvelopeIcon className="w-4 h-4" />
                <span className="hidden lg:inline">Contact</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isContactSection && scrolled
                  ? 'text-gray-300 hover:text-white hover:bg-white/10'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu
            activeSection={activeSection}
            onNavClick={handleNavClick}
            onClose={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

function MobileMenu({ activeSection, onNavClick, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-40 md:hidden"
    >
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} />

      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-2xl"
      >
        <div className="pt-20 px-6">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = activeSection === id

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => onNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-primary-50 text-primary'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </a>
              )
            })}

            <div className="mt-4 pt-4 border-t border-gray-100">
              <a
                href="#contact"
                onClick={(e) => onNavClick(e, '#contact')}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
              >
                <EnvelopeIcon className="w-5 h-5" />
                Let's Talk
              </a>
            </div>
          </nav>
        </div>
      </motion.div>
    </motion.div>
  )
}