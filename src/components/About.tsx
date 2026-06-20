import React from 'react';
import { Database, Zap, Cpu, Sparkles, MessageSquare, Terminal, FileText, ExternalLink, Shield, Send, CheckCircle2, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  const tools = [
    { name: 'n8n.io', category: 'Workflow engine', desc: 'Powerful local & cloud visual node builder.', rating: 5, color: 'bg-[#ff6c37]/10 text-[#ff6c37]' },
    { name: 'Make & Zapier', category: 'SaaS Connectors', desc: 'Rapid prototyping and scalable webhook loops.', rating: 5, color: 'bg-indigo-500/10 text-indigo-400' },
    { name: 'Gemini & OpenAI', category: 'AI Integrations', desc: 'Intelligent sentiment categorization & auto-briefings.', rating: 5, color: 'bg-emerald-500/10 text-emerald-400' },
    { name: 'HubSpot & ActiveCampaign', category: 'CRM Architecture', desc: 'Single-source pipeline trackers & custom lead routing.', rating: 5, color: 'bg-[#ff7a59]/10 text-[#ff7a59]' },
    { name: 'Airtable / Notion', category: 'Relational DBs', desc: 'Structured customer listings & live audit history.', rating: 5, color: 'bg-blue-500/10 text-blue-400' },
    { name: 'Typeform / Tally', category: 'Intake Engines', desc: 'Interactive, high-converting customer onboarding forms.', rating: 5, color: 'bg-teal-500/10 text-teal-400' }
  ];

  return (
    <section id="about" className="py-24 bg-transparent text-gray-105 overflow-hidden relative border-t border-white/5">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-blue/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[35%] h-[35%] rounded-full bg-brand-accent/5 blur-[120px] pointer-events-none" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-blue/20 border border-brand-blue/40 rounded-full px-3 py-1">
            <span className="text-xs font-mono font-bold text-brand-light-blue uppercase tracking-wider">
              Meet Your Specialist
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none">
            Meet Abegail
          </h2>
          <p className="text-base text-gray-400 max-w-2xl font-normal leading-relaxed">
            Professional Automation Specialist, CRM Integrator, and Technical Virtual Assistant dedicated to eliminating administrative chaos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Profile Photo, Metrics and Credentials */}
          <div className="lg:col-span-5 space-y-8 col-span-1">
            {/* Elegant Floating Photo Container with exact original image */}
            <motion.div 
              className="relative group max-w-sm mx-auto lg:max-w-none"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Outer decorative glowing ring/shadow (CSS glow effect) */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-brand-accent/35 via-brand-light-blue/20 to-brand-blue/40 opacity-40 blur-xl group-hover:opacity-70 transition duration-500 pointer-events-none" />
              
              {/* Actual Profile Image Container with CSS styled shadows/borders and hover effects */}
              <div className="relative rounded-2xl overflow-hidden border border-brand-blue/30 shadow-[0_0_30px_rgba(30,64,175,0.25)] bg-slate-950 aspect-[3/4] z-10 transition-all duration-500 group-hover:shadow-[0_0_45px_rgba(249,115,22,0.3)] group-hover:border-brand-accent/40">
                <img
                  src="https://res.cloudinary.com/dwwqbsiom/image/upload/f_auto,q_auto/Image_156_vxpdi6"
                  alt="Abegail - Automation Specialist"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                
                {/* Image overlay badge */}
                <div className="absolute bottom-4 left-4 bg-slate-950/95 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-brand-blue/35 text-white flex items-center space-x-2 z-20 shadow-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] font-mono font-bold tracking-wider uppercase text-emerald-400">READY_FOR_SYNC</span>
                </div>
              </div>

              {/* HUD Decorative Labels connecting floating metrics (100% outer effects) */}
              <div className="absolute -left-12 top-[15%] z-20 hidden lg:flex items-center select-none group-hover:translate-x-1 transition-transform duration-300">
                <div className="bg-slate-950/95 backdrop-blur-md border border-brand-light-blue/40 rounded-xl p-2.5 shadow-[0_0_15px_rgba(30,64,175,0.35)] text-left min-w-[145px]">
                  <span className="text-[8px] text-brand-light-blue font-mono font-bold tracking-widest block uppercase mb-0.5">CORE_PROFILE</span>
                  <span className="text-xs text-white font-extrabold block">Specialist Sayson</span>
                  <div className="h-0.5 w-8 bg-brand-light-blue/60 mt-1 rounded"></div>
                </div>
                <div className="flex items-center">
                  <div className="h-[1px] w-10 bg-gradient-to-r from-brand-light-blue/60 to-transparent"></div>
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-light-blue animate-ping -ml-1.5" />
                </div>
              </div>

              <div className="absolute -right-12 top-[40%] z-20 hidden lg:flex items-center select-none group-hover:-translate-x-1 transition-transform duration-300">
                <div className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-accent animate-ping -mr-1.5 z-30" />
                  <div className="h-[1px] w-12 bg-gradient-to-l from-brand-accent/60 to-transparent"></div>
                </div>
                <div className="bg-slate-950/95 backdrop-blur-md border border-brand-accent/40 rounded-xl p-2.5 shadow-[0_0_15px_rgba(249,115,22,0.35)] text-left min-w-[145px]">
                  <span className="text-[8px] text-brand-accent font-mono font-bold tracking-widest block uppercase mb-0.5">ENGINE</span>
                  <span className="text-xs text-white font-extrabold block">n8n & HubSpot VM</span>
                  <div className="h-0.5 w-12 bg-brand-accent/60 mt-1 rounded"></div>
                </div>
              </div>
            </motion.div>
            {/* Countdown-Style Metrics Grid (Matching countdown counters layout) */}
            <div className="grid grid-cols-4 gap-2.5 pt-2 max-w-sm mx-auto lg:max-w-none select-none">
              <div className="bg-slate-900/60 backdrop-blur-sm border border-brand-blue/30 rounded-xl p-3 text-center shadow-[0_0_15px_rgba(30,64,175,0.15)] hover:border-brand-light-blue/50 transition-all duration-300">
                <span className="block font-mono text-xl sm:text-2xl font-black text-brand-light-blue leading-none">99.9%</span>
                <span className="block text-[8px] sm:text-[9.5px] text-gray-400 font-mono tracking-wider font-bold uppercase mt-1">Uptime SLA</span>
              </div>
              <div className="bg-slate-900/60 backdrop-blur-sm border border-brand-blue/30 rounded-xl p-3 text-center shadow-[0_0_15px_rgba(30,64,175,0.15)] hover:border-brand-light-blue/50 transition-all duration-300">
                <span className="block font-mono text-xl sm:text-2xl font-black text-brand-accent leading-none">100+</span>
                <span className="block text-[8px] sm:text-[9.5px] text-gray-400 font-mono tracking-wider font-bold uppercase mt-1">Pipelines</span>
              </div>
              <div className="bg-slate-900/60 backdrop-blur-sm border border-brand-blue/30 rounded-xl p-3 text-center shadow-[0_0_15px_rgba(30,64,175,0.15)] hover:border-brand-light-blue/50 transition-all duration-300">
                <span className="block font-mono text-xl sm:text-2xl font-black text-emerald-400 leading-none">300h+</span>
                <span className="block text-[8px] sm:text-[9.5px] text-gray-400 font-mono tracking-wider font-bold uppercase mt-1">Saved / Mo</span>
              </div>
              <div className="bg-slate-900/60 backdrop-blur-sm border border-brand-blue/30 rounded-xl p-3 text-center shadow-[0_0_15px_rgba(30,64,175,0.15)] hover:border-brand-light-blue/50 transition-all duration-300">
                <span className="block font-mono text-xl sm:text-2xl font-black text-white leading-none">24/7</span>
                <span className="block text-[8px] sm:text-[9.5px] text-gray-400 font-mono tracking-wider font-bold uppercase mt-1">Active AI</span>
              </div>
            </div>

            {/* LinkedIn connection card */}
            <div className="bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-brand-blue/20 p-6 shadow-xl hover:border-brand-light-blue/30 transition-all space-y-4">
              <div className="flex items-center space-x-3 text-brand-light-blue">
                <Linkedin className="h-6 w-6 text-brand-accent" />
                <h3 className="font-extrabold text-lg text-white tracking-tight">LinkedIn Profile</h3>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed font-normal font-sans">
                Connect with me on LinkedIn to follow my updates on AI automation workflows, CRM integration strategies, and scalable administrative pipelines.
              </p>
              
              <a
                href="https://www.linkedin.com/in/abegail-s-797302202/"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-between px-5 py-3.5 rounded-xl bg-brand-accent text-white hover:bg-brand-accent/90 font-bold text-sm shadow-md shadow-brand-accent/10 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <div className="flex items-center space-x-2">
                  <Linkedin className="h-4 w-4" />
                  <span>Let's Connect</span>
                </div>
                <ExternalLink className="h-4 w-4 opacity-80" />
              </a>
            </div>
          </div>

          {/* Right Column: Bio Copy & Technical Modules */}
          <div className="lg:col-span-7 space-y-8 text-white">
            <div className="space-y-6 text-base text-gray-300 leading-relaxed font-sans font-normal">
              <p className="text-lg text-white font-semibold">
                "I solve administrative bottlenecks. Let's build automated pathways that coordinate your tech-stack, validate leads, and win you back hundreds of hours."
              </p>
              <p>
                As a highly seasoned <strong className="text-brand-light-blue font-bold">Automation Architect & Technical VA</strong>, I bridge the expensive gap between messy software subscription silos and seamless operational efficiency. Whether you are an elite business coach, a wedding photographer running on tight schedules, or a fast-scaling marketing agency, manual task repetitions are silently capping your absolute growth.
              </p>
              <p>
                By engineering reliable digital logic loops using <strong className="text-brand-light-blue font-bold">n8n, Make/Zapier pipelines, customized HubSpot CRMs, relational Airtables,</strong> and <strong className="text-brand-light-blue font-bold">Google Gemini AI integration</strong>, I transform chaotic schedules into fully self-healing business pipelines. 
              </p>
            </div>

            {/* Custom accomplishments check list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-2.5 p-3 rounded-lg bg-slate-900/60 border border-brand-blue/30 backdrop-blur-sm">
                <CheckCircle2 className="h-5 w-5 text-brand-light-blue shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">No-Code Engineering</h4>
                  <p className="text-[11px] text-gray-400">Node-to-node webhook structures that scale with ease.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2.5 p-3 rounded-lg bg-slate-900/60 border border-brand-blue/30 backdrop-blur-sm">
                <CheckCircle2 className="h-5 w-5 text-brand-light-blue shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">AI-Driven Summaries</h4>
                  <p className="text-[11px] text-gray-400">Gemini models configured directly inside your Slack or CRM.</p>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 p-3 rounded-lg bg-slate-900/60 border border-brand-blue/30 backdrop-blur-sm">
                <CheckCircle2 className="h-5 w-5 text-brand-light-blue shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">CRM Pipeline Design</h4>
                  <p className="text-[11px] text-gray-400">Complete tracking modules from inbound hit to signing contracts.</p>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 p-3 rounded-lg bg-slate-900/60 border border-brand-blue/30 backdrop-blur-sm">
                <CheckCircle2 className="h-5 w-5 text-brand-light-blue shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">Zero Subscription Bloat</h4>
                  <p className="text-[11px] text-gray-400">Cost-focused architectures that maximize standard allowances.</p>
                </div>
              </div>
            </div>

            {/* Technical Tool Modules panel */}
            <div className="bg-brand-dark rounded-2xl p-6 text-white shadow-xl space-y-4 border border-brand-blue/30 mt-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div className="flex items-center space-x-2">
                  <Terminal className="h-5 w-5 text-brand-accent/90" />
                  <span className="text-xs font-mono text-gray-300">abegail_stack_modules.json</span>
                </div>
                <span className="text-[10px] bg-brand-accent/20 text-brand-accent px-2 py-0.5 rounded font-mono font-bold uppercase tracking-wider">
                  Verified Active
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {tools.map((tool, idx) => (
                  <div 
                    key={idx} 
                    className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-brand-blue/30 transition-all duration-200 hover:bg-white/10"
                  >
                    <div className="flex justify-between items-start">
                      <span className={`text-[9px] font-bold uppercase tracking-wider font-mono px-2 py-0.5 rounded ${tool.color}`}>
                        {tool.name}
                      </span>
                    </div>
                    <h4 className="text-xs font-bold mt-2 text-white">{tool.category}</h4>
                    <p className="text-[10px] text-gray-400 mt-0.5 leading-snug">
                      {tool.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
