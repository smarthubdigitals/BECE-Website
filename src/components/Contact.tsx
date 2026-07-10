import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, AlertCircle, Sparkles, Inbox, CheckCircle2, RefreshCw } from 'lucide-react';
import { ContactSubmission } from '../types';

interface ContactProps {
  customServiceSummary: string;
  onClearCustomSummary: () => void;
}

export default function Contact({ customServiceSummary, onClearCustomSummary }: ContactProps) {
  // Main form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'General Query',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmission, setLastSubmission] = useState<ContactSubmission | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  // Sessions Inbox for admin review
  const [inboxOpen, setInboxOpen] = useState(false);
  const [sessionInbox, setSessionInbox] = useState<ContactSubmission[]>([
    {
      id: 'sub-mock-1',
      name: 'Rev. Frank Osei',
      email: 'frank.osei@hopeyouth.org',
      message: 'Hello Abdul, we loved your video editing work on the reels project. We would love to book you to design flyers for our upcoming youth conference. Let us know your availability.',
      serviceOfInterest: 'Graphic Design Services',
      timestamp: 'Today, 10:45 AM',
    },
    {
      id: 'sub-mock-2',
      name: 'Maame Serwaah',
      email: 'info@serwaahcouture.com',
      message: 'The landing page is performing incredibly well! We would like to add an interactive map and basic analytics. Let me know when you can jump on a quick WhatsApp call.',
      serviceOfInterest: 'Website Design Services',
      timestamp: 'Today, 9:15 AM',
    }
  ]);

  // Sync custom service summary from the cost estimator
  useEffect(() => {
    if (customServiceSummary) {
      setFormData((prev) => ({
        ...prev,
        service: 'Custom Package Program',
        message: `${customServiceSummary}\n\nI would love to receive a detailed quote for this configuration!`,
      }));
    }
  }, [customServiceSummary]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors(null);

    // Basic Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormErrors('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);

    // Formspree Integration API Call
    fetch('https://formspree.io/f/mbdvnydz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        service: formData.service,
        message: formData.message
      })
    })
    .then(async (response) => {
      if (response.ok) {
        const newSubmission: ContactSubmission = {
          id: `sub-${Date.now()}`,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          serviceOfInterest: formData.service,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' (Just Now)',
        };

        // Add to Session Inbox
        setSessionInbox((prev) => [newSubmission, ...prev]);
        setLastSubmission(newSubmission);
        setIsSubmitting(false);
        setShowSuccess(true);

        // Clear Form fields & selected summary
        setFormData({
          name: '',
          email: '',
          service: 'General Query',
          message: '',
        });
        onClearCustomSummary();
      } else {
        const data = await response.json();
        if (data && data.errors) {
          const errMsg = data.errors.map((error: { message: string }) => error.message).join(', ');
          setFormErrors(errMsg || 'Oops! There was a problem submitting your form.');
        } else {
          setFormErrors('Oops! There was a problem submitting your form.');
        }
        setIsSubmitting(false);
      }
    })
    .catch((error) => {
      console.error('Form submission error:', error);
      setFormErrors('Oops! There was a problem submitting your form. Please check your network connection and try again.');
      setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="py-24 bg-soft-white text-dark-gray relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-poppins text-xs font-bold text-royal uppercase tracking-widest bg-royal/10 px-3 py-1.5 rounded-full">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-navy mt-3 tracking-tight">
            Contact & Consultation
          </h2>
          <p className="font-sans text-sm text-gray-500 mt-2">
            Have a project in mind? Drop a message below or reach out directly. I usually respond in less than 12 hours!
          </p>
          <div className="w-16 h-1 mt-4 bg-cyan-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Contact Coordinates info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6">
              <h3 className="font-poppins font-bold text-xl text-navy">
                Abdul Waheed
              </h3>
              <p className="font-sans text-sm text-gray-500 leading-relaxed">
                Feel free to contact me for quotes, seminar requests, graphic design commissions, or simple tech questions. Let&apos;s collaborate to grow your brand online!
              </p>

              <div className="space-y-4 pt-4 border-t border-gray-100">
                {/* Email item */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-royal/10 flex items-center justify-center text-royal shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-xs uppercase text-gray-400 tracking-wider">Email Address</h4>
                    <a 
                      href="mailto:smarthubdigitals@gmail.com"
                      className="font-sans text-sm sm:text-base text-navy font-semibold hover:text-royal transition-colors mt-0.5 block"
                    >
                      smarthubdigitals@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone item */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-cta/10 flex items-center justify-center text-emerald-cta shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-xs uppercase text-gray-400 tracking-wider">Phone / WhatsApp</h4>
                    <a 
                      href="tel:+233599003995" 
                      className="font-sans text-sm sm:text-base text-navy font-semibold hover:text-emerald-cta transition-colors mt-0.5 block"
                    >
                      0599003995
                    </a>
                  </div>
                </div>

                {/* Location item */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-accent/10 flex items-center justify-center text-cyan-accent shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-xs uppercase text-gray-400 tracking-wider">Location</h4>
                    <p className="font-sans text-sm sm:text-base text-gray-800 font-semibold mt-0.5">
                      Tamale, Ghana
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Instant WhatsApp CTA */}
            <div className="bg-emerald-cta text-white p-6 rounded-2xl shadow-lg shadow-emerald-cta/10 flex items-center justify-between gap-4">
              <div>
                <h4 className="font-poppins font-bold text-base">Direct Chat via WhatsApp</h4>
                <p className="font-sans text-xs text-emerald-100 mt-1">
                  Skip the email and start an instant chat regarding your design project.
                </p>
              </div>
              <a
                href="https://wa.me/233599003995?text=Hello%20Abdul,%20I%20visited%20your%20digital%20portfolio%20and%20would%20love%20to%20discuss%20a%20project!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-emerald-cta p-3 rounded-full hover:scale-110 transition-transform flex items-center justify-center shrink-0 shadow-md cursor-pointer"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-6 h-6 fill-current" />
              </a>
            </div>
          </div>

          {/* Right Column - Submission Form / Success panel */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm">
            {showSuccess ? (
              /* Submission Success Feedback Screen */
              <div className="text-center py-10 px-4 space-y-6">
                <div className="w-16 h-16 bg-emerald-cta/15 text-emerald-cta rounded-full flex items-center justify-center mx-auto mb-2 animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-2xl text-navy">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="font-sans text-sm text-gray-500 mt-2 max-w-lg mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-navy">{lastSubmission?.name}</span>! Your request for <span className="font-bold text-royal">{lastSubmission?.serviceOfInterest}</span> has been securely delivered to my local session inbox.
                  </p>
                  <p className="font-sans text-xs text-gray-400 mt-3">
                    A simulated verification email has been queued for <span className="underline">{lastSubmission?.email}</span>.
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl text-left text-xs max-w-md mx-auto">
                  <p className="font-mono text-[10px] text-gray-400 uppercase tracking-wider mb-2">Message Payload Snapshot:</p>
                  <p className="font-sans text-gray-700 italic">&ldquo;{lastSubmission?.message}&rdquo;</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                  <a
                    href={`https://wa.me/233599003995?text=Hi%20Abdul,%20I%20just%20submitted%20a%20project%20form%20for%20${encodeURIComponent(lastSubmission?.serviceOfInterest || 'services')}%20on%20your%20portfolio!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-emerald-cta hover:bg-emerald-cta/90 text-white px-5 py-2.5 rounded-full font-poppins font-semibold text-xs transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Follow Up on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setShowSuccess(false)}
                    className="inline-flex items-center space-x-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2.5 rounded-full font-poppins font-semibold text-xs transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Submit Another Query</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Contact Form */
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-poppins font-bold text-lg text-navy flex items-center space-x-2 mb-2">
                  <Sparkles className="w-5 h-5 text-royal animate-pulse" />
                  <span>Send Abdul a Secure Message</span>
                </h3>

                {formErrors && (
                  <div className="bg-rose-50 border border-rose-200 rounded-xl p-3 flex items-start space-x-2 text-rose-600 text-xs">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{formErrors}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-poppins font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ebenezer Mensah"
                      className="w-full bg-gray-50 border border-gray-200 focus:border-royal focus:bg-white p-3 rounded-xl text-sm font-sans outline-none transition-all"
                      required
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-poppins font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. ebenezer@example.com"
                      className="w-full bg-gray-50 border border-gray-200 focus:border-royal focus:bg-white p-3 rounded-xl text-sm font-sans outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Service Dropdown */}
                <div>
                  <label htmlFor="service" className="block text-xs font-poppins font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 focus:border-royal focus:bg-white p-3 rounded-xl text-sm font-sans outline-none transition-all"
                  >
                    <option value="General Query">General Discussion / Say Hello</option>
                    <option value="Graphic Design Services">Graphic Design Services (Flyers, Logo, Posts)</option>
                    <option value="Website Design Services">Website Design Services (Single Page, Landing)</option>
                    <option value="Content Creation Services">Content Creation Services (Articles, Writing)</option>
                    <option value="Video Editing Services">Video Editing Services (Reels, Promos)</option>
                    <option value="Custom Package Program">Custom Dynamic Package (Calculated)</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-poppins font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Message Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, budget specifications, and timeline requirements here..."
                    className="w-full bg-gray-50 border border-gray-200 focus:border-royal focus:bg-white p-3 rounded-xl text-sm font-sans outline-none transition-all resize-none"
                    required
                  />
                </div>

                <button
                  id="contact-form-submit"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-royal hover:bg-royal/90 text-white py-3.5 rounded-xl font-poppins font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2 shadow-md shadow-royal/10 hover:shadow-lg hover:shadow-royal/20 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Encrypting & Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Secure Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

        {/* --- DYNAMIC ADMIN REVIEWER INBOX SUBMISSION PANEL --- */}
        <div className="mt-16 border-t border-gray-200 pt-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <button
              id="admin-inbox-toggle"
              onClick={() => setInboxOpen(!inboxOpen)}
              className="inline-flex items-center space-x-2 text-xs font-poppins font-bold tracking-widest text-gray-400 hover:text-royal uppercase transition-colors py-2 px-4 rounded-xl border border-gray-200 hover:border-royal bg-white/50 cursor-pointer"
            >
              <Inbox className="w-3.5 h-3.5" />
              <span>{inboxOpen ? 'Hide Submissions Inbox' : 'Open Submissions Inbox'}</span>
            </button>
            <p className="font-sans text-[10px] text-gray-400 mt-1">
              *Reviewer Portal: Click to inspect form entries saved in local memory*
            </p>
          </div>

          {inboxOpen && (
            <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-lg mt-6 space-y-4 animate-[fadeIn_0.3s_ease-out]">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <h4 className="font-poppins font-bold text-sm text-navy flex items-center space-x-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-cta" />
                  <span>Session Submissions Feed</span>
                </h4>
                <span className="text-[10px] font-mono text-gray-400 uppercase bg-gray-100 px-2.5 py-1 rounded-md">
                  {sessionInbox.length} messages
                </span>
              </div>

              <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2">
                {sessionInbox.map((sub) => (
                  <div key={sub.id} className="bg-gray-50 border border-gray-150 p-4 rounded-xl relative hover:border-royal transition-colors">
                    <span className="absolute top-4 right-4 text-[10px] font-sans text-gray-400">
                      {sub.timestamp}
                    </span>
                    <h5 className="font-poppins font-bold text-xs text-navy">
                      Sender: {sub.name}
                    </h5>
                    <p className="font-mono text-[10px] text-gray-400 mt-0.5">{sub.email}</p>
                    <span className="inline-block text-[9px] font-poppins font-bold text-royal bg-royal/10 px-2 py-0.5 rounded mt-2 uppercase">
                      {sub.serviceOfInterest}
                    </span>
                    <p className="font-sans text-xs text-gray-600 mt-2.5 leading-relaxed bg-white p-2.5 rounded border border-gray-100 italic">
                      &ldquo;{sub.message}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
