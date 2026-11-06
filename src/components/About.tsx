import React from 'react';
import { Camera, HeartHandshake, ShieldCheck, ArrowRight, ExternalLink, Linkedin, Instagram } from 'lucide-react';

export const About: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-24 bg-transparent text-gray-100 overflow-hidden relative section-scrim">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Portrait Photo with Tasteful Subtle Tag */}
          <div className="lg:col-span-5 col-span-1 lg:sticky lg:top-[100px] flex flex-col items-center lg:items-start">
            <div className="relative w-full max-w-[320px] md:max-w-[400px] lg:max-w-[460px] mx-auto lg:mx-0 group">
              {/* Subtle Warm Glow Behind Photo */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-brand-accent/20 via-orange-500/10 to-transparent opacity-60 blur-xl group-hover:opacity-80 transition duration-500 pointer-events-none" />
              
              {/* Portrait Container */}
              <div className="relative rounded-2xl overflow-hidden border border-brand-accent/25 bg-slate-900 shadow-2xl aspect-[4/5] z-10">
                <img
                  src="https://res.cloudinary.com/dwwqbsiom/image/upload/f_auto,q_auto/Image_156_vxpdi6"
                  alt="Abegail - Photographer & Automation Specialist"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-[center_top] transition duration-500 group-hover:scale-[1.02]"
                />
                
                {/* Tasteful subtle tag near the photo (outlined pill) */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto z-20">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-slate-950/85 backdrop-blur-md text-[10.5px] sm:text-xs font-mono font-medium tracking-wider uppercase text-gray-200 shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                    <span>PHOTOGRAPHER · AUTOMATION SPECIALIST</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Bio, Pull Quote, Principles & Actions */}
          <div className="lg:col-span-7 col-span-1 space-y-7 text-white">
            
            {/* Small Label */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-brand-accent/15 border border-brand-accent/30 rounded-full px-3.5 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                <span className="text-xs font-mono font-bold text-orange-400 tracking-wider uppercase">
                  MEET ABEGAIL
                </span>
              </div>
            </div>

            {/* H2 Serif Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15]">
              A Photographer Who Builds Your Studio&apos;s Systems
            </h2>

            {/* Pull Quote (serif, italic, thin orange vertical line at left) */}
            <blockquote className="border-l-2 border-brand-accent pl-5 py-1.5 text-lg sm:text-xl font-serif italic text-gray-200 leading-relaxed">
              &ldquo;I know the client flow because I live it. Let me build the system so you can focus on the shoot.&rdquo;
            </blockquote>

            {/* Three Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
              <p>
                I&apos;m Abegail, a photographer and automation specialist. I know what it&apos;s like to juggle inquiries, quotes, bookings, edits, and deliveries, because I&apos;ve done it myself. I shoot weddings and portraits, and I&apos;ve been behind the camera for 5 years.
              </p>
              <p>
                That&apos;s why I focus on helping fellow photographers and studio owners. I understand the client journey from the first message to the final gallery, so I build systems that fit how photographers actually work, not generic business templates.
              </p>
              <p>
                I create booking funnels and automation that reply to inquiries, book sessions, send contracts, and follow up, all in your voice. I started building these systems after losing time and inquiries to manual admin myself. Based in the Philippines, I now help photographers and studios around the world get that time back.
              </p>
            </div>

            {/* Three Principle Items (icon, bold word, one line) */}
            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-brand-accent shrink-0 mt-0.5">
                  <Camera className="w-4 h-4" />
                </div>
                <div className="text-sm sm:text-base leading-snug">
                  <strong className="text-white font-semibold">Photographer-minded</strong>
                  <span className="text-gray-400"> — I understand your workflow because I&apos;ve lived it.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-brand-accent shrink-0 mt-0.5">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div className="text-sm sm:text-base leading-snug">
                  <strong className="text-white font-semibold">Personal</strong>
                  <span className="text-gray-400"> — Every message sounds like you, not a template.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-brand-accent shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-sm sm:text-base leading-snug">
                  <strong className="text-white font-semibold">Reliable</strong>
                  <span className="text-gray-400"> — Everything is tested end to end before it goes live.</span>
                </div>
              </div>
            </div>

            {/* Quiet Tools Line */}
            <div className="pt-3 pb-1 border-t border-white/10 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-400 font-sans">
              <span className="text-gray-500 font-mono text-[11px] uppercase tracking-wider font-semibold">Tools I work with:</span>
              <span className="text-gray-300">n8n, Make, Zapier, GoHighLevel, Notion, HubSpot, Stripe, Google Workspace</span>
            </div>

            {/* Action Row: Primary Button & Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-accent hover:bg-orange-500 text-white font-semibold text-sm transition-all shadow-md shadow-black/40 border border-white/20 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Get a Free Studio Funnel Audit</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-1 text-sm">
                <a
                  href="https://www.linkedin.com/in/abegail-s-797302202/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white font-medium transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
                >
                  <Linkedin className="w-4 h-4 text-brand-accent" />
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>

                <span className="hidden sm:inline-block text-white/30 font-medium px-1 select-none">·</span>

                <a
                  href="https://www.instagram.com/abegailsaysontechva/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white font-medium transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
                >
                  <Instagram className="w-4 h-4 text-brand-accent" />
                  <span>Follow on Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
