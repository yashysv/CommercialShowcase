import React, { useState } from 'react';
import { PageRoute, ContactFormData } from '../types';
import { SectionHeading } from '../components/common/SectionHeading';
import { CTAButton } from '../components/common/CTAButton';
import { AGENCY_CONTACT, SERVICES } from '../data/agencyData';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  ArrowUpRight, 
  CheckCircle2, 
  AlertCircle, 
  Send, 
  Clock, 
  ShieldCheck,
  Instagram,
  Facebook,
  Linkedin
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    website: '',
    businessType: 'B2B / Professional Service',
    serviceInterest: 'Full Growth Architecture (Strategy + Ads + Creative)',
    budget: '$2,000 - $5,000 / month (or equivalent)',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your phone or WhatsApp number.';
    } else if (formData.phone.length < 8) {
      errs.phone = 'Please provide a complete contact number with country code.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please share your core marketing requirement or objective.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real network submission turnaround
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  return (
    <div className="pt-24 md:pt-32">
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-white/10 bg-[#080808] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151515] border border-white/10 text-xs font-semibold text-[#C9A96E] uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
              INITIATE CONVERSATION
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#F5F5F0] tracking-tight leading-[1.08] mb-6 font-['Manrope',sans-serif]">
              Let's Talk About <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F0] via-[#E4C98D] to-[#C9A96E]">
                Your Growth.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#A6A6A0] leading-relaxed font-light">
              Tell us about your business, your challenge and what you want to achieve. We provide transparent strategic feedback, channel feasibility, and execution roadmaps.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Channels Section */}
      <section className="py-16 md:py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Direct Info, WhatsApp CTA & Social Links */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
              
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#C9A96E] block mb-3">
                  DIRECT CONTACT CHANNELS
                </span>

                <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F5F0] mb-6 font-['Manrope',sans-serif]">
                  Prefer Direct Communication?
                </h2>

                <p className="text-sm text-[#A6A6A0] leading-relaxed mb-8 font-light">
                  Skip the form and message our strategy directors immediately via email or WhatsApp. We reply promptly during standard operating hours.
                </p>

                {/* Direct Links Box */}
                <div className="space-y-4 mb-8">
                  <a
                    href={`mailto:${AGENCY_CONTACT.email}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#121212] border border-white/10 hover:border-[#C9A96E]/50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#181818] flex items-center justify-center text-[#C9A96E] group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-[#777772]">Email Inquiries</div>
                      <div className="text-sm font-semibold text-[#F5F5F0] group-hover:text-[#E4C98D] transition-colors">
                        {AGENCY_CONTACT.email}
                      </div>
                    </div>
                  </a>

                  <a
                    href={`tel:${AGENCY_CONTACT.phoneClean}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#121212] border border-white/10 hover:border-[#C9A96E]/50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#181818] flex items-center justify-center text-[#C9A96E] group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-[#777772]">Direct Phone</div>
                      <div className="text-sm font-semibold text-[#F5F5F0] group-hover:text-[#E4C98D] transition-colors">
                        {AGENCY_CONTACT.phone}
                      </div>
                    </div>
                  </a>
                </div>

                {/* Prominent WhatsApp Card */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#151515] to-[#121212] border border-[#C9A96E]/40 mb-10 shadow-[0_10px_30px_rgba(201,169,110,0.08)]">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C9A96E] mb-2">
                    <MessageSquare className="w-4 h-4" />
                    INSTANT WHATSAPP ADVISORY
                  </div>
                  <h3 className="text-lg font-bold text-[#F5F5F0] mb-2 font-['Manrope',sans-serif]">
                    Chat with Commercial Showcase
                  </h3>
                  <p className="text-xs text-[#A6A6A0] leading-relaxed mb-4">
                    Send a direct message on WhatsApp with your business context to initiate a fast discovery chat.
                  </p>
                  <a
                    href={AGENCY_CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[#C9A96E] hover:bg-[#E4C98D] text-[#080808] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    START WHATSAPP CONVERSATION →
                  </a>
                </div>

                {/* Official Social Media Channels */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#777772] mb-3">
                    OFFICIAL SOCIAL CHANNELS
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={AGENCY_CONTACT.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-[#151515] border border-white/10 text-[#A6A6A0] hover:text-[#C9A96E] hover:border-[#C9A96E]/40 transition-colors"
                      aria-label="Commercial Showcase Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href={AGENCY_CONTACT.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-[#151515] border border-white/10 text-[#A6A6A0] hover:text-[#C9A96E] hover:border-[#C9A96E]/40 transition-colors"
                      aria-label="Commercial Showcase Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href={AGENCY_CONTACT.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-[#151515] border border-white/10 text-[#A6A6A0] hover:text-[#C9A96E] hover:border-[#C9A96E]/40 transition-colors"
                      aria-label="Commercial Showcase LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Security & Confidentiality */}
              <div className="pt-6 border-t border-white/10 flex items-center gap-3 text-xs text-[#777772]">
                <ShieldCheck className="w-4 h-4 text-[#C9A96E] shrink-0" />
                <span>Non-disclosure guaranteed on all prospective client data.</span>
              </div>

            </div>

            {/* Right Column: Interactive Consultation Booking Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#121212] border border-white/15 shadow-2xl">
                
                {isSubmitted ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#181818] border border-[#C9A96E] flex items-center justify-center text-[#C9A96E] mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#F5F5F0] mb-3 font-['Manrope',sans-serif]">
                      Inquiry Received
                    </h3>
                    <p className="text-sm text-[#A6A6A0] max-w-md mx-auto leading-relaxed mb-6">
                      Thank you, {formData.name}. Our strategy team will review your business requirements and reply within one business day with relevant case models and scheduling details.
                    </p>
                    <div className="p-4 rounded-xl bg-[#181818] border border-white/5 max-w-sm mx-auto text-xs text-[#777772] mb-6">
                      A copy of this inquiry has been structured for intake review.
                    </div>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          businessName: '',
                          email: '',
                          phone: '',
                          website: '',
                          businessType: 'B2B / Professional Service',
                          serviceInterest: 'Full Growth Architecture (Strategy + Ads + Creative)',
                          budget: '$2,000 - $5,000 / month',
                          message: ''
                        });
                      }}
                      className="text-xs font-bold uppercase tracking-wider text-[#C9A96E] hover:underline"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-[#F5F5F0] mb-1 font-['Manrope',sans-serif]">
                        Request A Strategic Consultation
                      </h3>
                      <p className="text-xs text-[#A6A6A0]">
                        Fill out the details below to give us context regarding your market and goals.
                      </p>
                    </div>

                    {/* Row 1: Name & Business Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#A6A6A0] mb-2">
                          Your Name <span className="text-[#C9A96E]">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Rahul Sharma"
                          className={`w-full px-4 py-3 rounded-xl bg-[#181818] text-sm text-[#F5F5F0] border focus:outline-none transition-colors ${
                            errors.name ? 'border-[#e06c75]' : 'border-white/10 focus:border-[#C9A96E]'
                          }`}
                        />
                        {errors.name && (
                          <p className="text-[11px] text-[#e06c75] mt-1">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#A6A6A0] mb-2">
                          Business / Brand Name
                        </label>
                        <input
                          type="text"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleInputChange}
                          placeholder="e.g. Apex Logistics Group"
                          className="w-full px-4 py-3 rounded-xl bg-[#181818] text-sm text-[#F5F5F0] border border-white/10 focus:border-[#C9A96E] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Row 2: Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#A6A6A0] mb-2">
                          Work Email <span className="text-[#C9A96E]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="name@company.com"
                          className={`w-full px-4 py-3 rounded-xl bg-[#181818] text-sm text-[#F5F5F0] border focus:outline-none transition-colors ${
                            errors.email ? 'border-[#e06c75]' : 'border-white/10 focus:border-[#C9A96E]'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-[11px] text-[#e06c75] mt-1">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#A6A6A0] mb-2">
                          Phone / WhatsApp <span className="text-[#C9A96E]">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43210"
                          className={`w-full px-4 py-3 rounded-xl bg-[#181818] text-sm text-[#F5F5F0] border focus:outline-none transition-colors ${
                            errors.phone ? 'border-[#e06c75]' : 'border-white/10 focus:border-[#C9A96E]'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-[11px] text-[#e06c75] mt-1">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    {/* Row 3: Website & Business Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#A6A6A0] mb-2">
                          Website / Social Handle
                        </label>
                        <input
                          type="text"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          placeholder="https://yourbrand.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#181818] text-sm text-[#F5F5F0] border border-white/10 focus:border-[#C9A96E] focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#A6A6A0] mb-2">
                          Business Model
                        </label>
                        <select
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-[#181818] text-sm text-[#F5F5F0] border border-white/10 focus:border-[#C9A96E] focus:outline-none transition-colors"
                        >
                          <option value="B2B / Professional Service">B2B / Professional Service</option>
                          <option value="Hospitality / Retail / Local Brand">Hospitality / Retail / Local Brand</option>
                          <option value="Direct-to-Consumer / E-Commerce">Direct-to-Consumer / E-Commerce</option>
                          <option value="Education / Course / Coaching">Education / Course / Coaching</option>
                          <option value="Healthcare / Clinic / Practice">Healthcare / Clinic / Practice</option>
                          <option value="Other Commercial Sector">Other Commercial Sector</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 4: Service Interest & Approximate Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#A6A6A0] mb-2">
                          What do you need help with?
                        </label>
                        <select
                          name="serviceInterest"
                          value={formData.serviceInterest}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-[#181818] text-sm text-[#F5F5F0] border border-white/10 focus:border-[#C9A96E] focus:outline-none transition-colors"
                        >
                          <option value="Full Growth Architecture (Strategy + Ads + Creative)">Full Growth Architecture (Strategy + Ads + Creative)</option>
                          <option value="Performance Marketing (Meta / Google Ads)">Performance Marketing (Meta / Google Ads)</option>
                          <option value="Social Media & Short-Form Video Production">Social Media & Short-Form Video Production</option>
                          <option value="Funnels & Lead Generation Systems">Funnels & Lead Generation Systems</option>
                          <option value="Market Research & Positioning Strategy">Market Research & Positioning Strategy</option>
                          <option value="Job-Ready Program Enrollment Inquiry">Job-Ready Program Enrollment Inquiry</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#A6A6A0] mb-2">
                          Approximate Monthly Budget
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-[#181818] text-sm text-[#F5F5F0] border border-white/10 focus:border-[#C9A96E] focus:outline-none transition-colors"
                        >
                          <option value="Under $1,500 / month (or ₹50,000 - ₹1 Lakh)">Under $1,500 / month (or ₹50,000 - ₹1 Lakh)</option>
                          <option value="$1,500 - $3,500 / month (or ₹1 Lakh - ₹2.5 Lakh)">$1,500 - $3,500 / month (or ₹1 Lakh - ₹2.5 Lakh)</option>
                          <option value="$3,500 - $7,000 / month (or ₹2.5 Lakh - ₹5 Lakh)">$3,500 - $7,000 / month (or ₹2.5 Lakh - ₹5 Lakh)</option>
                          <option value="$7,000+ / month (Enterprise & Scaling)">$7,000+ / month (Enterprise & Scaling)</option>
                          <option value="Student / Individual Training Inquiry">Student / Individual Training Inquiry</option>
                        </select>
                      </div>
                    </div>

                    {/* Message Box */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#A6A6A0] mb-2">
                        Tell us about your challenge & goals <span className="text-[#C9A96E]">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Share your current marketing bottlenecks, existing channels, and what you aim to accomplish over the next 6-12 months."
                        className={`w-full px-4 py-3 rounded-xl bg-[#181818] text-sm text-[#F5F5F0] border focus:outline-none transition-colors ${
                          errors.message ? 'border-[#e06c75]' : 'border-white/10 focus:border-[#C9A96E]'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-[11px] text-[#e06c75] mt-1">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-[#F5F5F0] hover:bg-[#E4C98D] text-[#080808] font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>PROCESSING INTAKE...</span>
                      ) : (
                        <>
                          <span>BOOK A CALL →</span>
                        </>
                      )}
                    </button>

                    <p className="text-center text-[11px] text-[#777772]">
                      Zero spam. We do not sell your contact details or send unsolicited newsletters.
                    </p>
                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
