import React, { useState } from 'react';
import { PageRoute } from '../../types';
import { AGENCY_CONTACT } from '../../data/agencyData';
import { Mail, Phone, MessageSquare, ArrowUpRight, Instagram, Facebook, Linkedin, ShieldCheck, X } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [legalModalContent, setLegalModalContent] = useState<'privacy' | 'terms' | null>(null);

  const handleLinkClick = (page: PageRoute) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#050505] border-t border-white/10 pt-16 md:pt-24 pb-12 text-[#A6A6A0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Brand Statement */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 mb-12 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C9A96E]" />
              <span className="font-['Manrope',sans-serif] text-xs font-semibold tracking-[0.2em] text-[#C9A96E] uppercase">
                Commercial Showcase
              </span>
            </div>
            <h3 className="font-['Manrope',sans-serif] text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#F5F5F0]">
              Strategy. Creative. AI. Growth.
            </h3>
          </div>
          <p className="max-w-md text-sm text-[#777772] leading-relaxed">
            We don't just create content. We engineer systems that help ambitious businesses capture attention, generate qualified leads, and expand sustainably.
          </p>
        </div>

        {/* 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-16">
          
          {/* Column 1: Company */}
          <div>
            <h4 className="font-['Manrope',sans-serif] text-xs font-bold uppercase tracking-[0.18em] text-[#F5F5F0] mb-5">
              COMPANY
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick('about')}
                  className="hover:text-[#E4C98D] transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  About Commercial Showcase
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="hover:text-[#E4C98D] transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  Agency Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('case-studies')}
                  className="hover:text-[#E4C98D] transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  Selected Work & Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('insights')}
                  className="hover:text-[#E4C98D] transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  Strategic Insights & Articles
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('testimonials')}
                  className="hover:text-[#E4C98D] transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  Client Stories & Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="hover:text-[#E4C98D] transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  Work With Us / Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Programs */}
          <div>
            <h4 className="font-['Manrope',sans-serif] text-xs font-bold uppercase tracking-[0.18em] text-[#F5F5F0] mb-5">
              PROGRAMS & TRAINING
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick('programs')}
                  className="hover:text-[#E4C98D] transition-colors text-left"
                >
                  AI-Powered Digital Marketing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('programs')}
                  className="hover:text-[#E4C98D] transition-colors text-left"
                >
                  Social Media Marketing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('programs')}
                  className="hover:text-[#E4C98D] transition-colors text-left"
                >
                  Video Editing & Graphics Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('programs')}
                  className="hover:text-[#E4C98D] transition-colors text-left"
                >
                  On-the-Job Training (OJT)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('programs')}
                  className="hover:text-[#E4C98D] transition-colors text-left"
                >
                  Business Growth & Content Strategy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('programs')}
                  className="hover:text-[#E4C98D] transition-colors text-left"
                >
                  Data Analyst with Generative AI
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h4 className="font-['Manrope',sans-serif] text-xs font-bold uppercase tracking-[0.18em] text-[#F5F5F0] mb-5">
              CONNECT & SOCIAL
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a
                  href={AGENCY_CONTACT.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E4C98D] transition-colors flex items-center gap-2 group"
                >
                  <Instagram className="w-4 h-4 text-[#C9A96E] group-hover:scale-110 transition-transform" />
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#777772] group-hover:text-[#E4C98D]" />
                </a>
              </li>
              <li>
                <a
                  href={AGENCY_CONTACT.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E4C98D] transition-colors flex items-center gap-2 group"
                >
                  <Facebook className="w-4 h-4 text-[#C9A96E] group-hover:scale-110 transition-transform" />
                  <span>Facebook</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#777772] group-hover:text-[#E4C98D]" />
                </a>
              </li>
              <li>
                <a
                  href={AGENCY_CONTACT.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E4C98D] transition-colors flex items-center gap-2 group"
                >
                  <Linkedin className="w-4 h-4 text-[#C9A96E] group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#777772] group-hover:text-[#E4C98D]" />
                </a>
              </li>
              <li>
                <a
                  href={AGENCY_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E4C98D] transition-colors flex items-center gap-2 group"
                >
                  <MessageSquare className="w-4 h-4 text-[#C9A96E] group-hover:scale-110 transition-transform" />
                  <span>WhatsApp Chat</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#777772] group-hover:text-[#E4C98D]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-['Manrope',sans-serif] text-xs font-bold uppercase tracking-[0.18em] text-[#F5F5F0] mb-5">
              DIRECT INQUIRIES
            </h4>
            <div className="space-y-3.5 text-sm">
              <a
                href={`mailto:${AGENCY_CONTACT.email}`}
                className="flex items-start gap-2.5 text-[#A6A6A0] hover:text-[#E4C98D] transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                <span>{AGENCY_CONTACT.email}</span>
              </a>
              <a
                href={`tel:${AGENCY_CONTACT.phoneClean}`}
                className="flex items-center gap-2.5 text-[#A6A6A0] hover:text-[#E4C98D] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C9A96E] shrink-0" />
                <span>{AGENCY_CONTACT.phone}</span>
              </a>
              <div className="pt-2">
                <p className="text-xs text-[#777772] leading-relaxed">
                  Available for strategic client consultations, growth audits, and bespoke cohort enrollments.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#777772] gap-4">
          <p>© 2026 Commercial Showcase. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModalContent('privacy')}
              className="hover:text-[#F5F5F0] transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setLegalModalContent('terms')}
              className="hover:text-[#F5F5F0] transition-colors underline-offset-4 hover:underline"
            >
              Terms & Conditions
            </button>
          </div>
        </div>

      </div>

      {/* Privacy Policy & Terms Modal */}
      {legalModalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#151515] border border-white/15 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 md:p-8 relative text-[#F5F5F0]">
            <button
              onClick={() => setLegalModalContent(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-[#202020] text-[#A6A6A0] hover:text-[#F5F5F0]"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-2 mb-4 text-[#C9A96E]">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-xs uppercase tracking-wider font-semibold">
                {legalModalContent === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-4 font-['Manrope',sans-serif]">
              {legalModalContent === 'privacy' ? 'Commercial Showcase Privacy Policy' : 'Commercial Showcase Terms of Service'}
            </h3>

            <div className="text-sm text-[#A6A6A0] space-y-4 leading-relaxed font-light">
              {legalModalContent === 'privacy' ? (
                <>
                  <p>
                    Commercial Showcase respects your personal and business privacy. When you contact us or request a consultation, we collect the necessary contact details (such as your name, business email, phone number, and marketing requirements) exclusively to respond to your inquiry and evaluate your project feasibility.
                  </p>
                  <p>
                    We do not sell, rent, or trade client information to third-party data brokers. All communications are held in strict commercial confidence.
                  </p>
                  <p>
                    For inquiries regarding data privacy or removal requests, contact commercialshowcase@gmail.com.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    All strategic recommendations, creative assets, course syllabi, and campaign structures produced by Commercial Showcase are governed by clear commercial contracts established directly with clients and learners.
                  </p>
                  <p>
                    Commercial Showcase does not make speculative guarantees of revenue, ad spend return, or immediate employment. Marketing systems require real-world testing, operational execution, and consistent optimization.
                  </p>
                  <p>
                    By utilizing this website, you agree to engage in professional communication and respect intellectual property rights.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-right">
              <button
                onClick={() => setLegalModalContent(null)}
                className="px-5 py-2.5 rounded-lg bg-[#252525] text-white hover:bg-[#303030] text-sm font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
