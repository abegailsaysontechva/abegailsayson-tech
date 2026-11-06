import React, { useState } from 'react';
import { 
  Workflow, 
  ChevronDown, 
  ChevronUp, 
  Eye, 
  X, 
  ArrowRight, 
  Sparkles,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  FileCode,
  ShieldCheck
} from 'lucide-react';
import { CASE_STUDIES, CaseStudy, ADDITIONAL_WORKFLOWS, AdditionalWorkflow } from '../data/caseStudiesData';

interface PortfolioProps {
  onOpenCaseStudy?: (study: CaseStudy) => void;
  onBookCallClick?: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenCaseStudy, onBookCallClick }) => {
  const [expandedFlows, setExpandedFlows] = useState<Record<string, boolean>>({});
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);
  const [activeBlueprintModal, setActiveBlueprintModal] = useState<AdditionalWorkflow | null>(null);

  const toggleFlow = (id: string) => {
    setExpandedFlows(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleCaseStudyClick = (study: CaseStudy) => {
    if (onOpenCaseStudy) {
      onOpenCaseStudy(study);
    } else {
      setActiveCaseStudy(study);
    }
  };

  const handleContactClick = () => {
    if (onBookCallClick) {
      onBookCallClick();
    } else {
      const contactSec = document.getElementById('contact');
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="demos" className="py-24 bg-transparent text-white relative">
      {/* Compatibility anchor for legacy URLs */}
      <div id="portfolio" className="absolute -top-24 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 bg-brand-accent/20 border border-brand-accent/30 rounded-full px-3.5 py-1">
            <Sparkles className="h-3.5 w-3.5 text-brand-accent" />
            <span className="text-xs font-mono font-bold text-brand-accent uppercase tracking-wider">
              PORTFOLIO &amp; DEMO FUNNELS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans max-w-4xl mx-auto leading-tight">
            See How a Photography Studio Runs on Autopilot
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Sample studio workflows designed for a fictional photography studio. Each project shows the problem, automation pipeline, and client experience.
          </p>
        </div>

        {/* Featured Row: 3 Large Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {CASE_STUDIES.map((study) => {
            const isFlowExpanded = !!expandedFlows[study.id];

            return (
              <div 
                key={study.id}
                className="group relative rounded-3xl card-glass hover:border-brand-accent/40 p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div className="space-y-6">
                  {/* Top Bar: Status Tag & Category */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-brand-accent/20 text-brand-accent border border-brand-accent/30 uppercase tracking-wider">
                      {study.status}
                    </span>
                    <span className="text-xs font-mono text-cyan-400">
                      Photography System
                    </span>
                  </div>

                  {/* Title & Problem */}
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-brand-accent transition-colors font-sans leading-snug">
                      {study.title}
                    </h3>
                    
                    <div className="rounded-xl bg-rose-950/30 border border-rose-500/20 p-3">
                      <p className="text-xs text-rose-200/90 font-sans leading-relaxed">
                        <span className="text-rose-400 font-bold uppercase font-mono text-[10px] tracking-wider block mb-0.5">
                          Problem:
                        </span>
                        {study.problem}
                      </p>
                    </div>
                  </div>

                  {/* Numbered Flow with 5 steps */}
                  <div>
                    <span className="text-[11px] font-mono font-bold text-slate-300 uppercase tracking-wider block mb-2.5">
                      Automation Pipeline:
                    </span>
                    <ol className="space-y-2">
                      {study.pipeline.map((step) => (
                        <li key={step.stepNumber} className="flex items-start text-xs sm:text-sm text-slate-200 font-sans">
                          <span className="h-5 w-5 rounded-full bg-brand-accent/20 border border-brand-accent/30 text-brand-accent text-[11px] font-mono font-bold flex items-center justify-center shrink-0 mr-2.5 mt-0.5">
                            {step.stepNumber}
                          </span>
                          <span className="leading-snug pt-0.5">{step.title}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Client Experience */}
                  <div className="rounded-xl bg-emerald-950/30 border border-emerald-500/20 p-3">
                    <span className="text-emerald-400 font-bold uppercase font-mono text-[10px] tracking-wider block mb-0.5">
                      Client Experience:
                    </span>
                    <p className="text-xs text-emerald-200/90 font-sans leading-relaxed">
                      &ldquo;{study.clientExperience}&rdquo;
                    </p>
                  </div>

                  {/* Tools row */}
                  <div className="pt-2 border-t border-white/10">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                      TOOLS USED
                    </span>
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-[11px] font-mono text-slate-300 leading-relaxed">
                      {study.toolsUsed.join(' • ')}
                    </div>
                  </div>

                  {/* Expandable System Architecture */}
                  {isFlowExpanded && (
                    <div className="rounded-2xl bg-slate-950/90 border border-brand-accent/30 p-4 space-y-3 animate-fadeIn">
                      <span className="text-[10px] font-mono font-bold text-brand-accent uppercase tracking-wider block">
                        System Architecture Breakdown
                      </span>
                      <div className="space-y-2">
                        {study.architectureSteps.map((step, sIdx) => (
                          <React.Fragment key={sIdx}>
                            <div className="flex items-center space-x-2.5 p-2 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-200 font-sans">
                              <span className="text-[10px] font-mono font-bold text-brand-accent uppercase px-1.5 py-0.5 rounded bg-brand-accent/15 border border-brand-accent/30">
                                {step.type}
                              </span>
                              <div className="flex-1 min-w-0">
                                <span className="font-semibold block truncate">{step.label}</span>
                                <span className="text-[11px] text-slate-400 block truncate">{step.sublabel}</span>
                              </div>
                            </div>
                            {sIdx < study.architectureSteps.length - 1 && (
                              <div className="flex justify-center py-0.5">
                                <span className="text-brand-accent text-xs font-mono">↓</span>
                              </div>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Action Buttons: View Case Study & See How It Works */}
                <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row gap-2.5">
                  <button
                    type="button"
                    onClick={() => handleCaseStudyClick(study)}
                    className="flex-1 inline-flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-brand-accent hover:bg-orange-500 text-white text-xs font-bold font-mono uppercase tracking-wider transition-all cursor-pointer shadow-md hover:shadow-brand-accent/25"
                  >
                    <span>View Case Study →</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleFlow(study.id)}
                    className="flex-1 inline-flex items-center justify-center space-x-1.5 py-3 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-accent/30 text-xs font-bold font-mono text-slate-200 uppercase tracking-wider transition-all cursor-pointer"
                  >
                    <Workflow className="h-3.5 w-3.5 text-cyan-400" />
                    <span>{isFlowExpanded ? 'Hide Flow' : 'See How It Works'}</span>
                    {isFlowExpanded ? (
                      <ChevronUp className="h-3.5 w-3.5 ml-0.5" />
                    ) : (
                      <ChevronDown className="h-3.5 w-3.5 ml-0.5" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Row: "More Automation Builds" */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-1">
                ADDITIONAL SYSTEMS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">
                More Automation Builds
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md">
              Production workflows connecting forms, AI reasoning middleware, and intelligent file handling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ADDITIONAL_WORKFLOWS.map((build) => (
              <div 
                key={build.id}
                className="group rounded-2xl card-glass hover:border-brand-accent/40 p-5 transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-white/5 text-slate-300 border border-white/10 uppercase tracking-wider">
                      {build.tag}
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveBlueprintModal(build)}
                      className="text-xs font-mono text-cyan-400 hover:text-white flex items-center gap-1 transition-colors"
                      title="Inspect Blueprint"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      <span>Blueprint</span>
                    </button>
                  </div>

                  <div 
                    onClick={() => setActiveBlueprintModal(build)}
                    className="aspect-video w-full rounded-xl overflow-hidden bg-slate-900 border border-white/5 mb-4 relative cursor-pointer group-hover:border-cyan-400/30 transition-all"
                  >
                    <img 
                      src={build.image} 
                      alt={build.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-brand-accent text-white px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 shadow">
                        <Eye className="h-3.5 w-3.5" /> View Workflow Blueprint
                      </span>
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors font-sans mb-2 leading-snug">
                    {build.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans line-clamp-3 mb-4">
                    {build.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {build.tools.map((tool, tIdx) => (
                      <span 
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 bg-white/5 border border-white/5"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveBlueprintModal(build)}
                    className="w-full py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 text-[11px] font-mono font-bold text-slate-200 uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Layers className="h-3.5 w-3.5 text-cyan-400" />
                    <span>View Architecture Blueprint</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Callout below cards */}
        <div className="mt-20 text-center max-w-2xl mx-auto p-8 sm:p-10 rounded-3xl bg-slate-900/40 border border-white/10 shadow-xl font-sans">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Want a system like this for your studio?
          </h3>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-lg mx-auto">
            Let&apos;s design and connect your booking funnel, automated follow-ups, and client delivery steps so your business operates on autopilot.
          </p>
          <button
            type="button"
            onClick={handleContactClick}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-accent hover:bg-orange-500 text-white font-bold cursor-pointer transition-all shadow-lg hover:shadow-brand-accent/25 text-sm uppercase font-mono tracking-wider"
          >
            Get a Free Studio Funnel Audit
          </button>
        </div>

      </div>

      {/* Comprehensive Case Study Modal */}
      {activeCaseStudy && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="bg-slate-900 border border-brand-accent/40 rounded-3xl w-full max-w-4xl shadow-2xl overflow-hidden relative max-h-[92vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-slate-900 via-brand-accent/10 to-slate-900">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-bold text-brand-accent uppercase px-2.5 py-0.5 rounded-full bg-brand-accent/15 border border-brand-accent/30">
                    {activeCaseStudy.status} CASE STUDY
                  </span>
                  <span className="text-xs font-mono text-cyan-400">
                    {activeCaseStudy.category}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white font-sans">
                  {activeCaseStudy.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveCaseStudy(null)}
                className="p-2 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close case study"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8 font-sans">
              
              {/* Overview & Subtitle */}
              <div>
                <p className="text-base text-cyan-300 font-mono mb-2">
                  {activeCaseStudy.subtitle}
                </p>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  {activeCaseStudy.overview}
                </p>
              </div>

              {/* Problem Statement Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-rose-950/40 border border-rose-500/30 space-y-1.5">
                <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4" />
                  <span>The Business Problem</span>
                </div>
                <p className="text-sm text-rose-100 leading-relaxed">
                  {activeCaseStudy.problem}
                </p>
              </div>

              {/* Trigger & Automation Logic */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-cyan-500/30 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <FileCode className="w-4 h-4" />
                  <span>Trigger &amp; Automation Logic</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-mono leading-relaxed bg-black/40 p-3 rounded-xl border border-white/5">
                  {activeCaseStudy.triggerLogic}
                </p>
              </div>

              {/* 5-Step Pipeline */}
              <div className="space-y-4">
                <h4 className="text-base font-bold text-white font-sans uppercase tracking-wider font-mono text-xs text-brand-accent">
                  End-to-End Pipeline Steps
                </h4>
                <div className="space-y-3">
                  {activeCaseStudy.pipeline.map((step) => (
                    <div key={step.stepNumber} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/5">
                      <div className="w-7 h-7 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {step.stepNumber}
                      </div>
                      <div>
                        <span className="text-sm font-bold text-white block">{step.title}</span>
                        <p className="text-xs sm:text-sm text-slate-300 mt-0.5 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Workflow Architecture */}
              <div className="space-y-3">
                <h4 className="text-base font-bold text-white font-sans uppercase tracking-wider font-mono text-xs text-cyan-400">
                  Visual Workflow Architecture
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {activeCaseStudy.architectureSteps.map((node, nIdx) => (
                    <div key={nIdx} className="p-3 rounded-xl bg-slate-950 border border-white/10 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-slate-400">Node {nIdx + 1}</span>
                        <span className="text-[9px] font-mono font-bold text-brand-accent uppercase px-1.5 py-0.5 rounded bg-brand-accent/15 border border-brand-accent/30">
                          {node.type}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-white block truncate">{node.label}</span>
                      <p className="text-[11px] text-slate-400 leading-snug">{node.sublabel}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Experience & Potential Business Value */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/20 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Client Experience</span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-200 leading-relaxed">
                    &ldquo;{activeCaseStudy.clientExperience}&rdquo;
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/20 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase">
                    <Lightbulb className="w-4 h-4" />
                    <span>Business Value</span>
                  </div>
                  <ul className="space-y-1 text-xs text-amber-100 list-disc list-inside leading-relaxed">
                    {activeCaseStudy.businessValue.map((val, vIdx) => (
                      <li key={vIdx}>{val}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tools & Transparency Notice */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-xs font-mono text-slate-400">Tools:</span>
                  {activeCaseStudy.toolsUsed.map((tool, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded text-xs font-mono bg-white/10 text-slate-200 border border-white/10">
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Status: <strong>{activeCaseStudy.status}</strong> workflow. Designed for studio implementation with no fabricated metrics.</span>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-5 border-t border-white/10 bg-slate-950 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => {
                  setActiveCaseStudy(null);
                  handleContactClick();
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-accent hover:bg-orange-500 text-white text-xs font-mono font-bold uppercase tracking-wider cursor-pointer transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-accent/20"
              >
                <span>Contact Me For a Similar Workflow</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setActiveCaseStudy(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-mono uppercase tracking-wider cursor-pointer transition-all"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Architecture Blueprint Modal for Secondary Builds */}
      {activeBlueprintModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-slate-900 border border-white/10 rounded-2xl w-full max-w-3xl shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col">
            
            <div className="p-5 border-b border-white/10 flex items-center justify-between bg-slate-950">
              <div>
                <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                  {activeBlueprintModal.tag}
                </span>
                <h3 className="text-lg font-bold text-white font-sans">
                  {activeBlueprintModal.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveBlueprintModal(null)}
                className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4">
              <p className="text-sm text-slate-300 font-sans leading-relaxed">
                {activeBlueprintModal.description}
              </p>

              <div className="rounded-xl overflow-hidden border border-white/10 bg-slate-950 p-2">
                <img 
                  src={activeBlueprintModal.image} 
                  alt={activeBlueprintModal.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[440px] object-contain rounded-lg"
                />
              </div>

              <div className="pt-2">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Integrated Technologies:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeBlueprintModal.tools.map((t, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-white/10 bg-slate-950 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveBlueprintModal(null)}
                className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-mono uppercase tracking-wider cursor-pointer"
              >
                Close Blueprint
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Portfolio;
