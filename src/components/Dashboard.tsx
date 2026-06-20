import React, { useState } from 'react';
import { BookingSubmission, FormSubmission } from '../types';
import { Calendar, MessageSquare, Terminal, RefreshCw, Layers, MonitorCheck, Play, Key, X, CheckSquare } from 'lucide-react';

interface DashboardProps {
  bookings: BookingSubmission[];
  inquiries: FormSubmission[];
  onClear: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  bookings,
  inquiries,
  onClear,
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'bookings' | 'inquiries'>('bookings');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-brand-dark/80 backdrop-blur-sm flex justify-end transition-all font-sans">
      
      {/* Drawer Card */}
      <div className="bg-slate-900 border-l border-brand-blue/30 w-full max-w-lg shadow-2xl h-full flex flex-col justify-between text-white relative animate-slideIn">
        
        {/* Header section */}
        <div className="p-6 border-b border-white/5 bg-gradient-to-r from-brand-navy to-brand-dark flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-lg bg-brand-light-blue/20 text-brand-light-blue flex items-center justify-center border border-brand-light-blue/20 group">
              <Terminal className="h-5 w-5 animate-pulse" />
            </div>
            <div>
              <h3 className="font-sans font-extrabold text-sm tracking-tight">Active Automation Logs</h3>
              <p className="text-[10px] font-mono text-gray-400">Client CRM Lead Tracker & Database</p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Info panel */}
        <div className="px-6 py-4 bg-brand-blue/10 border-b border-brand-blue/20 flex items-start space-x-3 text-xs text-gray-300">
          <Layers className="h-5 w-5 text-brand-light-blue shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-white">How this shows Abegail's expertise:</p>
            <p className="mt-1 leading-relaxed text-gray-400">
              When you submit high-converting intake fields in our schedule slots or contact pages, this local simulator captures, parses, and logs the records instantly. In a live client project, these exact objects trigger automated flows in Slack, Notion, or HubSpot.
            </p>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="grid grid-cols-2 border-b border-white/5 bg-slate-950 font-mono text-xs">
          <button
            onClick={() => setActiveTab('bookings')}
            className={`py-4 text-center border-b-2 font-bold px-2 flex items-center justify-center space-x-2 cursor-pointer transition-all ${
              activeTab === 'bookings'
                ? 'border-brand-light-blue text-brand-light-blue bg-white/[0.02]'
                : 'border-transparent text-gray-500 hover:text-gray-300'
            }`}
          >
            <Calendar className="h-4 w-4" />
            <span>Booked Sessions ({bookings.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('inquiries')}
            className={`py-4 text-center border-b-2 font-bold px-2 flex items-center justify-center space-x-2 cursor-pointer transition-all ${
              activeTab === 'inquiries'
                ? 'border-brand-light-blue text-brand-light-blue bg-white/[0.02]'
                : 'border-transparent text-gray-500 hover:text-gray-300'
            }`}
          >
            <MessageSquare className="h-4 w-4" />
            <span>Form Inquiries ({inquiries.length})</span>
          </button>
        </div>

        {/* Scrollable list content */}
        <div className="flex-grow p-6 overflow-y-auto space-y-4">
          {activeTab === 'bookings' ? (
            /* Bookings Tab list */
            bookings.length === 0 ? (
              <div className="text-center py-16 space-y-4 px-4">
                <div className="h-12 w-12 rounded-full bg-white/5 text-gray-500 flex items-center justify-center mx-auto">
                  <Calendar className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-gray-300">No Bookings Recorded Yet</h4>
                  <p className="text-xs text-gray-500 leading-relaxed max-w-xs mx-auto">
                    Try picking a time slot and schedule a Discovery Call in the booking widget. It will instantly pop up right here!
                  </p>
                </div>
              </div>
            ) : (
              bookings.map((b, index) => (
                <div
                  key={index}
                  className="bg-slate-950 rounded-xl border border-white/5 p-4 space-y-3 hover:border-brand-blue/30 transition-all font-sans text-xs animate-fadeIn"
                >
                  <div className="flex justify-between items-center border-b border-white/5 pb-2 text-[10px] font-mono text-gray-500">
                    <span>UUID: b_{index + 101}</span>
                    <span className="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded border border-emerald-500/20 font-bold uppercase tracking-wider">
                      sync_complete
                    </span>
                  </div>

                  <div className="space-y-1.5 text-gray-300">
                    <p><strong className="text-white">Lead Attendee:</strong> {b.name} ({b.email})</p>
                    <p><strong className="text-white">Assigned Time:</strong> {b.date} at {b.time}</p>
                    <p><strong className="text-white">Business Sector:</strong> {b.businessType}</p>
                    <p className="bg-white/5 p-2 rounded text-[11px] text-gray-400 font-sans italic mt-1 pb-1 border-l-2 border-brand-light-blue">
                      "{b.challenges}"
                    </p>
                  </div>
                </div>
              ))
            )
          ) : (
            /* Inquiries Tab list */
            inquiries.length === 0 ? (
              <div className="text-center py-16 space-y-4 px-4">
                <div className="h-12 w-12 rounded-full bg-white/5 text-gray-500 flex items-center justify-center mx-auto">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-gray-300">No Inquires Dispatched Yet</h4>
                  <p className="text-xs text-gray-500 leading-relaxed max-w-xs mx-auto">
                    Try submitting a message in our Contact Webhook Form. The payload objects will parse and bind here instantly!
                  </p>
                </div>
              </div>
            ) : (
              inquiries.map((iq, index) => (
                <div
                  key={index}
                  className="bg-slate-950 rounded-xl border border-white/5 p-4 space-y-3 hover:border-brand-blue/30 transition-all font-sans text-xs animate-fadeIn"
                >
                  <div className="flex justify-between items-center border-b border-white/5 pb-2 text-[10px] font-mono text-gray-500">
                    <span>UUID: iq_{index + 201}</span>
                    <span className="text-brand-light-blue bg-brand-light-blue/10 px-1.5 py-0.2 rounded border border-brand-light-blue/20 font-bold uppercase tracking-wider">
                      webhook_success
                    </span>
                  </div>

                  <div className="space-y-1.5 text-gray-300 font-sans">
                    <p><strong className="text-white">Sender profile:</strong> {iq.name} ({iq.email})</p>
                    <p><strong className="text-white">Sector group:</strong> {iq.businessType}</p>
                    <p><strong className="text-white">Inquiry Subject:</strong> {iq.subject}</p>
                    <p className="bg-white/5 p-2 rounded text-[11px] text-gray-400 font-sans italic mt-1 pb-1 border-l-2 border-brand-blue">
                      "{iq.message}"
                    </p>
                  </div>
                </div>
              ))
            )
          )}
        </div>

        {/* Clear Data Actions footer */}
        <div className="p-6 border-t border-white/5 bg-slate-950/80 flex items-center justify-between text-xs font-mono">
          <button
            onClick={onClear}
            disabled={bookings.length === 0 && inquiries.length === 0}
            className="text-gray-400 hover:text-red-400 flex items-center space-x-1.5 disabled:opacity-30 disabled:hover:text-gray-400 cursor-pointer"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span>Flush Local Database</span>
          </button>
          
          <span className="text-gray-500 text-[10px] uppercase">
            STATUS: idle_standby
          </span>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
