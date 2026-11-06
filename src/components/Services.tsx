import React, { useState } from 'react';
import { 
  Globe, 
  Zap, 
  CalendarCheck, 
  Camera, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  Workflow
} from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  outcome: string;
  icon: React.ReactNode;
  bullets: string[];
  howItWorks: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'booking-funnel-website',
    title: 'Booking Funnel Website',
    outcome: 'Visitors become inquiries.',
    icon: <Globe className="h-6 w-6 text-brand-accent" />,
    bullets: [
      'One-page or multi-page photography website',
      'Clear packages, portfolio, and inquiry form',
      'Mobile-first, fast-loading, SEO basics',
      'Built to lead to one action: booking a consultation'
    ],
    howItWorks: 'Visitor lands on your page → sees your work and packages → submits inquiry → the system takes over.'
  },
  {
    id: 'inquiry-followup-automation',
    title: 'Inquiry & Follow-Up Automation',
    outcome: 'No inquiry goes unanswered.',
    icon: <Zap className="h-6 w-6 text-brand-accent" />,
    bullets: [
      'Instant auto-reply with your pricing guide',
      'Inquiry tracking in Notion or a CRM',
      'Automatic follow-up if the client goes quiet',
      'Notifications to you on Slack, email, or WhatsApp'
    ],
    howItWorks: 'New form submission → saved to your CRM → personalized reply sent → follow-ups scheduled.'
  },
  {
    id: 'booking-contracts-payments',
    title: 'Booking, Contracts & Payments',
    outcome: 'Clients book and pay without back-and-forth.',
    icon: <CalendarCheck className="h-6 w-6 text-brand-accent" />,
    bullets: [
      'Online consultation and session booking',
      'Contract and deposit invoice sent automatically',
      'Client questionnaire before the session',
      'Reminders to reduce no-shows'
    ],
    howItWorks: 'Client picks a date → contract and deposit link sent → questionnaire and reminders follow.'
  },
  {
    id: 'gallery-delivery-reviews-rebooking',
    title: 'Gallery Delivery, Reviews & Rebooking',
    outcome: 'Happy clients become reviews and repeat bookings.',
    icon: <Camera className="h-6 w-6 text-brand-accent" />,
    bullets: [
      'Gallery delivery email with a clear next step',
      'Review request after delivery',
      'Referral and anniversary or seasonal rebooking emails',
      'Organized client folders and a simple client portal'
    ],
    howItWorks: 'Gallery delivered → thank-you sent → review requested → rebooking reminder scheduled.'
  }
];

interface ServicesProps {
  onServiceSelect?: (id: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onServiceSelect }) => {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
    'booking-funnel-website': true // Expand first one for preview, others collapsed
  });

  const toggleCard = (id: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const scrollToBooking = (serviceId?: string) => {
    if (serviceId && onServiceSelect) {
      onServiceSelect(serviceId);
    }
    const contactSec = document.getElementById('contact');
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-transparent text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 bg-brand-accent/20 border border-brand-accent/30 rounded-full px-3.5 py-1">
            <Zap className="h-3.5 w-3.5 text-brand-accent" />
            <span className="text-xs font-mono font-bold text-brand-accent uppercase tracking-wider">
              WHAT I BUILD
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans max-w-4xl mx-auto leading-tight">
            A Complete Booking System for Your Photography Business
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From the first inquiry to the final gallery, every step runs automatically, and your website is built to bring those inquiries in.
          </p>
        </div>

        {/* 2x2 Services Grid (single column on mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {SERVICES_DATA.map((service) => {
            const isExpanded = !!expandedCards[service.id];

            return (
              <div 
                id={`service-card-${service.id}`}
                key={service.id}
                className="group relative rounded-3xl card-glass hover:border-brand-accent/40 p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div className="space-y-6">
                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-brand-accent/10 border border-brand-accent/20 rounded-2xl group-hover:bg-brand-accent/20 transition-colors">
                      {service.icon}
                    </div>
                    <span className="text-xs font-mono font-semibold text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                      Photography System
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-brand-accent transition-colors font-sans">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-brand-accent font-medium text-sm font-sans flex items-center gap-1.5">
                      <span>•</span> {service.outcome}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-3 pt-1">
                    {service.bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start text-sm text-slate-300 font-sans leading-relaxed">
                        <CheckCircle2 className="h-4.5 w-4.5 text-brand-accent shrink-0 mr-3 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Expandable "How it works" line */}
                  <div className="pt-2 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => toggleCard(service.id)}
                      className="flex items-center justify-between w-full text-xs font-mono font-bold text-slate-200 hover:text-brand-accent cursor-pointer tracking-wider uppercase transition-colors py-2"
                      aria-expanded={isExpanded}
                    >
                      <span className="flex items-center gap-2">
                        <Workflow className="h-3.5 w-3.5 text-brand-accent" />
                        How it works
                      </span>
                      {isExpanded ? (
                        <span className="flex items-center gap-1 text-brand-accent text-xs">
                          Hide <ChevronUp className="h-4 w-4" />
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-slate-400 group-hover:text-slate-200 text-xs">
                          Expand <ChevronDown className="h-4 w-4" />
                        </span>
                      )}
                    </button>

                    {isExpanded && (
                      <div className="mt-2 rounded-xl bg-slate-950/70 border border-white/10 p-4 animate-fadeIn">
                        <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                          {service.howItWorks}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => scrollToBooking(service.id)}
                    className="inline-flex items-center text-xs font-mono font-bold text-brand-accent hover:text-white uppercase tracking-wider cursor-pointer group/btn"
                  >
                    <span>Get this for your studio</span>
                    <ArrowRight className="ml-2 h-3.5 w-3.5 transform group-hover/btn:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout block */}
        <div className="mt-8 text-center max-w-2xl mx-auto p-8 sm:p-10 rounded-3xl bg-slate-900/40 border border-white/10 shadow-xl font-sans">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Not sure where to start?
          </h3>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-xl mx-auto">
            Book a free audit. I'll review your current website and workflow and show you the three quick wins that will get you more bookings.
          </p>
          <button
            type="button"
            onClick={() => scrollToBooking()}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-accent hover:bg-brand-accent/90 text-white font-bold cursor-pointer transition-all shadow-lg hover:shadow-brand-accent/25 text-sm uppercase font-mono tracking-wider"
          >
            Get a Free Studio Funnel Audit
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;
