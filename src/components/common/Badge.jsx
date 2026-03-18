import { motion } from 'framer-motion'
import { scaleIn } from '../../utils/animations'

/**
 * Small pill badge for tags, labels, etc.
 */
export default function Badge({
  children,
  variant = 'default', // 'default' | 'primary' | 'success' | 'outline'
  className = '',
}) {
  const variants = {
    default: 'bg-gray-100 text-gray-700',
    primary: 'bg-primary-100 text-primary-700',
    success: 'bg-emerald-100 text-emerald-700',
    outline: 'border border-gray-300 text-gray-600 bg-transparent',
  }

  return (
    <motion.span
      variants={scaleIn}
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </motion.span>
  )
}