import React from 'react';
import { Search, FileText, Cpu, CheckCircle, Rocket, ArrowRight } from 'lucide-react';

interface ProcessProps {
  onBookCallClick: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onBookCallClick }) => {
  const steps = [
    {
      id: '01',
      title: 'Discovery & Audit',
      subtitle: 'Analysis',
      desc: 'I start by understanding your current workflow, business goals, and operational challenges. Together, we\'ll identify bottlenecks, repetitive tasks, and opportunities for automation.',
      icon: Search,
      color: 'border-orange-500 bg-orange-500/10 text-brand-accent'
    },
    {
      id: '02',
      title: 'Automation Strategy',
      subtitle: 'Blueprint & Planning',
      desc: 'Based on the audit, I create a customized automation roadmap outlining the tools, integrations, and workflows that will deliver the highest impact.',
      icon: FileText,
      color: 'border-blue-500 bg-blue-500/10 text-sky-400'
    },
    {
      id: '03',
      title: 'Build & Integration',
      subtitle: 'Gear & Workflow',
      desc: 'I design and implement your automation systems using platforms such as n8n, AI tools, CRMs, databases, email platforms, and other business applications.',
      icon: Cpu,
      color: 'border-purple-500 bg-purple-500/10 text-purple-450'
    },
    {
      id: '04',
      title: 'Testing & Optimization',
      subtitle: 'Performance',
      desc: 'Every workflow is thoroughly tested to ensure reliability, accuracy, and seamless operation. I optimize each automation for maximum efficiency.',
      icon: CheckCircle,
      color: 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
    },
    {
      id: '05',
      title: 'Launch & Ongoing Support',
      subtitle: 'Rocket & Growth',
      desc: 'Once approved, your automation goes live. I provide guidance, documentation, and support to ensure smooth adoption and long-term success.',
      icon: Rocket,
      color: 'border-rose-500 bg-rose-500/10 text-rose-450'
    }
  ];

  return (
    <section id="process" className="py-24 bg-transparent text-white border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-brand-accent/20 border border-brand-accent/30 rounded-full px-4 py-1.5 backdrop-blur-sm">
            <span className="text-xs font-mono font-bold text-brand-accent uppercase tracking-widest">
              My Process
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            How I Build Your High-Impact Automation
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            A simple, proven framework that helps businesses eliminate repetitive tasks, streamline operations, and scale efficiently through automation.
          </p>
        </div>

        {/* 5 Connected Step Cards Grid */}
        <div className="relative mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {steps.map((step, idx) => {
            const StepIcon = step.icon;
            return (
              <div
                key={step.id}
                className="group relative bg-[#0f172a]/40 border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-brand-accent/30 hover:bg-[#0f172a]/60 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] transition-all duration-300"
              >
                {/* Horizontal connection track for desktop (lg screen) */}
                {idx < 4 && (
                  <div className="hidden lg:block absolute top-[44px] left-[calc(100%-8px)] right-[calc(-2rem+8px)] h-0.5 border-t border-dashed border-white/10 z-0 pointer-events-none group-hover:border-brand-accent/30 transition-colors duration-300" />
                )}

                <div className="space-y-4 relative z-10">
                  {/* Step Code Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-gray-800 group-hover:text-brand-accent/40 font-mono transition-colors duration-300">
                      {step.id}
                    </span>
                    <div className={`p-2.5 rounded-xl border border-white/5 ${step.color} flex items-center justify-center shadow-md`}>
                      <StepIcon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* step titles */}
                  <div>
                    <h3 className="font-sans font-bold text-gray-100 group-hover:text-brand-accent transition-colors duration-300 text-lg leading-snug">
                      {step.title}
                    </h3>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-gray-500 font-semibold block mt-1">
                      {step.subtitle}
                    </span>
                  </div>

                  {/* description */}
                  <p className="text-xs text-gray-400 leading-relaxed font-sans font-normal font-light">
                    {step.desc}
                  </p>
                </div>

                {/* footer tag line */}
                <div className="mt-6 pt-3 border-t border-white/5 font-mono text-[9px] text-gray-500 font-bold tracking-widest uppercase">
                  ✓ Step {step.id}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section Box below the process */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-[#0e1628] border border-white/10 p-8 sm:p-12 text-center shadow-2xl">
            {/* Background absolute glowing accents */}
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-brand-accent/5 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />
            
            <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
              <span className="inline-block text-xs font-mono font-bold text-brand-accent bg-brand-accent/10 border border-brand-accent/20 px-3 py-1 rounded-full uppercase tracking-wider animate-pulse">
                Let's Partner Up
              </span>
              
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white font-sans">
                Ready to Automate Your Business?
              </h3>
              
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl mx-auto font-sans">
                Book a free automation audit and discover where your business can save time, reduce manual work, and increase productivity through smart automation.
              </p>
              
              <div className="pt-3">
                <button
                  onClick={onBookCallClick}
                  className="inline-flex items-center space-x-2.5 bg-brand-accent hover:bg-brand-accent/90 text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg shadow-brand-accent/25 hover:shadow-xl hover:shadow-brand-accent/35 transition-all duration-300 cursor-pointer select-none group"
                >
                  <span>📅 Book Free Audit Consult</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <p className="text-[11px] sm:text-xs text-gray-400 font-normal font-sans pt-2 max-w-md mx-auto">
                No obligation. Just practical insights and automation opportunities tailored to your business.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;
