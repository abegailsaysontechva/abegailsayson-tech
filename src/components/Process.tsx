import React, { useState } from 'react';
import { ArrowRight, ChevronDown, CheckCircle2, Clock, Sparkles } from 'lucide-react';

interface ProcessProps {
  onBookCallClick: () => void;
}

interface StepItem {
  id: string;
  stepNumber: string;
  title: string;
  time: string;
  iDo: string;
  youDo: string;
  youGet: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

export const Process: React.FC<ProcessProps> = ({ onBookCallClick }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const steps: StepItem[] = [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Free Studio Audit',
      time: 'About 25 minutes',
      iDo: 'Review your website, inquiry form, and current booking process, and find where leads slip away.',
      youDo: 'Share your website link and describe how inquiries and bookings work today.',
      youGet: 'Three quick wins and a recommended package.'
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Funnel Blueprint',
      time: '',
      iDo: 'Map your client journey from inquiry to gallery delivery and decide what to automate.',
      youDo: 'Approve the plan, packages, and the tone of your messages.',
      youGet: 'A one-page map of your booking funnel and a fixed quote.'
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'Build',
      time: '',
      iDo: 'Design your landing page or website and set up forms, calendar, contracts, payments, and automations.',
      youDo: 'Send your logo, photos, packages, pricing, and preferred email wording.',
      youGet: 'A working funnel in a private preview.'
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Test & Refine',
      time: '',
      iDo: 'Run test inquiries through every step and check emails, payments, and mobile layout.',
      youDo: 'Try it as a client and give feedback.',
      youGet: 'A system you\'ve seen working end to end before it goes live.'
    },
    {
      id: 'step-5',
      stepNumber: '05',
      title: 'Launch & Support',
      time: '',
      iDo: 'Go live, give you a short training session, and monitor the first inquiries.',
      youDo: 'Start sending traffic from Instagram, Google, and referrals.',
      youGet: 'A simple how-to guide, post-launch support, and an optional monthly care plan.'
    }
  ];

  const faqs: FaqItem[] = [
    {
      question: 'What is photography business automation?',
      answer: 'Photography business automation connects your website, inquiry forms, email, calendar, and CRM so repetitive tasks run automatically. It handles instant replies, pricing delivery, consultation scheduling, contract signing, and invoice reminders without manual intervention.'
    },
    {
      question: 'How can photographers automate client inquiries?',
      answer: 'By connecting your website inquiry form to a workflow engine (such as n8n or Make). When a lead submits a form, the system immediately logs their details into your CRM, dispatches a personalized welcome email with your investment guide, and sends you an instant mobile alert.'
    },
    {
      question: 'Can a photography website automatically manage booking inquiries?',
      answer: 'Yes. A booking funnel website qualifies the client’s date and budget upfront, presents relevant packages, delivers your pricing guide, and offers a direct calendar scheduler for a consultation call—moving leads from discovery to booked automatically.'
    },
    {
      question: 'What is a photography CRM workflow?',
      answer: 'A photography CRM workflow is a centralized pipeline (in Notion, GoHighLevel, or HubSpot) that tracks every client through structured stages: New Inquiry, Pricing Sent, Consultation Booked, Contract Signed, Retainer Paid, Session Shot, Gallery Delivered, and Review Received.'
    },
    {
      question: 'How can photographers automate client follow-ups?',
      answer: 'Through timed delay nodes in your automation pipeline. If an inquiry receives your pricing guide but does not schedule a consultation within 48 hours, a friendly, personalized follow-up is triggered automatically, recovering warm leads without manual effort.'
    },
    {
      question: 'Can automation help photography studios manage bookings?',
      answer: 'Absolutely. Automation coordinates the entire onboarding sequence: sending digital contracts for e-signature, generating Stripe deposit invoices, collecting pre-session questionnaires, and dispatching wardrobe guides and location reminders.'
    },
    {
      question: 'What automation services does Abegail Sayson Tech offer?',
      answer: 'Abegail Sayson Tech builds photography lead management systems, CRM automation, booking funnels, automated follow-up sequences, client onboarding pipelines, gallery delivery review engines, and custom workflow architectures.'
    },
    {
      question: 'Will the emails sound like me?',
      answer: 'Yes. Every email, reminder, and follow-up is written in your personal voice and photography brand tone. You review and approve all message copy before anything goes live.'
    },
    {
      question: 'Who owns the system?',
      answer: 'You do. Your website, accounts, automations, and client data are set up under your own logins, and I hand over full access when the project is complete. If we stop working together, everything keeps running.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="process" className="py-24 bg-transparent text-white relative section-scrim">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 bg-brand-accent/20 border border-brand-accent/30 rounded-full px-4 py-1.5 backdrop-blur-sm shadow-sm">
            <span className="text-xs font-mono font-bold text-brand-accent uppercase tracking-widest">
              HOW IT WORKS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            From First Call to Fully Booked, in 5 Simple Steps
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A clear process, so you always know what's happening, what I need from you, and when it goes live.
          </p>
        </div>

        {/* 5 Step Cards with Connecting Line */}
        {/* Desktop View (Horizontal 5-columns on screens >= 1200px) */}
        <div className="relative hidden min-[1200px]:block mb-24">
          {/* Thin connecting line across all 5 cards */}
          <div className="absolute top-12 left-10 right-10 h-0.5 bg-gradient-to-r from-brand-accent/30 via-brand-accent/50 to-brand-accent/30 z-0 pointer-events-none" />

          <div className="grid grid-cols-5 gap-5 relative z-10">
            {steps.map((step) => (
              <div
                key={step.id}
                className="group relative card-glass rounded-2xl p-5 flex flex-col justify-between hover:border-brand-accent/50 hover:shadow-[0_0_25px_rgba(249,115,22,0.18)] transition-all duration-300"
              >
                <div>
                  {/* Step Number & Optional Time Pill */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-slate-900 border-2 border-brand-accent/50 flex items-center justify-center shadow-md group-hover:border-brand-accent group-hover:bg-brand-accent/15 transition-all duration-300">
                      <span className="text-xl font-mono font-black text-white group-hover:text-brand-accent">
                        {step.stepNumber}
                      </span>
                    </div>
                    {step.time ? (
                      <div className="inline-flex items-center space-x-1 bg-white/10 border border-brand-accent/30 text-orange-400 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold">
                        <Clock className="w-3 h-3 text-brand-accent shrink-0" />
                        <span className="truncate">{step.time}</span>
                      </div>
                    ) : null}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-accent transition-colors duration-300 mb-4 leading-snug">
                    {step.title}
                  </h3>

                  {/* 3 Short Lines with larger body text */}
                  <div className="space-y-3.5 text-sm text-gray-200">
                    <div className="bg-slate-900/60 p-3.5 rounded-xl border border-white/5 space-y-1">
                      <span className="font-mono font-bold text-xs text-brand-accent uppercase tracking-wider block">
                        I do:
                      </span>
                      <p className="leading-relaxed text-gray-300 text-sm">
                        {step.iDo}
                      </p>
                    </div>

                    <div className="bg-slate-900/60 p-3.5 rounded-xl border border-white/5 space-y-1">
                      <span className="font-mono font-bold text-xs text-sky-400 uppercase tracking-wider block">
                        You do:
                      </span>
                      <p className="leading-relaxed text-gray-300 text-sm">
                        {step.youDo}
                      </p>
                    </div>

                    <div className="bg-slate-900/60 p-3.5 rounded-xl border border-white/5 space-y-1">
                      <span className="font-mono font-bold text-xs text-emerald-400 uppercase tracking-wider block">
                        You get:
                      </span>
                      <p className="leading-relaxed text-gray-200 font-medium text-sm">
                        {step.youGet}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Timeline on screens under 1200px (so cards are wide, spacious, and easily readable) */}
        <div className="block min-[1200px]:hidden relative mb-24 max-w-3xl mx-auto pl-4 sm:pl-8">
          {/* Vertical connecting line */}
          <div className="absolute left-[33px] sm:left-[49px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-brand-accent/40 via-brand-accent/60 to-brand-accent/30 z-0 pointer-events-none" />

          <div className="space-y-8 relative z-10">
            {steps.map((step) => (
              <div key={step.id} className="relative flex items-start space-x-4 sm:space-x-6">
                {/* Timeline node number */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-900 border-2 border-brand-accent flex items-center justify-center shrink-0 shadow-lg mt-1 z-10 group-hover:border-brand-accent">
                  <span className="text-sm sm:text-base font-mono font-black text-brand-accent">
                    {step.stepNumber}
                  </span>
                </div>

                {/* Wide Card */}
                <div className="flex-1 card-glass rounded-2xl p-5 sm:p-7 shadow-xl space-y-5 hover:border-brand-accent/40 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                      {step.title}
                    </h3>
                    {step.time ? (
                      <div className="inline-flex items-center space-x-1.5 bg-white/10 border border-brand-accent/30 text-orange-400 px-3 py-1 rounded-full text-xs font-mono font-semibold">
                        <Clock className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                        <span>{step.time}</span>
                      </div>
                    ) : null}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-sm">
                    <div className="bg-slate-900/70 p-4 rounded-xl border border-white/5 space-y-1">
                      <span className="font-mono font-bold text-xs text-brand-accent uppercase tracking-wider block">
                        I do:
                      </span>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {step.iDo}
                      </p>
                    </div>

                    <div className="bg-slate-900/70 p-4 rounded-xl border border-white/5 space-y-1">
                      <span className="font-mono font-bold text-xs text-sky-400 uppercase tracking-wider block">
                        You do:
                      </span>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {step.youDo}
                      </p>
                    </div>

                    <div className="bg-slate-900/70 p-4 rounded-xl border border-white/5 space-y-1">
                      <span className="font-mono font-bold text-xs text-emerald-400 uppercase tracking-wider block">
                        You get:
                      </span>
                      <p className="text-gray-200 font-medium leading-relaxed text-sm">
                        {step.youGet}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center space-x-1.5 bg-brand-accent/15 border border-brand-accent/25 rounded-full px-3 py-1">
              <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
              <span className="text-[11px] font-mono font-bold text-brand-accent uppercase tracking-wider">
                COMMON QUESTIONS
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Frequently Asked Questions
            </h3>
            <p className="text-sm text-gray-400">
              Everything you need to know about setting up your photography studio booking engine.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className={`card-glass rounded-2xl transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-brand-accent/40 shadow-[0_0_20px_rgba(249,115,22,0.12)]'
                      : 'hover:border-white/20'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-sans font-bold text-base sm:text-lg text-white pr-2">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'bg-brand-accent/20 border-brand-accent text-brand-accent rotate-180'
                          : 'bg-white/5 border-white/10 text-gray-400 group-hover:text-white'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-sm sm:text-base text-gray-300 leading-relaxed border-t border-white/5 animate-fadeIn">
                      <div className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-1" />
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;
