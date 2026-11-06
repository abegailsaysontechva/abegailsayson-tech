import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import ToolsAndPlatforms from './components/ToolsAndPlatforms';
import BookingScheduler from './components/BookingScheduler';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import MouseFollower from './components/MouseFollower';
import SEOHead from './components/SEOHead';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import CaseStudyPage from './pages/CaseStudyPage';
import { BookingSubmission, FormSubmission } from './types';
import { CheckCircle } from 'lucide-react';
import { CaseStudy } from './data/caseStudiesData';

export default function App() {
  const emailContact = "abegailsaysontechva@gmail.com";
  
  // Navigation / Routing State
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  // State variables for dynamic data interactions
  const [activeNavSection, setActiveNavSection] = useState('services');
  const [bookings, setBookings] = useState<BookingSubmission[]>([]);
  const [inquiries, setInquiries] = useState<FormSubmission[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Theme support state (persistent in localStorage)
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const savedTheme = localStorage.getItem('abegails_theme');
      return (savedTheme === 'dark' || savedTheme === 'light') ? savedTheme : 'dark';
    } catch {
      return 'dark';
    }
  });

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem('abegails_theme', next);
      } catch (e) {
        console.error("Failed to persist theme setting", e);
      }
      return next;
    });
  };

  // Listen to browser navigation popstate (Back/Forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Programmatic Navigate function
  const navigate = (path: string) => {
    // Check if target is an anchor on the homepage, e.g. '/#contact'
    if (path.includes('#')) {
      const [route, hash] = path.split('#');
      const targetRoute = route || '/';
      if (window.location.pathname !== targetRoute) {
        window.history.pushState({}, '', path);
        setCurrentPath(targetRoute);
      }
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Load bookings/inquiries from localStorage on mount
  useEffect(() => {
    try {
      const savedBookings = localStorage.getItem('abegails_bookings');
      const savedInquiries = localStorage.getItem('abegails_inquiries');
      if (savedBookings) setBookings(JSON.parse(savedBookings));
      if (savedInquiries) setInquiries(JSON.parse(savedInquiries));
    } catch (e) {
      console.error("Local storage lookup failed", e);
    }
  }, []);

  // Update navbar section based on scrolling position when on homepage
  useEffect(() => {
    if (currentPath !== '/') return;

    const handleScroll = () => {
      const sections = ['services', 'about', 'demos', 'process', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveNavSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPath]);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleBookingSuccess = (newBooking: BookingSubmission) => {
    const updatedBookings = [newBooking, ...bookings];
    setBookings(updatedBookings);
    localStorage.setItem('abegails_bookings', JSON.stringify(updatedBookings));
    triggerToast(`📅 Discovery session booked successfully! Synced with lead tracker.`);
  };

  const handleInquirySuccess = (newInquiry: FormSubmission) => {
    const updatedInquiries = [newInquiry, ...inquiries];
    setInquiries(updatedInquiries);
    localStorage.setItem('abegails_inquiries', JSON.stringify(updatedInquiries));
    triggerToast(`📬 Message submitted successfully! Reply scheduled within 24 hours.`);
  };

  // Scroll handler tool
  const scrollSectionToView = (id: string) => {
    if (currentPath !== '/') {
      navigate(`/#${id}`);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Route matching helpers
  const isCaseStudyRoute = currentPath.startsWith('/case-study/');
  const caseStudySlug = isCaseStudyRoute ? currentPath.replace('/case-study/', '').replace(/\/$/, '') : null;

  const isBlogRoute = currentPath.startsWith('/blog');
  const blogSlug = currentPath.startsWith('/blog/') ? currentPath.replace('/blog/', '').replace(/\/$/, '') : null;

  return (
    <div id="top" className={`theme-${theme} min-h-screen smooth-scroll overflow-x-hidden selection:bg-brand-accent selection:text-white relative transition-colors duration-300`}>
      
      {/* Homepage SEO & Schemas */}
      {currentPath === '/' && (
        <SEOHead
          title="Abegail Sayson Tech | AI Automation Specialist for Photographers"
          description="I build practical automation systems that help photographers manage leads, streamline bookings, automate client follow-ups, and reduce repetitive administrative tasks."
          canonicalPath="/"
          schemaData={{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is photography business automation?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Photography business automation connects your website, inquiry forms, email, calendar, and CRM so repetitive tasks run automatically. It handles instant replies, pricing delivery, consultation scheduling, contract signing, and invoice reminders without manual intervention.'
                }
              },
              {
                '@type': 'Question',
                name: 'How can photographers automate client inquiries?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'By connecting your website inquiry form to a workflow engine (such as n8n or Make). When a lead submits a form, the system immediately logs their details into your CRM, dispatches a personalized welcome email with your investment guide, and sends you an instant mobile alert.'
                }
              },
              {
                '@type': 'Question',
                name: 'Can a photography website automatically manage booking inquiries?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. A booking funnel website qualifies the client’s date and budget upfront, presents relevant packages, delivers your pricing guide, and offers a direct calendar scheduler for a consultation call—moving leads from discovery to booked automatically.'
                }
              },
              {
                '@type': 'Question',
                name: 'What is a photography CRM workflow?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A photography CRM workflow is a centralized pipeline (in Notion, GoHighLevel, or HubSpot) that tracks every client through structured stages: New Inquiry, Pricing Sent, Consultation Booked, Contract Signed, Retainer Paid, Session Shot, Gallery Delivered, and Review Received.'
                }
              },
              {
                '@type': 'Question',
                name: 'How can photographers automate client follow-ups?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Through timed delay nodes in your automation pipeline. If an inquiry receives your pricing guide but does not schedule a consultation within 48 hours, a friendly, personalized follow-up is triggered automatically, recovering warm leads without manual effort.'
                }
              },
              {
                '@type': 'Question',
                name: 'Can automation help photography studios manage bookings?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolutely. Automation coordinates the entire onboarding sequence: sending digital contracts for e-signature, generating Stripe deposit invoices, collecting pre-session questionnaires, and dispatching wardrobe guides and location reminders.'
                }
              },
              {
                '@type': 'Question',
                name: 'What automation services does Abegail Sayson Tech offer?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Abegail Sayson Tech builds photography lead management systems, CRM automation, booking funnels, automated follow-up sequences, client onboarding pipelines, gallery delivery review engines, and custom workflow architectures.'
                }
              },
              {
                '@type': 'Question',
                name: 'Who owns the system?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'You do. Your website, accounts, automations, and client data are set up under your own logins, and I hand over full access when the project is complete. If we stop working together, everything keeps running.'
                }
              }
            ]
          }}
        />
      )}

      {/* Single Fixed Background Layer for the Whole Page */}
      {theme !== 'light' && (
        <div
          id="site-bg"
          aria-hidden="true"
          style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none' }}
        >
          <svg
            viewBox="0 0 1440 900"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <linearGradient id="bgBlue" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#0A2A6B" />
                <stop offset="1" stopColor="#050B24" />
              </linearGradient>
              <linearGradient id="bgOrange" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0" stopColor="#F97316" />
                <stop offset="0.55" stopColor="#C2410C" />
                <stop offset="1" stopColor="#7F1D1D" />
              </linearGradient>
              <radialGradient id="bgGlow" cx="70%" cy="10%" r="45%">
                <stop offset="0" stopColor="#2DB7F5" stopOpacity="0.40" />
                <stop offset="1" stopColor="#2DB7F5" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1440" height="900" fill="url(#bgBlue)" />
            <rect width="1440" height="900" fill="url(#bgGlow)" />
            <path
              className="opacity-[0.55] md:opacity-[0.7]"
              d="M0 830 C 500 770, 920 650, 1440 270 L1440 900 L0 900 Z"
              fill="url(#bgOrange)"
            />
            <path
              d="M0 830 C 500 770, 920 650, 1440 270"
              fill="none"
              stroke="rgba(255,255,255,0.16)"
              strokeWidth="3"
            />
          </svg>

          {/* Desktop Fixed Overlay */}
          <div
            className="hidden md:block absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(5,8,22,0.55) 0%, rgba(5,8,22,0.60) 50%, rgba(5,8,22,0.75) 100%)',
            }}
          />

          {/* Mobile Fixed Overlay */}
          <div
            className="block md:hidden absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(5,8,22,0.65) 0%, rgba(5,8,22,0.70) 50%, rgba(5,8,22,0.85) 100%)',
            }}
          />
        </div>
      )}

      {/* Dynamic Toast Success Notification overlay */}
      {toastMessage && (
        <div className="fixed top-24 right-4 z-50 bg-emerald-950 text-white border border-emerald-500/30 px-5 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 max-w-sm flex items-start space-x-3 text-sm font-sans animate-slideIn">
          <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5 animate-pulse" />
          <div className="space-y-1">
            <span className="font-bold text-white block">Status Updated</span>
            <p className="text-xs text-gray-300 leading-normal">{toastMessage}</p>
          </div>
        </div>
      )}

      {/* Navigation Sticky Bar */}
      <Header
        onBookCallClick={() => scrollSectionToView('contact')}
        activeNavSection={activeNavSection}
        setActiveNavSection={setActiveNavSection}
        theme={theme}
        toggleTheme={toggleTheme}
        currentPath={currentPath}
        onNavigate={navigate}
      />

      {/* Main Container Content */}
      <main>
        {/* Route 1: About Page */}
        {currentPath === '/about-abegail-sayson' && (
          <AboutPage 
            onNavigate={navigate} 
            onBookCallClick={() => scrollSectionToView('contact')} 
          />
        )}

        {/* Route 2: Photography Automation Services Page */}
        {currentPath === '/photography-automation' && (
          <ServicesPage 
            onNavigate={navigate} 
            onBookCallClick={() => scrollSectionToView('contact')} 
          />
        )}

        {/* Route 3: Portfolio & Case Studies Page */}
        {currentPath === '/portfolio' && (
          <PortfolioPage 
            onNavigate={navigate} 
            onBookCallClick={() => scrollSectionToView('contact')} 
          />
        )}

        {/* Route 4: Dedicated Case Study Page */}
        {isCaseStudyRoute && caseStudySlug && (
          <CaseStudyPage 
            studyId={caseStudySlug} 
            onNavigate={navigate} 
            onBookCallClick={() => scrollSectionToView('contact')} 
          />
        )}

        {/* Route 5: Blog & Article Page */}
        {isBlogRoute && (
          <BlogPage 
            currentSlug={blogSlug} 
            onNavigate={navigate} 
            onBookCallClick={() => scrollSectionToView('contact')} 
          />
        )}

        {/* Route 6: Homepage (Default) */}
        {currentPath === '/' && (
          <>
            {/* Hero Section */}
            <Hero
              onBookCallClick={() => scrollSectionToView('contact')}
              onViewWorkClick={() => navigate('/portfolio')}
            />

            {/* Custom Interactive Services Section */}
            <Services onServiceSelect={() => scrollSectionToView('contact')} />

            {/* Editorial Bio Intro */}
            <About />

            {/* Portfolio / Demo Funnels */}
            <Portfolio 
              onOpenCaseStudy={(study: CaseStudy) => navigate(`/case-study/${study.slug}`)}
              onBookCallClick={() => scrollSectionToView('contact')}
            />

            {/* How It Works & Process section with comprehensive FAQs */}
            <Process onBookCallClick={() => scrollSectionToView('contact')} />

            {/* Tools & Platforms Strip */}
            <ToolsAndPlatforms />

            {/* Contact & Conversion Section */}
            <section id="contact" className="py-24 bg-transparent text-white relative section-scrim">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
                
                {/* Section Header */}
                <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
                  <div className="inline-flex items-center space-x-2 bg-brand-accent/15 border border-brand-accent/30 rounded-full px-3.5 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                    <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider">
                      LET&apos;S TALK
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
                    Let&apos;s Automate Your Photography Workflow
                  </h2>
                  <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-sans">
                    Have repetitive tasks, scattered inquiries, or a booking process that needs improvement? Let&apos;s explore a practical automation solution for your business.
                  </p>
                </div>

                {/* What happens next 3 numbered mini-steps */}
                <div className="max-w-5xl mx-auto mb-14">
                  <div className="text-center mb-5">
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                      What happens next
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl card-glass flex items-start gap-3.5">
                      <div className="w-7 h-7 rounded-full bg-brand-accent/15 border border-brand-accent/40 text-brand-accent font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        1
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white">You reach out</h3>
                        <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                          Book a time or send the form.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl card-glass flex items-start gap-3.5">
                      <div className="w-7 h-7 rounded-full bg-brand-accent/15 border border-brand-accent/40 text-brand-accent font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        2
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white">I review your studio</h3>
                        <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                          I look at your website, inquiry form, and follow-up process before we talk.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl card-glass flex items-start gap-3.5">
                      <div className="w-7 h-7 rounded-full bg-brand-accent/15 border border-brand-accent/40 text-brand-accent font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        3
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white">You get a plan</h3>
                        <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                          Three quick wins and a recommended package, with no obligation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Two-column layout (calendar first, form second) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
                  
                  {/* LEFT card: Calendar booking */}
                  <div className="lg:col-span-6 flex flex-col h-full">
                    <BookingScheduler onBookingSuccess={handleBookingSuccess} />
                  </div>

                  {/* RIGHT card: Contact form webhook */}
                  <div className="lg:col-span-6 flex flex-col h-full">
                    <ContactForm onSubmittingSuccess={handleInquirySuccess} emailContact={emailContact} />
                  </div>

                </div>

              </div>
            </section>
          </>
        )}
      </main>

      {/* Global Footer */}
      <Footer 
        onNavClick={scrollSectionToView} 
        onNavigate={navigate}
      />

      <MouseFollower />

    </div>
  );
}
