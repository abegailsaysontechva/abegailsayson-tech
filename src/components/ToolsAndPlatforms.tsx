import React, { useState, useEffect, useRef } from 'react';
import { 
  Cpu, Database, Sparkles, FileText, Zap, Layers, 
  AppWindow, Network, HelpCircle, Activity, ChevronRight, Info
} from 'lucide-react';

interface Tool {
  name: string;
  category: string;
  description: string;
  accentColor: string; // Tailwind color class for highlights
  darkBg: string; // Tailwind card highlight bg
  glowColor: string; // Hex color or drop shadow color style
  iconName: string; // Matching LucideIcon
  proficiency: string; // e.g. "Core Expert", "Advanced Integration"
}

export const ToolsAndPlatforms: React.FC = () => {
  // Capture coordinates relative to the section center to move/offset the background
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  // Active highlighted tool shown in the Dynamic Detail Panel below the marquee
  const [selectedToolName, setSelectedToolName] = useState<string>('n8n.io');

  // Handle section mouse movement for parallax offset
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    
    // Calculate distance from center (-1 to 1)
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const dx = (e.clientX - centerX) / (rect.width / 2);
    const dy = (e.clientY - centerY) / (rect.height / 2);
    
    // Cap to prevent excessive movement
    const cappedX = Math.min(Math.max(dx, -1), 1);
    const cappedY = Math.min(Math.max(dy, -1), 1);

    setMouseOffset({ x: cappedX, y: cappedY });
  };

  // Reset offset when mouse leaves section to drift back to equilibrium gracefully
  const handleMouseLeave = () => {
    const interval = setInterval(() => {
      setMouseOffset(prev => {
        if (Math.abs(prev.x) < 0.05 && Math.abs(prev.y) < 0.05) {
          clearInterval(interval);
          return { x: 0, y: 0 };
        }
        return {
          x: prev.x * 0.75,
          y: prev.y * 0.75
        };
      });
    }, 16);
  };

  const tools: Tool[] = [
    {
      name: 'n8n.io',
      category: 'Automation & Integration',
      description: 'The ultimate engine for workflow automation. Perfect for host-and-build complex, multi-branch logical setups, webhook triggers, API handshakes, and database synchronization without platform limitations.',
      accentColor: 'text-[#ff6c37]',
      darkBg: 'bg-[#ff6c37]/5 border-[#ff6c37]/20 shadow-[0_0_15px_rgba(255,108,55,0.1)]',
      glowColor: 'rgba(255,108,55,0.4)',
      iconName: 'Cpu',
      proficiency: 'Elite Specialist'
    },
    {
      name: 'Make.com',
      category: 'Automation & Integration',
      description: 'Advanced visual multi-branch databases, routers, filters, delays, and custom API connections. Extremely fast for building parallel branches for high-volume corporate clients.',
      accentColor: 'text-purple-400',
      darkBg: 'bg-purple-950/10 border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.1)]',
      glowColor: 'rgba(168,85,247,0.4)',
      iconName: 'Layers',
      proficiency: 'Advanced Partner'
    },
    {
      name: 'Zapier',
      category: 'Automation & Integration',
      description: 'Connects standard business software instantly. Specializes in building sub-zaps, automated schedules, instant alerts, multi-stage delays, and simple conditional loops.',
      accentColor: 'text-amber-500',
      darkBg: 'bg-amber-950/10 border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]',
      glowColor: 'rgba(245,158,11,0.4)',
      iconName: 'Zap',
      proficiency: 'Power Expert'
    },
    {
      name: 'Custom APIs & Webhooks',
      category: 'Automation & Integration',
      description: 'When off-the-shelf connectors fall short, I build pure JSON handshake pathways. Designed with token security, payload validation, and sub-second latency.',
      accentColor: 'text-emerald-400',
      darkBg: 'bg-emerald-950/10 border-emerald-500/20 shadow-[0_0_15px_rgba(52,211,153,0.1)]',
      glowColor: 'rgba(52,211,153,0.4)',
      iconName: 'Network',
      proficiency: 'Bespoke API Dev'
    },
    {
      name: 'HubSpot CRM',
      category: 'CRM & Data',
      description: 'Enterprise pipeline management. Automatic lead lifecycle stage tracking, custom ticket workflows, status-based team dispatches, and trigger-fired email delivery pipelines.',
      accentColor: 'text-[#ff7a59]',
      darkBg: 'bg-[#ff7a59]/5 border-[#ff7a59]/20 shadow-[0_0_15px_rgba(255,122,89,0.1)]',
      glowColor: 'rgba(255,122,89,0.4)',
      iconName: 'Database',
      proficiency: 'Complex Pipelines'
    },
    {
      name: 'Notion CRM',
      category: 'CRM & Data',
      description: 'Elegant custom client portal hubs, unified workspaces, database relation layouts, clean client task records, and self-updating meeting logs.',
      accentColor: 'text-sky-400',
      darkBg: 'bg-sky-950/10 border-sky-500/20 shadow-[0_0_15px_rgba(56,189,248,0.1)]',
      glowColor: 'rgba(56,189,248,0.4)',
      iconName: 'Database',
      proficiency: 'Custom Architecture'
    },
    {
      name: 'Airtable',
      category: 'CRM & Data',
      description: 'Robust back-end database structures. Features heavy relational layouts, rollup scripts, dynamic formulas, and intuitive operational tracking grids for agencies.',
      accentColor: 'text-blue-400',
      darkBg: 'bg-blue-950/10 border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]',
      glowColor: 'rgba(59,130,246,0.4)',
      iconName: 'Database',
      proficiency: 'Relational Design'
    },
    {
      name: 'ActiveCampaign',
      category: 'CRM & Data',
      description: 'Smart customer nurture tracks. List tags, subscriber segmentation models, interactive engagement paths, and conditional drip timelines.',
      accentColor: 'text-indigo-400',
      darkBg: 'bg-indigo-950/10 border-indigo-500/20 shadow-[0_0_15px_rgba(129,140,248,0.1)]',
      glowColor: 'rgba(129,140,248,0.4)',
      iconName: 'Database',
      proficiency: 'Automation Sync'
    },
    {
      name: 'Google Gemini API',
      category: 'AI & Core Engines',
      description: 'Generative reasoning engine. Leveraged server-side for text sorting, tone classification, customer sentiment analysis, document renaming, and file filtering.',
      accentColor: 'text-cyan-400',
      darkBg: 'bg-cyan-950/10 border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.1)]',
      glowColor: 'rgba(34,211,238,0.4)',
      iconName: 'Sparkles',
      proficiency: 'Core LLM Engine'
    },
    {
      name: 'OpenAI GPT-4',
      category: 'AI & Core Engines',
      description: 'Custom prompting, structured JSON schema outputs, inbound lead qualification summary tasks, and generating tailored follow-ups based on form queries.',
      accentColor: 'text-teal-400',
      darkBg: 'bg-teal-950/10 border-teal-500/20 shadow-[0_0_15px_rgba(20,184,166,0.1)]',
      glowColor: 'rgba(20,184,166,0.4)',
      iconName: 'Sparkles',
      proficiency: 'System Prompting'
    },
    {
      name: 'Youform',
      category: 'Forms & Messaging',
      description: 'Gorgeous modern form collection, direct custom webhooks, instant automated notification channels, and client onboarding questionnaire intake streams.',
      accentColor: 'text-[#6366f1]',
      darkBg: 'bg-indigo-950/10 border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.1)]',
      glowColor: 'rgba(99,102,241,0.4)',
      iconName: 'FileText',
      proficiency: 'Form Ingestion'
    },
    {
      name: 'Tally & Typeform',
      category: 'Forms & Messaging',
      description: 'Conversational, intuitive application flows and questions equipped with advanced condition-logic paths to segment applicants or qualify inbound quotes.',
      accentColor: 'text-pink-400',
      darkBg: 'bg-pink-950/10 border-pink-500/20 shadow-[0_0_15px_rgba(244,114,182,0.1)]',
      glowColor: 'rgba(244,114,182,0.4)',
      iconName: 'FileText',
      proficiency: 'Data Capture'
    },
    {
      name: 'Slack API Sync',
      category: 'Forms & Messaging',
      description: 'Keeps team communication aligned perfectly. Instant real-time alerts on deals closed, high-priority issues, system monitoring, and action-demanding items.',
      accentColor: 'text-violet-400',
      darkBg: 'bg-violet-950/10 border-violet-500/20 shadow-[0_0_15px_rgba(139,92,246,0.1)]',
      glowColor: 'rgba(139,92,246,0.4)',
      iconName: 'AppWindow',
      proficiency: 'Operations Alerts'
    }
  ];

  // Selected tool object
  const activeTool = tools.find(t => t.name === selectedToolName) || tools[0];

  // Helper to render matched Lucide Icons
  const renderToolIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className={className} />;
      case 'Layers': return <Layers className={className} />;
      case 'Zap': return <Zap className={className} />;
      case 'Network': return <Network className={className} />;
      case 'Database': return <Database className={className} />;
      case 'Sparkles': return <Sparkles className={className} />;
      case 'FileText': return <FileText className={className} />;
      case 'AppWindow': return <AppWindow className={className} />;
      default: return <HelpCircle className={className} />;
    }
  };

  // Multiple passes of the tools list for a seamless horizontal marquee.
  const marqueeItems = [...tools, ...tools, ...tools];

  // Parallax layers styling
  const backgroundShiftLevel1 = {
    transform: `translate3d(${mouseOffset.x * -18}px, ${mouseOffset.y * -18}px, 0)`,
    transition: 'transform 0.25s cubic-bezier(0.25, 1, 0.5, 1)'
  };

  const backgroundShiftLevel2 = {
    transform: `translate3d(${mouseOffset.x * 25}px, ${mouseOffset.y * 25}px, 0)`,
    transition: 'transform 0.25s cubic-bezier(0.25, 1, 0.5, 1)'
  };

  const backgroundShiftLevel3 = {
    transform: `translate3d(${mouseOffset.x * -35}px, ${mouseOffset.y * -35}px, 0)`,
    transition: 'transform 0.25s cubic-bezier(0.25, 1, 0.5, 1)'
  };

  return (
    <section
      id="tools-and-platforms"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="py-24 bg-transparent text-white border-b border-white/5 relative overflow-hidden select-none"
    >
      
      {/* ========================================================================= */}
      {/* 1. KEYFRAME ANIMATION INJECTION */}
      {/* ========================================================================= */}
      <style>{`
        @keyframes marqueeScrollLeft {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333333%, 0, 0);
          }
        }
        .marquee-track-container {
          overflow: hidden;
          width: 100%;
          position: relative;
        }
        .marquee-track-flow {
          display: flex;
          align-items: center;
          width: max-content;
          animation: marqueeScrollLeft 34s linear infinite;
        }
        .marquee-track-flow:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* ========================================================================= */}
      {/* 2. 3D PARALLAX MOVABLE INTERACTIVE BACKGROUND */}
      {/* ========================================================================= */}
      
      {/* Layer 1: Digital Blueprint Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-screen"
        style={backgroundShiftLevel1}
      >
        <div 
          className="w-[125%] h-[125%] -left-[12%] -top-[12%] absolute bg-repeat" 
          style={{ 
            backgroundImage: `radial-gradient(circle, rgba(29, 78, 216, 0.6) 1.5px, transparent 1.5px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      {/* Layer 2: Glowing Color Orbs */}
      <div 
        className="absolute inset-0 pointer-events-none overflow-hidden" 
        style={backgroundShiftLevel2}
      >
        <div className="absolute top-1/4 -left-24 w-96 h-96 rounded-full bg-brand-blue/15 blur-[120px] transition-transform duration-1000" />
        <div className="absolute bottom-12 -right-24 w-80 h-80 rounded-full bg-brand-accent/10 blur-[105px] transition-transform duration-1000" />
      </div>

      {/* Layer 3: Tech Grid Connectivity Lines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25 hidden md:block" 
        style={backgroundShiftLevel3}
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="8%" y1="15%" x2="22%" y2="38%" stroke="rgba(30, 64, 175, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="22%" y1="38%" x2="15%" y2="70%" stroke="rgba(30, 64, 175, 0.2)" strokeWidth="1" />
          <line x1="92%" y1="20%" x2="78%" y2="42%" stroke="rgba(249, 115, 22, 0.2)" strokeWidth="1" strokeDasharray="4 2" />
          <line x1="78%" y1="42%" x2="85%" y2="75%" stroke="rgba(30, 64, 175, 0.15)" strokeWidth="1" />
          
          <circle cx="8%" cy="15%" r="3.5" fill="#1e40af" className="animate-pulse" />
          <circle cx="22%" cy="38%" r="4" fill="#f97316" />
          <circle cx="15%" cy="70%" r="3" fill="#38bdf8" />
          <circle cx="92%" cy="20%" r="3" fill="#f97316" className="animate-pulse" />
          <circle cx="78%" cy="42%" r="4.5" fill="#a855f7" />
          <circle cx="85%" cy="75%" r="3.5" fill="#10b981" />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 3. MAIN INTERACTIVE CONTENT LAYOUT */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Title */}
        <div className="text-center md:text-left space-y-4 max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 bg-brand-accent/15 border border-brand-accent/35 rounded-full px-4 py-1.5 backdrop-blur-sm">
            <Activity className="h-4 w-4 text-brand-accent animate-spin-slow" />
            <span className="text-xs font-mono font-bold text-brand-accent uppercase tracking-widest">
              Automations Belt
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Tools & Platforms
          </h2>
          <p className="text-base text-gray-400">
            A real-time moving stream of the systems, API connectors, and AI models I leverage to make business processes friction-proof. <span className="text-white hover:text-brand-accent cursor-default transition-colors">Hover any icon to pause and explore its setup.</span>
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 4. INFINITE MOVING CONVEYOR BELT OF SMALL ICONS (Moving right to left!) */}
        {/* ========================================================================= */}
        <div className="w-full py-4 border-y border-white/5 bg-slate-950/40 backdrop-blur-sm rounded-xl mb-12 overflow-hidden relative">
          
          {/* Subtle fade-out gradients on both edges of the sliding strip */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

          <div className="marquee-track-container">
            <div className="marquee-track-flow">
              {marqueeItems.map((tool, index) => {
                const isSelected = selectedToolName === tool.name;
                
                return (
                  <button
                    key={`${tool.name}-${index}`}
                    onClick={() => setSelectedToolName(tool.name)}
                    className={`flex items-center space-x-2.5 mx-3 px-4 py-2.5 rounded-full border transition-all duration-300 cursor-pointer group shrink-0 ${
                      isSelected
                        ? 'bg-slate-900 text-white border-brand-accent border-solid shadow-[0_0_12px_rgba(249,115,22,0.35)] scale-102 font-bold'
                        : 'bg-slate-900/60 text-gray-300 hover:text-white border-white/5 hover:border-white/15'
                    }`}
                  >
                    {/* Tiny responsive glowing bullet indicator on active icon */}
                    <span className="relative flex h-2 w-2 shrink-0">
                      {isSelected && (
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                      )}
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${
                        isSelected ? 'bg-brand-accent' : 'bg-gray-700 group-hover:bg-gray-400 transition-colors'
                      }`}></span>
                    </span>

                    {/* Small Icon */}
                    {renderToolIcon(tool.iconName, `h-4.5 w-4.5 ${
                      isSelected ? tool.accentColor : 'text-gray-400 group-hover:text-white'
                    }`)}

                    {/* Tool Name Label */}
                    <span className="text-[12px] tracking-wide font-sans leading-none">
                      {tool.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. DYNAMIC INTERACTIVE DETAILS PANEL (Fades in on item select) */}
        {/* ========================================================================= */}
        <div className="max-w-4xl mx-auto">
          <div className={`p-8 rounded-2xl border transition-all duration-500 ease-out backdrop-blur-md relative overflow-hidden ${activeTool.darkBg}`}>
            
            {/* Soft decorative shadow gradient underlaying the cards */}
            <div 
              className="absolute -right-24 -bottom-24 w-60 h-60 rounded-full opacity-10 blur-[60px] pointer-events-none transition-all duration-500"
              style={{ backgroundColor: activeTool.glowColor }}
            />

            <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
              
              {/* Left Column: Icon Plate Assembly with floating animation */}
              <div className="flex flex-row md:flex-col items-center gap-4 shrink-0 w-full md:w-auto">
                <div className={`p-5 rounded-2xl bg-slate-900 border border-white/10 ${activeTool.accentColor} shadow-inner`}>
                  {renderToolIcon(activeTool.iconName, "h-10 w-10")}
                </div>
                
                <div className="flex flex-col md:items-center text-left md:text-center">
                  <span className="text-[9px] font-mono tracking-widest text-gray-500 uppercase">
                    PRO LEVEL
                  </span>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    {activeTool.proficiency}
                  </span>
                </div>
              </div>

              {/* Right Column: Full description text */}
              <div className="flex-1 space-y-4">
                
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-extrabold text-white tracking-tight">
                      {activeTool.name}
                    </h3>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-brand-accent inline-block mt-1">
                      {activeTool.category}
                    </span>
                  </div>
                  
                  {/* Status Label badge */}
                  <span className="inline-flex items-center space-x-1.5 bg-slate-900 border border-white/5 py-1 px-3 rounded-full text-[10px] text-gray-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Fully Automated setup</span>
                  </span>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed font-sans mt-2">
                  {activeTool.description}
                </p>

                {/* Micro metrics mock stats indicating standard latency of Abegail's pipelines */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/5 text-left">
                  <div>
                    <span className="block text-[9px] font-mono tracking-wider text-gray-500 uppercase">
                      AVERAGE LATENCY
                    </span>
                    <span className="text-sm font-extrabold text-white">
                      &lt; 1.5 seconds
                    </span>
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono tracking-wider text-gray-500 uppercase">
                      API UPTIME RATE
                    </span>
                    <span className="text-sm font-extrabold text-white">
                      99.98% Guaranteed
                    </span>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <span className="block text-[9px] font-mono tracking-wider text-gray-500 uppercase">
                      INTEGRATION PATTERN
                    </span>
                    <span className="text-sm font-extrabold text-white flex items-center gap-1">
                      Webhooks & REST <Network className="h-3.5 w-3.5 text-indigo-400" />
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
          
          {/* Quick interactive user prompt */}
          <div className="mt-8 flex items-center justify-center space-x-2 text-[11px] text-gray-500 font-mono">
            <Info className="h-4 w-4 text-brand-accent" />
            <span>Select/Click any small floating badge above to load its technical specification profile.</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ToolsAndPlatforms;
