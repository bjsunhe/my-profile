import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

/**
 * Types out lines of code one character at a time.
 *
 * @param {string[]} lines - Array of code lines to type
 * @param {number} speed - ms per character
 * @param {number} lineDelay - ms pause between lines
 */
export default function TypingEffect({
  lines = [],
  speed = 35,
  lineDelay = 300,
  className = '',
}) {
  const [displayedLines, setDisplayedLines] = useState([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const hasStarted = useRef(false)

  useEffect(() => {
    if (!isInView || hasStarted.current) return
    hasStarted.current = true
    setDisplayedLines([])
    setCurrentLine(0)
    setCurrentChar(0)
  }, [isInView])

  useEffect(() => {
    if (!hasStarted.current || !isInView) return
    if (currentLine >= lines.length) {
      setIsComplete(true)
      return
    }

    const line = lines[currentLine]

    // If empty line, skip to next
    if (line === '') {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, ''])
        setCurrentLine((prev) => prev + 1)
        setCurrentChar(0)
      }, lineDelay / 2)
      return () => clearTimeout(timeout)
    }

    if (currentChar < line.length) {
      const timeout = setTimeout(() => {
        setCurrentChar((prev) => prev + 1)
      }, speed)
      return () => clearTimeout(timeout)
    }

    // Line complete, move to next
    const timeout = setTimeout(() => {
      setDisplayedLines((prev) => [...prev, line])
      setCurrentLine((prev) => prev + 1)
      setCurrentChar(0)
    }, lineDelay)
    return () => clearTimeout(timeout)
  }, [currentLine, currentChar, lines, speed, lineDelay, isInView])

  const currentText =
    currentLine < lines.length
      ? lines[currentLine].substring(0, currentChar)
      : ''

  return (
    <div ref={ref} className={`font-mono text-sm ${className}`}>
      {displayedLines.map((line, i) => (
        <div key={i} className="min-h-[1.5em]">
          {colorize(line)}
        </div>
      ))}

      {!isComplete && currentLine < lines.length && (
        <div className="min-h-[1.5em]">
          {colorize(currentText)}
          <span className="animate-blink text-primary">▊</span>
        </div>
      )}

      {isComplete && (
        <span className="animate-blink text-primary ml-1">▊</span>
      )}
    </div>
  )
}

/**
 * Simple syntax highlighting for our pipeline code.
 */
function colorize(text) {
  if (!text) return null

  // Comments
  if (text.startsWith('//')) {
    return <span className="text-gray-500">{text}</span>
  }

  // Success line
  if (text.startsWith('✓')) {
    return <span className="text-emerald-400 font-semibold">{text}</span>
  }

  // Arrow pipeline
  if (text.includes('→')) {
    const parts = text.split('→')
    return (
      <span>
        {parts.map((part, i) => (
          <span key={i}>
            <span className="text-sky-300">{part.trim()}</span>
            {i < parts.length - 1 && (
              <span className="text-gray-500"> → </span>
            )}
          </span>
        ))}
      </span>
    )
  }

  return <span className="text-gray-300">{text}</span>
}