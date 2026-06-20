import React from 'react';
import { Terminal, Mail, Github, Linkedin, Twitter, ArrowUp, Send } from 'lucide-react';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
  emailContact: string;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, emailContact }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Case Studies' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-white/5 relative z-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Info & Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2.5 group cursor-pointer select-none" onClick={handleScrollTop}>
              {/* Logo Symbol */}
              <div className="relative">
                <div className="absolute inset-0 bg-brand-light-blue/20 rounded-lg blur-md group-hover:bg-brand-light-blue/40 transition-all duration-300"></div>
                <div className="relative h-9 w-9 rounded-lg bg-slate-950 border border-brand-blue/30 flex flex-col items-center justify-center text-white shadow-lg overflow-hidden group-hover:border-brand-light-blue/50 transition-colors duration-300">
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-brand-light-blue/10 to-transparent"></div>
                  <Terminal className="h-4 w-4 text-brand-light-blue group-hover:text-brand-accent transition-colors duration-300 z-10" />
                  <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-brand-blue via-brand-light-blue to-emerald-400"></div>
                </div>
              </div>
              {/* Logo Text */}
              <div className="flex flex-col">
                <div className="flex items-center space-x-1 sm:space-x-1.5 leading-none">
                  <span className="font-mono text-brand-light-blue/60 font-semibold text-[10px] tracking-tight">&lt;</span>
                  <span className="font-sans font-black text-sm sm:text-base tracking-tight text-white group-hover:text-brand-light-blue transition-colors duration-200">
                    Abegail<span className="text-brand-accent">.</span>Sayson
                  </span>
                  <span className="font-mono text-brand-light-blue/60 font-semibold text-[10px] tracking-tight">/&gt;</span>
                </div>
                <div className="flex items-center space-x-1 mt-0.5">
                  <span className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse"></span>
                  <p className="text-[7.5px] text-gray-400 font-mono tracking-widest uppercase font-bold">
                    Automation Specialist
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-xs text-gray-400 leading-relaxed font-sans font-normal max-w-xs">
              Systems engineer and workflow architect helping coaches, photographers, and service agencies eliminate repetitive operations.
            </p>

            <div className="flex space-x-3 pt-2">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 bg-white/5 hover:bg-brand-blue/30 text-gray-400 hover:text-white rounded-lg border border-white/5 hover:border-brand-blue/30 transition-all">
                <Linkedin size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 bg-white/5 hover:bg-brand-blue/30 text-gray-400 hover:text-white rounded-lg border border-white/5 hover:border-brand-blue/30 transition-all">
                <Twitter size={16} />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 bg-white/5 hover:bg-brand-blue/30 text-gray-400 hover:text-white rounded-lg border border-white/5 hover:border-brand-blue/30 transition-all">
                <Github size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-light-blue">
              Navigation Jumps
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavClick(link.id)}
                  className="text-xs text-gray-400 hover:text-brand-light-blue text-left transition-colors duration-150 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Contact details */}
          <div className="space-y-4 md:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-light-blue">
              Reach Out Directly
            </h4>
            <div className="space-y-3">
              <a
                href={`mailto:${emailContact}`}
                className="flex items-center space-x-2.5 text-xs text-gray-400 hover:text-brand-light-blue transition-colors group"
              >
                <div className="p-1.5 rounded bg-white/5 border border-white/5 text-gray-400 group-hover:text-brand-light-blue shrink-0">
                  <Mail size={13} />
                </div>
                <span>{emailContact}</span>
              </a>

              <div className="text-xs text-gray-400 flex items-start space-x-2.5">
                <div className="p-1.5 rounded bg-white/5 border border-white/5 text-gray-400 shrink-0">
                  <Send size={13} />
                </div>
                <div>
                  <p>Client Intake Hours: 09:00 AM - 05:00 PM (MNL)</p>
                  <p className="text-[10px] text-gray-500 mt-1">Available for retainer contracts & custom n8n setups worldwide.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Foot border panel */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-mono">
          <p>© {currentYear} Abegail S. All rights reserved. Built with modern React & Tailwind.</p>
          
          <button
            onClick={handleScrollTop}
            className="flex items-center space-x-1 hover:text-white transition-colors py-1 px-2 rounded hover:bg-white/5 cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp size={12} className="animate-bounce" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
