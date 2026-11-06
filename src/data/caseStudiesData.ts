export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  status: 'DEMO' | 'PROTOTYPE' | 'TESTED WORKFLOW' | 'CONCEPT';
  category: string;
  problem: string;
  overview: string;
  pipeline: {
    stepNumber: number;
    title: string;
    description: string;
  }[];
  triggerLogic: string;
  toolsUsed: string[];
  clientExperience: string;
  businessValue: string[];
  architectureSteps: {
    label: string;
    sublabel: string;
    type: 'trigger' | 'action' | 'condition' | 'complete';
  }[];
  heroImage?: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'inquiry-to-booking-funnel',
    slug: 'inquiry-to-booking-funnel',
    title: 'Inquiry-to-Booking Funnel',
    subtitle: 'Automated Lead Qualification, Instant Pricing Guide Delivery & CRM Sync',
    status: 'PROTOTYPE',
    category: 'Lead Management & Funnels',
    problem: 'Photography inquiries often sit unanswered for hours or days while the photographer is on location shooting or editing, causing prospective couples and clients to contact and book competing studios.',
    overview: 'This automated funnel connects a photographer’s web inquiry form with an instant CRM record and a tailored, brand-aligned email response. It provides immediate value to the client with the studio’s pricing guide and a direct link to book a discovery consultation, while gently checking back after 48 hours if no action is taken.',
    pipeline: [
      {
        stepNumber: 1,
        title: 'Landing page inquiry form',
        description: 'Client fills out date, venue/location, event type, and budget expectations on a clean, mobile-optimized form.'
      },
      {
        stepNumber: 2,
        title: 'Lead information saved to CRM',
        description: 'Webhook parses form payloads, tags the lead by event date and tier, and logs a structured profile into Notion or GoHighLevel CRM.'
      },
      {
        stepNumber: 3,
        title: 'Automated acknowledgment with pricing information',
        description: 'Within 3 minutes, an automated, personalized email is dispatched containing the studio investment guide and warm welcome notes.'
      },
      {
        stepNumber: 4,
        title: 'Consultation or booking link',
        description: 'The email includes a direct Calendly / Google Calendar scheduler link with available slots synced to real photographer availability.'
      },
      {
        stepNumber: 5,
        title: 'Follow-up after 48 hours if no response',
        description: 'If the consultation is not booked within 48 hours, a gentle follow-up email triggers asking if they have any questions about packages.'
      }
    ],
    triggerLogic: 'Trigger: Webhook event emitted on form submission (Youform / Typeform / Custom React Form). Condition: Validate required email format and date availability. Delay: 48-hour wait node checking whether a calendar booking event with the lead email exists in the CRM.',
    toolsUsed: ['Google AI Studio', 'Google Sheets', 'CRM workflow design', 'n8n / Make', 'Notion CRM', 'Gmail API'],
    clientExperience: 'A friendly response within minutes with clear next steps, transparent pricing, and zero friction to lock in a consultation call.',
    businessValue: [
      'Eliminates the critical first-response delay where up to 70% of wedding and portrait inquiries are lost.',
      'Saves the photographer 4–6 hours per week of manual inbox triaging and repetitive pricing PDF attachments.',
      'Ensures every lead is permanently stored and structured in a central database for seasonal re-engagement.'
    ],
    architectureSteps: [
      { label: 'Web Form Submitted', sublabel: 'Lead inputs details & preferred date', type: 'trigger' },
      { label: 'Webhook Receiver', sublabel: 'Payload sanitized & parsed', type: 'action' },
      { label: 'CRM Database Log', sublabel: 'Lead record created in Notion / CRM', type: 'action' },
      { label: 'Instant Auto-Response', sublabel: 'Email sent with PDF Guide & Booking Link', type: 'action' },
      { label: '48h Wait & Verification', sublabel: 'Check if consultation was scheduled', type: 'condition' },
      { label: 'Smart Follow-up Nudge', sublabel: 'Dispatched if booking is still pending', type: 'complete' }
    ]
  },
  {
    id: 'contract-deposit-reminder',
    slug: 'contract-deposit-reminder',
    title: 'Contract, Deposit & Reminder System',
    subtitle: 'Zero-Friction Client Onboarding, Retainer Invoicing & Session Prep',
    status: 'DEMO',
    category: 'Client Onboarding & Payments',
    problem: 'Managing contracts, chasing retainer deposits, gathering pre-shoot questionnaire details, and remembering to send session reminder emails manually consumes hours of administrative time and risks last-minute client confusion or no-shows.',
    overview: 'This automated onboarding system triggers the moment a client verbally or digitally agrees to book. It compiles contract fields, delivers a legally binding signature request, directs the client to a Stripe-backed deposit gateway, and puts automated pre-session reminders and styling guides on autopilot.',
    pipeline: [
      {
        stepNumber: 1,
        title: 'Client confirms booking',
        description: 'Photographer or client selects their chosen package and locks in the agreed session date on the calendar.'
      },
      {
        stepNumber: 2,
        title: 'Contract sent',
        description: 'System populates client name, session date, and agreed terms into a digital contract (PandaDoc / Sign) and delivers it for e-signature.'
      },
      {
        stepNumber: 3,
        title: 'Deposit invoice or payment instructions sent',
        description: 'Stripe invoice link is generated automatically, confirming the date is held once the 30% retainer is completed.'
      },
      {
        stepNumber: 4,
        title: 'Client questionnaire delivered',
        description: 'Upon payment confirmation, a tailored questionnaire (shot list, family dynamics, wardrobe preference) is sent to the client.'
      },
      {
        stepNumber: 5,
        title: 'Session reminders scheduled',
        description: 'Automated reminders are queued for 7 days before, 48 hours before, and the morning of the shoot with location pins and prep tips.'
      }
    ],
    triggerLogic: 'Trigger: Booking status updated to "Accepted" in CRM or calendar. Action: Generate contract + invoice. Webhook Listener: Stripe payment.succeeded event triggers status change to "Confirmed", releases onboarding questionnaire, and schedules calendar reminder drips.',
    toolsUsed: ['Workflow automation (Make / n8n)', 'Google Sheets', 'Email integrations', 'Calendar integrations', 'Stripe API'],
    clientExperience: 'One simple, guided checklist from booking to shoot day with zero uncertainty about contracts, payments, or locations.',
    businessValue: [
      'Eliminates awkward deposit chasing and guarantees no session takes place without an executed contract.',
      'Cuts down client no-shows and late arrivals through automated multi-channel reminder sequences.',
      'Delivers an elevated, white-glove client experience that reflects the caliber of a top-tier photography brand.'
    ],
    architectureSteps: [
      { label: 'Booking Confirmed', sublabel: 'Package & session date selected', type: 'trigger' },
      { label: 'Contract Generation', sublabel: 'Populate digital agreement & send', type: 'action' },
      { label: 'Stripe Retainer Invoice', sublabel: 'Payment link sent with deadline', type: 'action' },
      { label: 'Payment Webhook Confirmed', sublabel: 'System marks date locked in calendar', type: 'condition' },
      { label: 'Questionnaire Delivered', sublabel: 'Pre-session questionnaire link sent', type: 'action' },
      { label: 'Scheduled Reminder Drips', sublabel: '7-day & 48-hour session prep emails', type: 'complete' }
    ]
  },
  {
    id: 'gallery-delivery-reviews',
    slug: 'gallery-delivery-reviews',
    title: 'Gallery Delivery & Review Engine',
    subtitle: 'Post-Shoot Client Delight, Automated Google Reviews & Rebooking Drips',
    status: 'DEMO',
    category: 'Client Retention & Growth',
    problem: 'Gallery delivery emails are frequently inconsistent or rushed, and busy photographers routinely forget to request Google reviews or invite happy clients to rebook for anniversary and seasonal sessions.',
    overview: 'This post-shoot engine monitors gallery readiness and handles the entire post-production communication. It sends a celebratory gallery link, guides clients on how to download and print, automatically solicits a 5-star Google review when client excitement is highest, and schedules anniversary rebooking reminders.',
    pipeline: [
      {
        stepNumber: 1,
        title: 'Gallery marked ready',
        description: 'Photographer tags the gallery status as "Delivered" or "Ready" in Pic-Time, Pixieset, or the studio CRM.'
      },
      {
        stepNumber: 2,
        title: 'Delivery email sent',
        description: 'Polished HTML delivery email with private gallery URL, download PIN, and instructions is sent immediately.'
      },
      {
        stepNumber: 3,
        title: 'Thank-you message',
        description: 'A heartfelt personal thank-you note is sent 24 hours later checking that the client accessed their high-res images smoothly.'
      },
      {
        stepNumber: 4,
        title: 'Review request',
        description: '7 days post-delivery, an automated email requests a Google or Facebook review with a direct one-click link.'
      },
      {
        stepNumber: 5,
        title: 'Rebooking reminder',
        description: 'The system schedules a follow-up 10 months later inviting the client to book an anniversary portrait or holiday mini session.'
      }
    ],
    triggerLogic: 'Trigger: Gallery completion status update. Actions: Email dispatch via SendGrid/Gmail API. Delays: 24h delay node for thank-you follow-up, 7-day delay node for Google Review request, 300-day delay node for annual rebooking reminder.',
    toolsUsed: ['Workflow automation (n8n / Make)', 'Email integrations', 'CRM database', 'Google Reviews link generator', 'Pic-Time / Pixieset webhook'],
    clientExperience: 'A polished, celebratory delivery message and a convenient, one-click review link that makes supporting the photographer effortless.',
    businessValue: [
      'Multiplies 5-star Google reviews systematically on every single completed photography session.',
      'Builds predictable recurring revenue through automated anniversary and holiday rebooking campaigns.',
      'Saves the photographer from manually composing post-delivery emails while preserving a warm, personal relationship.'
    ],
    architectureSteps: [
      { label: 'Gallery Status: Ready', sublabel: 'Photographer finishes proofing/color grading', type: 'trigger' },
      { label: 'Deliver Gallery Notice', sublabel: 'Email sent with access link & PIN', type: 'action' },
      { label: '24h Check-in Note', sublabel: 'Confirm smooth download & print info', type: 'action' },
      { label: '7-Day Review Engine', sublabel: 'One-click direct Google review request', type: 'condition' },
      { label: 'Client Archive & Tag', sublabel: 'Log review status in CRM', type: 'action' },
      { label: 'Anniversary Rebooking', sublabel: '10-month automated milestone invite', type: 'complete' }
    ]
  }
];

export interface AdditionalWorkflow {
  id: string;
  title: string;
  tag: 'Tested workflow' | 'Personal build';
  description: string;
  tools: string[];
  image: string;
  businessValue: string;
}

export const ADDITIONAL_WORKFLOWS: AdditionalWorkflow[] = [
  {
    id: 'notion-crm-pipeline',
    title: 'Form Submission to Notion CRM Pipeline',
    tag: 'Tested workflow',
    description: 'Captures webform submissions directly into Notion CRM databases, formatting contact attributes, setting task statuses, and broadcasting Slack notifications.',
    tools: ['Make.com', 'Notion CRM', 'Youform', 'Slack API'],
    image: 'https://res.cloudinary.com/dwwqbsiom/image/upload/q_auto/f_auto/v1781437787/Form_Submission_to_Notion_CRM_wxtzjc.png',
    businessValue: 'Centralizes scattered website inquiries into one clean Notion database without manual data entry.'
  },
  {
    id: 'facebook-agent-middleware',
    title: 'Intelligent Facebook Agent CRM Middleware',
    tag: 'Personal build',
    description: 'Captures social page inquiries, routes intent branches, searches knowledge bases, invokes Gemini AI reasoning, and posts context-aware replies.',
    tools: ['Make.com', 'Facebook Pages', 'Google Gemini', 'Webhooks'],
    image: 'https://res.cloudinary.com/dwwqbsiom/image/upload/q_auto/f_auto/v1781437825/AI_Agent_for_Facebook_smnsdt.png',
    businessValue: 'Prevents after-hours social media leads from going cold by answering studio FAQs instantaneously.'
  },
  {
    id: 'gmail-attachment-sorter',
    title: 'Gmail Attachment Auto-Sorter',
    tag: 'Tested workflow',
    description: 'Monitors designated correspondence, extracts attachment blobs, uses Gemini AI to inspect and format filenames, and archives organized assets into Google Drive.',
    tools: ['Make.com', 'Gmail API', 'Google Gemini', 'Google Drive'],
    image: 'https://res.cloudinary.com/dwwqbsiom/image/upload/q_auto/f_auto/v1781437692/Auto_Sort_Gmail_Attachments_on_Drive_l7bj4l.png',
    businessValue: 'Keeps studio invoices, vendor receipts, and client permit documents systematically sorted in Drive.'
  }
];
