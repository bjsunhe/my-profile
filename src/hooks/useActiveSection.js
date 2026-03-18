import { useState, useEffect } from 'react'

/**
 * Tracks which section is currently in view for nav highlighting.
 * @param {string[]} sectionIds - Array of section element IDs
 */
export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observers = []

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (!element) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        {
          rootMargin: '-40% 0px -55% 0px',
        }
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [sectionIds])

  return activeSection
}