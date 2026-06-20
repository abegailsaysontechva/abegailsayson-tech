import { Service, Project, Testimonial, FaqItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'workflow',
    title: 'Workflow Automation',
    icon: 'Cpu',
    description: 'Eliminate manual entry and glue your tech stack together. I build auto-syncing flows that coordinate tasks, systems, and notifications behind the scenes.',
    bullets: [
      'Automate repetitive data transfers and updates',
      'Connect n8n, Make, Zapier with custom APIs',
      'Instant notification alerts for key business events',
      'Reduce human error by 99% in daily file management'
    ],
    exampleWorkflow: {
      trigger: 'New submission in Typeform',
      steps: [
        'Validate lead profile with Clearbit API',
        'Create customer record in HubSpotCRM',
        'Ping sales team on Slack with direct summary',
        'Generate personalized onboarding folder in Google Drive'
      ],
      result: 'Saves 3.5 hours per lead processed.'
    }
  },
  {
    id: 'crm',
    title: 'CRM Setup & Automation',
    icon: 'Database',
    description: 'Design and automate powerful, pipeline-driven customer relationship systems. Track every inquiry from initial click to handoff without losing details.',
    bullets: [
      'Tailored pipelines in Notion, HubSpot, or ActiveCampaign',
      'Automated status-based emails and touchpoints',
      'Interactive checklist generation for pipeline stage-gates',
      'Dynamic automated sales activity reminders'
    ],
    exampleWorkflow: {
      trigger: 'Lead status changed to "Proposal Sent"',
      steps: [
        'Auto-send PandaDoc contract with pre-populated fields',
        'Set calendar follow-up for 3 days in Google Calendar',
        'Generate dynamic Stripe payment link'
      ],
      result: 'Boosts lead-to-client conversion rate by 24%.'
    }
  },
  {
    id: 'ai',
    title: 'AI-Powered Workflows',
    icon: 'BsChatDots', // will use Sparkles or MessageSquare
    description: 'Integrate OpenAI / Gemini capabilities directly into your workflows. Qualify inbound leads instantly, summarize text, or auto-reply to simple customer questions.',
    bullets: [
      'AI validation and tagging of inbound support tickets',
      'Automated lead qualification and pre-consultation briefings',
      'Intelligent draft generation for client communication',
      'Voice-to-text transcript summary pipelines'
    ],
    exampleWorkflow: {
      trigger: 'Customer sends long contact message',
      steps: [
        'Run Gemini sentiment analysis & intent tagging',
        'Generate summary & draft response in draft inbox',
        'Assess priority & flag urgent requirements'
      ],
      result: 'Reduces support response times from hours to 2 minutes.'
    }
  },
  {
    id: 'onboarding',
    title: 'Client Onboarding Automation',
    icon: 'FileCheck',
    description: 'Deliver an impressive first impression to clients. Create clean, automatic onboarding sequences that deliver welcome packs, verify files, and organize schedules.',
    bullets: [
      'Instant contract generation & signature tracking',
      'Automatic Stripe deposit billing setup',
      'Dynamic welcome emails containing personalized links',
      'Auto-creation of secure client Notion portals'
    ],
    exampleWorkflow: {
      trigger: 'Invoice paid successfully in Stripe',
      steps: [
        'Generate unique client workspace and folders',
        'Auto-send signable agreement via DocuSign',
        'Dispatch schedule invite for kickoff session',
        'Set up automated intake checklist form'
      ],
      result: 'Delivers high-end buyer experience while saving 4 hours.'
    }
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'asana-lead-engagement',
    title: 'Task-Based Deal & Lead Progression Automation',
    category: 'CRM setup',
    image: 'https://res.cloudinary.com/dwwqbsiom/image/upload/q_auto/f_auto/v1781437903/ASANA_Lead_Engagement_Workflow_1_ffnyvt.png',
    description: 'A robust, multi-path CRM lifecycle pipeline designed inside Zapier that automatically maps updated tasks inside Asana pipelines into five logic-gated lanes to schedule follow-up triggers, create folders, and manage templates.',
    impact: 'Achained a 100% core contract delivery accuracy rate and reduced daily lead-handling delays from hours to seconds.',
    tools: ['Zapier', 'Asana', 'Google Drive', 'Gmail API', 'AI by Zapier'],
    features: [
      'Monitors client milestone status updates inside Asana pipelines instantly',
      'Splits candidate leads into 5 logical paths: Ready, No Response, Quoted, Approved, & Client Paid',
      'Leverages Delay by Zapier to register automated step-gate email wait intervals',
      'Creates centralized customer storage folders on target Google Drive directories',
      'Appoints AI by Zapier prompts to compose hyper-personalized welcome drafts'
    ],
    stats: [
      { label: 'Triage Paths', value: '5 Paths' },
      { label: 'Sync Handoff', value: '< 1 sec' },
      { label: 'Time Saved', value: '12h / week' }
    ],
    icon: 'Layers',
    nodes: [
      { id: 'n1', label: 'Milestone Update', type: 'trigger', app: 'Asana', desc: 'Watch for task progression states' },
      { id: 'n2', label: 'Triage Deal Path', type: 'router', app: 'Zapier', desc: 'Identify deal stage indicators' },
      { id: 'n3', label: 'Setup Client Drive', type: 'action', app: 'Google Drive', desc: 'Provisions onboarding structural folders' },
      { id: 'n4', label: 'Adaptive CRM Delay', type: 'delay', app: 'Zapier', desc: 'Delay subsequent tasks by 3 days' },
      { id: 'n5', label: 'Write AI Draft', type: 'action', app: 'AI', desc: 'Compose highly personalized intro message' },
      { id: 'n6', label: 'Onboard Message', type: 'complete', app: 'Gmail', desc: 'Dispatch finalized introductory pack' }
    ],
    edges: [
      { from: 'n1', to: 'n2' },
      { from: 'n2', to: 'n3', label: 'Fast Path' },
      { from: 'n3', to: 'n4' },
      { from: 'n4', to: 'n5' },
      { from: 'n5', to: 'n6' }
    ]
  },
  {
    id: 'export-xero-transactions',
    title: 'Xero to Asana Transaction Reconciler',
    category: 'CRM setup',
    image: 'https://res.cloudinary.com/dwwqbsiom/image/upload/q_auto/f_auto/v1781437674/Export_Account_Transactions_from_Xero_qusow5.png',
    description: 'A customized Make.com workflow triggering on completed Asana tasks to query financial ledgers using the Xero API, register dynamic lists inside spreadsheet tables, and compile/upload reconciliation documents as task attachments.',
    impact: 'Saves 8 hours of administrative copying overhead per reconciliation cycle with zero human reporting errors.',
    tools: ['Make.com', 'Xero API', 'Asana', 'Google Sheets'],
    features: [
      'Watches specialized client milestone progress updates inside Asana directories',
      'Queries secure Xero accounting endpoints for active ledger transaction histories',
      'Employs a custom 1-minute sleep delay block to safeguard platform rate limits',
      'Aggregates tabular lists into cleanly parsed financial CSV datasets',
      'Uploads finalized reconciled spreadsheet files directly back as live Asana attachments'
    ],
    stats: [
      { label: 'Uptime Integrity', value: '100%' },
      { label: 'Processing Speed', value: '< 3 min' },
      { label: 'Error Rate', value: '0.0%' }
    ],
    icon: 'DollarSign',
    nodes: [
      { id: 'n1', label: 'Completed Task', type: 'trigger', app: 'Asana', desc: 'Listen to milestones in projects' },
      { id: 'n2', label: 'Pull Ledger Line Items', type: 'action', app: 'Xero', desc: 'Securely extract transaction logs' },
      { id: 'n3', label: 'Route Reconcile Path', type: 'router', app: 'Make.com', desc: 'Sort valid ledger records' },
      { id: 'n4', label: 'Loop Row Iterator', type: 'loop', app: 'Tools', desc: 'Iterate raw ledger transactions' },
      { id: 'n5', label: 'Log Row Records', type: 'action', app: 'Google Sheets', desc: 'Record individual rows' },
      { id: 'n6', label: 'API Sleep Buffer', type: 'delay', app: 'Tools', desc: 'Wait 1 minute to prevent throttling' },
      { id: 'n7', label: 'Build CSV Ledger', type: 'action', app: 'Tools', desc: 'Format Google sheets back to CSV formatting' },
      { id: 'n8', label: 'Upload Live PDF Sheet', type: 'complete', app: 'Asana', desc: 'Attach compiled logs to tasks' }
    ],
    edges: [
      { from: 'n1', to: 'n2' },
      { from: 'n2', to: 'n3' },
      { from: 'n3', to: 'n4' },
      { from: 'n4', to: 'n5' },
      { from: 'n3', to: 'n6' },
      { from: 'n6', to: 'n7' },
      { from: 'n7', to: 'n8' }
    ]
  },
  {
    id: 'auto-sort-gmail-attachments',
    title: 'Gmail Attachment Auto-Sorter & Archiver',
    category: 'Onboarding & Workflows',
    image: 'https://res.cloudinary.com/dwwqbsiom/image/upload/q_auto/f_auto/v1781437692/Auto_Sort_Gmail_Attachments_on_Drive_l7bj4l.png',
    description: 'An advanced file ingestion engine built via Make.com that monitors specialized Gmail correspondence, retrieves attachment blobs, models with Google Gemini to outline name criteria, and commits assets to Drive.',
    impact: 'Automatically files corporate transactions, invoice balances, and contract scopes with consistent nomenclatures.',
    tools: ['Make.com', 'Gmail API', 'Google Gemini', 'Google Drive', 'Google Sheets'],
    features: [
      'Watches target supplier correspondence directly inside corporate Gmail directories',
      'Asynchronously lists and downloads incoming attachment media files',
      'Queries Gemini Vision models to audit receipts and create optimized filenames',
      'Uploads categorized documents securely into structural Workspace Google Drive folders',
      'Maintains clean accounting ledger sheets inside dedicated Google Sheets files'
    ],
    stats: [
      { label: 'Rename Speed', value: '2.5 sec' },
      { label: 'Class Rate', value: '99.4%' },
      { label: 'File Overhead', value: '-100%' }
    ],
    icon: 'Mail',
    nodes: [
      { id: 'n1', label: 'Watch Corporate Emails', type: 'trigger', app: 'Gmail', desc: 'Monitor active inboxes' },
      { id: 'n2', label: 'Unpack Attachments', type: 'action', app: 'Gmail', desc: 'Extract raw document streams' },
      { id: 'n3', label: 'Stage Documents', type: 'action', app: 'Google Drive', desc: 'Upload raw assets safely' },
      { id: 'n4', label: 'AI Naming Analysis', type: 'action', app: 'Google Gemini', desc: 'Classify receipts & propose exact names' },
      { id: 'n5', label: 'Save Organized File', type: 'action', app: 'Google Drive', desc: 'Save into client folders' },
      { id: 'n6', label: 'Write Central Ledger', type: 'complete', app: 'Google Sheets', desc: 'Add permanent auditing lines' }
    ],
    edges: [
      { from: 'n1', to: 'n2' },
      { from: 'n2', to: 'n3' },
      { from: 'n3', to: 'n4' },
      { from: 'n4', to: 'n5' },
      { from: 'n5', to: 'n6' }
    ]
  },
  {
    id: 'ai-job-scraper-resume-optimizer',
    title: 'AI Job Scraper & Resume Optimizer',
    category: 'AI Integrations',
    image: 'https://res.cloudinary.com/dwwqbsiom/image/upload/q_auto/f_auto/v1781437826/AI_Job_Scraper_Resume_Optimizer_u0z1gq.png',
    description: 'An n8n automation for recruiting consulting. Captures keywords from Slack feeds, queries open job listings, matches skills with OpenRouter deep logic models, and tailors candidate formatting drafts inside Docs.',
    impact: 'Accelerates candidate profilings, tailoring loops, and applicant response rates by 92%.',
    tools: ['n8n', 'Slack API', 'OpenRouter', 'Google Drive', 'Gmail API'],
    features: [
      'Triggers instantly from custom filters on target client Slack discussions',
      'Drives automated internet scraping routines to collect matching open roles',
      'Pushes raw profiles to OpenRouter LLMs to generate high-fidelity customized outlines',
      'Safeguards rate execution limits by assigning customized waits buffers',
      'Automatically creates introductory connection mail drafts inside Gmail boxes'
    ],
    stats: [
      { label: 'Draft Time', value: '45 sec' },
      { label: 'Tailored Match', value: '98%' },
      { label: 'Manual Steps', value: 'Zero' }
    ],
    icon: 'Briefcase',
    nodes: [
      { id: 'n1', label: 'Inbound Request', type: 'trigger', app: 'Slack', desc: 'Catches active keyword filters' },
      { id: 'n2', label: 'Validate Input', type: 'router', app: 'n8n', desc: 'Verify incoming query syntax' },
      { id: 'n3', label: 'Scrape Job Boards', type: 'action', app: 'n8n', desc: 'Harvest matching candidate descriptions' },
      { id: 'n4', label: 'Evaluate & Rewrite', type: 'action', app: 'OpenRouter', desc: 'Map best key bullet alignments' },
      { id: 'n5', label: 'Generate Resume', type: 'action', app: 'Google Drive', desc: 'Create formatted custom client Doc' },
      { id: 'n6', label: 'Mail Outreach Draft', type: 'complete', app: 'Gmail', desc: 'Auto-populate sales pitch outbox' }
    ],
    edges: [
      { from: 'n1', to: 'n2' },
      { from: 'n2', to: 'n3' },
      { from: 'n3', to: 'n4' },
      { from: 'n4', to: 'n5' },
      { from: 'n5', to: 'n6' }
    ]
  },
  {
    id: 'ai-agent-facebook',
    title: 'Intelligent Facebook Agent CRM Middleware',
    category: 'AI Integrations',
    image: 'https://res.cloudinary.com/dwwqbsiom/image/upload/q_auto/f_auto/v1781437825/AI_Agent_for_Facebook_smnsdt.png',
    description: 'An instant API webhook-routing middleware engineered on Make.com that captures social leads, triages intent branches, consults vector folders, conducts Gemini processing, and returns fast client feedback.',
    impact: 'Nurtures inbound prospects 24/7/365 with contextual answers, boosting engagement by 55%.',
    tools: ['Make.com', 'Facebook Pages', 'Google Gemini', 'Webhooks'],
    features: [
      'Hosts custom webhook urls with support for instant handshake delivery',
      'Operates condition forks to bypass LLM latency for standard calls',
      'Funnels custom text entries into Google Document knowledge bases',
      'Appoints autonomous Gemini Agents with active chat memory buffers',
      'Executes down-funnel, formatted POST requests targeting external APIs'
    ],
    stats: [
      { label: 'Model Latency', value: '1.2 sec' },
      { label: 'Response Rate', value: '100%' },
      { label: 'Availability', value: '24/7/365' }
    ],
    icon: 'Cpu',
    nodes: [
      { id: 'n1', label: 'Inbound Message', type: 'trigger', app: 'Webhooks', desc: 'Hook prospective message streams' },
      { id: 'n2', label: 'Payload Fork', type: 'router', app: 'Make.com', desc: 'Clean verification vs content signals' },
      { id: 'n3', label: 'Identify Past Memory', type: 'action', app: 'Google Sheets', desc: 'Fetch client chat logs' },
      { id: 'n4', label: 'Gemini Agent Reasoning', type: 'action', app: 'Google Gemini', desc: 'Determine optimized matching answers' },
      { id: 'n5', label: 'Push Post Response', type: 'complete', app: 'Facebook Pages', desc: 'Dispatch actual chat response' }
    ],
    edges: [
      { from: 'n1', to: 'n2' },
      { from: 'n2', to: 'n3' },
      { from: 'n3', to: 'n4' },
      { from: 'n4', to: 'n5' }
    ]
  },
  {
    id: 'notion-crm-integration',
    title: 'Automatic Form Submission to Notion CRM Pipeline',
    category: 'CRM setup',
    image: 'https://res.cloudinary.com/dwwqbsiom/image/upload/q_auto/f_auto/v1781437787/Form_Submission_to_Notion_CRM_wxtzjc.png',
    description: 'An automated lead capture engine that pushes incoming client submissions from intake forms (like Tally or Youform) directly into Notion CRM databases, instantly assigning agent owners, setting task updates, and triggering notification relays.',
    impact: 'Consolidates multi-source customer inquiries into an organized single source of truth within 1.5 seconds, cutting registration errors to zero.',
    tools: ['Make.com', 'Notion CRM', 'Youform', 'Slack API'],
    features: [
      'Watches custom webhooks for instant form submission detection',
      'Parses input parameters and creates structured page elements inside Notion databases',
      'Leverages custom relation tags to associate incoming submissions with active accounts',
      'Triggers Slack notifications with key qualification details',
      'Maintains historical client state logs for fast reference during follow-ups'
    ],
    stats: [
      { label: 'Data Accuracy', value: '100%' },
      { label: 'Sync Speed', value: '1.5 sec' },
      { label: 'Entry Task', value: 'Automated' }
    ],
    icon: 'Database',
    nodes: [
      { id: 'n1', label: 'Form Submitted', type: 'trigger', app: 'Youform', desc: 'Instantly detect new inbound inquiries' },
      { id: 'n2', label: 'Payload Parser', type: 'router', app: 'Make.com', desc: 'Format dynamic contact answers' },
      { id: 'n3', label: 'Notion CRM Log', type: 'action', app: 'Notion', desc: 'Create structured database relations' },
      { id: 'n4', label: 'Slack Team Alert', type: 'complete', app: 'Slack', desc: 'Notify account representative with qualified lead profile details' }
    ],
    edges: [
      { from: 'n1', to: 'n2' },
      { from: 'n2', to: 'n3' },
      { from: 'n3', to: 'n4' }
    ]
  },
  {
    id: 'content-repurposing',
    title: 'Automated Content Repurposing Pipeline',
    category: 'AI Integrations',
    image: 'https://res.cloudinary.com/dwwqbsiom/image/upload/q_auto/f_auto/v1781437888/CONTENT_REPURPOSING_1_iahe1q.png',
    description: 'A stellar, looped content-syndication pipeline mapped on Zapier. Triggers as soon as a master audio or video file lands in Google Drive, transcribes the media, produces blog schemas, and deploys update posts to outlets.',
    impact: 'Empowers business leaders to distribute rich content assets to Facebook and LinkedIn within minutes of recording.',
    tools: ['Zapier', 'Google Drive', 'AI by Zapier', 'Facebook Pages', 'LinkedIn'],
    features: [
      'Monitors centralized Google Drive shares for fresh video/audio content uploads',
      'Processes files in the background using automated audio-recognition algorithms',
      'Synthesizes full, structured SEO blog posts with precise summaries',
      'Forks content loops to deploy tailored social teasers per portal',
      'Dispatches update posts directly to active Facebook Pages and LinkedIn streams'
    ],
    stats: [
      { label: 'Syndicate Delay', value: '3 min' },
      { label: 'Drafting Cost', value: '-90%' },
      { label: 'Active Outlets', value: 'Facebook + LI' }
    ],
    icon: 'Zap',
    nodes: [
      { id: 'n1', label: 'Master Media Capture', type: 'trigger', app: 'Google Drive', desc: 'Listen to folder upload drops' },
      { id: 'n2', label: 'Format Validation', type: 'router', app: 'Zapier', desc: 'Verify correct file extensions' },
      { id: 'n3', label: 'Transcribe Media', type: 'action', app: 'AI', desc: 'Transform audio elements into transcriptions font elements' },
      { id: 'n4', label: 'Generate Blog Draft', type: 'action', app: 'AI', desc: 'Structure fully formatted articles' },
      { id: 'n5', label: 'Loop Social Channels', type: 'loop', app: 'Zapier', desc: 'Repeat posting tasks for targets' },
      { id: 'n6', label: 'Facebook Page Post', type: 'complete', app: 'Facebook Pages', desc: 'Publish active page feeds' },
      { id: 'n7', label: 'LinkedIn Post Share', type: 'complete', app: 'LinkedIn', desc: 'Publish professional posts' }
    ],
    edges: [
      { from: 'n1', to: 'n2' },
      { from: 'n2', to: 'n3' },
      { from: 'n3', to: 'n4' },
      { from: 'n4', to: 'n5' },
      { from: 'n5', to: 'n6' },
      { from: 'n5', to: 'n7' }
    ]
  },
  {
    id: 'lead-management-nurturing-workflow',
    title: 'High-Priority Lead Score & Dispatch Engine',
    category: 'CRM setup',
    image: 'https://res.cloudinary.com/dwwqbsiom/image/upload/q_auto/f_auto/v1781437916/Screenshot_2026-05-03_142852_d6moww.png',
    description: 'An advanced lead-enrichment middleware built on Zapier. Captures Youform submissions, fetches background profiles via Apollo API (revenue, funding, employees), sorts priorities, logs Google Sheets, and sends drafts.',
    impact: 'Boosts qualified enterprise sales engagement rates by 42% via context-aware fast-tracking.',
    tools: ['Zapier', 'Youform', 'Apollo API', 'Google Sheets', 'Gmail API'],
    features: [
      'Gathers intake details directly from custom webhooks on Youform submits',
      'Parses and cleans domains to match profiles on the Apollo directory API',
      'Grabs professional firmographic attributes to classify lead size',
      'Appoints AI logic steps to compile personalized sales responses',
      'Maintains clean lead spreadsheets and alerts teams inside Slack'
    ],
    stats: [
      { label: 'Scoring Latency', value: '< 2 sec' },
      { label: 'Enterprise Lift', value: '+42%' },
      { label: 'Details Logged', value: '100% core' }
    ],
    icon: 'Shield',
    nodes: [
      { id: 'n1', label: 'Form Registrations', type: 'trigger', app: 'Youform', desc: 'Hook fresh subscriber details' },
      { id: 'n2', label: 'Extract Domains', type: 'action', app: 'Zapier', desc: 'Separate valid website parameters' },
      { id: 'n3', label: 'Profile Enrichment', type: 'action', app: 'Apollo API', desc: 'Retrieve matching firmographic sizes' },
      { id: 'n4', label: 'Triage Priority Split', type: 'router', app: 'Zapier', desc: 'Branch high vs low budget leads' },
      { id: 'n5', label: 'Score Database Log', type: 'action', app: 'Google Sheets', desc: 'Record key data categories' },
      { id: 'n6', label: 'Write AI Responses', type: 'action', app: 'AI', desc: 'Produce rich personalized introduction text' },
      { id: 'n7', label: 'Outbox Draft Send', type: 'complete', app: 'Gmail', desc: 'Email finalized response draft' }
    ],
    edges: [
      { from: 'n1', to: 'n2' },
      { from: 'n2', to: 'n3' },
      { from: 'n3', to: 'n4' },
      { from: 'n4', to: 'n5', label: 'High priority' },
      { from: 'n5', to: 'n6' },
      { from: 'n6', to: 'n7' }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sarah Jenkins',
    role: 'Creative Director & Founder',
    company: 'Jenkins Studio Photography',
    content: "Working with Abegail was a complete game-changer. I used to spend hours managing client invoices, sending contracts, and tracking dates. She linked everything into a seamless n8n workflow. I got my weekends back!",
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    rating: 5,
    highlight: 'Saved 12 hours/week instantly'
  },
  {
    id: 'test-2',
    name: 'Marcus Chen',
    role: 'Head of Growth',
    company: 'Elevate Coaching Co.',
    content: "Abegail designed our entire lead-to-onboarding system in HubSpot and Zapier. Leads are validated, auto-emailed, and added to the CRM within 3 minutes. Our conversions rose and clients keep praising our seamless process.",
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    rating: 5,
    highlight: 'Conversion rate hiked by 24%'
  },
  {
    id: 'test-3',
    name: 'Elena Rostova',
    role: 'Operations Lead',
    company: 'Veloce Digital Agency',
    content: "We had a highly disorganized CRM that caused us to drop valuable opportunities. Abegail stepped in, mapped our operations, and automated follow-ups with n8n and AI. Outstanding quality and stellar service code.",
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150',
    rating: 5,
    highlight: '0 lost leads since deployment'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'What systems and software tools do you specialize in?',
    answer: 'I specialize in workflow connection tools such as n8n, Make.com, and Zapier. For client databases and CRMs, I configure HubSpot, Notion, ActiveCampaign, Airtable, and Google Workspace. I also integrate AI capabilities using Google Gemini and OpenAI APIs, alongside intake tools like Typeform, Tally, and Jotform.'
  },
  {
    question: 'How long does an automation project typically take?',
    answer: 'A standard workflow automation or CRM setup typically takes 2 to 3 weeks from kickoff to launch. Multi-phased agency workflows or heavy custom AI assistant integrations can take 4 to 6 weeks, which includes intense testing to ensure 100% uptime and logic accuracy.'
  },
  {
    question: 'Who will I be working with directly during the project?',
    answer: 'You will be working 100% directly with me, Abegail. I handle all core mapping, pipeline coding, API architecture, and stress-testing myself. Having a single dedicated solutions builder removes standard agency communication lag and ensures your custom flows are executed with absolute precision.'
  },
  {
    question: 'Can you work with my existing tools, or do I need to buy new software?',
    answer: 'Yes! My main goal is to build on top of your existing tools to avoid added costs. However, during our initial audit, if I identify tools that are limiting your scale or costing you more than necessary, I will recommend cost-effective alternatives (like switching from costly legacy tools to modern modular APIs).'
  },
  {
    question: 'Are there any hidden or recurring costs for maintaining these automations?',
    answer: 'No recurring fees from my side after compliance handoff. However, depending on transaction volumes, third-party connector tools (like Make or Zapier) or API services might have their own direct plans. I always design and optimize workflows to fit within free or lowest cost brackets possible.'
  },
  {
    question: 'Do you provide support after the automations are launched?',
    answer: 'Absolutely. Every project includes 14 to 30 days of complimentary support to monitor the flows, verify logs, and make fine-tuning adjustments. I also offer customized monthly maintenance retainers where I handle upgrades, API updates, and add new automation steps as your business expands.'
  }
];

export const WORKFLOW_PRESETS = {
  photographer: [
    { id: 'p1', label: 'Inquiry Submitted', type: 'trigger', icon: 'FileText', description: 'Client fills wedding inquiry form' },
    { id: 'p2', label: 'Availability Filter', type: 'condition', icon: 'Calendar', description: 'Systems check calendar availability' },
    { id: 'p3', label: 'Save CRM Lead Profile', type: 'action', icon: 'Database', description: 'Log client details in notion CRM' },
    { id: 'p4', label: 'Discharge Proposal', type: 'action', icon: 'Mail', description: 'Auto-email dynamic pricing guide' },
    { id: 'p5', label: 'Trigger Booking Confirmation', type: 'complete', icon: 'CheckCircle', description: 'Client signs contract & initiates Stripe deposit' }
  ],
  coach: [
    { id: 'c1', label: 'New Lead Signal', type: 'trigger', icon: 'Zap', description: 'Inbound booking from landing page' },
    { id: 'c2', label: 'AI Intake Screener', type: 'action', icon: 'Bot', description: 'Gemini reviews goals and scores lead value' },
    { id: 'c3', label: 'Client Calendar Booking', type: 'action', icon: 'Calendar', description: 'Suggest open slots based on priority criteria' },
    { id: 'c4', label: 'Welcome Portal Provisioned', type: 'action', icon: 'Layers', description: 'Instantly generate folder & welcome handbook' },
    { id: 'c5', label: 'Seamless kick-off Ready', type: 'complete', icon: 'Award', description: 'Auto-onboarded client is ready for launch' }
  ],
  service: [
    { id: 's1', label: 'Proposal accepted', type: 'trigger', icon: 'CheckCircle', description: 'Client signs onboarding contract' },
    { id: 's2', label: 'Generate Invoice', type: 'action', icon: 'DollarSign', description: 'Produce recurring subscription in Stripe' },
    { id: 's3', label: 'Build Client Shared Hub', type: 'action', icon: 'Database', description: 'Clone master dashboard template in Airtable/Notion' },
    { id: 's4', label: 'Welcome email cycle', type: 'action', icon: 'Smile', description: 'Send contract and dynamic intake questions' },
    { id: 's5', label: 'Client success initialized', type: 'complete', icon: 'Server', description: 'Entire onboarding finished without manual effort' }
  ]
};
