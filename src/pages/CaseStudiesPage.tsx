import React, { useState } from 'react';
import { PageRoute, CaseStudyItem } from '../types';
import { SectionHeading } from '../components/common/SectionHeading';
import { CTAButton } from '../components/common/CTAButton';
import { CASE_STUDIES, ASSET_IMAGES } from '../data/agencyData';
import { 
  ArrowUpRight, 
  Sparkles, 
  X, 
  CheckCircle2, 
  Lightbulb, 
  Target, 
  ShieldAlert,
  Layers,
  ArrowRight
} from 'lucide-react';

interface CaseStudiesPageProps {
  onNavigate: (page: PageRoute) => void;
}

type CategoryFilter = 'all' | 'social' | 'performance' | 'branding' | 'content' | 'strategy';

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudyItem | null>(null);

  // Extend with additional portfolio showcase items for variety
  const allStudies: CaseStudyItem[] = [
    ...CASE_STUDIES,
    {
      id: 'b2b-logistics-content',
      title: 'Commercial Fleet Demand Generation & Lead Engine',
      clientIndustry: 'Commercial Logistics & Fleet Operations',
      category: 'strategy',
      challenge: 'High cost per qualified quote request caused by generic industrial search keywords and unoptimized quotation forms.',
      objective: 'Filter out low-volume residential shipping queries and capture high-intent commercial fleet supply contracts.',
      strategy: 'Built an interactive freight volume calculator funnel and targeted supply chain executives with LinkedIn thought-leadership whitepapers.',
      execution: 'Deployed multi-step quotation workflows, launched account-based marketing sequences, and set up CRM alerts for fleet sizes > 5 vehicles.',
      outcome: 'Significant improvement in qualified commercial quote volume and higher sales team close rate on commercial contract bids.',
      learnings: 'B2B buyers convert when calculation friction is minimized and commercial pricing transparency is provided upfront.',
      image: ASSET_IMAGES.caseAnalytics,
      tags: ['B2B Growth', 'Funnel Optimization', 'Lead Qualification', 'Enterprise Strategy']
    },
    {
      id: 'fine-jewelry-social',
      title: 'Heritage Craft Storytelling & Meta Ads Scalability',
      clientIndustry: 'Artisan Fine Jewelry & Bespoke Gold',
      category: 'social',
      challenge: 'High creative fatigue on static product catalog ads and fierce competition from synthetic diamond discounters.',
      objective: 'Communicate authentic artisanal craftsmanship, custom heirloom provenance, and build private consultation bookings.',
      strategy: 'Developed macro cinematic video Reels showing goldsmith stone-setting, customer consultation stories, and VIP appointment booking.',
      execution: 'Produced high-definition jewelry macro videos, created private WhatsApp VIP salon booking flows, and tested aspirational bridal messaging.',
      outcome: 'Substantial surge in private studio consultation bookings and improved direct customer lifetime value.',
      learnings: 'High-ticket luxury purchases require sensory immersion, artisan intimacy, and white-glove direct messaging.',
      image: ASSET_IMAGES.caseCafe,
      tags: ['Luxury Branding', 'Short-Form Video', 'VIP Inbound Funnel', 'Craft Storytelling']
    }
  ];

  const filteredStudies = activeFilter === 'all'
    ? allStudies
    : allStudies.filter(s => s.category === activeFilter);

  const categories: { label: string; value: CategoryFilter }[] = [
    { label: 'ALL', value: 'all' },
    { label: 'SOCIAL', value: 'social' },
    { label: 'PERFORMANCE', value: 'performance' },
    { label: 'BRANDING', value: 'branding' },
    { label: 'CONTENT', value: 'content' },
    { label: 'STRATEGY', value: 'strategy' }
  ];

  return (
    <div className="pt-24 md:pt-32">
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-white/10 bg-[#080808] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151515] border border-white/10 text-xs font-semibold text-[#C9A96E] uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
              CASE ARCHIVES
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#F5F5F0] tracking-tight leading-[1.08] mb-6 font-['Manrope',sans-serif]">
              Work That Starts <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F0] via-[#E4C98D] to-[#C9A96E]">
                With A Problem.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#A6A6A0] leading-relaxed font-light">
              Explore how we diagnose core market challenges, build bespoke creative and performance systems, and convert market attention into measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Category Bar */}
      <section className="py-6 bg-[#0e0e0e] border-b border-white/10 sticky top-[68px] z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto scrollbar-none py-1">
            <span className="text-xs uppercase font-bold tracking-widest text-[#777772] mr-2 shrink-0">
              FILTER BY:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider transition-all duration-200 uppercase shrink-0 cursor-pointer ${
                  activeFilter === cat.value
                    ? 'bg-[#C9A96E] text-[#080808] shadow-[0_4px_20px_rgba(201,169,110,0.25)]'
                    : 'bg-[#151515] text-[#A6A6A0] hover:text-[#F5F5F0] hover:bg-[#1f1f1f] border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <div
                key={study.id}
                className="group rounded-2xl bg-[#121212] border border-white/10 overflow-hidden hover:border-[#C9A96E]/50 transition-all duration-300 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                <div>
                  {/* Visual mockup thumbnail */}
                  <div className="aspect-[4/3] relative overflow-hidden bg-[#181818]">
                    <img
                      src={study.image}
                      alt={study.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#080808]/85 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-[#C9A96E]">
                      {study.clientIndustry}
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    <div className="text-[10px] uppercase font-bold tracking-widest text-[#777772] mb-2">
                      Case #{study.id} • {study.category.toUpperCase()}
                    </div>

                    <h2 className="text-xl font-bold text-[#F5F5F0] mb-3 group-hover:text-[#E4C98D] transition-colors font-['Manrope',sans-serif]">
                      {study.title}
                    </h2>

                    <div className="space-y-2.5 text-xs text-[#A6A6A0] mb-6">
                      <p>
                        <strong className="text-[#F5F5F0]">Challenge: </strong>
                        {study.challenge}
                      </p>
                      <p>
                        <strong className="text-[#C9A96E]">Strategic Outcome: </strong>
                        {study.outcome}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {study.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-medium text-[#777772] px-2 py-0.5 rounded bg-[#181818] border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => setActiveModalStudy(study)}
                    className="w-full py-3 rounded-xl bg-[#181818] border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#F5F5F0] hover:text-[#080808] hover:bg-[#C9A96E] hover:border-transparent transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Full Strategic Breakdown</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Case Study Full Breakdown Modal */}
      {activeModalStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="bg-[#141414] border border-[#C9A96E]/50 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 relative text-[#F5F5F0] shadow-2xl">
            
            <button
              onClick={() => setActiveModalStudy(null)}
              className="absolute top-6 right-6 p-2.5 rounded-xl bg-[#202020] text-[#A6A6A0] hover:text-white"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e1e1e] text-xs font-semibold text-[#C9A96E] uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Strategic Case Breakdown
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold mb-2 font-['Manrope',sans-serif]">
              {activeModalStudy.title}
            </h3>

            <div className="text-sm text-[#C9A96E] font-medium mb-6">
              Industry Focus: {activeModalStudy.clientIndustry}
            </div>

            {/* Case Study Image Banner */}
            <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-8 border border-white/10">
              <img
                src={activeModalStudy.image}
                alt={activeModalStudy.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Structured Breakdown Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-sm">
              <div className="p-5 rounded-xl bg-[#181818] border border-white/5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e06c75] mb-2">
                  <ShieldAlert className="w-4 h-4" />
                  THE CHALLENGE
                </div>
                <p className="text-[#A6A6A0] leading-relaxed font-light">
                  {activeModalStudy.challenge}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#181818] border border-white/5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C9A96E] mb-2">
                  <Target className="w-4 h-4" />
                  THE OBJECTIVE
                </div>
                <p className="text-[#A6A6A0] leading-relaxed font-light">
                  {activeModalStudy.objective}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#181818] border border-white/5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E4C98D] mb-2">
                  <Layers className="w-4 h-4" />
                  THE STRATEGY
                </div>
                <p className="text-[#A6A6A0] leading-relaxed font-light">
                  {activeModalStudy.strategy}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#181818] border border-white/5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#98c379] mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  EXECUTION CHANNELS
                </div>
                <p className="text-[#A6A6A0] leading-relaxed font-light">
                  {activeModalStudy.execution}
                </p>
              </div>
            </div>

            {/* Outcome & Learnings */}
            <div className="p-6 rounded-2xl bg-[#0e0e0e] border border-white/10 mb-8 space-y-4 text-sm">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#C9A96E] mb-1">
                  QUALITATIVE OUTCOME
                </h4>
                <p className="text-base text-[#F5F5F0] font-medium">
                  {activeModalStudy.outcome}
                </p>
                <p className="text-xs text-[#777772] mt-1 italic">
                  *Specific commercial revenue and ad spend data are protected by mutual non-disclosure agreements.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#E4C98D] mb-1 flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-[#C9A96E]" />
                  KEY STRATEGIC LEARNING
                </h4>
                <p className="text-sm text-[#A6A6A0] leading-relaxed font-light">
                  {activeModalStudy.learnings}
                </p>
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="flex flex-wrap gap-1.5">
                {activeModalStudy.tags.map((t, idx) => (
                  <span key={idx} className="text-[11px] px-2.5 py-1 rounded bg-[#202020] text-[#A6A6A0]">
                    {t}
                  </span>
                ))}
              </div>
              <CTAButton
                variant="gold"
                size="sm"
                onClick={() => {
                  setActiveModalStudy(null);
                  onNavigate('contact');
                }}
              >
                DISCUSS SIMILAR PROJECT
              </CTAButton>
            </div>

          </div>
        </div>
      )}

      {/* Page CTA */}
      <section className="py-20 bg-[#0c0c0c] text-center border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F5F0] mb-4 font-['Manrope',sans-serif]">
            Have a Specific Business Challenge?
          </h2>
          <p className="text-base text-[#A6A6A0] mb-8 font-light">
            We will conduct a tailored diagnostic audit of your market space and customer touchpoints.
          </p>
          <CTAButton variant="primary" onClick={() => onNavigate('contact')}>
            REQUEST A GROWTH AUDIT
          </CTAButton>
        </div>
      </section>

    </div>
  );
};
