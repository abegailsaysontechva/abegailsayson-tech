import React, { useState } from 'react';
import { TESTIMONIALS } from '../data';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const active = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="py-24 bg-transparent text-white relative overflow-hidden border-b border-white/5">
      <div className="absolute top-10 right-10 w-[200px] h-[200px] rounded-full bg-brand-light-blue/5 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-blue/20 border border-brand-blue/40 rounded-full px-4 py-1.5 backdrop-blur-sm">
            <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
            <span className="text-xs font-mono font-bold text-brand-light-blue uppercase tracking-widest">
              Success Stories
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Trusted by Business Leaders & Creatives
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            See how small businesses, wedding photographers, and agency founders save massive overhead and operate stress-free under customized systems.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto relative bg-slate-950/40 rounded-3xl border border-white/5 p-8 sm:p-12 shadow-2xl overflow-hidden min-h-[380px] flex flex-col justify-between">
          
          <div className="space-y-6">
            {/* Quote decoration */}
            <div className="flex justify-between items-start">
              <Quote className="h-10 w-10 text-brand-light-blue/20 fill-brand-light-blue/10 shrink-0" />
              {/* Highlight badge */}
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full uppercase tracking-wider">
                {active.highlight}
              </span>
            </div>

            {/* Stars */}
            <div className="flex space-x-1">
              {[...Array(active.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
              ))}
            </div>

            {/* Text Content */}
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-sans font-medium italic">
              "{active.content}"
            </p>
          </div>

          {/* Author Block & Slider controller */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 pt-8 border-t border-white/5 mt-8">
            <div className="flex items-center space-x-4">
              <img
                src={active.avatarUrl}
                alt={active.name}
                referrerPolicy="no-referrer"
                className="h-12 w-12 rounded-full border-2 border-brand-light-blue object-cover shrink-0"
              />
              <div>
                <h4 className="text-sm font-extrabold text-white leading-tight">{active.name}</h4>
                <p className="text-xs text-brand-light-blue font-mono mt-0.5">
                  {active.role} at <strong className="text-gray-300 font-semibold">{active.company}</strong>
                </p>
              </div>
            </div>

            {/* Pagination Controls */}
            <div className="flex space-x-2 shrink-0">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-lg bg-white/5 hover:bg-brand-blue/30 text-gray-400 hover:text-white border border-white/5 hover:border-brand-blue/40 transition-all cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-lg bg-white/5 hover:bg-brand-blue/30 text-gray-400 hover:text-white border border-white/5 hover:border-brand-blue/40 transition-all cursor-pointer"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
