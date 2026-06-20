import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  onBookCallClick: () => void;
  activeNavSection: string;
  setActiveNavSection: (section: string) => void;
  theme?: 'dark' | 'light';
  toggleTheme?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onBookCallClick,
  activeNavSection,
  setActiveNavSection,
  theme = 'dark',
  toggleTheme
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'process', label: 'My Process' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    setActiveNavSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="main-nav-bar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/98 border-b border-brand-accent/25 shadow-lg'
          : 'bg-slate-950/90 border-b border-brand-accent/10 backdrop-blur-sm'
      }`}
    >
      {/* Main High Contrast Navigation Layer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center cursor-pointer group select-none"
          >
            {/* Logo Text - Restoring Name Abegail Sayson */}
            <div className="flex flex-col">
              <div className="flex items-center space-x-1 sm:space-x-1.5 leading-none">
                <span className="font-sans font-black text-base sm:text-lg tracking-tight text-white group-hover:text-brand-accent transition-colors duration-200 flex items-center">
                  Abegail Sayson
                  <span className="inline-block w-1.5 h-3.5 bg-brand-accent ml-1 animate-blink rounded-2xs opacity-80" />
                </span>
              </div>
              <div className="flex items-center space-x-1 mt-0.5">
                <p className="text-[8px] sm:text-[9px] text-gray-450 font-mono tracking-widest uppercase font-bold">
                  SAYSON SYSTEMS // AUTOMATION & AI
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation & Actions beside each other */}
          <div className="hidden lg:flex items-center space-x-4">
            <nav className="flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeNavSection === item.id
                      ? 'text-brand-light-blue bg-brand-blue/20 shadow-sm border border-brand-blue/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Dark & Light Toggle Switch widget */}
            {toggleTheme && (
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2.5 rounded-lg border border-white/10 hover:border-brand-accent/40 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all cursor-pointer flex items-center justify-center shadow"
                aria-label="Toggle dark and light theme"
                title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {theme === 'dark' ? (
                  <Sun className="h-4.5 w-4.5 text-amber-500 animate-pulse" />
                ) : (
                  <Moon className="h-4.5 w-4.5 text-indigo-400" />
                )}
              </button>
            )}

            <button
              id="header-cta-book"
              onClick={onBookCallClick}
              className="px-5 py-2.5 rounded-lg bg-brand-accent hover:bg-brand-accent/90 text-white text-sm font-semibold shadow-md transition-all duration-150 transform hover:-translate-y-0.5 border border-brand-accent/20 cursor-pointer whitespace-nowrap"
            >
              Let's Connect
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-1.5 lg:hidden">
            {toggleTheme && (
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-lg border border-white/10 hover:border-brand-accent/40 bg-white/5 text-gray-300 hover:text-white transition-all cursor-pointer flex items-center justify-center shadow"
                aria-label="Toggle dark and light theme"
                title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {theme === 'dark' ? (
                  <Sun className="h-4.5 w-4.5 text-amber-500 animate-pulse" />
                ) : (
                  <Moon className="h-4.5 w-4.5 text-indigo-400" />
                )}
              </button>
            )}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/5 focus:outline-none border border-white/10 shadow"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-brand-dark/98 border-b border-brand-blue/30 backdrop-blur-lg animate-fadeIn">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-md text-base font-medium transition-all duration-200 ${
                  activeNavSection === item.id
                    ? 'text-brand-light-blue bg-brand-blue/20 border-l-4 border-brand-light-blue'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col space-y-3 px-4">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookCallClick();
                }}
                className="w-full py-3 px-4 rounded-lg bg-brand-accent hover:bg-brand-accent/90 text-white transition-all duration-200 text-center text-sm font-bold shadow-md"
              >
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
