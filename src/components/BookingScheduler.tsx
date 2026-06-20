import React, { useState, useEffect } from 'react';
import { Calendar, Loader2 } from 'lucide-react';
import { BookingSubmission } from '../types';

interface BookingSchedulerProps {
  onBookingSuccess: (booking: BookingSubmission) => void;
  onClose?: () => void;
}

export const BookingScheduler: React.FC<BookingSchedulerProps> = ({ onBookingSuccess, onClose }) => {
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
    <div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl overflow-hidden font-sans text-white flex flex-col h-[700px]" id="calendly-booking-container">
      
      {/* Frame Container */}
      <div className="relative flex-grow w-full bg-[#0f172a] overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0f172a] text-gray-400 space-y-3 z-10">
            <Loader2 className="h-8 w-8 text-brand-accent animate-spin" />
            <span className="text-xs font-mono tracking-wider animate-pulse uppercase">Syncing Calendly Calendar...</span>
          </div>
        )}
        
        <iframe
          src={calendlyUrl}
          width="100%"
          height="100%"
          onLoad={() => setIsLoading(false)}
          className="border-0 w-full h-full"
          style={{ minHeight: '580px' }}
          title="Calendly Scheduling"
          referrerPolicy="no-referrer"
        />
      </div>

    </div>
  );
};

export default BookingScheduler;
