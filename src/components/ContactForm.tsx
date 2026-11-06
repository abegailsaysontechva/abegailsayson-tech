import React, { useState } from 'react';
import { Send, AlertCircle, CheckCircle, MessageCircle } from 'lucide-react';
import { FormSubmission } from '../types';

const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbwmoqouShq4v03gkXMhwh1U8Qtn37iBztD-htWSBF2tCnl-O8M4OOZbJBKFV7t0Gwbg/exec';

interface ContactFormProps {
  onSubmittingSuccess: (inquiry: FormSubmission) => void;
  emailContact: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmittingSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [websiteLink, setWebsiteLink] = useState('');
  const [whatDoYouPhotograph, setWhatDoYouPhotograph] = useState('Weddings');
  const [headache, setHeadache] = useState('');

  // States
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  // 1. Validation
  const newErrors: Record<string, string> = {};

  if (!name.trim()) {
    newErrors.name = 'Your name is required';
  }

  if (!email.trim()) {
    newErrors.email = 'Email address is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    newErrors.email = 'Please provide a valid email format';
  }

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  setErrors({});
  setIsSending(true);

  // 2. Build the message
  const fullMessage = websiteLink.trim()
    ? `${headache.trim() || 'No specific headache noted.'}\n\nInstagram / Website: ${websiteLink.trim()}`
    : (headache.trim() || 'No specific headache noted.');

  // 3. Build the data object
  const data: FormSubmission = {
    name: name.trim(),
    email: email.trim(),
    subject: `Studio Audit Request: ${whatDoYouPhotograph}`,
    message: fullMessage,
    businessType: whatDoYouPhotograph,
  };

  // 4. Send to Google Sheets + email notifications
  try {
    await fetch(WEB_APP_URL, {
      method: 'POST',
      mode: 'no-cors', // avoids CORS errors with Apps Script
      body: new URLSearchParams({
        name: name.trim(),
        email: email.trim(),
        link: websiteLink.trim(),
        specialty: whatDoYouPhotograph,
        message: fullMessage,
      }),
    });
  } catch (err) {
    console.error('Form submission failed', err);
  }

  // 5. Show success and reset the form
  onSubmittingSuccess(data);
  setIsSending(false);
  setIsSubmitted(true);
  setName('');
  setEmail('');
  setWebsiteLink('');
  setHeadache('');
};

  const resetForm = () => {
    setName('');
    setEmail('');
    setWebsiteLink('');
    setWhatDoYouPhotograph('Weddings');
    setHeadache('');
    setErrors({});
    setIsSubmitted(false);
  };

  const handleWhatsAppRedirect = () => {
    const formattedText = encodeURIComponent(
      `Hi Abegail! I visited your website and would love to chat about booking funnels and automation for my photography studio.`
    );
    window.open(`https://wa.me/639777658320?text=${formattedText}`, '_blank');
  };

  return (
    <div className="card-glass rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col h-full text-white font-sans">
      
      {/* Card Header */}
      <div className="space-y-2 mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Prefer to Message Me?
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed font-sans">
          Tell me a bit about your studio, and I&apos;ll reply within 24 hours.
        </p>
      </div>

      {isSubmitted ? (
        /* Confirmation Screen */
        <div className="my-auto py-12 px-4 text-center space-y-6">
          <div className="h-16 w-16 mx-auto rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
            <CheckCircle className="h-9 w-9" />
          </div>

          <div className="space-y-3 max-w-md mx-auto">
            <h4 className="text-xl font-bold text-white">Thank you!</h4>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-sans">
              Thank you! I&apos;ve got your message and will reply within 24 hours. Check your inbox, and your spam folder just in case.
            </p>
          </div>

          <button
            type="button"
            onClick={resetForm}
            className="px-6 py-2.5 bg-brand-accent hover:bg-orange-500 text-white text-xs font-bold rounded-xl transition-all hover:-translate-y-0.5 cursor-pointer shadow-lg shadow-brand-accent/20"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        /* Contact Form */
        <form onSubmit={handleSubmit} className="flex flex-col flex-grow justify-between">
          <div className="space-y-4 flex flex-col flex-grow">
            
            {/* Your name (required) */}
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-bold text-gray-200 block">
                Your name <span className="text-brand-accent">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (e.target.value.trim() && errors.name) {
                    setErrors((prev) => {
                      const next = { ...prev };
                      delete next.name;
                      return next;
                    });
                  }
                }}
                placeholder="Jane Doe"
                className={`w-full px-4 py-2.5 rounded-lg border ${
                  errors.name ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-brand-accent'
                } text-sm text-white focus:ring-1 focus:ring-brand-accent bg-slate-950/80 outline-none transition-colors`}
              />
              {errors.name && (
                <span className="text-red-400 text-xs flex items-center gap-1 font-medium mt-1">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                  <span>{errors.name}</span>
                </span>
              )}
            </div>

            {/* Email (required) */}
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-bold text-gray-200 block">
                Email <span className="text-brand-accent">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (e.target.value.trim() && errors.email) {
                    setErrors((prev) => {
                      const next = { ...prev };
                      delete next.email;
                      return next;
                    });
                  }
                }}
                placeholder="jane@studio.com"
                className={`w-full px-4 py-2.5 rounded-lg border ${
                  errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-brand-accent'
                } text-sm text-white focus:ring-1 focus:ring-brand-accent bg-slate-950/80 outline-none transition-colors`}
              />
              {errors.email && (
                <span className="text-red-400 text-xs flex items-center gap-1 font-medium mt-1">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                  <span>{errors.email}</span>
                </span>
              )}
            </div>

            {/* Instagram or website link (optional) */}
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-bold text-gray-200 block">
                Instagram or website link <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <input
                type="text"
                value={websiteLink}
                onChange={(e) => setWebsiteLink(e.target.value)}
                placeholder="instagram.com/yourstudio or yourstudio.com"
                className="w-full px-4 py-2.5 rounded-lg border border-white/10 text-sm text-white focus:ring-1 focus:ring-brand-accent focus:border-brand-accent bg-slate-950/80 outline-none transition-colors"
              />
            </div>

            {/* Automation service needed & photography specialty */}
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-bold text-gray-200 block">
                Photography specialty &amp; automation needed
              </label>
              <select
                value={whatDoYouPhotograph}
                onChange={(e) => setWhatDoYouPhotograph(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-white/10 text-sm text-white focus:ring-1 focus:ring-brand-accent focus:border-brand-accent bg-slate-950 outline-none cursor-pointer"
              >
                <option value="Weddings — Inquiry & Booking Funnel" className="bg-[#121c2c] text-white">Weddings — Inquiry &amp; Booking Funnel</option>
                <option value="Portraits & Families — Client Onboarding & Reminders" className="bg-[#121c2c] text-white">Portraits &amp; Families — Client Onboarding &amp; Reminders</option>
                <option value="Studio Work — Gallery Delivery & Reviews" className="bg-[#121c2c] text-white">Studio Work — Gallery Delivery &amp; Reviews</option>
                <option value="Commercial & Editorial — CRM & Lead Management" className="bg-[#121c2c] text-white">Commercial &amp; Editorial — CRM &amp; Lead Management</option>
                <option value="Events & Mini-Sessions — Automated Scheduler" className="bg-[#121c2c] text-white">Events &amp; Mini-Sessions — Automated Scheduler</option>
                <option value="Other Custom Studio Automation" className="bg-[#121c2c] text-white">Other Custom Studio Automation</option>
              </select>
            </div>

            {/* What's your biggest headache right now? textarea */}
            <div className="space-y-1.5 text-left flex flex-col flex-grow">
              <label className="text-xs font-bold text-gray-200 block">
                Main workflow problem / biggest headache
              </label>
              <textarea
                value={headache}
                onChange={(e) => setHeadache(e.target.value)}
                placeholder="e.g. Inquiries sit unanswered while I shoot, chasing deposits takes forever, I forget to ask for reviews..."
                className="w-full flex-grow min-h-[140px] px-4 py-2.5 rounded-lg border border-white/10 text-sm text-white focus:ring-1 focus:ring-brand-accent focus:border-brand-accent bg-slate-950/80 outline-none transition-colors resize-none"
              />
            </div>

          </div>

          {/* Action Buttons & Note */}
          <div className="pt-4 mt-4 border-t border-white/10 space-y-3">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="submit"
                disabled={isSending}
                className="flex-1 px-6 py-3 rounded-xl bg-brand-accent hover:bg-orange-500 text-white font-semibold text-sm transition-all shadow-md shadow-black/40 border border-white/20 hover:shadow-brand-accent/30 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSending ? (
                  <>
                    <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin block" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Request a Free Studio Audit</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleWhatsAppRedirect}
                className="px-5 py-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-semibold text-sm border border-emerald-500/40 hover:border-emerald-500/60 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="h-4 w-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>

            <p className="text-xs text-gray-400 text-center sm:text-left pt-1 font-sans">
              No spam, no pressure. I only use your details to reply about your audit.
            </p>
          </div>

        </form>
      )}
    </div>
  );
};

export default ContactForm;
