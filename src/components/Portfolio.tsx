import React, { useState } from 'react';
import { PROJECTS } from '../data';
import { LucideIcon } from './LucideIcon';
import { Eye, Check, X, ArrowUpRight, Award, Zap } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Onboarding & Workflows', 'CRM setup', 'AI Integrations'];

  const filteredProjects = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter(proj => proj.category.toLowerCase().includes(filter.split(' ')[0].toLowerCase()));

  const activeProjectData = PROJECTS.find(p => p.id === selectedProject);

  return (
    <section id="portfolio" className="py-24 bg-transparent text-white border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-brand-blue/20 border border-brand-blue/40 rounded-full px-4 py-1.5 backdrop-blur-sm">
              <Zap className="h-4 w-4 text-brand-light-blue" />
              <span className="text-xs font-mono font-bold text-brand-light-blue uppercase tracking-widest">
                Case Studies
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Production Workflows in Action
            </h2>
            <p className="text-base text-gray-400">
              Explore custom systems I built for businesses, showing real triggers, connected pipelines, and the operational value delivered.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                  filter === cat
                    ? 'bg-brand-light-blue text-white shadow-md shadow-brand-light-blue/25'
                    : 'bg-slate-900 border border-white/5 text-gray-400 hover:text-white hover:bg-slate-900/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="group bg-slate-950/60 rounded-2xl border border-white/5 hover:border-brand-blue/40 hover:bg-slate-950 transition-all duration-300 flex flex-col justify-between overflow-hidden relative shadow-lg"
            >
              {/* Dynamic Header Badge */}
              <div className="absolute top-4 right-4 bg-slate-950/90 px-2.5 py-1 rounded text-[10px] font-mono text-brand-light-blue border border-white/10 uppercase tracking-wider z-20 shadow-md">
                {proj.category}
              </div>

              {/* Preview Image Hero Block */}
              {proj.image && (
                <div 
                  onClick={() => setSelectedProject(proj.id)}
                  className="aspect-[16/10] w-full overflow-hidden bg-slate-950 relative border-b border-white/5 cursor-pointer z-10"
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle hover blur & expand effect overlays */}
                  <div className="absolute inset-0 bg-[#02050e]/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="bg-brand-light-blue text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg flex items-center space-x-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <Eye className="h-4 w-4" />
                      <span>Explore Case Study</span>
                    </span>
                  </div>
                </div>
              )}

              {/* Description & info metadata */}
              <div className="p-6 border-b border-white/5 bg-gradient-to-b from-brand-blue/5 to-transparent flex-grow flex flex-col justify-between">
                <div>
                  <div className="h-8 w-8 rounded-lg bg-brand-light-blue/10 text-brand-light-blue flex items-center justify-center mb-3">
                    <LucideIcon name={proj.icon} size={16} />
                  </div>
                  <h3 className="text-md font-bold text-white tracking-tight leading-snug group-hover:text-brand-light-blue transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed mt-2 line-clamp-3">
                    {proj.description}
                  </p>
                </div>
              </div>

              {/* Stats/Metrics Block */}
              <div className="grid grid-cols-3 gap-1 border-b border-white/5 bg-white/[0.01]">
                {proj.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="text-center py-3 border-r border-white/5 last:border-r-0">
                    <span className="text-[9px] font-mono text-gray-500 block uppercase tracking-wider">
                      {stat.label}
                    </span>
                    <span className="text-xs font-extrabold text-white font-sans mt-0.5 block">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tag/Tools & Button list */}
              <div className="p-6 space-y-4">
                {/* Tool Tech Stack list */}
                <div className="flex flex-wrap gap-1.5">
                  {proj.tools.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-brand-blue/20 text-brand-light-blue border border-brand-blue/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(proj.id)}
                  className="w-full inline-flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white hover:bg-brand-blue/20 hover:border-brand-blue/50 transition-all cursor-pointer"
                >
                  <Eye className="h-4 w-4" />
                  <span>View System Architecture</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Full Interactive Details Modal Overlay */}
        {selectedProject && activeProjectData && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-brand-dark/90 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-900 rounded-2xl border border-brand-blue/40 w-full max-w-2xl shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col justify-between">
              
              {/* Modal Header */}
              <div className="p-6 border-b border-white/5 flex items-start justify-between bg-gradient-to-r from-brand-blue/20 to-transparent">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-lg bg-brand-light-blue/10 text-brand-light-blue flex items-center justify-center shrink-0">
                    <LucideIcon name={activeProjectData.icon} size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-brand-light-blue tracking-wide block uppercase uppercase font-bold">
                      {activeProjectData.category}
                    </span>
                    <h3 className="text-lg font-extrabold text-white leading-tight">
                      {activeProjectData.title}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6 flex-grow text-sm">
                
                {/* Overview prompt */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block">
                    PROJECT OBJECTIVE & CONTEXT
                  </span>
                  <p className="text-gray-300 leading-relaxed font-sans font-normal">
                    {activeProjectData.description}
                  </p>
                </div>

                 {/* Key Benefits / impact banner */}
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 flex items-start space-x-3">
                  <Award className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-mono text-emerald-400 font-bold uppercase block">
                      DELIVERED OUTCOME / ROI
                    </span>
                    <p className="text-xs text-gray-300 mt-1">
                      {activeProjectData.impact}
                    </p>
                  </div>
                </div>

                {/* Original Workflow Blueprint */}
                {activeProjectData.image && (
                  <div className="space-y-3">
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block">
                      ORIGINAL WORKFLOW BLUEPRINT
                    </span>
                    <div className="rounded-2xl overflow-hidden border border-white/10 bg-slate-950/80 relative group p-3 flex flex-col items-center">
                      <img
                        src={activeProjectData.image}
                        alt={`${activeProjectData.title} blueprint`}
                        referrerPolicy="no-referrer"
                        className="w-full h-auto max-h-[320px] md:max-h-[400px] object-contain rounded-xl select-none"
                      />
                      <a
                        href={activeProjectData.image}
                        target="_blank"
                        rel="noreferrer"
                        className="absolute bottom-6 right-6 bg-slate-950/95 text-white hover:bg-slate-900 border border-white/10 hover:border-brand-blue/50 px-4 py-2 rounded-xl text-xs font-bold font-sans flex items-center space-x-2 transition-all shadow-xl hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
                      >
                        <ArrowUpRight className="h-4 w-4 text-brand-light-blue" />
                        <span>Open Original Size</span>
                      </a>
                    </div>
                  </div>
                )}

                {/* Visual Flowchart Canvas */}
                {activeProjectData.nodes && activeProjectData.nodes.length > 0 && (
                  <div className="space-y-3">
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block">
                      LIVE SYSTEM FLOW ARCHITECTURE
                    </span>
                    <div className="p-5 rounded-2xl bg-slate-950 border border-white/10 relative overflow-x-auto min-h-[160px] flex items-center justify-start gap-3 scrollbar-thin scrollbar-thumb-white/10 select-none">
                      {/* Flex row of nodes with connection arrows */}
                      <div className="flex items-center space-x-3 shrink-0 py-2">
                        {activeProjectData.nodes.map((node, nIdx) => {
                          // Determine color scheme based on node type
                          let typeColor = 'bg-brand-blue/10 border-brand-blue/30 text-brand-light-blue';
                          let typeLabel = 'Action';
                          if (node.type === 'trigger') {
                            typeColor = 'bg-[#ff6c37]/10 border-[#ff6c37]/30 text-[#ff6c37] ring-1 ring-[#ff6c37]/20';
                            typeLabel = 'Trigger';
                          } else if (node.type === 'condition') {
                            typeColor = 'bg-amber-500/10 border-amber-500/30 text-amber-400';
                            typeLabel = 'Filter';
                          } else if (node.type === 'complete') {
                            typeColor = 'bg-emerald-500/10 border-emerald-500/30 text-emerald-450 ring-1 ring-emerald-500/20';
                            typeLabel = 'Endpoint';
                          } else if (node.type === 'router') {
                            typeColor = 'bg-purple-500/10 border-purple-500/30 text-purple-400';
                            typeLabel = 'Router';
                          } else if (node.type === 'loop') {
                            typeColor = 'bg-teal-500/10 border-teal-500/30 text-teal-400';
                            typeLabel = 'Loop';
                          } else if (node.type === 'delay') {
                            typeColor = 'bg-blue-500/10 border-blue-500/30 text-blue-400';
                            typeLabel = 'Delay';
                          }

                          // Get matching Lucide icon names depending on application or name
                          let iconName = 'Cpu';
                          const appL = node.app.toLowerCase();
                          if (appL.includes('gmail') || appL.includes('mail')) iconName = 'Mail';
                          else if (appL.includes('asana')) iconName = 'CheckCircle';
                          else if (appL.includes('xero')) iconName = 'DollarSign';
                          else if (appL.includes('sheets') || appL.includes('spreadsheet')) iconName = 'Database';
                          else if (appL.includes('drive')) iconName = 'Server';
                          else if (appL.includes('gemini') || appL.includes('ai')) iconName = 'Sparkles';
                          else if (appL.includes('slack')) iconName = 'MessageSquare';
                          else if (appL.includes('apollo')) iconName = 'Shield';
                          else if (appL.includes('youform') || appL.includes('tally')) iconName = 'FileText';
                          else if (appL.includes('notion')) iconName = 'Database';
                          else if (appL.includes('facebook')) iconName = 'Plus';
                          else if (appL.includes('linkedin')) iconName = 'Linkedin';
                          else if (node.type === 'trigger') iconName = 'Zap';
                          else if (node.type === 'router') iconName = 'Layers';
                          else if (node.type === 'loop') iconName = 'Cpu';
                          else if (node.type === 'delay') iconName = 'Clock';

                          return (
                            <React.Fragment key={node.id}>
                              {/* Connection Arrow before node (if not first) */}
                              {nIdx > 0 && (
                                <div className="flex flex-col items-center justify-center shrink-0">
                                  {/* Connector Line */}
                                  <div className="flex items-center">
                                    <div className="h-[2px] w-4 bg-gradient-to-r from-brand-blue/30 to-brand-blue/60" />
                                    {/* Arrow icon */}
                                    <span className="text-brand-light-blue text-[10px] font-mono font-bold ml-[-2px] select-none">▶</span>
                                  </div>
                                </div>
                              )}

                              {/* Interactive Node Card */}
                              <div className={`p-3 rounded-xl border ${typeColor} text-left w-48 shrink-0 transition-all hover:scale-[1.02] hover:bg-white/[0.02] relative group shadow-sm`}>
                                {/* Pulse light for triggers / connections */}
                                {node.type === 'trigger' && (
                                  <span className="absolute top-2.5 right-2.5 flex h-1.5 w-1.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6c37] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#ff6c37]"></span>
                                  </span>
                                )}
                                {node.type === 'complete' && (
                                  <span className="absolute top-2.5 right-2.5 flex h-1.5 w-1.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
                                  </span>
                                )}

                                <div className="flex items-center space-x-2">
                                  <div className="h-6 w-6 rounded bg-white/5 border border-white/10 text-white flex items-center justify-center shrink-0">
                                    <LucideIcon name={iconName} size={12} className="opacity-90" />
                                  </div>
                                  <div className="overflow-hidden">
                                    <span className="text-[8px] font-mono opacity-80 uppercase tracking-widest block font-bold leading-none">
                                      {node.app} • {typeLabel}
                                    </span>
                                    <h4 className="text-[11px] font-extrabold text-white truncate pr-2 tracking-tight mt-0.5">
                                      {node.label}
                                    </h4>
                                  </div>
                                </div>
                                <p className="text-[9px] text-gray-400 mt-1.5 leading-snug line-clamp-2">
                                  {node.desc}
                                </p>
                              </div>
                            </React.Fragment>
                          );
                        })}
                      </div>
                    </div>
                    {/* Prompt scroll tip to client */}
                    <span className="text-[9px] text-gray-500 font-mono italic block text-right">
                      ↔ Swipe horizontally to trace complete validation loop
                    </span>
                  </div>
                )}

                {/* Automation Features specification list */}
                <div className="space-y-3">
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block">
                    CONNECTED CAPABILITIES
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeProjectData.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-white/5 border border-white/5 text-xs text-gray-300 flex items-start space-x-2"
                      >
                        <Check className="h-4 w-4 text-brand-light-blue shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools details */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block">
                    SYSTEM TOOLSTACK INTEGRATION
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeProjectData.tools.map((tls, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-brand-blue/30 text-white border border-brand-blue/20"
                      >
                        🛠️ {tls}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-white/5 bg-slate-950 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-lg bg-brand-light-blue text-white text-xs font-bold hover:bg-brand-light-blue/90 transition-colors cursor-pointer"
                >
                  Close Architecture Map
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Portfolio;
