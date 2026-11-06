import React from 'react';
import { 
  Zap, 
  Globe, 
  Database, 
  CalendarCheck, 
  Mail, 
  Bell, 
  ClipboardList, 
  RefreshCw, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Layers,
  ShieldCheck,
  Clock
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
  onBookCallClick: () => void;
}

interface ServiceDetail {
  id: string;
  title: string;
  category: string;
  headline: string;
  problem: string;
  solution: string;
  deliverables: string[];
  tools: string[];
  clientExperience: string;
}

const DETAILED_SERVICES: ServiceDetail[] = [
  {
    id: 'lead-management',
    title: 'Photography Lead Management',
    category: 'Lead Capture & Qualification',
    headline: 'Capture, qualify, and route inquiries across all platforms instantly.',
    problem: 'Prospective clients reach out across your website form, Instagram DMs, and email. Without centralized intake, messages slip through the cracks.',
    solution: 'We deploy unified webhooks and intake forms that collect dates, budgets, and shoot types, instantly validating the lead and alerting you.',
    deliverables: [
      'Multi-channel inquiry ingestion (Website, Instagram, Email)',
      'Spam filtering and budget tier qualification',
      'Instant lead creation in your CRM database',
      'Instant photographer mobile notification via Slack or WhatsApp'
    ],
    tools: ['n8n / Make', 'Notion CRM', 'Youform / Typeform', 'Slack / WhatsApp Webhook'],
    clientExperience: 'An immediate confirmation that their inquiry was safely received with clear expectations on when they will hear back.'
  },
  {
    id: 'crm-automation',
    title: 'Photography CRM Automation',
    category: 'Pipeline & Operations',
    headline: 'Centralize every lead, booking, contract, and shoot in one structured database.',
    problem: 'Client notes, booking dates, shot requests, and payment statuses scattered across sticky notes, Gmail threads, and spreadsheets.',
    solution: 'We build a tailored Notion, GoHighLevel, or HubSpot CRM pipeline custom-mapped to the photography business cycle.',
    deliverables: [
      'Custom visual pipeline stages (Inquiry → Consultation → Contract → Shot → Delivered)',
      'Automated status updates triggered by payments and signatures',
      'Client contact history and activity logging',
      'Master studio availability and booking calendar view'
    ],
    tools: ['Notion CRM', 'GoHighLevel', 'HubSpot', 'Google Sheets sync'],
    clientExperience: 'Your studio appears organized, professional, and on top of every detail from initial inquiry to final delivery.'
  },
  {
    id: 'booking-workflows',
    title: 'Photography Booking Workflows',
    category: 'Scheduling & Invoicing',
    headline: 'Lock in sessions with automated contracts and deposit gating.',
    problem: 'Losing dates because of back-and-forth emails negotiating times, followed by awkward waiting for paper contracts or manual deposit checks.',
    solution: 'An automated booking engine that synchronizes your real calendar, releases digital contracts for e-signature, and requires deposit payment to confirm.',
    deliverables: [
      'Integrated scheduler with real-time photographer availability',
      'Auto-populated digital contracts with legally binding e-signatures',
      'Stripe retainer invoice generation and automated payment receipts',
      'Instant calendar booking confirmation with Google Calendar sync'
    ],
    tools: ['Calendly / Cal.com', 'Stripe API', 'PandaDoc / Sign', 'Make.com'],
    clientExperience: 'Clients can browse open times, sign their agreement, and pay their deposit in under 5 minutes from their phone.'
  },
  {
    id: 'automated-followups',
    title: 'Automated Client Follow-Ups',
    category: 'Nurture & Recovery',
    headline: 'Never lose a warm lead to ghosting or life getting in the way.',
    problem: 'Couples and families get busy and forget to respond after receiving your pricing guide. Manually checking back feels awkward and is easily forgotten.',
    solution: 'Timed background drip workflows that check inquiry status after 48 hours and 5 days, sending warm, courteous check-ins in your exact brand voice.',
    deliverables: [
      'Automated 48-hour follow-up when a pricing guide was sent but no call was booked',
      'Smart logic that immediately pauses sequences the moment a lead books',
      'Personalized dynamic fields (name, event date, venue)',
      'Gentle final check-in before archiving inactive inquiries'
    ],
    tools: ['n8n / Make', 'Gmail API / SendGrid', 'CRM Webhook listener'],
    clientExperience: 'Feels like a attentive, caring photographer checking in personally without being pushy.'
  },
  {
    id: 'booking-notifications',
    title: 'Real-Time Booking Notifications',
    category: 'Studio Alerts',
    headline: 'Instant mobile alerts so you always know when clients book, sign, or pay.',
    problem: 'Having to constantly refresh Stripe or email to see if a bride signed the agreement or sent the deposit before holding the date.',
    solution: 'Immediate, actionable mobile push notifications sent directly to your phone via Slack, Telegram, WhatsApp, or SMS.',
    deliverables: [
      'Instant notification on contract signature with PDF download link',
      'Payment confirmation notification with gross and net amounts',
      'New discovery call alerts with questionnaire answers attached',
      'Daily morning digest of upcoming sessions and milestones'
    ],
    tools: ['Slack API', 'WhatsApp Business Webhook', 'Telegram Bot', 'Make.com'],
    clientExperience: 'Photographer can acknowledge bookings within minutes, reinforcing a responsive luxury impression.'
  },
  {
    id: 'onboarding-workflows',
    title: 'Client Onboarding Workflows',
    category: 'Session Preparation',
    headline: 'Deliver styling guides, location tips, and questionnaires automatically.',
    problem: 'Clients arriving without knowing what to wear, missing shot lists, or forgetting parking instructions, causing stress on shoot day.',
    solution: 'Automated onboarding drip delivered between booking confirmation and shoot day with preparation guides and detailed questionnaires.',
    deliverables: [
      'Automated pre-shoot style and wardrobe guide PDF delivery',
      'Digital questionnaire collection (shot lists, family groupings, VIPs)',
      '7-day and 48-hour session reminder emails with location pin and weather notes',
      'SMS alert on shoot morning with photographer contact details'
    ],
    tools: ['Google Workspace', 'Typeform / Youform', 'SendGrid', 'Twilio / SMS'],
    clientExperience: 'Clients feel completely prepared, relaxed, and excited as session day approaches.'
  },
  {
    id: 'process-automation',
    title: 'Photography Business Process Automation',
    category: 'Post-Shoot & Retention',
    headline: 'Turn gallery deliveries into 5-star Google reviews and anniversary rebookings.',
    problem: 'Galleries are delivered, but photographers forget to ask for reviews, and previous clients are rarely re-engaged for annual sessions.',
    solution: 'End-to-end post-production automation that triggers on gallery completion, sends delivery credentials, collects reviews, and drives rebookings.',
    deliverables: [
      'Gallery delivery notification with private password and download guide',
      'Automated check-in 24 hours later to ensure smooth download',
      'Automated 7-day Google review request with direct one-click review link',
      '10-month anniversary reminder inviting clients to book their next session'
    ],
    tools: ['Pic-Time / Pixieset webhook', 'Google Business Reviews API', 'Notion CRM', 'n8n'],
    clientExperience: 'A joyful delivery experience that makes leaving a stellar review feel effortless and natural.'
  }
];

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onBookCallClick }) => {
  return (
    <div className="pt-28 pb-20 font-sans text-white">
      <SEOHead
        title="Photography Business Automation Services | Abegail Sayson"
        description="Photography business automation services: lead management, CRM workflows, booking systems, automated follow-ups, and gallery review engines."
        canonicalPath="/photography-automation"
        schemaData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Photography Business Automation',
          provider: {
            '@type': 'Organization',
            name: 'Abegail Sayson Tech',
            url: 'https://www.abegailsayson.tech'
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Photography Automation Offerings',
            itemListElement: DETAILED_SERVICES.map((s, idx) => ({
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: s.title,
                description: s.headline
              }
            }))
          }
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs font-mono text-slate-400 mb-8" aria-label="Breadcrumb">
          <button onClick={() => onNavigate('/')} className="hover:text-brand-accent transition-colors">Home</button>
          <span>/</span>
          <span className="text-cyan-400">Photography Automation Services</span>
        </nav>

        {/* Page Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-accent/20 border border-brand-accent/30 rounded-full px-4 py-1.5 shadow-sm">
            <Zap className="w-4 h-4 text-brand-accent" />
            <span className="text-xs font-mono font-bold text-brand-accent uppercase tracking-wider">
              STUDIO AUTOMATION CAPABILITIES
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans leading-tight">
            Photography Business Automation Services
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From the first inquiry to the final gallery delivery, I build reliable automation pipelines that keep your calendar full and your administration effortless.
          </p>
        </div>

        {/* 7 Services Grid */}
        <div className="space-y-10 mb-20">
          {DETAILED_SERVICES.map((service, index) => (
            <div 
              key={service.id}
              id={service.id}
              className="rounded-3xl card-glass border border-white/10 p-6 sm:p-10 shadow-xl hover:border-brand-accent/40 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Overview */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-xl bg-brand-accent/20 border border-brand-accent/40 text-brand-accent font-mono text-sm font-bold flex items-center justify-center">
                      0{index + 1}
                    </span>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold">
                      {service.category}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white font-sans leading-snug">
                    {service.title}
                  </h2>

                  <p className="text-sm font-semibold text-brand-accent font-sans">
                    {service.headline}
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="p-3.5 rounded-xl bg-rose-950/30 border border-rose-500/20 text-xs text-rose-200 leading-relaxed font-sans">
                      <strong className="text-rose-400 font-mono uppercase block mb-1">The Problem:</strong>
                      {service.problem}
                    </div>

                    <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-cyan-100 leading-relaxed font-sans">
                      <strong className="text-cyan-400 font-mono uppercase block mb-1">The Solution:</strong>
                      {service.solution}
                    </div>
                  </div>
                </div>

                {/* Right Details: Deliverables, Tools & Client Experience */}
                <div className="lg:col-span-7 space-y-6 lg:pl-4">
                  
                  {/* Deliverables List */}
                  <div>
                    <h3 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-3">
                      Included Deliverables &amp; Features:
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start text-xs sm:text-sm text-slate-200 font-sans leading-snug p-2 rounded-lg bg-white/5 border border-white/5">
                          <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mr-2 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Client Experience Box */}
                  <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/20 space-y-1">
                    <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                      What Your Client Experiences:
                    </span>
                    <p className="text-xs sm:text-sm text-emerald-200 leading-relaxed font-sans">
                      &ldquo;{service.clientExperience}&rdquo;
                    </p>
                  </div>

                  {/* Tools & CTA */}
                  <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] font-mono text-slate-400 uppercase mr-1">Tools:</span>
                      {service.tools.map((t, tIdx) => (
                        <span key={tIdx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={onBookCallClick}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-accent hover:text-white uppercase tracking-wider cursor-pointer transition-colors"
                    >
                      <span>Request For Your Studio</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Audit Callout Banner */}
        <div className="text-center max-w-3xl mx-auto p-8 sm:p-12 rounded-3xl card-glass border border-brand-accent/30 shadow-2xl space-y-5">
          <div className="inline-flex items-center space-x-2 bg-brand-accent/20 border border-brand-accent/40 rounded-full px-3.5 py-1">
            <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
            <span className="text-xs font-mono font-bold text-brand-accent uppercase">FREE STUDIO AUDIT</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-sans">
            Ready to Put Your Studio on Autopilot?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
            Book a complimentary 25-minute studio funnel audit. We&apos;ll review your current website and inquiry workflow to find the 3 quick wins to get you booked consistently.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={onBookCallClick}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-accent hover:bg-orange-500 text-white font-bold text-sm uppercase font-mono tracking-wider transition-all shadow-lg shadow-brand-accent/25 cursor-pointer"
            >
              <span>Schedule Free Studio Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;
