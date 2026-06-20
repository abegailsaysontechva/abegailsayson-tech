import React, { useState } from 'react';
import { SERVICES } from '../data';
import { 
  Cpu, 
  Database, 
  Sparkles, 
  FileCheck, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Bot, 
  Timer,
  ChevronRight,
  MessageSquare
} from 'lucide-react';

const SERVICE_HEADERS = [
  {
    id: 1,
    style: "Professional Consultant (Systems-Leveled)",
    title: "Strategic Systems to Leverage Your Time",
    subtitle: "Custom CRM architectures and refined handoffs that increase your billable capacity while operating flawlessly behind the scenes."
  },
  {
    id: 2,
    style: "Professional Consultant (Frictionless Ops)",
    title: "Frictionless Operations Designed for Your Business",
    subtitle: "Stop letting administrative bottlenecks slow your growth. I architect bespoke, high-efficiency system structures that let you lead in your zone of genius."
  },
  {
    id: 3,
    style: "Premium Agency (High-Precision)",
    title: "Uncompromising Operational Infrastructure for Leaders",
    subtitle: "Elite businesses don't scale through manual effort; they scale through impeccable design. We build high-fidelity workflows that capture and retain client value 24/7."
  },
  {
    id: 4,
    style: "Premium Agency (Brand Suite)",
    title: "The Ultimate Standard in Workflow Architecture",
    subtitle: "Elevate your brand experience with flawlessly synchronized pipelines. Seamless processes that turn first impressions into lifelong clients."
  },
  {
    id: 5,
    style: "Results-Driven (Core Conversion)",
    title: "Eliminate Repetitive Tasks, Multiply Your Growth",
    subtitle: "Automate your lead-scoring, intake processing, and onboarding loops to immediately recapture lost hours and boost conversion margins."
  },
  {
    id: 6,
    style: "Results-Driven (Premium Efficiency)",
    title: "Buy Back Your Hours with High-Impact Automation",
    subtitle: "Double your delivery speed without doubling your staff. Discover streamlined workflows that handle lead routing and operational checkpoints autonomously."
  },
  {
    id: 7,
    style: "Modern Tech (AI-Native Ecosystem)",
    title: "Powering Your Workflows with Autonomous Intelligence",
    subtitle: "Deploy custom API integrations, smart CRM models, and Gemini-based agents to handle manual triage and scale up your daily throughput."
  },
  {
    id: 8,
    style: "Modern Tech (Unification Architecture)",
    title: "Next-Generation Pipelines Built to Automate Scale",
    subtitle: "Link your entire tech stack into a single, high-performance ecosystem. Zero manual handoffs, real-time syncs, and bulletproof API relays."
  },
  {
    id: 9,
    style: "Friendly & Approachable (Admin Saver)",
    title: "Automated Systems Built for Real Humans",
    subtitle: "You shouldn't need a software engineering degree to run a smooth business. I create simple, friendly tools that take care of admin work so you don't have to."
  },
  {
    id: 10,
    style: "Friendly & Approachable (Requested Growth Copy)",
    title: "Transform Your Business with Smart Automation",
    subtitle: "From lead capture to client onboarding, I design automated systems that eliminate repetitive tasks, streamline operations, and help your business grow without adding more work to your plate."
  }
];

interface ServicesProps {
  onServiceSelect?: (id: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onServiceSelect }) => {
  const [selectedStyleIdx, setSelectedStyleIdx] = useState<number>(9); // Defaults to Option 10 as requested
  const [activeRecipeId, setActiveRecipeId] = useState<string | null>('workflow');

  // Map icon string to Lucide component
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="h-6 w-6 text-brand-accent" />;
      case 'Database':
        return <Database className="h-6 w-6 text-brand-accent" />;
      case 'FileCheck':
        return <FileCheck className="h-6 w-6 text-brand-accent" />;
      case 'BsChatDots':
      default:
        return <Sparkles className="h-6 w-6 text-brand-accent" />;
    }
  };

  const currentHeaderCopy = SERVICE_HEADERS[selectedStyleIdx];

  return (
    <section id="services" className="py-24 bg-transparent text-white border-b border-white/5 relative">
      {/* Ambience glow indicators */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center space-y-4 mb-20 transition-all duration-300">
          <div className="inline-flex items-center space-x-2 bg-brand-accent/20 border border-brand-accent/30 rounded-full px-3 py-1">
            <Zap className="h-4 w-4 text-brand-accent" />
            <span className="text-xs font-mono font-bold text-brand-accent uppercase tracking-wider">
              Core Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans max-w-4xl mx-auto leading-tight transition-all">
            {currentHeaderCopy.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed transition-all">
            {currentHeaderCopy.subtitle}
          </p>
        </div>

        {/* Services Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {SERVICES.map((service) => {
            const hasActiveRecipe = activeRecipeId === service.id;
            return (
              <div 
                id={`service-card-${service.id}`}
                key={service.id}
                className="group relative rounded-3xl bg-slate-900/30 border border-white/5 hover:border-brand-accent/30 p-8 hover:bg-slate-900/50 transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                <div className="space-y-6">
                  {/* Card Header row */}
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-brand-accent/10 border border-brand-accent/20 rounded-2xl group-hover:bg-brand-accent/20 transition-colors">
                      {getIcon(service.icon)}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-brand-accent transition-colors font-sans">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-gray-400 text-sm leading-relaxed font-sans">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullet points benefits */}
                  <ul className="space-y-3 pt-2">
                    {service.bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-300 font-sans">
                        <CheckCircle2 className="h-4.5 w-4.5 text-brand-accent shrink-0 mr-3 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Operational Recipe Accordion */}
                  {service.exampleWorkflow && (
                    <div className="mt-6 border-t border-white/5 pt-5">
                      <button
                        onClick={() => setActiveRecipeId(hasActiveRecipe ? null : service.id)}
                        className="flex items-center justify-between w-full text-xs font-mono font-semibold text-brand-accent/90 hover:text-brand-accent cursor-pointer tracking-wider uppercase transition-colors"
                      >
                        <span>{hasActiveRecipe ? 'Hide Code Recipe' : 'View Core Automation Recipe'}</span>
                        <ChevronRight className={`h-4 w-4 transform transition-transform duration-200 ${hasActiveRecipe ? 'rotate-90 text-brand-accent' : 'text-gray-500'}`} />
                      </button>

                      {hasActiveRecipe && (
                        <div className="mt-4 rounded-2xl bg-slate-950/60 border border-white/5 p-5 space-y-4 animate-fadeIn">
                          {/* Trigger point */}
                          <div>
                            <span className="text-[10px] uppercase tracking-wider font-mono text-gray-500 block">Trigger Condition</span>
                            <div className="mt-1 flex items-center space-x-2">
                              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
                              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-900/30">
                                {service.exampleWorkflow.trigger}
                              </span>
                            </div>
                          </div>

                          {/* Connection path lines */}
                          <div>
                            <span className="text-[10px] uppercase tracking-wider font-mono text-gray-500 block mb-2">Automated Execution Pipeline</span>
                            <div className="space-y-2 relative pl-3 before:absolute before:left-1 before:top-2 before:bottom-2 before:w-[1px] before:bg-brand-accent/20">
                              {service.exampleWorkflow.steps.map((step, idx) => (
                                <div key={idx} className="flex items-center text-xs text-gray-300 font-mono space-x-2">
                                  <span className="w-2 h-2 rounded-full bg-brand-accent shrink-0" />
                                  <span className="text-gray-400">{step}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Concrete outcome */}
                          <div className="pt-2 border-t border-white/5">
                            <span className="text-[10px] uppercase tracking-wider font-mono text-gray-100 block">Immediate Concrete Outcome</span>
                            <p className="mt-1 text-sm font-sans font-medium text-white flex items-center gap-1.5">
                              <Timer className="h-4 w-4 text-brand-accent" />
                              {service.exampleWorkflow.result}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <button
                    onClick={() => {
                      if (onServiceSelect) {
                        onServiceSelect(service.id);
                      } else {
                        const contactSec = document.getElementById('contact');
                        if (contactSec) {
                          contactSec.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                    className="inline-flex items-center text-xs font-mono font-bold text-brand-accent hover:text-white uppercase tracking-wider cursor-pointer group/btn"
                  >
                    <span>Streamline This Process</span>
                    <ArrowRight className="ml-2 h-3 w-3 transform group-hover/btn:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Footer Callout */}
        <div className="mt-16 text-center max-w-xl mx-auto p-8 rounded-3xl bg-slate-900/20 border border-white/5 font-sans">
          <h4 className="text-lg font-bold text-white mb-2">Not seeing your exact system requirements?</h4>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            I customize pipelines to fit your proprietary business operations and legacy platforms. Let’s map your workflow needs.
          </p>
          <button
            onClick={() => {
              const contactSec = document.getElementById('contact');
              if (contactSec) {
                contactSec.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-6 py-3 rounded-full bg-brand-accent hover:bg-brand-accent/80 text-white font-semibold cursor-pointer transition-all shadow-lg hover:shadow-brand-accent/20 text-sm"
          >
            Book Free Audit Consult
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;
