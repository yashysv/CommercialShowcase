import React, { useState } from 'react';
import { PageRoute } from '../types';
import { SectionHeading } from '../components/common/SectionHeading';
import { CTAButton } from '../components/common/CTAButton';
import { TESTIMONIALS, ASSET_IMAGES } from '../data/agencyData';
import { Quote, Play, CheckCircle2, ShieldCheck, UserCheck } from 'lucide-react';

interface TestimonialsPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<'all' | 'client' | 'learner'>('all');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const displayedList = filter === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.category === filter);

  return (
    <div className="pt-24 md:pt-32">
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-white/10 bg-[#080808] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151515] border border-white/10 text-xs font-semibold text-[#C9A96E] uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
              REPUTATION & FEEDBACK
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#F5F5F0] tracking-tight leading-[1.08] mb-6 font-['Manrope',sans-serif]">
              What Clients And <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F0] via-[#E4C98D] to-[#C9A96E]">
                Learners Say.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#A6A6A0] leading-relaxed font-light">
              Reflections from enterprise leaders, founders, and marketing cohort graduates on partnering with Commercial Showcase.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Video Case Highlight */}
      <section className="py-16 md:py-20 bg-[#101010] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-[#151515] border border-white/15 p-8 md:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C9A96E] mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#C9A96E]" />
                  FEATURED PARTNERSHIP SPOTLIGHT
                </div>
                
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F5F5F0] mb-4 font-['Manrope',sans-serif]">
                  "They diagnosed our business model before proposing a single marketing asset."
                </h2>

                <p className="text-base text-[#A6A6A0] leading-relaxed font-light mb-6">
                  "Working with Commercial Showcase felt fundamentally different from typical agency pitches. Instead of promising vanity followers or pushing generic templates, Yash and his team mapped our unit economics, diagnosed our customer drop-off points, and engineered a repeatable inbound funnel."
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#222222] border border-[#C9A96E]/40 flex items-center justify-center font-bold text-[#E4C98D]">
                    FD
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#F5F5F0]">Founder & Managing Director</h3>
                    <p className="text-xs text-[#A6A6A0]">Regional Hospitality & Enterprise Group</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-[#1a1a1a] border border-white/10 relative group">
                  <img
                    src={ASSET_IMAGES.caseAnalytics}
                    alt="Case Discussion Video Highlight"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button
                      onClick={() => setIsVideoModalOpen(true)}
                      className="w-16 h-16 rounded-full bg-[#C9A96E] text-[#080808] flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer"
                      aria-label="Play video review spotlight"
                    >
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </button>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md text-[11px] text-[#A6A6A0] text-center">
                    Strategy Diagnostic Overview & Executive Debrief
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Video Modal Player (Clean Modal with Narrative Transcript) */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="bg-[#151515] border border-white/20 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative text-[#F5F5F0]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-[#C9A96E] uppercase tracking-wider">
                Video Case Briefing
              </span>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="p-2 rounded-lg bg-[#252525] text-white"
              >
                ✕
              </button>
            </div>

            <div className="aspect-[16/9] rounded-xl overflow-hidden bg-[#0c0c0c] border border-white/10 flex flex-col items-center justify-center text-center p-6 mb-6">
              <div className="w-14 h-14 rounded-full bg-[#1f1f1f] flex items-center justify-center text-[#C9A96E] mb-3">
                <Play className="w-6 h-6 fill-current ml-1" />
              </div>
              <h4 className="text-lg font-bold mb-2">Executive Partner Debrief</h4>
              <p className="text-xs text-[#A6A6A0] max-w-md">
                "Our previous campaigns produced endless likes but zero qualified sales conversations. Commercial Showcase rebuilt our intake funnel with automated qualification questions."
              </p>
            </div>

            <div className="text-xs text-[#777772] text-center">
              Recorded during quarterly partnership review session.
            </div>
          </div>
        </div>
      )}

      {/* Filter Tabs & Testimonial Cards */}
      <section className="py-20 md:py-28 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="VERIFIED PERSPECTIVES"
              headline="All Feedback."
              supportingText="Filtered by commercial client engagements and professional learning cohorts."
              className="mb-0"
            />

            <div className="flex items-center gap-2 p-1 rounded-xl bg-[#121212] border border-white/10 self-start sm:self-auto">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors ${
                  filter === 'all' ? 'bg-[#C9A96E] text-[#080808]' : 'text-[#A6A6A0] hover:text-white'
                }`}
              >
                All Feedback
              </button>
              <button
                onClick={() => setFilter('client')}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors ${
                  filter === 'client' ? 'bg-[#C9A96E] text-[#080808]' : 'text-[#A6A6A0] hover:text-white'
                }`}
              >
                Agency Clients
              </button>
              <button
                onClick={() => setFilter('learner')}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors ${
                  filter === 'learner' ? 'bg-[#C9A96E] text-[#080808]' : 'text-[#A6A6A0] hover:text-white'
                }`}
              >
                Cohort Learners
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedList.map((item) => (
              <div
                key={item.id}
                className="p-8 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#C9A96E]/40 transition-all duration-300 flex flex-col justify-between shadow-[0_8px_25px_rgba(0,0,0,0.5)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1 text-[#C9A96E]">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-sm">★</span>
                      ))}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#181818] text-[#A6A6A0] border border-white/5">
                      {item.category === 'client' ? 'Commercial Client' : 'Program Graduate'}
                    </span>
                  </div>

                  <Quote className="w-8 h-8 text-[#C9A96E]/20 mb-3" />

                  <p className="text-sm sm:text-base text-[#F5F5F0] leading-relaxed mb-6 font-light italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <div className="text-sm font-bold text-[#E4C98D] font-['Manrope',sans-serif]">
                    {item.author}
                  </div>
                  <div className="text-xs text-[#A6A6A0] mt-0.5">
                    {item.role} • {item.organization}
                  </div>
                  <div className="mt-3 text-[11px] text-[#777772] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A96E]" />
                    <span>Focus: {item.impactHighlight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Compliance & Trust Notice */}
          <div className="mt-16 p-6 rounded-2xl bg-[#101010] border border-white/5 flex items-start gap-4 text-xs text-[#777772] max-w-3xl mx-auto">
            <ShieldCheck className="w-5 h-5 text-[#C9A96E] shrink-0 mt-0.5" />
            <p leading-relaxed>
              To maintain strict client confidentiality and comply with non-disclosure obligations, specific brand identities, verified billing records, and personal identities are represented through generalized organizational descriptors.
            </p>
          </div>

        </div>
      </section>

      {/* Page CTA */}
      <section className="py-20 bg-[#0c0c0c] text-center border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F5F0] mb-4 font-['Manrope',sans-serif]">
            Ready to Experience Structured Marketing?
          </h2>
          <p className="text-base text-[#A6A6A0] mb-8 font-light">
            Whether you want to commission an agency growth system or upskill your team, we're ready to assist.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTAButton variant="primary" onClick={() => onNavigate('contact')}>
              WORK WITH US
            </CTAButton>
            <CTAButton variant="secondary" onClick={() => onNavigate('programs')}>
              EXPLORE PROGRAMS
            </CTAButton>
          </div>
        </div>
      </section>

    </div>
  );
};
