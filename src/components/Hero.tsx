import React, { useState, useEffect } from 'react';
import { ArrowRight, Hourglass, ShieldCheck, Sparkles, Play } from 'lucide-react';

interface HeroProps {
  onBookCallClick: () => void;
  onViewWorkClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookCallClick, onViewWorkClick }) => {
  const phrases = [
    "Save Time. Scale Faster.",
    "Eliminate Manual Overhead.",
    "Deploy Autonomous Workflows.",
    "Maximize Efficiency & Revenue."
  ];
  const [currentPhraseIdx, setCurrentPhraseIdx] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const activePhrase = phrases[currentPhraseIdx];
    
    const handleType = () => {
      if (!isDeleting) {
        setTypedText(activePhrase.substring(0, typedText.length + 1));
        setTypingSpeed(80);

        if (typedText === activePhrase) {
          setIsDeleting(true);
          setTypingSpeed(2200); // pause
        }
      } else {
        setTypedText(activePhrase.substring(0, typedText.length - 1));
        setTypingSpeed(35);

        if (typedText === "") {
          setIsDeleting(false);
          setCurrentPhraseIdx((prev) => (prev + 1) % phrases.length);
          setTypingSpeed(450);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentPhraseIdx, typingSpeed]);

  return (
    <section className="relative min-h-screen bg-transparent pt-28 pb-20 flex items-center overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center justify-center">
          
          {/* Centered Content Column */}
          <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn text-center flex flex-col items-center">
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-sans font-extrabold tracking-tight leading-tight select-none">
                Turn Manual Business Operations Into Automated Systems{' '}
                <span className="block mt-2 min-h-[1.5em] text-transparent bg-clip-text bg-gradient-to-r from-brand-light-blue via-[#38bdf8] to-emerald-400 font-mono text-lg sm:text-xl lg:text-2xl font-semibold">
                  <span className="text-brand-light-blue">&gt; </span>
                  {typedText}
                  <span className="inline-block w-2.5 h-5 bg-brand-light-blue ml-2 animate-blink text-brand-light-blue relative top-0.5"></span>
                </span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-lg text-gray-300 max-w-2xl mx-auto font-sans font-normal leading-relaxed">
                Small businesses, photographers, coaches, and service-based brands streamline leads, bookings, and workflows using AI-powered automation, CRM systems, and no-code solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={onBookCallClick}
                className="group inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-brand-accent hover:bg-brand-accent/90 text-white text-base font-bold shadow-lg shadow-brand-accent/20 hover:scale-[1.02] hover:glow-accent active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>Book a Free Automation Audit</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onViewWorkClick}
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white text-base font-semibold border border-white/10 hover:border-brand-accent/40 transition-all duration-200 cursor-pointer"
              >
                <span>View My Work</span>
              </button>
            </div>

            {/* Fast Value Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5 max-w-xl mx-auto w-full">
              <div className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-sans">99.9%</span>
                <span className="text-xs text-gray-400 font-mono mt-1">LOGIC UPTIME</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-sans">15h+</span>
                <span className="text-xs text-gray-400 font-mono mt-1">SAVED / WK / CLIENT</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-sans">0</span>
                <span className="text-xs text-gray-400 font-mono mt-1">MOCK WORKFLOWS</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
