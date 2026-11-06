import React from 'react';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles,
  Share2,
  Tag
} from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/blogData';
import SEOHead from '../components/SEOHead';

interface BlogPageProps {
  currentSlug?: string | null;
  onNavigate: (path: string) => void;
  onBookCallClick: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ currentSlug, onNavigate, onBookCallClick }) => {
  const activePost = currentSlug 
    ? BLOG_POSTS.find(p => p.slug === currentSlug) 
    : null;

  // Single Article View
  if (activePost) {
    return (
      <div className="pt-28 pb-20 font-sans text-white">
        <SEOHead
          title={`${activePost.title} | Abegail Sayson Tech`}
          description={activePost.excerpt}
          canonicalPath={`/blog/${activePost.slug}`}
          ogType="article"
          schemaData={{
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: activePost.title,
            description: activePost.excerpt,
            datePublished: '2026-02-01T00:00:00Z',
            author: {
              '@type': 'Person',
              name: activePost.author.name,
              jobTitle: activePost.author.role,
              url: 'https://www.abegailsayson.tech/about-abegail-sayson'
            },
            publisher: {
              '@type': 'Organization',
              name: 'Abegail Sayson Tech',
              url: 'https://www.abegailsayson.tech'
            }
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-between mb-8 text-xs font-mono text-slate-400">
            <button
              type="button"
              onClick={() => onNavigate('/blog')}
              className="inline-flex items-center gap-1.5 hover:text-brand-accent transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Articles</span>
            </button>

            <span className="text-cyan-400 uppercase tracking-wider">{activePost.category}</span>
          </div>

          {/* Article Header */}
          <header className="space-y-5 mb-10 pb-8 border-b border-white/10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <Tag className="w-3.5 h-3.5" />
              <span>{activePost.category}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans leading-tight">
              {activePost.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              {activePost.excerpt}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-3">
                <img
                  src={activePost.author.avatar}
                  alt={activePost.author.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border border-brand-accent/40"
                />
                <div>
                  <span className="font-bold text-white block">{activePost.author.name}</span>
                  <span className="text-[11px] text-slate-400">{activePost.author.role}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {activePost.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {activePost.readTime}
                </span>
              </div>
            </div>
          </header>

          {/* Key Takeaways Box */}
          <div className="p-6 sm:p-8 rounded-3xl bg-cyan-950/30 border border-cyan-500/30 mb-12 space-y-3">
            <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider block">
              Key Strategic Takeaways
            </span>
            <ul className="space-y-2.5">
              {activePost.keyTakeaways.map((takeaway, tIdx) => (
                <li key={tIdx} className="flex items-start text-xs sm:text-sm text-cyan-100 font-sans leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mr-2.5 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Body */}
          <article className="space-y-8 text-base text-slate-200 leading-relaxed font-sans">
            <p className="text-lg text-slate-100 leading-relaxed font-sans font-normal border-l-2 border-brand-accent pl-4 italic">
              {activePost.content.intro}
            </p>

            {activePost.content.sections.map((section, sIdx) => (
              <div key={sIdx} className="space-y-3 pt-4">
                <h2 className="text-2xl font-bold text-white font-sans tracking-tight">
                  {section.heading}
                </h2>
                {section.body.map((p, pIdx) => (
                  <p key={pIdx} className="text-slate-300 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            ))}

            <div className="p-6 rounded-2xl card-glass border border-white/10 space-y-2 mt-8">
              <h3 className="text-lg font-bold text-white">Summary &amp; Next Steps</h3>
              <p className="text-slate-300">
                {activePost.content.conclusion}
              </p>
            </div>
          </article>

          {/* Author Bio Box */}
          <div className="mt-14 p-6 sm:p-8 rounded-3xl card-glass border border-white/10 flex flex-col sm:flex-row items-center gap-6">
            <img
              src={activePost.author.avatar}
              alt={activePost.author.name}
              referrerPolicy="no-referrer"
              className="w-20 h-20 rounded-2xl object-cover border-2 border-brand-accent/40 shrink-0"
            />
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-[11px] font-mono font-bold text-brand-accent uppercase tracking-wider block">
                WRITTEN BY
              </span>
              <h4 className="text-lg font-bold text-white font-sans">{activePost.author.name}</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Abegail Sayson is an AI Automation Specialist and photographer based in the Philippines. She designs and builds automated booking funnels, CRM systems, and client delivery pipelines for photographers worldwide.
              </p>
            </div>
          </div>

          {/* Bottom Audit CTA */}
          <div className="mt-12 text-center p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-brand-accent/30 shadow-xl space-y-4">
            <h3 className="text-2xl font-bold text-white font-sans">
              Want Help Automating Your Photography Business?
            </h3>
            <p className="text-sm text-slate-300 max-w-lg mx-auto">
              Book a free 25-minute studio funnel audit. We&apos;ll look at your inquiry workflow and show you the 3 quick wins to get you booked while you shoot.
            </p>
            <button
              type="button"
              onClick={onBookCallClick}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-accent hover:bg-orange-500 text-white font-bold text-xs uppercase font-mono tracking-wider transition-all shadow-lg shadow-brand-accent/20 cursor-pointer"
            >
              <span>Request Free Studio Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    );
  }

  // Blog Directory / List View
  return (
    <div className="pt-28 pb-20 font-sans text-white">
      <SEOHead
        title="Photography Business Automation Blog | Abegail Sayson Tech"
        description="Actionable insights, step-by-step guides, and technical strategies for photographers looking to automate lead capture, client communication, and studio operations."
        canonicalPath="/blog"
        schemaData={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'Abegail Sayson Tech Photography Automation Blog',
          description: 'Educational articles and guides for photography studio owners on automation, CRM, and booking funnels.',
          publisher: {
            '@type': 'Organization',
            name: 'Abegail Sayson Tech',
            url: 'https://www.abegailsayson.tech'
          }
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs font-mono text-slate-400 mb-8" aria-label="Breadcrumb">
          <button onClick={() => onNavigate('/')} className="hover:text-brand-accent transition-colors">Home</button>
          <span>/</span>
          <span className="text-cyan-400">Blog</span>
        </nav>

        {/* Page Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-cyan-950/60 border border-cyan-500/30 rounded-full px-4 py-1.5 shadow-sm">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
              STUDIO AUTOMATION INSIGHTS
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans leading-tight">
            Photography Business Automation Blog
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Practical guides, technical architectures, and real-world workflows to help photographers streamline inquiries, automate CRM pipelines, and eliminate administrative burnout.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {BLOG_POSTS.map((post) => (
            <article 
              key={post.slug}
              className="rounded-3xl card-glass border border-white/10 p-7 flex flex-col justify-between hover:border-brand-accent/40 transition-all duration-300 shadow-xl group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-1 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 uppercase text-[10px] font-bold">
                    {post.category}
                  </span>
                  <span className="text-slate-400">{post.readTime}</span>
                </div>

                <h2 className="text-xl font-bold text-white font-sans leading-snug group-hover:text-brand-accent transition-colors">
                  {post.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-white/5">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                    Key Highlights:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {post.keyTakeaways.slice(0, 2).map((k, kIdx) => (
                      <li key={kIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2 leading-snug">{k}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">{post.date}</span>
                <button
                  type="button"
                  onClick={() => onNavigate(`/blog/${post.slug}`)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-accent group-hover:text-orange-400 uppercase tracking-wider cursor-pointer transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Audit Callout */}
        <div className="text-center max-w-2xl mx-auto p-8 sm:p-10 rounded-3xl bg-slate-900/40 border border-white/10 shadow-xl font-sans">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Ready to Automate Your Own Studio?
          </h3>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
            Book a free 25-minute studio funnel audit. We&apos;ll audit your inquiry process and show you the three quick wins to save hours every week.
          </p>
          <button
            type="button"
            onClick={onBookCallClick}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-accent hover:bg-orange-500 text-white font-bold cursor-pointer transition-all shadow-lg shadow-brand-accent/25 text-sm uppercase font-mono tracking-wider"
          >
            Get a Free Studio Funnel Audit
          </button>
        </div>

      </div>
    </div>
  );
};

export default BlogPage;
