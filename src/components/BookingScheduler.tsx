import React, { useState, useEffect } from 'react';
import { Loader2, Globe } from 'lucide-react';
import { BookingSubmission } from '../types';

interface BookingSchedulerProps {
  onBookingSuccess: (booking: BookingSubmission) => void;
  onClose?: () => void;
}

export const BookingScheduler: React.FC<BookingSchedulerProps> = ({ onBookingSuccess }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleCalendlyMessage = (e: MessageEvent) => {
      // Calendly triggers postMessage events when an event is scheduled
      if (e.data && e.data.event === 'calendly.event_scheduled') {
        const fakeBooking: BookingSubmission = {
          name: 'Calendly Attendee',
          email: 'scheduled@calendly',
          businessType: 'Consultation',
          challenges: 'Booked directly via interactive Calendly widget',
          date: new Date().toISOString().split('T')[0],
          time: 'Selected Slot'
        };
        onBookingSuccess?.(fakeBooking);
      }
    };

    window.addEventListener('message', handleCalendlyMessage);
    return () => {
      window.removeEventListener('message', handleCalendlyMessage);
    };
  }, [onBookingSuccess]);

  const hostname = typeof window !== 'undefined' ? window.location.hostname : '';
  const calendlyUrl = `https://calendly.com/abegailsaysontechva/30min?embed_domain=${encodeURIComponent(
    hostname
  )}&background_color=0f172a&text_color=ffffff&primary_color=f97316&hide_landing_page_details=1&hide_gdpr_banner=1`;

  return (
    <div className="card-glass rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col h-full text-white font-sans">
      
      {/* Card Header */}
      <div className="space-y-2 mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Book a Free Studio Funnel Audit
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed font-sans">
          Pick a time that works for you. We&apos;ll go through how inquiries and bookings work in your studio today. The call runs about 25 minutes and is free.
        </p>
      </div>

      {/* Frame Container with Loading Skeleton */}
      <div className="relative flex-grow w-full bg-[#0f172a] rounded-xl overflow-hidden border border-white/10 min-h-[580px] sm:min-h-[620px]">
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0f172a] text-gray-300 space-y-4 z-10 p-6">
            {/* Subtle calendar skeleton preview */}
            <div className="w-full max-w-xs space-y-3 opacity-30 animate-pulse pointer-events-none">
              <div className="h-5 bg-white/20 rounded w-2/3 mx-auto" />
              <div className="grid grid-cols-7 gap-2 pt-4">
                {Array.from({ length: 14 }).map((_, i) => (
                  <div key={i} className="h-8 bg-white/20 rounded" />
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-2.5 text-sm text-gray-300 font-medium pt-2">
              <Loader2 className="h-5 w-5 text-brand-accent animate-spin" />
              <span>Loading available times...</span>
            </div>
          </div>
        )}
        
        <iframe
          src={calendlyUrl}
          width="100%"
          height="100%"
          onLoad={() => setIsLoading(false)}
          className="border-0 w-full h-full"
          style={{ minHeight: '600px' }}
          title="Calendly Scheduling"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Small Timezone Note */}
      <div className="mt-4 flex items-center gap-2 text-xs text-gray-300">
        <Globe className="w-3.5 h-3.5 text-brand-accent shrink-0" />
        <span>Times are shown in your local time zone.</span>
      </div>

    </div>
  );
};

export default BookingScheduler;
