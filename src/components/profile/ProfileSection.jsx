import { motion } from 'framer-motion'
import SectionWrapper from '../common/SectionWrapper'
import SectionHeader from '../common/SectionHeader'
import { fadeInUp } from '../../utils/animations'
import { PROFILE } from '../../constants/data'
import EducationCard from './EducationCard'
import CareerTimeline from './CareerTimeline'
import EntrepreneurshipCard from './EntrepreneurshipCard'
import CompetencyGrid from './CompetencyGrid'

export default function ProfileSection() {
  return (
    <SectionWrapper id="profile" background="transparent">
      <SectionHeader
        label={PROFILE.sectionLabel}
        title={PROFILE.title}
      />

      {/* Quote Block with highlighted keywords */}
      <motion.div variants={fadeInUp} className="mb-16 sm:mb-20">
        <blockquote className="relative max-w-3xl">
          <span
            className="absolute -top-6 -left-2 sm:-left-4 text-7xl sm:text-8xl font-serif text-primary-200 leading-none select-none"
            aria-hidden="true"
          >
            "
          </span>
          <p className="relative text-xl sm:text-2xl lg:text-3xl font-medium text-gray-800 leading-relaxed pl-6 sm:pl-8">
            I <span className="keyword-pill-primary">co-define the business outcome</span> with
            stakeholders, <span className="keyword-pill-cyan">redesign the business process</span> in
            an AI-native way, and <span className="keyword-pill-emerald">drive delivery</span> all
            the way to <span className="keyword-pill-amber">production</span>.
          </p>
        </blockquote>
      </motion.div>

      {/* Education + Career Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
        <motion.div variants={fadeInUp} className="space-y-4 sm:space-y-6">
          <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
            Education
          </h3>
          {PROFILE.education.map((edu, index) => (
            <EducationCard key={index} {...edu} />
          ))}
        </motion.div>

        <motion.div variants={fadeInUp} className="space-y-4 sm:space-y-6">
          <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
            Career
          </h3>
          <CareerTimeline career={PROFILE.career} />
        </motion.div>
      </div>

      {/* Entrepreneurship */}
      <motion.div variants={fadeInUp} className="mb-16 sm:mb-20">
        <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
          Entrepreneurship
        </h3>
        <EntrepreneurshipCard {...PROFILE.entrepreneurship} />
      </motion.div>

      {/* Core Competencies */}
      <motion.div variants={fadeInUp}>
        <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-6 sm:mb-8">
          Core Competencies
        </h3>
        <CompetencyGrid competencies={PROFILE.competencies} />
      </motion.div>
    </SectionWrapper>
  )
}