import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  onBookCallClick: () => void;
  activeNavSection: string;
  setActiveNavSection: (section: string) => void;
  theme?: 'dark' | 'light';
  toggleTheme?: () => void;
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onBookCallClick,
  activeNavSection,
  setActiveNavSection,
  theme = 'dark',
  toggleTheme,
  currentPath = '/',
  onNavigate
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const logoSrc = theme === 'light' ? '/logo-horizontal-color.png' : '/logo-horizontal-white.png';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'services', label: 'Services', path: '/photography-automation', sectionId: 'services' },
    { id: 'about', label: 'About', path: '/about-abegail-sayson', sectionId: 'about' },
    { id: 'demos', label: 'Demos', path: '/portfolio', sectionId: 'demos' },
    { id: 'process', label: 'How It Works', path: '/', sectionId: 'process' },
    { id: 'blog', label: 'Blog', path: '/blog', sectionId: null },
    { id: 'contact', label: 'Contact', path: '/', sectionId: 'contact' }
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    setIsMobileMenuOpen(false);

    // If clicking Blog
    if (item.id === 'blog') {
      if (onNavigate) {
        onNavigate('/blog');
      }
      return;
    }

    // If currently on homepage, smooth-scroll to section
    if (currentPath === '/') {
      if (item.sectionId) {
        setActiveNavSection(item.sectionId);
        const element = document.getElementById(item.sectionId);
        if (element) {
          const offset = 90;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          return;
        }
      }
    }

    // If on a subpage or item has dedicated path, route appropriately
    if (onNavigate) {
      if (item.sectionId === 'contact') {
        onNavigate('/#contact');
      } else {
        onNavigate(item.path);
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentPath === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (onNavigate) {
      onNavigate('/');
    }
  };

  return (
    <header
      id="main-nav-bar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[rgba(5,8,22,0.92)] border-b border-white/[0.08] backdrop-blur-md shadow-lg'
          : 'bg-[rgba(5,8,22,0.78)] border-b border-white/[0.06] backdrop-blur-md'
      }`}
    >
      {/* Main Navigation Layer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#top"
            onClick={handleLogoClick}
            className="flex items-center cursor-pointer select-none py-1 mr-4 lg:mr-8"
            aria-label="Abegail Sayson - Automation Services"
          >
            <img
              src={logoSrc}
              alt="Abegail Sayson - Automation Services"
              className="h-[36px] md:h-[44px] w-auto max-h-[44px] object-contain transition-opacity hover:opacity-90"
              height={44}
            />
          </a>

          {/* Desktop Navigation & Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <nav className="flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = (currentPath === '/' && activeNavSection === item.id) ||
                  (item.path !== '/' && currentPath.startsWith(item.path));

                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'text-orange-400 bg-brand-accent/15 shadow-sm border border-brand-accent/30'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Dark & Light Toggle Switch */}
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
              className="px-5 py-2.5 rounded-lg bg-brand-accent hover:bg-orange-500 text-white text-sm font-semibold shadow-md transition-all duration-150 transform hover:-translate-y-0.5 border border-brand-accent/20 cursor-pointer whitespace-nowrap"
            >
              Free Studio Audit
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
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/5 focus:outline-none border border-white/10 shadow cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[rgba(5,8,22,0.98)] border-b border-brand-blue/30 backdrop-blur-lg animate-fadeIn">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`block w-full text-left px-4 py-3 rounded-md text-base font-medium transition-all duration-200 cursor-pointer ${
                  (currentPath === '/' && activeNavSection === item.id) ||
                  (item.path !== '/' && currentPath.startsWith(item.path))
                    ? 'text-orange-400 bg-brand-accent/15 border-l-4 border-brand-accent'
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
                className="w-full py-3 px-4 rounded-lg bg-brand-accent hover:bg-orange-500 text-white transition-all duration-200 text-center text-sm font-bold shadow-md cursor-pointer"
              >
                Free Studio Audit
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
