import React from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  AlertTriangle, 
  FileCode, 
  CheckCircle2, 
  Lightbulb, 
  ShieldCheck, 
  Layers, 
  Calendar,
  Sparkles
} from 'lucide-react';
import { CASE_STUDIES, CaseStudy } from '../data/caseStudiesData';
import SEOHead from '../components/SEOHead';

interface CaseStudyPageProps {
  studyId: string;
  onNavigate: (path: string) => void;
  onBookCallClick: () => void;
}

export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ studyId, onNavigate, onBookCallClick }) => {
  const study = CASE_STUDIES.find(s => s.id === studyId || s.slug === studyId) || CASE_STUDIES[0];

  return (
    <div className="pt-28 pb-20 font-sans text-white">
      <SEOHead
        title={`${study.title} | Photography Automation Case Study`}
        description={study.overview}
        canonicalPath={`/case-study/${study.slug}`}
        schemaData={{
          '@context': 'https://schema.org',
          '@type': 'TechArticle',
          headline: study.title,
          description: study.overview,
          author: {
            '@type': 'Person',
            name: 'Abegail Sayson',
            jobTitle: 'AI Automation Specialist'
          },
          publisher: {
            '@type': 'Organization',
            name: 'Abegail Sayson Tech',
            url: 'https://www.abegailsayson.tech'
          }
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between mb-8">
          <button
            type="button"
            onClick={() => onNavigate('/portfolio')}
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-brand-accent transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </button>

          <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider bg-white/5 border border-white/10 px-3 py-1 rounded-full">
            {study.status} CASE STUDY
          </span>
        </div>

        {/* Header */}
        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 bg-brand-accent/20 border border-brand-accent/30 rounded-full px-3.5 py-1">
            <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
            <span className="text-xs font-mono font-bold text-brand-accent uppercase tracking-wider">
              {study.category}
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans leading-tight">
            {study.title}
          </h1>
          <p className="text-lg sm:text-xl text-cyan-300 font-mono leading-relaxed">
            {study.subtitle}
          </p>
        </div>

        {/* Project Overview */}
        <div className="p-6 sm:p-8 rounded-3xl card-glass border border-white/10 space-y-4 mb-10">
          <h2 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
            Project Overview
          </h2>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
            {study.overview}
          </p>
        </div>

        {/* Business Problem */}
        <div className="p-6 sm:p-8 rounded-3xl bg-rose-950/40 border border-rose-500/30 space-y-3 mb-10">
          <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4" />
            <span>The Business Problem</span>
          </div>
          <p className="text-sm sm:text-base text-rose-100 leading-relaxed font-sans">
            {study.problem}
          </p>
        </div>

        {/* Trigger and Automation Logic */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/80 border border-cyan-500/30 space-y-3 mb-10">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
            <FileCode className="w-4 h-4" />
            <span>Trigger &amp; Automation Logic</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 font-mono leading-relaxed bg-black/50 p-4 rounded-xl border border-white/5">
            {study.triggerLogic}
          </p>
        </div>

        {/* End-to-End Pipeline Steps */}
        <div className="space-y-4 mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-sans">
            Automation Pipeline Steps
          </h2>
          <div className="space-y-3">
            {study.pipeline.map((step) => (
              <div key={step.stepNumber} className="flex items-start gap-4 p-5 rounded-2xl card-glass border border-white/10">
                <div className="w-8 h-8 rounded-xl bg-brand-accent/20 border border-brand-accent/40 text-brand-accent font-mono text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {step.stepNumber}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white block">{step.title}</h3>
                  <p className="text-sm text-slate-300 mt-1 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow Architecture Grid */}
        <div className="space-y-4 mb-12">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-white font-sans">
              Workflow Architecture Blueprint
            </h2>
            <span className="text-xs font-mono text-cyan-400 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5" /> Logical Flow
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {study.architectureSteps.map((node, nIdx) => (
              <div key={nIdx} className="p-4 rounded-2xl bg-slate-950 border border-white/10 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400">Node 0{nIdx + 1}</span>
                  <span className="text-[9px] font-mono font-bold text-brand-accent uppercase px-2 py-0.5 rounded bg-brand-accent/15 border border-brand-accent/30">
                    {node.type}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white truncate">{node.label}</h4>
                <p className="text-xs text-slate-400 leading-snug">{node.sublabel}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Experience & Potential Business Value */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 rounded-3xl bg-emerald-950/30 border border-emerald-500/20 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>What The Client Sees</span>
            </div>
            <p className="text-sm sm:text-base text-emerald-100 leading-relaxed font-sans">
              &ldquo;{study.clientExperience}&rdquo;
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-amber-950/30 border border-amber-500/20 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
              <Lightbulb className="w-4 h-4" />
              <span>Potential Business Value</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-amber-100 list-disc list-inside leading-relaxed font-sans">
              {study.businessValue.map((val, vIdx) => (
                <li key={vIdx}>{val}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tools and Implementation Status */}
        <div className="p-6 rounded-3xl card-glass border border-white/10 space-y-4 mb-16">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Integrated Tools:</span>
            {study.toolsUsed.map((tool, idx) => (
              <span key={idx} className="px-3 py-1 rounded-lg text-xs font-mono bg-white/10 text-slate-200 border border-white/10">
                {tool}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono pt-2 border-t border-white/10">
            <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Implementation Status: <strong>{study.status}</strong>. Fully mapped and tested architecture designed for photography studios.</span>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="text-center p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-brand-accent/15 to-slate-900 border border-brand-accent/40 shadow-2xl space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
            Want a Similar Workflow for Your Photography Studio?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            I can build, test, and deploy this exact workflow tailored to your packages, your tone of voice, and your tools.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={onBookCallClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-accent hover:bg-orange-500 text-white font-bold text-sm uppercase font-mono tracking-wider transition-all shadow-lg shadow-brand-accent/25 cursor-pointer"
            >
              <span>Request a Free Studio Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/portfolio')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-all cursor-pointer"
            >
              <span>Explore Other Case Studies</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CaseStudyPage;
