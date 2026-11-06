import React from 'react';
import { Camera, HeartHandshake, ShieldCheck, ArrowRight, ExternalLink, Linkedin, Instagram, CheckCircle2, Workflow, Sparkles, MapPin } from 'lucide-react';
import SEOHead from '../components/SEOHead';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onBookCallClick: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onBookCallClick }) => {
  return (
    <div className="pt-28 pb-20 font-sans text-white">
      <SEOHead
        title="Abegail Sayson | AI Automation Specialist"
        description="Learn about Abegail Sayson, an AI Automation Specialist and photographer with 5+ years behind the camera helping studios automate inquiries, CRM workflows, and bookings."
        canonicalPath="/about-abegail-sayson"
        schemaData={{
          '@context': 'https://schema.org',
          '@type': 'ProfilePage',
          mainEntity: {
            '@type': 'Person',
            name: 'Abegail Sayson',
            jobTitle: 'AI Automation Specialist',
            description: 'Photographer and AI automation specialist helping studios streamline bookings and operations.',
            url: 'https://www.abegailsayson.tech/about-abegail-sayson'
          }
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs font-mono text-slate-400 mb-8" aria-label="Breadcrumb">
          <button onClick={() => onNavigate('/')} className="hover:text-brand-accent transition-colors">Home</button>
          <span>/</span>
          <span className="text-cyan-400">About Abegail Sayson</span>
        </nav>

        {/* Hero Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Photo Column */}
          <div className="lg:col-span-5 col-span-1 lg:sticky lg:top-[120px] flex flex-col items-center lg:items-start">
            <div className="relative w-full max-w-[340px] md:max-w-[420px] mx-auto lg:mx-0 group">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-brand-accent/20 to-transparent opacity-70 blur-2xl group-hover:opacity-90 transition duration-500 pointer-events-none" />
              
              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-slate-900 shadow-2xl aspect-[4/5] z-10">
                <img
                  src="https://res.cloudinary.com/dwwqbsiom/image/upload/f_auto,q_auto/Image_156_vxpdi6"
                  alt="Abegail Sayson - AI Automation Specialist for Photographers"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-[center_top] transition duration-500 group-hover:scale-[1.02]"
                />
                
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-slate-950/85 backdrop-blur-md text-[11px] font-mono font-medium tracking-wider uppercase text-gray-200 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span>PHILIPPINES · WORKING WORLDWIDE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Badges below photo */}
            <div className="mt-6 w-full max-w-[340px] md:max-w-[420px] p-4 rounded-2xl card-glass border border-white/10 space-y-2 text-xs font-sans">
              <div className="flex items-center justify-between text-slate-300">
                <span className="font-mono text-slate-400">Experience:</span>
                <span className="font-semibold text-white">5+ Years Behind Camera</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="font-mono text-slate-400">Core Specialty:</span>
                <span className="font-semibold text-cyan-400">Photography Automation</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="font-mono text-slate-400">Secondary Audience:</span>
                <span className="font-semibold text-white">Small Businesses</span>
              </div>
            </div>
          </div>

          {/* Bio Story Column */}
          <div className="lg:col-span-7 col-span-1 space-y-8">
            
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 bg-cyan-950/60 border border-cyan-500/30 rounded-full px-3.5 py-1">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
                  ABOUT ABEGAIL SAYSON
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-[1.14]">
                A Photographer Who Builds Your Studio&apos;s Systems
              </h1>
              <p className="text-lg font-mono text-orange-400">
                AI Automation Specialist for Photographers &amp; Small Businesses
              </p>
            </div>

            <blockquote className="border-l-2 border-brand-accent pl-5 py-2 text-xl font-serif italic text-gray-200 leading-relaxed bg-brand-accent/5 rounded-r-xl">
              &ldquo;I know the photography client flow because I live it every week. Let me build the system so you can focus on the shoot.&rdquo;
            </blockquote>

            <div className="space-y-5 text-base text-gray-200 leading-relaxed font-sans">
              <p>
                I&apos;m Abegail Sayson, an AI Automation Specialist and photographer based in the Philippines, working with studios and creative businesses worldwide. For over five years, I&apos;ve stood behind the camera capturing weddings, family portraits, and live events.
              </p>
              <p>
                Like most independent photographers, I entered the industry for the love of the craft—the lighting, the genuine emotions, and the creative storytelling. But I quickly realized that running a photography business often feels like 70% repetitive administrative overhead: checking inboxes between shoots, sending quotes, chasing retainer deposits, emailing questionnaires, and manually tracking galleries.
              </p>
              <p>
                I started building automated workflows out of pure necessity after losing high-value inquiries to delayed responses while on shoot locations. When I realized that modern automation platforms—such as n8n, Make, Notion, and Google Workspace—could handle 80% of repetitive studio operations without losing a photographer&apos;s personal voice, everything changed.
              </p>
              <p>
                Today, I help fellow photographers and growing small businesses design, build, and deploy reliable automation pipelines. I don&apos;t build generic corporate software templates; I architect systems purpose-built for the reality of photography client lifecycles.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h3 className="text-lg font-bold text-white font-sans">
                My Core Approach to Automation
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl card-glass border border-white/10 space-y-2">
                  <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 w-fit">
                    <Camera className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Photographer-Minded</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Built around real shoot schedules, seasonal booking cycles, and portrait workflows.
                  </p>
                </div>

                <div className="p-4 rounded-xl card-glass border border-white/10 space-y-2">
                  <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 w-fit">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Personal Voice</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Every email and reminder sounds authentically like you, preserving your warm client connection.
                  </p>
                </div>

                <div className="p-4 rounded-xl card-glass border border-white/10 space-y-2">
                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white">100% Tested</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Rigorously tested end-to-end with simulated client journeys before handoff to guarantee reliability.
                  </p>
                </div>
              </div>
            </div>

            {/* Tech Stack Strip */}
            <div className="pt-4 border-t border-white/10 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                Tools &amp; Environments I Integrate:
              </span>
              <p className="text-xs sm:text-sm text-slate-300 font-mono">
                n8n, Make, Zapier, GoHighLevel, Notion CRM, HubSpot, Stripe, Google Workspace, Calendly, Youform, Typeform, Pic-Time, Pixieset.
              </p>
            </div>

            {/* Action Row */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onBookCallClick}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-accent hover:bg-orange-500 text-white font-bold text-sm transition-all shadow-lg shadow-brand-accent/20 cursor-pointer"
              >
                <span>Request a Free Studio Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('/portfolio')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 transition-all cursor-pointer"
              >
                <span>View Automation Case Studies</span>
              </button>

              <div className="flex items-center gap-2 pt-2 sm:pt-0">
                <a
                  href="https://www.linkedin.com/in/abegail-s-797302202/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                </a>
                <a
                  href="https://www.instagram.com/abegailsaysontechva/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-4 h-4 text-orange-400" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default AboutPage;
