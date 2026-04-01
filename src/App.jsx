// src/App.jsx
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import QuotesIntroSection from './components/QuotesIntroSection'
import HeroSection from './components/HeroSection'
import ProfileSection from './components/profile/ProfileSection'
import ExecutionIntro from './components/execution/ExecutionIntro'
import ExecutionSection from './components/execution/ExecutionSection'
import ValueSection from './components/value/ValueSection'
import BeliefSection from './components/belief/BeliefSection'
import ContactSection from './components/contact/ContactSection'
import ScrollProgress from './components/common/ScrollProgress'

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Navbar />
      <main>
        <QuotesIntroSection />
        <BeliefSection />
        <ProfileSection />
        <ExecutionIntro />
        <ExecutionSection />
        {/* <ValueSection /> */}
        <HeroSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App