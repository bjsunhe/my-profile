import { useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProfileSection from './components/profile/ProfileSection'
import ExecutionSection from './components/execution/ExecutionSection'
import ValueSection from './components/value/ValueSection'
import BeliefSection from './components/belief/BeliefSection'
import ContactSection from './components/contact/ContactSection'
import ScrollProgress from './components/common/ScrollProgress'

function App() {
  // Smooth scroll polyfill for anchor clicks
  useEffect(() => {
    // Reset scroll position on load
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <main>
        <HeroSection />
        <ProfileSection />
        <ExecutionSection />
        <ValueSection />
        <BeliefSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App