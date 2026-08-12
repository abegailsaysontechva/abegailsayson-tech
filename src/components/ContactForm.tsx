import React, { useState } from 'react';
import { Mail, MessageSquare, Send, AlertCircle, CheckCircle, ArrowRight, NotebookTabs } from 'lucide-react';
import { FormSubmission } from '../types';

interface ContactFormProps {
  onSubmittingSuccess: (inquiry: FormSubmission) => void;
  emailContact: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmittingSuccess, emailContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [businessType, setBusinessType] = useState('Photographer');
  const [message, setMessage] = useState('');
  
  // States
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSending, setIsSending] = useState(false);
  const [successReceipt, setSuccessReceipt] = useState<FormSubmission | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = { ...errors };

    // Validations
    if (!name.trim()) newErrors.name = 'Please provide your name';
    if (!email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please provide a valid email format';
    }
    if (!subject.trim()) newErrors.subject = 'Subject is required';
    if (!message.trim()) newErrors.message = 'Please input a short brief of your project';

    // Clear active correct validations
    if (name.trim()) delete newErrors.name;
    if (email.trim() && /\S+@\S+\.\S+/.test(email)) delete newErrors.email;
    if (subject.trim()) delete newErrors.subject;
    if (message.trim()) delete newErrors.message;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSending(true);

    const data: FormSubmission = {
  name,
  email,
  subject,
  message,
  businessType
};

try {
  await fetch("https://n8n.absfunnels.online/webhook/95047e99-5503-49b4-80ca-fbbb256a0c3c", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      email,
      subject,
      sector: businessType,
      message
    })
  });
} catch (err) {
  console.error("Webhook error:", err);
}

setSuccessReceipt(data);
onSubmittingSuccess(data);
setIsSending(false);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setSuccessReceipt(null);
  };

  // WhatsApp helper linkage (Philippines prefix defaults, customized)
  const handleWhatsAppRedirect = () => {
    const formattedText = encodeURIComponent(
      `Hi Abegail! I visited your portfolio and would love to chat about automating some workflows for my business.`
    );
    window.open(`https://wa.me/639777658320?text=${formattedText}`, '_blank');
  };

  return (
    <div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl overflow-hidden font-sans text-white">
      
      {successReceipt ? (
        /* Clean Confirmation Screen */
        <div className="p-8 sm:p-12 text-center space-y-6 animate-fadeIn">
          <div className="h-16 w-16 mx-auto rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
            <CheckCircle className="h-10 w-10 animate-bounce" />
          </div>

          <div className="space-y-2 max-w-md mx-auto">
            <p className="text-base sm:text-lg font-semibold text-gray-200 leading-relaxed">
              Thank you! Your message has been submitted successfully. I'll get back to you soon.
            </p>
          </div>

          <button
            onClick={resetForm}
            className="px-6 py-2.5 bg-brand-accent hover:bg-brand-accent/90 text-white text-xs font-bold rounded-xl transition-all hover:scale-102 cursor-pointer shadow-lg shadow-brand-accent/20"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        /* Standard Form fields */
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-300 text-left block">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (e.target.value.trim() && errors.name) setErrors({...errors, name: ''});
                }}
                placeholder="Jane Doe"
                className="w-full px-4 py-2.5 rounded-lg border border-white/10 text-xs text-white focus:ring-1 focus:ring-brand-accent focus:border-brand-accent bg-slate-950/80 outline-none"
              />
              {errors.name && (
                <span className="text-red-500 text-[10px] flex items-center space-x-1 font-semibold">
                  <AlertCircle className="h-3 w-3" />
                  <span>{errors.name}</span>
                </span>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-300 text-left block">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (e.target.value.trim() && errors.email) setErrors({...errors, email: ''});
                }}
                placeholder="jane@company.com"
                className="w-full px-4 py-2.5 rounded-lg border border-white/10 text-xs text-white focus:ring-1 focus:ring-brand-accent focus:border-brand-accent bg-slate-950/80 outline-none"
              />
              {errors.email && (
                <span className="text-red-500 text-[10px] flex items-center space-x-1 font-semibold">
                  <AlertCircle className="h-3 w-3" />
                  <span>{errors.email}</span>
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Subject */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-300 text-left block">Subject</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                  if (e.target.value.trim() && errors.subject) setErrors({...errors, subject: ''});
                }}
                placeholder="Automation Project Inquiry"
                className="w-full px-4 py-2.5 rounded-lg border border-white/10 text-xs text-white focus:ring-1 focus:ring-brand-accent focus:border-brand-accent bg-slate-950/80 outline-none"
              />
              {errors.subject && (
                <span className="text-red-500 text-[10px] flex items-center space-x-1 font-semibold">
                  <AlertCircle className="h-3 w-3" />
                  <span>{errors.subject}</span>
                </span>
              )}
            </div>

            {/* Business Sector */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-300 text-left block">Your Business Sector</label>
              <select
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-white/10 text-xs text-white focus:ring-1 focus:ring-brand-accent focus:border-brand-accent bg-slate-950 outline-none"
              >
                <option value="Photographer" className="bg-slate-955 bg-[#121c2c] text-white">📸 Wedding / Portrait Photographer</option>
                <option value="Coaching" className="bg-slate-955 bg-[#121c2c] text-white">🧠 Coaching & Mentoring</option>
                <option value="Service Agency" className="bg-slate-955 bg-[#121c2c] text-white">💼 Service Business / Agency</option>
                <option value="Other" className="bg-slate-955 bg-[#121c2c] text-white">🛠️ Other Small Business</option>
              </select>
            </div>
          </div>

          {/* Message Brief */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-300 text-left block">Describe Your Target Workflow / Bottleneck</label>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (e.target.value.trim() && errors.message) setErrors({...errors, message: ''});
              }}
              placeholder="What repetitive tasks would you like to eliminate first? How does your current lead intake pipeline compile?"
              className="w-full px-4 py-2.5 rounded-lg border border-white/10 text-xs text-white focus:ring-1 focus:ring-brand-accent focus:border-brand-accent bg-slate-950/80 outline-none"
            />
            {errors.message && (
              <span className="text-red-500 text-[10px] flex items-center space-x-1 font-semibold">
                <AlertCircle className="h-3 w-3" />
                <span>{errors.message}</span>
              </span>
            )}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            
            {/* Quick Whatsapp trigger */}
            <button
              type="button"
              onClick={handleWhatsAppRedirect}
              className="px-4 py-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30 flex items-center justify-center space-x-2 transition-colors cursor-pointer"
            >
              <span>Or Direct Chat via WhatsApp</span>
            </button>

            <button
              type="submit"
              disabled={isSending}
              className="px-6 py-3 rounded-lg bg-brand-accent hover:bg-brand-accent/90 text-white text-xs font-bold transition-transform hover:scale-102 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
            >
              {isSending ? (
                <>
                  <span className="h-3.5 w-3.5 rounded-full border-2 border-white/30 border-t-white animate-spin block" />
                  <span>Sending message...</span>
                </>
              ) : (
                <>
                  <Send className="h-3.5 w-3.5" />
                  <span>Get My Free Automation Audit</span>
                </>
              )}
            </button>

          </div>

        </form>
      )}
    </div>
  );
};

export default ContactForm;
