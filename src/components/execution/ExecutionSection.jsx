import { motion } from 'framer-motion'
import SectionWrapper from '../common/SectionWrapper'
import SectionHeader from '../common/SectionHeader'
import { fadeInUp } from '../../utils/animations'
import { EXECUTION } from '../../constants/data'
import TimelineEvent from './TimelineEvent'
import InflectionPoint from './InflectionPoint'
import PainPointCard from './PainPointCard'
import CodeBlock from './CodeBlock'
import SavingsCounter from './SavingsCounter'
import G7Quote from './G7Quote'
import RepeatablePattern from './RepeatablePattern'
import OtherProjects from './OtherProjects'

export default function ExecutionSection() {
  const { timeline, pattern, otherProjects, closingNote } = EXECUTION

  return (
    <SectionWrapper id="execution" background="transparent">
      <SectionHeader
        label={EXECUTION.sectionLabel}
        title={EXECUTION.title}
        subtitle={EXECUTION.subtitle}
      />

      {/* Timeline */}
      <div className="relative">
        <TimelineLine />

        <TimelineEvent
          date={timeline[0].date}
          label={timeline[0].label}
          emoji={timeline[0].emoji}
        >
          <InflectionPoint
            context={timeline[0].content.context}
            insight={timeline[0].content.insight}
            insightHighlight={timeline[0].content.insightHighlight}
          />
          <PainPointCard
            title={timeline[0].content.painPoint.title}
            description={timeline[0].content.painPoint.description}
            stats={timeline[0].content.painPoint.stats}
          />
          <CodeBlock
            intro={timeline[0].content.build.intro}
            description={timeline[0].content.build.description}
            pipeline={timeline[0].content.build.pipeline}
          />
        </TimelineEvent>

        <TimelineEvent
          date={timeline[1].date}
          label={timeline[1].label}
          emoji={timeline[1].emoji}
        >
          <SavingsCounter
            description={timeline[1].content.description}
            savings={timeline[1].content.savings}
          />
        </TimelineEvent>

        <TimelineEvent
          date={timeline[2].date}
          label={timeline[2].label}
          emoji={timeline[2].emoji}
        >
          <G7Quote
            context={timeline[2].content.context}
            description={timeline[2].content.description}
            quote={timeline[2].content.quote}
            quoteAuthor={timeline[2].content.quoteAuthor}
            stat={timeline[2].content.stat}
          />
        </TimelineEvent>
      </div>

      <motion.div variants={fadeInUp} className="mt-20 sm:mt-28">
        <RepeatablePattern
          title={pattern.title}
          description={pattern.description}
          steps={pattern.steps}
        />
      </motion.div>

      <motion.div variants={fadeInUp} className="mt-16 sm:mt-20">
        <OtherProjects
          projects={otherProjects}
          closingNote={closingNote}
        />
      </motion.div>
    </SectionWrapper>
  )
}

function TimelineLine() {
  return (
    <div
      className="absolute left-5 sm:left-8 top-0 bottom-0 w-px hidden sm:block"
      aria-hidden="true"
    >
      <div className="h-full w-full bg-gradient-to-b from-transparent via-primary-300 to-transparent" />
    </div>
  )
}