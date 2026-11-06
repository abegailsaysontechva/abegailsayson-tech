import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Camera, Zap, CheckCircle2, Workflow, Database, Mail, Calendar } from 'lucide-react';

interface HeroProps {
  onBookCallClick: () => void;
  onViewWorkClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookCallClick, onViewWorkClick }) => {
  const phrase = "Inquiry. Booked. Paid. Delivered.";
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(85);

  useEffect(() => {
    const handleType = () => {
      if (!isDeleting) {
        setTypedText(phrase.substring(0, typedText.length + 1));
        setTypingSpeed(75);

        if (typedText === phrase) {
          setIsDeleting(true);
          setTypingSpeed(2600); // pause at completion
        }
      } else {
        setTypedText(phrase.substring(0, typedText.length - 1));
        setTypingSpeed(35);

        if (typedText === "") {
          setIsDeleting(false);
          setTypingSpeed(500); // pause before retyping
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, typingSpeed]);

  return (
    <section className="relative min-h-[92vh] bg-transparent pt-32 pb-20 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Typing, Description & CTAs */}
          <div className="lg:col-span-7 space-y-7 animate-fadeIn text-left flex flex-col items-start w-full">
            
            {/* Eyebrow Label */}
            <div className="inline-flex items-center space-x-2 bg-cyan-950/60 border border-cyan-500/30 rounded-full px-3.5 py-1.5 shadow-sm backdrop-blur-md">
              <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[11px] sm:text-xs font-mono font-bold text-cyan-300 tracking-wider uppercase">
                AI AUTOMATION SPECIALIST
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3 w-full">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl text-white font-sans font-extrabold tracking-tight leading-[1.12] text-balance">
                Turn Your Photography Website{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-brand-accent to-amber-300">
                  Into a Booking Machine
                </span>
              </h1>
              
              {/* Supporting Headline / Typing line */}
              <div className="min-h-[1.75em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-emerald-400 font-mono text-base sm:text-xl lg:text-2xl font-semibold flex items-center">
                <span className="text-cyan-400 mr-2 font-bold">&gt;</span>
                <span>{typedText}</span>
                <span className="inline-block w-2.5 h-4 sm:h-5 bg-cyan-400 ml-1.5 animate-blink relative top-0.5" />
              </div>
              
              {/* Description */}
              <p className="text-base sm:text-lg text-slate-200 max-w-2xl font-sans font-normal leading-relaxed pt-1">
                I build websites and automation systems for photographers and studios—from lead management and booking workflows to client follow-ups. Spend more time shooting and less time managing admin.
              </p>
            </div>

            {/* Action buttons: Primary CTA & Secondary CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={onViewWorkClick}
                className="group w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-xl bg-brand-accent hover:bg-orange-500 text-white text-base font-bold shadow-lg shadow-black/40 border border-white/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer text-center"
              >
                <span>Explore My Automation Projects</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform shrink-0" />
              </button>

              <button
                type="button"
                onClick={onBookCallClick}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white text-base font-semibold border border-white/20 hover:border-cyan-400/50 transition-all duration-200 cursor-pointer text-center"
              >
                <span>Work With Me</span>
              </button>
            </div>

            {/* Quick Trust Highlights */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-white/10 max-w-xl w-full">
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">8+</span>
                <span className="text-[10px] sm:text-xs text-slate-300 font-mono font-bold tracking-wider mt-1 uppercase">
                  Steps Automated
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-sans tracking-tight">&lt; 3 min</span>
                <span className="text-[10px] sm:text-xs text-slate-300 font-mono font-bold tracking-wider mt-1 uppercase">
                  Lead Reply Time
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-orange-400 font-sans tracking-tight">100%</span>
                <span className="text-[10px] sm:text-xs text-slate-300 font-mono font-bold tracking-wider mt-1 uppercase">
                  Data Ownership
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Photography Camera Visual + Workflow Automation Graphics */}
          <div className="lg:col-span-5 relative w-full flex justify-center items-center">
            
            {/* Ambient Cyan Glow */}
            <div className="absolute -inset-4 bg-cyan-500/15 rounded-3xl blur-3xl pointer-events-none" />

            {/* Main Interactive Interactive Graphic Card */}
            <div className="relative w-full max-w-md rounded-3xl card-glass border border-white/15 p-6 sm:p-7 shadow-2xl backdrop-blur-xl space-y-5">
              
              {/* Header of graphic */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center space-x-2.5">
                  <div className="p-2 rounded-xl bg-orange-500/20 border border-orange-500/30 text-orange-400">
                    <Camera className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-white block">Studio Automation Pipeline</span>
                    <span className="text-[10px] font-mono text-cyan-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                      Live Trigger Routing
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/10 text-slate-300">
                  v2.6
                </span>
              </div>

              {/* Graphic Flow Nodes */}
              <div className="space-y-2.5 relative">
                
                {/* Connecting glowing cyan line */}
                <div className="absolute left-5 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-400 via-sky-500 to-orange-400/80 -z-0 opacity-60" />

                {/* Node 1 */}
                <div className="relative z-10 flex items-center space-x-3 p-3 rounded-xl bg-slate-900/80 border border-cyan-500/30 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white truncate">Website Inquiry Received</span>
                      <span className="text-[9px] font-mono text-cyan-300 bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-500/30">Trigger</span>
                    </div>
                    <p className="text-[11px] text-slate-400 truncate">Date, venue &amp; package selected</p>
                  </div>
                </div>

                {/* Node 2 */}
                <div className="relative z-10 flex items-center space-x-3 p-3 rounded-xl bg-slate-900/80 border border-white/10 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 text-slate-200 flex items-center justify-center shrink-0">
                    <Database className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white truncate">Logged to Notion / CRM</span>
                      <span className="text-[9px] font-mono text-slate-300 bg-white/5 px-1.5 py-0.5 rounded border border-white/10">0.8s</span>
                    </div>
                    <p className="text-[11px] text-slate-400 truncate">Contact tagged &amp; assigned stage</p>
                  </div>
                </div>

                {/* Node 3 */}
                <div className="relative z-10 flex items-center space-x-3 p-3 rounded-xl bg-slate-900/80 border border-white/10 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/40 text-orange-400 flex items-center justify-center shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white truncate">Instant Pricing Guide Sent</span>
                      <span className="text-[9px] font-mono text-orange-400 bg-orange-950/60 px-1.5 py-0.5 rounded border border-orange-500/30">Auto</span>
                    </div>
                    <p className="text-[11px] text-slate-400 truncate">Personalized welcome + PDF delivered</p>
                  </div>
                </div>

                {/* Node 4 */}
                <div className="relative z-10 flex items-center space-x-3 p-3 rounded-xl bg-slate-900/80 border border-emerald-500/30 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white truncate">Consultation Booked</span>
                      <span className="text-[9px] font-mono text-emerald-300 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/30">Synced</span>
                    </div>
                    <p className="text-[11px] text-slate-400 truncate">Calendar invitation &amp; prep guide</p>
                  </div>
                </div>

              </div>

              {/* Bottom status badge */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Workflow className="w-3.5 h-3.5 text-cyan-400" />
                  End-to-End Orchestration
                </span>
                <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% Automated
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
