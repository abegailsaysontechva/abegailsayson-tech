import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import ToolsAndPlatforms from './components/ToolsAndPlatforms';
import Testimonials from './components/Testimonials';
import BookingScheduler from './components/BookingScheduler';
import ContactForm from './components/ContactForm';
import MouseFollower from './components/MouseFollower';
import { BookingSubmission, FormSubmission } from './types';
import { CheckCircle } from 'lucide-react';

export default function App() {
  const emailContact = "abegailsaysontechva@gmail.com";
  
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

  // Load from localStorage on mount
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

  // Update navbar section based on scrolling position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['services', 'portfolio', 'process', 'testimonials', 'contact'];
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
  }, []);

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
    
    triggerToast(`📅 Discovery session booked successfully! synced with lead tracker database.`);
  };

  const handleInquirySuccess = (newInquiry: FormSubmission) => {
    const updatedInquiries = [newInquiry, ...inquiries];
    setInquiries(updatedInquiries);
    localStorage.setItem('abegails_inquiries', JSON.stringify(updatedInquiries));
    
    triggerToast(`📬 Inbound webhook logged successfully! Dispatch signal fired to admin.`);
  };

  const handleClearAllLocalData = () => {
    setBookings([]);
    setInquiries([]);
    localStorage.removeItem('abegails_bookings');
    localStorage.removeItem('abegails_inquiries');
    triggerToast(`🧹 Checked out! Active session database flushed successfully.`);
  };

  // Scroll handler tool
  const scrollSectionToView = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`theme-${theme} bg-slate-950 min-h-screen smooth-scroll overflow-x-hidden selection:bg-brand-accent selection:text-white relative transition-colors duration-300`}>
      
      {/* Global Moving Wavy Vibrant Orange Background Sheets */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#040815] transition-colors duration-300" />
        
        {/* Floating Dynamic SVG Waves */}
        <svg
          className="absolute inset-x-0 bottom-0 w-full h-[85%] opacity-20 md:opacity-25"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="globalWaveOrangeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f37021" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ff5a00" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="globalWaveOrangeGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff5a00" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#e04e00" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="globalWaveOrangeGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff9f59" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#f37021" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          <path
            className="animate-wave1"
            fill="url(#globalWaveOrangeGrad1)"
            d="M0,220 Q360,120 720,220 T1440,220 L1440,600 L0,600 Z"
          />
          
          <path
            className="animate-wave2"
            fill="url(#globalWaveOrangeGrad2)"
            d="M0,280 Q360,360 720,280 T1440,280 L1440,600 L0,600 Z"
          />

          <path
            className="animate-wave3"
            fill="url(#globalWaveOrangeGrad3)"
            d="M0,350 Q360,250 720,350 T1440,350 L1440,600 L0,600 Z"
          />
        </svg>

        {/* Ambient glowing orange blurs drifting */}
        <div className="absolute top-[5%] right-[5%] w-[55%] h-[55%] rounded-full bg-brand-accent/15 blur-[140px] animate-driftSlow" />
        <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#ff5a00]/12 blur-[170px] animate-driftFast" />
        <div className="absolute top-[45%] left-[25%] w-[40%] h-[40%] rounded-full bg-brand-accent/8 blur-[150px] animate-driftSlow" />
      </div>

      {/* Dynamic Toast Success Notification overlay */}
      {toastMessage && (
        <div className="fixed top-24 right-4 z-50 bg-emerald-950 text-white border border-emerald-500/30 px-5 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 max-w-sm flex items-start space-x-3 text-sm font-sans animate-slideIn">
          <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5 animate-pulse" />
          <div className="space-y-1">
            <span className="font-bold text-white block">Operation Triggered</span>
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
      />

      {/* Main Container Sections */}
      <main>
        
        {/* Banner Segment */}
        <Hero
          onBookCallClick={() => scrollSectionToView('contact')}
          onViewWorkClick={() => scrollSectionToView('portfolio')}
        />

        {/* Custom interactive services section */}
        <Services onServiceSelect={(id) => scrollSectionToView('contact')} />

        {/* Personalized Bio Intro */}
        <About />

        {/* Case histories case-studies columns */}
        <Portfolio />

        {/* My Process section with integrated CTA */}
        <Process onBookCallClick={() => scrollSectionToView('contact')} />

        {/* Core tools and platforms used in automation with movable parallax background */}
        <ToolsAndPlatforms />

        {/* Client validation cards */}
        <Testimonials />

        {/* Integrated Booking Scheduler and Form Action Hub */}
        <section id="contact" className="py-24 bg-transparent text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
            
            {/* Section Header */}
            <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center space-x-2 bg-brand-accent/20 border border-brand-accent/30 rounded-full px-3 py-1">
                <span className="text-xs font-mono font-bold text-brand-accent uppercase tracking-wider">
                  Conversion Hub
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Let's Build Smarter Systems Together
              </h2>
              <p className="text-base text-gray-300 max-w-2xl mx-auto">
                Select your preferred route below. Fast-track operations by booking a slot on Abegail's interactive calendar, or dispatch your requirements instantly using our webform.
              </p>
            </div>

            {/* Parallel actions grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
              
              {/* Option 1: Calendar booking */}
              <div className="lg:col-span-6 flex flex-col justify-start">
                <div className="space-y-4 mb-6 lg:min-h-[144px]">
                  <span className="text-xs font-bold font-mono text-brand-accent bg-brand-accent/20 px-2.5 py-1 rounded-full uppercase border border-brand-accent/30 animate-pulse">
                    🥇 Preferred Option
                  </span>
                  <p className="font-sans font-extrabold text-xl text-white tracking-tight leading-snug">
                    Schedule a 25-Min Setup Audit
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed font-sans font-normal">
                    Let’s analyze your repetitive workflow pain points face-to-face. Secure an available consultation slot on Abegail's synchronized calendar widget to your right.
                  </p>
                </div>
                <BookingScheduler onBookingSuccess={handleBookingSuccess} />
              </div>

              {/* Option 2: Contact form webhook */}
              <div className="lg:col-span-6 flex flex-col justify-start">
                <div className="space-y-4 mb-6 lg:min-h-[144px]">
                  <span className="text-xs font-bold font-mono text-gray-400 bg-white/5 px-2.5 py-1 rounded-full uppercase border border-white/10">
                    🥈 Email Option
                  </span>
                  <p className="font-sans font-extrabold text-xl text-white tracking-tight leading-snug">
                    Drop Your Operational Requirements
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed font-sans font-normal">
                    Rather message first? Input your business sector, describe the administrative bottlenecks wasting your team's energy, and dispatch them directly in seconds.
                  </p>
                </div>
                <ContactForm onSubmittingSuccess={handleInquirySuccess} emailContact={emailContact} />
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* Foot footnotes container */}
      <footer className="bg-brand-dark text-white border-t border-white/5 pb-8 relative z-10 footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Header
            onBookCallClick={() => scrollSectionToView('contact')}
            activeNavSection={activeNavSection}
            setActiveNavSection={setActiveNavSection}
            theme={theme}
            toggleTheme={toggleTheme}
          />
          
          <div className="pt-2">
            <p className="text-[12px] text-gray-500 font-mono text-center leading-normal">
              © {new Date().getFullYear()} Abegail Sayson | AI Automation Specialist. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <MouseFollower />

    </div>
  );
}
