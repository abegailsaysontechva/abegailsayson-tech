import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WORKFLOW_PRESETS } from '../data';
import { LucideIcon } from './LucideIcon';
import { Sparkles, ArrowRight, Play, Cpu } from 'lucide-react';

export const InteractiveWorkflow: React.FC = () => {
  const [activeProfile, setActiveProfile] = useState<'photographer' | 'coach' | 'service'>('photographer');
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const profiles = [
    { id: 'photographer', label: 'Wedding Photographer', icon: 'Camera', desc: 'Auto-schedule inquiries, lock contracts, sync Stripe deposits.' },
    { id: 'coach', label: 'Coaching & Mentoring', icon: 'Award', desc: 'Qualify inbound leads with AI, trigger welcome kits, organize kickoffs.' },
    { id: 'service', label: 'Service Business / Agency', icon: 'Cpu', desc: 'Sync custom deliverables, automate proposals, auto-provision clients.' }
  ] as const;

  const currentWorkflow = WORKFLOW_PRESETS[activeProfile];

  return (
    <section id="interactive-blueprint" className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-brand-light-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full bg-brand-blue/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-blue/20 border border-brand-blue/40 rounded-full px-4 py-1.5 backdrop-blur-sm">
            <Cpu className="h-4 w-4 text-brand-light-blue animate-spin" />
            <span className="text-xs font-mono font-bold text-brand-light-blue uppercase tracking-widest">
              Live Flow Simulator
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans text-white">
            Visualize Your Automatic Operations
          </h2>
          <p className="text-base text-gray-400 font-sans max-w-2xl mx-auto">
            Choose your profile below to see exactly how your lead-to-delivery workflows execute automatically, eliminating hours of daily manual admin.
          </p>
        </div>

        {/* Profile Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-16">
          {profiles.map((prof) => {
            const isSelected = activeProfile === prof.id;
            return (
              <button
                key={prof.id}
                onClick={() => setActiveProfile(prof.id)}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 relative cursor-pointer ${
                  isSelected
                    ? 'bg-brand-blue/30 border-brand-light-blue/80 shadow-lg glow-blue'
                    : 'bg-slate-900/40 border-white/5 hover:border-brand-blue/20 hover:bg-slate-900/70'
                }`}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`p-2 rounded-lg ${isSelected ? 'bg-brand-light-blue/20 text-brand-light-blue' : 'bg-white/5 text-gray-400'}`}>
                    <LucideIcon name={prof.icon} size={20} />
                  </div>
                  <span className="font-bold text-sm tracking-wide text-white">{prof.label}</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">{prof.desc}</p>
                {isSelected && (
                  <div className="absolute top-4 right-4 animate-pulse">
                    <Sparkles className="h-4 w-4 text-brand-light-blue" />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Blueprint Visual Node Connected Map */}
        <div className="bg-slate-950/80 rounded-2xl border border-brand-blue/20 p-8 lg:p-12 shadow-2xl relative">
          <div className="flex items-center justify-between pb-6 border-b border-white/5 mb-8 flex-wrap gap-4">
            <div className="flex items-center space-x-3">
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono text-gray-300 uppercase tracking-wider">
                System Integration Map: <strong className="text-brand-light-blue">{activeProfile}_pipeline.yaml</strong>
              </span>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              n8n Host: Connected
            </span>
          </div>

          {/* Connected Row Flow */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 xl:gap-8 relative items-center">
            <AnimatePresence mode="wait">
              {currentWorkflow.map((node, index) => {
                const isHovered = hoveredNode === node.id;
                
                // Colors based on types
                let typeBadge = '';
                let nodeBorder = 'border-white/5';
                let iconBg = 'bg-white/5 text-gray-400';
                
                if (node.type === 'trigger') {
                  typeBadge = 'Trigger Event';
                  nodeBorder = 'border-amber-500/30';
                  iconBg = 'bg-amber-500/10 text-amber-400';
                } else if (node.type === 'action') {
                  typeBadge = 'n8n Action';
                  nodeBorder = 'border-brand-light-blue/30';
                  iconBg = 'bg-brand-light-blue/10 text-brand-light-blue';
                } else if (node.type === 'condition') {
                  typeBadge = 'Router Conditional';
                  nodeBorder = 'border-purple-500/30';
                  iconBg = 'bg-purple-500/10 text-purple-400';
                } else if (node.type === 'complete') {
                  typeBadge = 'Goal Achieved';
                  nodeBorder = 'border-emerald-500/30';
                  iconBg = 'bg-emerald-500/10 text-emerald-400';
                }

                return (
                  <React.Fragment key={node.id}>
                    {/* Node Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.25, delay: index * 0.05 }}
                      onMouseEnter={() => setHoveredNode(node.id)}
                      onMouseLeave={() => setHoveredNode(null)}
                      className={`relative z-10 p-5 rounded-xl bg-slate-900/60 border ${
                        isHovered 
                          ? 'border-brand-light-blue bg-slate-900 shadow-lg scale-102 transition-all duration-150' 
                          : `${nodeBorder} transition-all duration-200`
                      }`}
                    >
                      {/* Step Indicator */}
                      <span className="absolute -top-3 left-4 text-[10px] font-mono bg-slate-950 px-2 py-0.5 rounded border border-white/10 text-gray-400">
                        STEP 0{index + 1}
                      </span>

                      {/* Header Block */}
                      <div className="flex items-center space-x-3 mb-3 pt-1">
                        <div className={`p-2 rounded-lg ${iconBg}`}>
                          <LucideIcon name={node.icon} size={18} />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-gray-400 block uppercase">
                            {typeBadge}
                          </span>
                          <h4 className="text-sm font-bold text-white tracking-tight">{node.label}</h4>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {node.description}
                      </p>

                      {/* Spark glow overlay on hover */}
                      {isHovered && (
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-light-blue/5 to-transparent pointer-events-none" />
                      )}
                    </motion.div>

                    {/* Connector arrow (hide on last item and display block on web) */}
                    {index < 4 && (
                      <div className="hidden lg:flex justify-center items-center text-gray-600">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ repeat: Infinity, duration: 2, delay: index * 0.3 }}
                        >
                          <ArrowRight className="h-5 w-5 text-brand-light-blue/40" />
                        </motion.div>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </AnimatePresence>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-brand-blue/10 p-5 rounded-xl border border-brand-blue/20">
            <div>
              <span className="text-xs font-mono text-brand-light-blue font-bold uppercase tracking-widest block">
                CLIENT-SIDE IMPACT SUCCESS
              </span>
              <p className="text-sm text-gray-300 font-sans mt-0.5">
                {activeProfile === 'photographer' && 'Eliminates 12+ manual booking steps. Client gets immediate calendar booking and welcome documentation upon Stripe invoice clearance.'}
                {activeProfile === 'coach' && 'Automates intake vetting entirely using custom AI filters, sorting inquiries by intent. Kick-off kits sent without human involvement.'}
                {activeProfile === 'service' && 'Coordinates Notion workspaces, legal agreements, and direct welcome notifications without double entries.'}
              </p>
            </div>
            <div className="px-4 py-2 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono flex items-center space-x-2 shrink-0">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Saves ~15 Hours/Wk</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveWorkflow;
