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
    category: 'CRM & Lead Automation',
    image: 'https://res.cloudinary.com/dwwqbsiom/image/upload/q_auto/f_auto/v1781437903/ASANA_Lead_Engagement_Workflow_1_ffnyvt.png',
    description: 'A multi-path CRM lifecycle pipeline designed inside Zapier as a personal demo project. Automatically maps updated tasks inside Asana pipelines into five logic-gated lanes to schedule follow-up triggers, create Google Drive folders, and draft personalized intro messages.',
    impact: 'Achieved 100% logic accuracy in automated testing and demonstrated reducing lead-handling delays from hours to seconds.',
    tools: ['Zapier', 'Asana', 'Google Drive', 'Gmail API', 'AI by Zapier'],
    features: [
      'Monitors milestone status updates inside Asana pipelines instantly',
      'Splits leads into 5 logical paths: Ready, No Response, Quoted, Approved, & Paid',
      'Leverages Delay by Zapier to register automated step-gate email wait intervals',
      'Creates centralized storage folders on target Google Drive directories',
      'Appoints AI prompts to compose hyper-personalized welcome drafts'
    ],
    stats: [
      { label: 'Project Type', value: 'Personal Build' },
      { label: 'Sync Handoff', value: '< 1 sec' },
      { label: 'Tested Efficiency', value: '12h / wk saved' }
    ],
    icon: 'Layers',
    nodes: [
      { id: 'n1', label: 'Milestone Update', type: 'trigger', app: 'Asana', desc: 'Watch for task progression states' },
      { id: 'n2', label: 'Triage Deal Path', type: 'router', app: 'Zapier', desc: 'Identify deal stage indicators' },
      { id: 'n3', label: 'Setup Drive Folders', type: 'action', app: 'Google Drive', desc: 'Provisions onboarding structural folders' },
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
    category: 'Financial Workflow Demo',
    image: 'https://res.cloudinary.com/dwwqbsiom/image/upload/q_auto/f_auto/v1781437674/Export_Account_Transactions_from_Xero_qusow5.png',
    description: 'A personal proof-of-concept workflow created on Make.com triggering on completed Asana tasks to query financial ledgers via Xero API, register dynamic lists inside spreadsheet tables, and attach reconciliation reports to task threads.',
    impact: 'Demonstrates eliminating 8 hours of administrative data entry per reconciliation cycle with zero reporting errors in testing.',
    tools: ['Make.com', 'Xero API', 'Asana', 'Google Sheets'],
    features: [
      'Watches milestone progress updates inside Asana project boards',
      'Queries secure Xero accounting endpoints for active ledger transaction histories',
      'Employs a custom 1-minute sleep delay block to safeguard platform rate limits',
      'Aggregates tabular lists into cleanly parsed financial CSV datasets',
      'Uploads finalized reconciled spreadsheet files directly back as live Asana attachments'
    ],
    stats: [
      { label: 'Project Type', value: 'Personal Build' },
      { label: 'Processing Speed', value: '< 3 min' },
      { label: 'Test Error Rate', value: '0.0%' }
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
    category: 'Document Automation Demo',
    image: 'https://res.cloudinary.com/dwwqbsiom/image/upload/q_auto/f_auto/v1781437692/Auto_Sort_Gmail_Attachments_on_Drive_l7bj4l.png',
    description: 'An independent personal project built via Make.com that monitors designated Gmail correspondence, extracts attachment blobs, uses Google Gemini to inspect and format filenames, and archives organized assets directly into Google Drive.',
    impact: 'Automatically organizes inbound receipts, invoices, and contracts with standardized naming conventions.',
    tools: ['Make.com', 'Gmail API', 'Google Gemini', 'Google Drive', 'Google Sheets'],
    features: [
      'Monitors target email correspondence inside designated Gmail inboxes',
      'Asynchronously lists and downloads incoming attachment media files',
      'Queries Gemini Vision models to audit receipts and create optimized filenames',
      'Uploads categorized documents securely into structured Google Drive folders',
      'Maintains clean auditing spreadsheets inside dedicated Google Sheets files'
    ],
    stats: [
      { label: 'Project Type', value: 'Personal Build' },
      { label: 'Rename Speed', value: '2.5 sec' },
      { label: 'Classification', value: '99.4%' }
    ],
    icon: 'Mail',
    nodes: [
      { id: 'n1', label: 'Watch Inbox Emails', type: 'trigger', app: 'Gmail', desc: 'Monitor active inboxes' },
      { id: 'n2', label: 'Unpack Attachments', type: 'action', app: 'Gmail', desc: 'Extract raw document streams' },
      { id: 'n3', label: 'Stage Documents', type: 'action', app: 'Google Drive', desc: 'Upload raw assets safely' },
      { id: 'n4', label: 'AI Naming Analysis', type: 'action', app: 'Google Gemini', desc: 'Classify receipts & propose exact names' },
      { id: 'n5', label: 'Save Organized File', type: 'action', app: 'Google Drive', desc: 'Save into target folders' },
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
    category: 'AI Tool Prototype',
    image: 'https://res.cloudinary.com/dwwqbsiom/image/upload/q_auto/f_auto/v1781437826/AI_Job_Scraper_Resume_Optimizer_u0z1gq.png',
    description: 'An n8n personal workflow prototype. Captures keyword prompts from Slack feeds, scrapes matching job descriptions, maps skills using OpenRouter LLM reasoning, and generates tailored resume drafts in Google Docs.',
    impact: 'Demonstrated 92% time savings in personal resume customization trials and automated outreach drafting.',
    tools: ['n8n', 'Slack API', 'OpenRouter', 'Google Drive', 'Gmail API'],
    features: [
      'Triggers instantly from custom keyword filters in Slack discussions',
      'Drives automated web scraping routines to collect matching open roles',
      'Pushes job specs to OpenRouter LLMs to generate tailored bullet points',
      'Safeguards rate execution limits by assigning customized wait buffers',
      'Automatically creates connection email drafts inside Gmail outbox'
    ],
    stats: [
      { label: 'Project Type', value: 'Personal Build' },
      { label: 'Draft Time', value: '45 sec' },
      { label: 'Tailored Match', value: '98%' }
    ],
    icon: 'Briefcase',
    nodes: [
      { id: 'n1', label: 'Inbound Request', type: 'trigger', app: 'Slack', desc: 'Catches active keyword filters' },
      { id: 'n2', label: 'Validate Input', type: 'router', app: 'n8n', desc: 'Verify incoming query syntax' },
      { id: 'n3', label: 'Scrape Job Boards', type: 'action', app: 'n8n', desc: 'Harvest matching candidate descriptions' },
      { id: 'n4', label: 'Evaluate & Rewrite', type: 'action', app: 'OpenRouter', desc: 'Map best key bullet alignments' },
      { id: 'n5', label: 'Generate Resume', type: 'action', app: 'Google Drive', desc: 'Create formatted custom Doc' },
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
    category: 'AI Assistant Demo',
    image: 'https://res.cloudinary.com/dwwqbsiom/image/upload/q_auto/f_auto/v1781437825/AI_Agent_for_Facebook_smnsdt.png',
    description: 'A personal middleware experiment built on Make.com that captures social page messages, routes intent branches, searches knowledge bases, invokes Gemini AI reasoning, and posts context-aware replies.',
    impact: 'Provides 24/7 automated inquiry handling and intelligent response generation in test simulations.',
    tools: ['Make.com', 'Facebook Pages', 'Google Gemini', 'Webhooks'],
    features: [
      'Hosts custom webhook endpoints with instant handshake support',
      'Operates condition forks to bypass LLM latency for simple requests',
      'Funnels custom text entries into Google Docs knowledge bases',
      'Appoints autonomous Gemini Agents with chat memory buffers',
      'Executes formatted POST requests back to social API endpoints'
    ],
    stats: [
      { label: 'Project Type', value: 'Personal Build' },
      { label: 'Model Latency', value: '1.2 sec' },
      { label: 'Uptime', value: '24/7 Demo' }
    ],
    icon: 'Cpu',
    nodes: [
      { id: 'n1', label: 'Inbound Message', type: 'trigger', app: 'Webhooks', desc: 'Hook message streams' },
      { id: 'n2', label: 'Payload Fork', type: 'router', app: 'Make.com', desc: 'Clean verification vs content signals' },
      { id: 'n3', label: 'Identify Past Memory', type: 'action', app: 'Google Sheets', desc: 'Fetch chat logs' },
      { id: 'n4', label: 'Gemini Agent Reasoning', type: 'action', app: 'Google Gemini', desc: 'Determine optimized matching answers' },
      { id: 'n5', label: 'Push Response', type: 'complete', app: 'Facebook Pages', desc: 'Dispatch chat response' }
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
    title: 'Form Submission to Notion CRM Pipeline',
    category: 'CRM & Lead Automation',
    image: 'https://res.cloudinary.com/dwwqbsiom/image/upload/q_auto/f_auto/v1781437787/Form_Submission_to_Notion_CRM_wxtzjc.png',
    description: 'A personal automation system that captures webform submissions (like Tally or Youform) directly into Notion CRM databases, formatting contact attributes, setting task statuses, and broadcasting Slack notifications.',
    impact: 'Consolidates incoming inquiries into a single source of truth within 1.5 seconds during test runs.',
    tools: ['Make.com', 'Notion CRM', 'Youform', 'Slack API'],
    features: [
      'Watches custom webhooks for instant form submission detection',
      'Parses input parameters and creates structured records in Notion databases',
      'Uses relation tags to associate incoming submissions with active accounts',
      'Triggers Slack notifications with key qualification details',
      'Maintains historical lead logs for quick reference'
    ],
    stats: [
      { label: 'Project Type', value: 'Personal Build' },
      { label: 'Data Accuracy', value: '100%' },
      { label: 'Sync Speed', value: '1.5 sec' }
    ],
    icon: 'Database',
    nodes: [
      { id: 'n1', label: 'Form Submitted', type: 'trigger', app: 'Youform', desc: 'Detect fresh form submissions' },
      { id: 'n2', label: 'Payload Parser', type: 'router', app: 'Make.com', desc: 'Format dynamic contact parameters' },
      { id: 'n3', label: 'Notion CRM Log', type: 'action', app: 'Notion', desc: 'Create structured database relations' },
      { id: 'n4', label: 'Slack Team Alert', type: 'complete', app: 'Slack', desc: 'Notify team with qualified lead details' }
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
    category: 'AI Workflow Demo',
    image: 'https://res.cloudinary.com/dwwqbsiom/image/upload/q_auto/f_auto/v1781437888/CONTENT_REPURPOSING_1_iahe1q.png',
    description: 'A personal multi-channel syndication flow mapped on Zapier. Triggers when audio/video files arrive in Google Drive, transcribes the media, produces structured articles via AI, and prepares post drafts for social platforms.',
    impact: 'Demonstrated rapid content repurposing and multi-channel draft generation in proof-of-concept tests.',
    tools: ['Zapier', 'Google Drive', 'AI by Zapier', 'Facebook Pages', 'LinkedIn'],
    features: [
      'Monitors target Google Drive folders for fresh media uploads',
      'Processes files in the background using automated transcription',
      'Synthesizes structured article drafts with key takeaways',
      'Forks content loops to format tailored social media posts',
      'Dispatches update posts directly to social channels'
    ],
    stats: [
      { label: 'Project Type', value: 'Personal Build' },
      { label: 'Processing Delay', value: '3 min' },
      { label: 'Draft Overhead', value: '-90%' }
    ],
    icon: 'Zap',
    nodes: [
      { id: 'n1', label: 'Media Upload', type: 'trigger', app: 'Google Drive', desc: 'Listen to folder upload drops' },
      { id: 'n2', label: 'Format Validation', type: 'router', app: 'Zapier', desc: 'Verify correct file extensions' },
      { id: 'n3', label: 'Transcribe Media', type: 'action', app: 'AI', desc: 'Transform audio into transcriptions' },
      { id: 'n4', label: 'Generate Blog Draft', type: 'action', app: 'AI', desc: 'Structure fully formatted articles' },
      { id: 'n5', label: 'Loop Social Channels', type: 'loop', app: 'Zapier', desc: 'Repeat posting tasks' },
      { id: 'n6', label: 'Facebook Page Post', type: 'complete', app: 'Facebook Pages', desc: 'Publish page feeds' },
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
    title: 'High-Priority Lead Score & Enrichment Engine',
    category: 'CRM & Lead Automation',
    image: 'https://res.cloudinary.com/dwwqbsiom/image/upload/q_auto/f_auto/v1781437916/Screenshot_2026-05-03_142852_d6moww.png',
    description: 'An advanced lead enrichment personal project built on Zapier. Captures webform submissions, queries firmographic data via Apollo API, scores lead priority, logs details in Google Sheets, and writes personalized AI emails.',
    impact: 'Demonstrates automated lead scoring and context-aware response drafting in test scenarios.',
    tools: ['Zapier', 'Youform', 'Apollo API', 'Google Sheets', 'Gmail API'],
    features: [
      'Gathers intake details directly from custom webhooks on form submits',
      'Parses and cleans domains to match company profiles on Apollo API',
      'Retrieves firmographic attributes to classify lead size & budget',
      'Appoints AI logic steps to compile personalized sales responses',
      'Maintains clean lead spreadsheets and alerts teams inside Slack'
    ],
    stats: [
      { label: 'Project Type', value: 'Personal Build' },
      { label: 'Scoring Latency', value: '< 2 sec' },
      { label: 'Accuracy', value: '100% Tested' }
    ],
    icon: 'Shield',
    nodes: [
      { id: 'n1', label: 'Form Registrations', type: 'trigger', app: 'Youform', desc: 'Hook fresh subscriber details' },
      { id: 'n2', label: 'Extract Domains', type: 'action', app: 'Zapier', desc: 'Separate valid website parameters' },
      { id: 'n3', label: 'Profile Enrichment', type: 'action', app: 'Apollo API', desc: 'Retrieve matching firmographic sizes' },
      { id: 'n4', label: 'Triage Priority Split', type: 'router', app: 'Zapier', desc: 'Branch high vs low budget leads' },
      { id: 'n5', label: 'Score Database Log', type: 'action', app: 'Google Sheets', desc: 'Record key data categories' },
      { id: 'n6', label: 'Write AI Responses', type: 'action', app: 'AI', desc: 'Produce personalized introduction text' },
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
