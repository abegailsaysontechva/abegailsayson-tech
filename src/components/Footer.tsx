import React from 'react';
import { Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavClick?: (sectionId: string) => void;
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onNavigate }) => {
  const navLinks = [
    { label: 'Services', path: '/photography-automation', sectionId: 'services' },
    { label: 'About', path: '/about-abegail-sayson', sectionId: 'about' },
    { label: 'Portfolio', path: '/portfolio', sectionId: 'demos' },
    { label: 'How It Works', path: '/', sectionId: 'process' },
    { label: 'Blog', path: '/blog', sectionId: null },
    { label: 'Contact', path: '/#contact', sectionId: 'contact' }
  ];

  const handleLinkClick = (item: typeof navLinks[0], e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      if (item.sectionId && window.location.pathname === '/') {
        if (onNavClick) onNavClick(item.sectionId);
      } else {
        onNavigate(item.path);
      }
    } else if (onNavClick && item.sectionId) {
      onNavClick(item.sectionId);
    }
  };

  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.location.pathname !== '/' && onNavigate) {
      onNavigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[rgba(5,8,22,0.85)] backdrop-blur-md text-white pt-16 pb-10 border-t border-white/[0.08] relative z-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 items-start">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4 text-center md:text-left">
            <a href="#top" onClick={handleScrollTop} className="inline-block cursor-pointer select-none" aria-label="Abegail Sayson - Automation Services">
              <img
                src="/logo-horizontal-white.png"
                alt="Abegail Sayson - Automation Services"
                className="h-[40px] w-auto max-h-[40px] object-contain transition-opacity hover:opacity-90"
                height={40}
              />
            </a>
            <p className="text-sm text-gray-300 max-w-sm leading-relaxed font-sans">
              AI Automation Specialist for Photographers &amp; Small Businesses. I build practical systems that handle leads, streamline bookings, and automate client follow-ups.
            </p>
            <div className="text-xs font-mono text-cyan-400">
              Inquiry. Booked. Paid. Delivered.
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3 text-center md:text-left">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
              Navigation
            </span>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.path}
                  onClick={(e) => handleLinkClick(item, e)}
                  className="text-sm text-gray-300 hover:text-brand-accent transition-colors py-1 cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Icons & Location */}
          <div className="md:col-span-3 space-y-3 flex flex-col items-center md:items-start">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
              Connect
            </span>
            <div className="flex items-center space-x-3">
              <a
                href="https://www.linkedin.com/in/abegail-s-797302202/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-accent/40 text-gray-300 hover:text-brand-accent transition-all cursor-pointer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/abegailsaysontechva/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-accent/40 text-gray-300 hover:text-brand-accent transition-all cursor-pointer"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-slate-400 pt-1">
              Direct inquiries: <a href="mailto:abegailsaysontechva@gmail.com" className="text-cyan-400 hover:underline">abegailsaysontechva@gmail.com</a>
            </p>
          </div>

        </div>

        {/* Bottom line */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs text-gray-400 font-sans tracking-wide">
            © 2026 Abegail Sayson Tech · Based in the Philippines, working with photographers worldwide.
          </p>
          <div className="text-[11px] font-mono text-slate-500">
            AI Automation Specialist for Photographers &amp; Small Businesses
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
