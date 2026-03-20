// ============================================
// All content data — single source of truth
// ============================================

export const NAV_LINKS = [
  { label: 'Profile', href: '#profile' },
  { label: 'Execution', href: '#execution' },
  { label: 'Value', href: '#value' },
  { label: 'Belief', href: '#belief' },
  { label: 'Contact', href: '#contact' },
]

export const HERO = {
  badge: 'Available for new challenges',
  headlineParts: [
    { text: 'At the' },
    { text: 'Intersection', highlight: true },
    { text: 'of Business & AI' },
  ],
  subtitle: 'AI-Native Business Process Designer · Zero-to-One Builder',
}

export const PROFILE = {
  sectionLabel: 'WHO I AM',
  title: 'AI-Native Business Process Designer · Zero-to-One Builder',
  quote:
    'I co-define the business outcome with stakeholders, redesign the business process in an AI-native way, and drive delivery all the way to production.',
  education: [
    {
      emoji: '🎓',
      degree: 'MBA',
      school: 'National University of Singapore',
      years: '2017 – 2020',
    },
    {
      emoji: '🎓',
      degree: 'B.S. Information Systems',
      school: 'Beijing Technology and Business University',
      years: '2009 – 2013',
    },
  ],
  career: {
    emoji: '🏢',
    title: 'Junior Manager Program (JMP) → AI & Automation Solution Architect',
    company: '6 Years at Bosch',
    tags: ['CR', 'PS', 'BMG'],
  },
  entrepreneurship: {
    emoji: '🚀',
    title: 'AI Startup Co-founder',
    description: 'Built during MBA. Landed Fortune Global 500 customer in Indonesia.',
    tag: 'Zero-to-one',
  },
  competencies: [
    // {
    //   icon: 'CpuChipIcon',
    //   title: 'AI Solution Architecture',
    //   description: 'End-to-end design of AI Solutions from concept to production deployment',
    // },
    {
      icon: 'ArrowPathIcon',
      title: 'AI-Native Business Process Redesign',
      description: 'Transforming workflows to AI-Native Business Process',
    },
    {
      icon: 'CircleStackIcon',
      title: 'SAP Ecosystem',
      description: 'S/4HANA, SAP BTP, SAP AI Hub — deep expertise across the full SAP technology stack',
    },
    // {
    //   icon: 'UserGroupIcon',
    //   title: 'Stakeholder Management',
    //   description: 'Executive communication and cross-functional alignment from C-suite to engineering',
    // },
    {
      icon: 'BoltIcon',
      title: 'Rapid Prototyping & MVP',
      description: 'From idea to working prototype in days',
    },
    // {
    //   icon: 'GlobeAltIcon',
    //   title: 'Global Delivery',
    //   description: 'Cross-cultural collaboration across APAC, EMEA with distributed teams',
    // },
  ],
}

export const EXECUTION = {
  sectionLabel: 'HOW I EXECUTE',
  title: 'Three Dates, One Pattern',
  subtitle: 'Fail fast, fail cheap. Just do it.',

  timeline: [
    {
      date: 'May 13, 2024',
      label: 'The Inflection Point',
      emoji: '⚡',
      content: {
        context:
          'OpenAI released GPT-4o — capable of reasoning across text and vision in real time.',
        insight:
          '',
        insightHighlight:
          '',
        painPoint: {
          title: 'Logistic Document Management',
          description:
            'Every time a supplier deliver logistic documents, someone had to open a PDF, read it, extract data manually, and update SAP material masters.',
          stats: ['Thousands of documents', 'Hundreds of hours', 'High error rates'],
        },
        build: {
          intro: '',
          description: 'Personal initiative, zero budget',
          pipeline: [
            '// Pipeline',
            'PDFs → images',
            'images → GPT-4o vision → structured JSON',
            'JSON → mapped to SAP material master',
            '',
            '✓ Working prototype.',
          ],
        },
      },
    },
    {
      date: 'June 2024',
      label: 'The Proof',
      emoji: '📊',
      content: {
        description: 'Presented to management team with a live demo and clear numbers.',
        savings: {
          amount: 250000,
          prefix: '€',
          suffix: '',
          label: 'PROJECTED ANNUAL SAVINGS',
          note: 'Validated by business stakeholders',
        },
      },
    },
    {
      date: 'July 5, 2024',
      label: 'Kick-off ⚽',
      emoji: '⚽',
      content: {
        context:
          'The day of the UEFA Euro 2024 quarter-final — Spain vs Germany in Stuttgart.',
        description: 'Our General Manager presented my solution to G7.',
        quote: 'This is excellent. Move to production immediately.',
        quoteAuthor: 'G7 Response',
        stat: {
          value: '< 2 months',
          label: 'From new AI model release to MVP to Management Approval',
        },
      },
    },
  ],

  pattern: {
    title: 'The Repeatable Pattern',
    description: 'Every AI project on my resume followed this exact sequence.',
    steps: [
      'Spot Technology Inflection',
      'Connect to Business Pain',
      'Build MVP Fast',
      'Prove with Demo & ROI',
      'Production Roadmap',
    ],
  },

  otherProjects: [
    {
      metric: 50,
      suffix: '%',
      label: 'Master data effort reduction',
      description: 'Multi-agent system · SAP integration',
    },
    {
      metric: 30,
      suffix: '%',
      label: 'Query accuracy improvement',
      description: 'RAG-based chatbot · Enterprise knowledge',
    },
  ],

  closingNote: 'All built from zero to one by my own hands, then scaled to production.',
}

export const VALUE = {
  sectionLabel: 'WHAT I BRING',
  title: 'Three Consistent Things',
  cards: [
    {
      emoji: '🎯',
      title: 'Clarity on Value',
      description:
        'I translate AI possibilities into business outcomes — ROI, cycle time reduction, risk mitigation, quality improvement — and define metrics early, so everyone knows what success looks like.',
      tags: ['ROI', 'Cycle Time', 'Risk', 'Quality'],
    },
    {
      emoji: '🚀',
      title: 'Momentum Through Proof',
      description:
        'Instead of lengthy debates and concept papers, I build MVPs quickly to generate evidence, align stakeholders, and unlock budget.',
      quote: 'Working software beats slides — every time.',
    },
    {
      emoji: '⚙️',
      title: 'Scale Through Systems',
      description:
        'I design for production from day one: security, auditability, compliance, monitoring, and seamless integration into standard SAP processes.',
      progression: ['Demo', 'Enterprise Product'],
    },
  ],
  closing:
    'When we deliver measurable impact — €250,000 here, 50% effort reduction there — consistently across multiple value chains, digital department is no longer a support function.',
  closingHighlight:
    'Digital department becomes a strategic driver of enterprise transformation.',
}

export const BELIEF = {
  sectionLabel: 'CORE BELIEF',
  title: 'AI-Native,',
  titleLine2: 'Not AI-Added',
  comparisons: [
    {
      before: 'Humans executing steps',
      after: 'Humans setting intent, AI executing tasks',
    },
    {
      before: 'Processes designed around system constraints',
      after: 'Processes designed to be agent-executable & auditable',
    },
    {
      before: '"Better tools"',
      after: 'A fundamentally different way of working',
    },
  ],
  closing: 'The future of work is not humans OR AI.',
  closingHighlight:
    "It's humans AND AI agents collaborating —",
  closingEnd: 'and many routine steps simply disappearing.',
}

export const CONTACT = {
  sectionLabel: 'NEXT',
  lines: [
    { text: 'Ford saw beyond', emphasis: false },
    { text: 'faster horses.', emphasis: true },
    { text: '' },
    { text: 'Jobs stood at the', emphasis: false },
    { text: 'intersection', emphasis: true },
    { text: 'of technology and', emphasis: false },
    { text: 'the liberal arts.', emphasis: true },
  ],
  personal:
    "I've spent my career learning to do both — and at Bosch, I have the opportunity to prove it.",
  cta: "I'm happy to go deeper on any project — or discuss how I can contribute to deliver a visible, high-impact win.",
  buttonText: "Let's Talk",
  email: 'he.sun@de.bosch.com',
}