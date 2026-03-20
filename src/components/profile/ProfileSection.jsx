// src/components/profile/ProfileSection.jsx
import { motion } from 'framer-motion'
import SectionWrapper from '../common/SectionWrapper'
import { fadeInUp } from '../../utils/animations'
import { PROFILE } from '../../constants/data'
import EducationCard from './EducationCard'
import CareerTimeline from './CareerTimeline'
import EntrepreneurshipCard from './EntrepreneurshipCard'
import CompetencyGrid from './CompetencyGrid'

export default function ProfileSection() {
  return (
    <SectionWrapper id="profile" background="transparent">
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
      {/* <motion.div variants={fadeInUp} className="mb-16 sm:mb-20">
        <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
          Entrepreneurship
        </h3>
        <EntrepreneurshipCard {...PROFILE.entrepreneurship} />
      </motion.div> */}

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