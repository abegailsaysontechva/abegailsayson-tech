import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Layers, 
  Eye, 
  CheckCircle2, 
  Workflow, 
  ShieldCheck, 
  X,
  FileCode
} from 'lucide-react';
import { CASE_STUDIES, CaseStudy, ADDITIONAL_WORKFLOWS, AdditionalWorkflow } from '../data/caseStudiesData';
import SEOHead from '../components/SEOHead';

interface PortfolioPageProps {
  onNavigate: (path: string) => void;
  onBookCallClick: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate, onBookCallClick }) => {
  const [filter, setFilter] = useState<'all' | 'funnels' | 'workflows'>('all');
  const [activeBlueprintModal, setActiveBlueprintModal] = useState<AdditionalWorkflow | null>(null);

  return (
    <div className="pt-28 pb-20 font-sans text-white">
      <SEOHead
        title="Portfolio & Studio Automation Projects | Abegail Sayson Tech"
        description="Explore real-world photography automation architectures, demo workflows, and case studies: inquiry funnels, contract & deposit workflows, and gallery delivery engines."
        canonicalPath="/portfolio"
        schemaData={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Photography Automation Portfolio',
          description: 'A curated collection of studio automation systems, case studies, and tested workflow blueprints.',
          publisher: {
            '@type': 'Organization',
            name: 'Abegail Sayson Tech',
            url: 'https://www.abegailsayson.tech'
          }
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs font-mono text-slate-400 mb-8" aria-label="Breadcrumb">
          <button onClick={() => onNavigate('/')} className="hover:text-brand-accent transition-colors">Home</button>
          <span>/</span>
          <span className="text-cyan-400">Portfolio &amp; Case Studies</span>
        </nav>

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 bg-brand-accent/20 border border-brand-accent/30 rounded-full px-3.5 py-1">
            <Sparkles className="h-3.5 w-3.5 text-brand-accent" />
            <span className="text-xs font-mono font-bold text-brand-accent uppercase tracking-wider">
              PORTFOLIO &amp; ARCHITECTURES
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans leading-tight">
            See How a Photography Studio Runs on Autopilot
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Sample studio workflows designed for a fictional photography studio. Each project shows the problem, automation pipeline, and client experience.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-brand-accent text-white shadow-md shadow-brand-accent/20'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              All Projects ({CASE_STUDIES.length + ADDITIONAL_WORKFLOWS.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('funnels')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                filter === 'funnels'
                  ? 'bg-brand-accent text-white shadow-md shadow-brand-accent/20'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              Featured Funnels ({CASE_STUDIES.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('workflows')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                filter === 'workflows'
                  ? 'bg-brand-accent text-white shadow-md shadow-brand-accent/20'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              Tested Workflows ({ADDITIONAL_WORKFLOWS.length})
            </button>
          </div>
        </div>

        {/* Featured Case Studies Cards */}
        {(filter === 'all' || filter === 'funnels') && (
          <div className="mb-16">
            <div className="mb-6">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                FEATURED STUDIO CASE STUDIES
              </span>
              <h2 className="text-2xl font-bold text-white font-sans">
                Core Photography Booking &amp; Delivery Engines
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {CASE_STUDIES.map((study) => (
                <div 
                  key={study.id}
                  className="rounded-3xl card-glass border border-white/10 p-7 flex flex-col justify-between hover:border-brand-accent/40 transition-all duration-300 shadow-xl"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-brand-accent/20 text-brand-accent border border-brand-accent/30 uppercase tracking-wider">
                        {study.status}
                      </span>
                      <span className="text-xs font-mono text-cyan-400">
                        {study.category}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                        {study.title}
                      </h3>
                      <p className="text-xs text-slate-300 font-sans leading-relaxed">
                        {study.subtitle}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-rose-950/30 border border-rose-500/20 text-xs text-rose-200 leading-relaxed font-sans">
                      <strong className="text-rose-400 font-mono uppercase block mb-0.5">Problem:</strong>
                      {study.problem}
                    </div>

                    <div className="space-y-2">
                      <span className="text-[11px] font-mono font-bold text-slate-300 uppercase tracking-wider block">
                        5-Step Pipeline:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-200">
                        {study.pipeline.map((p) => (
                          <li key={p.stepNumber} className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full bg-brand-accent/20 text-brand-accent text-[10px] font-mono flex items-center justify-center shrink-0">
                              {p.stepNumber}
                            </span>
                            <span className="truncate">{p.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-xs text-emerald-200 font-sans">
                      <strong className="text-emerald-400 font-mono uppercase block mb-0.5 text-[10px]">Client Experience:</strong>
                      &ldquo;{study.clientExperience}&rdquo;
                    </div>

                    <div className="pt-2 border-t border-white/10 text-[11px] font-mono text-slate-400">
                      <strong className="text-slate-300 uppercase block mb-1 text-[10px]">Tools Used:</strong>
                      {study.toolsUsed.join(' • ')}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => onNavigate(`/case-study/${study.slug}`)}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-accent hover:bg-orange-500 text-white text-xs font-bold font-mono uppercase tracking-wider transition-all shadow-md shadow-brand-accent/20 cursor-pointer"
                    >
                      <span>View Case Study →</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Additional Tested Workflows */}
        {(filter === 'all' || filter === 'workflows') && (
          <div className="mb-20">
            <div className="mb-6">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                TESTED WORKFLOW BLUEPRINTS
              </span>
              <h2 className="text-2xl font-bold text-white font-sans">
                Data Pipelines, AI Middleware &amp; File Handlers
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ADDITIONAL_WORKFLOWS.map((build) => (
                <div 
                  key={build.id}
                  className="rounded-2xl card-glass border border-white/10 p-5 flex flex-col justify-between hover:border-cyan-400/40 transition-all duration-300 shadow-lg"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-white/5 text-slate-300 border border-white/10 uppercase">
                        {build.tag}
                      </span>
                      <span className="text-xs font-mono text-cyan-400">Workflow Blueprint</span>
                    </div>

                    <div 
                      onClick={() => setActiveBlueprintModal(build)}
                      className="aspect-video w-full rounded-xl overflow-hidden bg-slate-900 border border-white/10 relative cursor-pointer group"
                    >
                      <img 
                        src={build.image} 
                        alt={build.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-brand-accent text-white px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 shadow">
                          <Eye className="w-3.5 h-3.5" /> Inspect Blueprint
                        </span>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-white font-sans leading-snug">
                      {build.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed font-sans line-clamp-3">
                      {build.description}
                    </p>

                    <div className="p-2.5 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-xs text-cyan-100">
                      <strong className="text-cyan-400 font-mono block text-[10px] uppercase">Business Value:</strong>
                      {build.businessValue}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => setActiveBlueprintModal(build)}
                      className="w-full py-2.5 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono font-bold text-slate-200 uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Layers className="w-3.5 h-3.5 text-cyan-400" />
                      <span>View Architecture Blueprint</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Callout */}
        <div className="text-center max-w-2xl mx-auto p-8 sm:p-10 rounded-3xl bg-slate-900/40 border border-white/10 shadow-xl font-sans">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Need an Automation Architecture for Your Studio?
          </h3>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
            Book a free 25-minute studio funnel audit. We&apos;ll look at your website, inquiry form, and follow-up process and show you the three quick wins to get you more bookings.
          </p>
          <button
            type="button"
            onClick={onBookCallClick}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-accent hover:bg-orange-500 text-white font-bold cursor-pointer transition-all shadow-lg shadow-brand-accent/25 text-sm uppercase font-mono tracking-wider"
          >
            Get a Free Studio Funnel Audit
          </button>
        </div>

      </div>

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

    </div>
  );
};

export default PortfolioPage;
