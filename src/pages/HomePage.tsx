import React, { useState } from 'react';
import { PageRoute } from '../types';
import { CTAButton } from '../components/common/CTAButton';
import { SectionHeading } from '../components/common/SectionHeading';
import { SERVICES, PROGRAMS, CASE_STUDIES, TESTIMONIALS, WORK_PROCESS_STEPS, ASSET_IMAGES } from '../data/agencyData';
import { 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Layers, 
  Search, 
  Share2, 
  Compass, 
  Palette, 
  CheckCircle2, 
  ArrowUpRight,
  ShieldAlert,
  ChevronDown
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [activeProcessStep, setActiveProcessStep] = useState(0);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Search': return <Search className="w-5 h-5 text-[#C9A96E]" />;
      case 'Share2': return <Share2 className="w-5 h-5 text-[#C9A96E]" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#C9A96E]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-[#C9A96E]" />;
      case 'Palette': return <Palette className="w-5 h-5 text-[#C9A96E]" />;
      case 'Layers': return <Layers className="w-5 h-5 text-[#C9A96E]" />;
      default: return <Sparkles className="w-5 h-5 text-[#C9A96E]" />;
    }
  };

  return (
    <div className="relative">
      
      {/* ===================================================
          1. HERO SECTION (85-95vh)
      =================================================== */}
      <section 
        id="home-hero" 
        className="relative min-h-[90vh] md:min-h-[94vh] pt-28 md:pt-36 pb-16 flex flex-col justify-center overflow-hidden border-b border-white/10"
      >
        {/* Subtle radial spotlight background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#C9A96E]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />
        
        {/* Subtle grid texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headline & Messaging */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#151515] border border-white/15 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#C9A96E] animate-pulse" />
                <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A96E] font-['Manrope',sans-serif]">
                  AI-Driven Digital Marketing & Growth
                </span>
              </div>

              {/* Major Headline */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold text-[#F5F5F0] tracking-tight leading-[1.04] mb-6 font-['Manrope',sans-serif]">
                Marketing That <br className="hidden sm:inline" />
                Turns <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F0] via-[#E4C98D] to-[#C9A96E]">Attention</span> <br className="hidden sm:inline" />
                Into Growth.
              </h1>

              {/* Supporting Pillars Pills */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
                {['Strategy.', 'Creative.', 'AI.', 'Performance.'].map((pillar, idx) => (
                  <span
                    key={idx}
                    className="text-xs sm:text-sm font-semibold tracking-wide text-[#E4C98D] px-2.5 py-1 rounded-md bg-[#181818] border border-white/10"
                  >
                    {pillar}
                  </span>
                ))}
              </div>

              {/* Supporting Paragraph */}
              <p className="text-base sm:text-lg md:text-xl text-[#A6A6A0] leading-relaxed mb-8 max-w-xl font-light">
                We combine strategy, creativity, AI, performance marketing and data to build brands that attract attention, generate demand and create measurable growth.
              </p>

              {/* CTA Row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
                <CTAButton
                  id="hero-cta-work-with-us"
                  variant="primary"
                  size="md"
                  onClick={() => onNavigate('contact')}
                >
                  WORK WITH US
                </CTAButton>
                <CTAButton
                  id="hero-cta-explore-services"
                  variant="secondary"
                  size="md"
                  onClick={() => onNavigate('services')}
                >
                  EXPLORE SERVICES
                </CTAButton>
              </div>

              {/* Trust Statement */}
              <div className="pt-2 flex items-center gap-3 text-xs tracking-wider uppercase text-[#777772]">
                <span className="text-[#C9A96E]">●</span>
                <span>Strategy</span>
                <span className="text-white/20">•</span>
                <span>Creative</span>
                <span className="text-white/20">•</span>
                <span>Performance</span>
                <span className="text-white/20">•</span>
                <span>AI</span>
              </div>
            </div>

            {/* Right Column: High-End Visual Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#101010] shadow-[0_20px_60px_rgba(0,0,0,0.8)] group">
                
                {/* Visual Image */}
                <div className="aspect-[4/3] lg:aspect-[16/11] relative overflow-hidden">
                  <img
                    src={ASSET_IMAGES.hero}
                    alt="Commercial Showcase AI-Driven Growth Architecture"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />
                </div>

                {/* Floating Metric Badges with Depth */}
                <div className="absolute top-4 left-4 p-3 rounded-xl bg-[#0e0e0e]/90 backdrop-blur-md border border-white/15 text-left shadow-lg">
                  <div className="text-[10px] uppercase font-bold tracking-widest text-[#C9A96E] mb-0.5">
                    Conversion Architecture
                  </div>
                  <div className="text-sm font-bold text-[#F5F5F0]">
                    Demand & Lead Engines
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 p-3 rounded-xl bg-[#0e0e0e]/90 backdrop-blur-md border border-[#C9A96E]/30 text-right shadow-lg">
                  <div className="text-[10px] uppercase font-bold tracking-widest text-[#A6A6A0] mb-0.5">
                    Methodology
                  </div>
                  <div className="text-xs font-semibold text-[#E4C98D] flex items-center gap-1.5 justify-end">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
                    Strategy First. Growth Always.
                  </div>
                </div>
              </div>

              {/* Sub-decorative accent ring */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 w-32 h-32 rounded-full border border-white/10 -z-10 pointer-events-none" />
            </div>

          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="mt-12 flex flex-col items-center justify-center text-[#777772] text-xs font-medium tracking-widest uppercase">
          <span className="mb-1 text-[10px]">SCROLL TO EXPLORE</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#C9A96E]" />
        </div>
      </section>

      {/* ===================================================
          2. TRUST / CREDIBILITY STRIP
      =================================================== */}
      <section id="trust-strip" className="py-6 bg-[#0c0c0c] border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14 text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#A6A6A0] uppercase font-['Manrope',sans-serif]">
            <span className="hover:text-[#E4C98D] transition-colors">MARKETING</span>
            <span className="text-[#C9A96E]">/</span>
            <span className="hover:text-[#E4C98D] transition-colors">AI</span>
            <span className="text-[#C9A96E]">/</span>
            <span className="hover:text-[#E4C98D] transition-colors">CREATIVE</span>
            <span className="text-[#C9A96E]">/</span>
            <span className="hover:text-[#E4C98D] transition-colors">PERFORMANCE</span>
            <span className="text-[#C9A96E]">/</span>
            <span className="hover:text-[#E4C98D] transition-colors">DATA</span>
            <span className="text-[#C9A96E]">/</span>
            <span className="hover:text-[#E4C98D] transition-colors">GROWTH</span>
          </div>
        </div>
      </section>

      {/* ===================================================
          3. WHAT WE DO (4 STRATEGIC PILLARS)
      =================================================== */}
      <section id="what-we-do" className="py-20 md:py-28 bg-[#080808] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="WHAT WE DO"
            headline="We Build Growth Systems, Not Random Marketing."
            supportingText="Commercial Showcase helps businesses understand their market, position their brand, attract attention and convert that attention into qualified leads and paying customers."
          />

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Pillar 1 */}
            <div className="group relative p-8 rounded-xl bg-[#121212] border border-white/10 hover:border-[#C9A96E]/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#777772] group-hover:text-[#C9A96E] transition-colors font-['Manrope',sans-serif]">
                    01
                  </span>
                  <Search className="w-5 h-5 text-[#A6A6A0] group-hover:text-[#E4C98D] transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#F5F5F0] mb-3 group-hover:text-[#E4C98D] transition-colors font-['Manrope',sans-serif]">
                  INSIGHT
                </h3>
                <p className="text-sm text-[#A6A6A0] leading-relaxed">
                  Market research, customer understanding, competitor intelligence, and demand validation before any budget is spent.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-[#777772] group-hover:text-[#C9A96E] transition-colors">
                <span>Discovery Foundation</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="group relative p-8 rounded-xl bg-[#121212] border border-white/10 hover:border-[#C9A96E]/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#777772] group-hover:text-[#C9A96E] transition-colors font-['Manrope',sans-serif]">
                    02
                  </span>
                  <Compass className="w-5 h-5 text-[#A6A6A0] group-hover:text-[#E4C98D] transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#F5F5F0] mb-3 group-hover:text-[#E4C98D] transition-colors font-['Manrope',sans-serif]">
                  STRATEGY
                </h3>
                <p className="text-sm text-[#A6A6A0] leading-relaxed">
                  Positioning, compelling offers, distribution channel selection, and custom growth roadmaps aligned to business economics.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-[#777772] group-hover:text-[#C9A96E] transition-colors">
                <span>Commercial Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="group relative p-8 rounded-xl bg-[#121212] border border-white/10 hover:border-[#C9A96E]/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#777772] group-hover:text-[#C9A96E] transition-colors font-['Manrope',sans-serif]">
                    03
                  </span>
                  <Layers className="w-5 h-5 text-[#A6A6A0] group-hover:text-[#E4C98D] transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#F5F5F0] mb-3 group-hover:text-[#E4C98D] transition-colors font-['Manrope',sans-serif]">
                  EXECUTION
                </h3>
                <p className="text-sm text-[#A6A6A0] leading-relaxed">
                  Commercial creative production, high-impact social content, paid advertising campaigns, conversion funnels, and CRM flows.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-[#777772] group-hover:text-[#C9A96E] transition-colors">
                <span>High-Velocity Assets</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="group relative p-8 rounded-xl bg-[#121212] border border-white/10 hover:border-[#C9A96E]/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#777772] group-hover:text-[#C9A96E] transition-colors font-['Manrope',sans-serif]">
                    04
                  </span>
                  <TrendingUp className="w-5 h-5 text-[#A6A6A0] group-hover:text-[#E4C98D] transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#F5F5F0] mb-3 group-hover:text-[#E4C98D] transition-colors font-['Manrope',sans-serif]">
                  OPTIMIZATION
                </h3>
                <p className="text-sm text-[#A6A6A0] leading-relaxed">
                  Attribution modeling, rigorous A/B creative testing, conversion rate optimization, and systematic budget reallocation.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-[#777772] group-hover:text-[#C9A96E] transition-colors">
                <span>Continuous Scaling</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================
          4. SERVICES PREVIEW (6 DETAILED CARDS)
      =================================================== */}
      <section id="services-preview" className="py-20 md:py-28 bg-[#101010] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading
              eyebrow="OUR SERVICES"
              headline="Everything Your Growth Engine Needs."
              supportingText="Comprehensive marketing capabilities engineered to solve customer acquisition bottlenecks, build brand recall, and establish sustainable pipeline."
              className="mb-0"
            />
            <CTAButton
              variant="secondary"
              size="sm"
              onClick={() => onNavigate('services')}
              className="shrink-0"
            >
              VIEW ALL SERVICES
            </CTAButton>
          </div>

          {/* 6 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="group relative p-8 rounded-2xl bg-[#151515] border border-white/10 hover:border-[#C9A96E]/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold font-mono tracking-widest text-[#C9A96E] px-2 py-1 rounded bg-[#080808] border border-white/10">
                      {srv.number}
                    </span>
                    <div className="p-2.5 rounded-lg bg-[#1c1c1c] border border-white/5">
                      {getServiceIcon(srv.iconName)}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#F5F5F0] mb-2 font-['Manrope',sans-serif] group-hover:text-[#E4C98D] transition-colors">
                    {srv.title}
                  </h3>
                  
                  <p className="text-xs font-semibold text-[#A6A6A0] mb-4 tracking-wide uppercase">
                    {srv.subtitle}
                  </p>

                  <p className="text-sm text-[#A6A6A0] leading-relaxed mb-6 font-light">
                    {srv.solution}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-xs font-bold uppercase tracking-wider text-[#C9A96E] hover:text-[#E4C98D] flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                  <span className="text-[11px] text-[#777772]">Full-Service Integration</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================================================
          5. AGENCY DIFFERENTIATOR (TRADITIONAL VS COMMERCIAL SHOWCASE)
      =================================================== */}
      <section id="agency-differentiator" className="py-20 md:py-28 bg-[#080808] border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            align="center"
            eyebrow="AGENCY PHILOSOPHY"
            headline="Most Agencies Start With Content. We Start With The Business."
            supportingText="Every campaign starts with a business problem—not a content calendar."
          />

          {/* Split Comparison Matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
            
            {/* Traditional Approach */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#121212]/70 border border-white/10 relative">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#777772] mb-6">
                <ShieldAlert className="w-4 h-4 text-[#777772]" />
                <span>TRADITIONAL AGENCY APPROACH</span>
              </div>

              <div className="flex flex-wrap items-center gap-2 sm:gap-3 py-6 font-mono text-xs sm:text-sm text-[#A6A6A0]">
                <span className="px-3 py-2 rounded bg-[#181818] border border-white/5">Post</span>
                <span>→</span>
                <span className="px-3 py-2 rounded bg-[#181818] border border-white/5">Boost</span>
                <span>→</span>
                <span className="px-3 py-2 rounded bg-[#181818] border border-white/5">Hope</span>
                <span>→</span>
                <span className="px-3 py-2 rounded bg-[#181818] border border-white/5">Repeat</span>
              </div>

              <div className="mt-6 space-y-3 text-sm text-[#777772] leading-relaxed">
                <p>• Demands arbitrary output quantity rather than verified market clarity.</p>
                <p>• Focuses on superficial vanity impressions that fail to generate pipeline.</p>
                <p>• Leaves positioning and customer offer problems completely unsolved.</p>
              </div>
            </div>

            {/* Commercial Showcase Approach */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#151515] border border-[#C9A96E]/40 relative shadow-[0_10px_40px_rgba(201,169,110,0.08)]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C9A96E] mb-6">
                <CheckCircle2 className="w-4 h-4 text-[#C9A96E]" />
                <span>COMMERCIAL SHOWCASE SYSTEM</span>
              </div>

              <div className="flex flex-wrap items-center gap-2 py-6 font-mono text-xs sm:text-xs text-[#F5F5F0]">
                <span className="px-2.5 py-1.5 rounded bg-[#202020] border border-[#C9A96E]/30 text-[#E4C98D]">Research</span>
                <span>→</span>
                <span className="px-2.5 py-1.5 rounded bg-[#202020] border border-[#C9A96E]/30 text-[#E4C98D]">Strategy</span>
                <span>→</span>
                <span className="px-2.5 py-1.5 rounded bg-[#202020] border border-[#C9A96E]/30 text-[#E4C98D]">Creative</span>
                <span>→</span>
                <span className="px-2.5 py-1.5 rounded bg-[#202020] border border-[#C9A96E]/30 text-[#E4C98D]">Distribution</span>
                <span>→</span>
                <span className="px-2.5 py-1.5 rounded bg-[#202020] border border-[#C9A96E]/30 text-[#E4C98D]">Measurement</span>
                <span>→</span>
                <span className="px-2.5 py-1.5 rounded bg-[#202020] border border-[#C9A96E]/30 text-[#E4C98D]">Optimization</span>
              </div>

              <div className="mt-6 space-y-3 text-sm text-[#A6A6A0] leading-relaxed font-light">
                <p>• Deep investigation of why target audiences hesitate and what triggers conversion.</p>
                <p>• Purpose-built creative assets mapped to calibrated buyer decision stages.</p>
                <p>• Direct attribution connecting media spend to qualified customer inquiries.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================
          6. PROGRAMS PREVIEW (EDUCATION DIVISION)
      =================================================== */}
      <section id="programs-preview" className="py-20 md:py-28 bg-[#101010] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading
              eyebrow="LEARN. BUILD. GET JOB-READY."
              headline="Don't Just Learn Marketing. Learn How Marketing Actually Works."
              supportingText="Practical training programs designed around commercial workflows, modern AI levers, and verified marketing operations."
              className="mb-0"
            />
            <CTAButton
              variant="gold"
              size="sm"
              onClick={() => onNavigate('programs')}
              className="shrink-0"
            >
              VIEW ALL PROGRAMS
            </CTAButton>
          </div>

          {/* 4 Featured Program Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROGRAMS.slice(0, 4).map((prog) => (
              <div
                key={prog.id}
                className="group p-6 rounded-2xl bg-[#151515] border border-white/10 hover:border-[#C9A96E]/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-[#C9A96E] mb-4">
                    <span>{prog.duration}</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-[#A6A6A0]">
                      {prog.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#F5F5F0] mb-3 group-hover:text-[#E4C98D] transition-colors font-['Manrope',sans-serif]">
                    {prog.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A6A6A0] leading-relaxed mb-5">
                    {prog.shortDescription}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {prog.skillsBuilt.slice(0, 4).map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-medium text-[#777772] group-hover:text-[#A6A6A0] px-2 py-0.5 rounded bg-[#101010] border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <button
                    onClick={() => onNavigate('programs')}
                    className="w-full text-xs font-bold uppercase tracking-wider text-[#F5F5F0] group-hover:text-[#C9A96E] flex items-center justify-between cursor-pointer py-1"
                  >
                    <span>View Curriculum</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================================================
          7. SUCCESS STORIES / CASE STUDIES
      =================================================== */}
      <section id="case-studies-preview" className="py-20 md:py-28 bg-[#080808] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading
              eyebrow="SELECTED WORK"
              headline="From Strategy to Results."
              supportingText="Representative client challenges transformed into structured positioning, creative production, and verified pipeline."
              className="mb-0"
            />
            <CTAButton
              variant="secondary"
              size="sm"
              onClick={() => onNavigate('case-studies')}
              className="shrink-0"
            >
              VIEW ALL CASE STUDIES
            </CTAButton>
          </div>

          {/* 3 Case Study Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {CASE_STUDIES.map((study) => (
              <div
                key={study.id}
                className="group rounded-2xl bg-[#121212] border border-white/10 overflow-hidden hover:border-[#C9A96E]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container */}
                  <div className="aspect-[4/3] relative overflow-hidden bg-[#1a1a1a]">
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

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl font-bold text-[#F5F5F0] mb-3 group-hover:text-[#E4C98D] transition-colors font-['Manrope',sans-serif]">
                      {study.title}
                    </h3>
                    
                    <div className="space-y-3 text-xs sm:text-sm text-[#A6A6A0] mb-6">
                      <p>
                        <strong className="text-[#F5F5F0]">Challenge: </strong>
                        {study.challenge}
                      </p>
                      <p>
                        <strong className="text-[#C9A96E]">Outcome: </strong>
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
                    onClick={() => onNavigate('case-studies')}
                    className="w-full py-2.5 rounded-lg bg-[#181818] border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#F5F5F0] hover:text-[#080808] hover:bg-[#C9A96E] hover:border-transparent transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Read Strategic Breakdown</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================================================
          8. PROCESS (5 STEPS INTERACTIVE)
      =================================================== */}
      <section id="how-we-work" className="py-20 md:py-28 bg-[#101010] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="HOW WE WORK"
            headline="Simple Process. Serious Execution."
            supportingText="A disciplined 5-stage operating methodology ensuring no creative effort or advertising capital is ever wasted."
          />

          {/* Desktop Timeline (Horizontal) & Mobile (Vertical) */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative mt-12">
            {WORK_PROCESS_STEPS.map((item, index) => {
              const isActive = activeProcessStep === index;
              return (
                <div
                  key={item.step}
                  onClick={() => setActiveProcessStep(index)}
                  className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? 'bg-[#181818] border-[#C9A96E] shadow-[0_8px_30px_rgba(201,169,110,0.12)]'
                      : 'bg-[#141414] border-white/5 hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-2xl font-black font-mono ${isActive ? 'text-[#C9A96E]' : 'text-[#777772]'}`}>
                      {item.step}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#C9A96E]' : 'bg-transparent border border-white/20'}`} />
                  </div>

                  <h3 className={`text-base font-bold mb-1 font-['Manrope',sans-serif] ${isActive ? 'text-[#F5F5F0]' : 'text-[#A6A6A0]'}`}>
                    {item.name}
                  </h3>

                  <p className="text-xs font-semibold text-[#777772] mb-3">
                    {item.subtitle}
                  </p>

                  <p className="text-xs text-[#A6A6A0] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ===================================================
          9. TESTIMONIALS / CLIENT STORIES
      =================================================== */}
      <section id="client-stories" className="py-20 md:py-28 bg-[#080808] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading
              eyebrow="CLIENT STORIES"
              headline="Built With Clients. Proven In The Real World."
              supportingText="Perspectives from brand leaders and marketing practitioners who partnered with Commercial Showcase."
              className="mb-0"
            />
            <CTAButton
              variant="secondary"
              size="sm"
              onClick={() => onNavigate('testimonials')}
              className="shrink-0"
            >
              VIEW ALL TESTIMONIALS
            </CTAButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="p-8 rounded-2xl bg-[#141414] border border-white/10 flex flex-col justify-between shadow-[0_10px_25px_rgba(0,0,0,0.4)]"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#C9A96E] mb-6">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-sm">★</span>
                    ))}
                  </div>

                  <p className="text-sm sm:text-base text-[#F5F5F0] leading-relaxed mb-6 font-light italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <div className="text-sm font-bold text-[#E4C98D] font-['Manrope',sans-serif]">
                    {item.author}
                  </div>
                  <div className="text-xs text-[#A6A6A0]">
                    {item.role} • {item.organization}
                  </div>
                  <div className="mt-2 text-[11px] text-[#777772]">
                    Focus: {item.impactHighlight}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================================================
          10. FINAL CALL TO ACTION (CONVERSION PEAK)
      =================================================== */}
      <section id="final-cta" className="py-24 md:py-32 bg-[#0c0c0c] relative overflow-hidden text-center">
        {/* Subtle radial spotlight */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] bg-[#C9A96E]/8 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181818] border border-white/15 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C9A96E]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A96E]">
              Next Step
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#F5F5F0] tracking-tight leading-[1.1] mb-6 font-['Manrope',sans-serif]">
            Your Business Doesn't Need More Noise. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F0] via-[#E4C98D] to-[#C9A96E]">
              It Needs A Better Strategy.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#A6A6A0] max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Tell us where you are, where you want to go, and we'll help you build the marketing system to get there.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton
              id="final-cta-work-with-us"
              variant="primary"
              size="lg"
              onClick={() => onNavigate('contact')}
            >
              WORK WITH US
            </CTAButton>
            <CTAButton
              id="final-cta-book-a-call"
              variant="secondary"
              size="lg"
              onClick={() => onNavigate('contact')}
            >
              BOOK A CALL
            </CTAButton>
          </div>

          <div className="mt-10 text-xs text-[#777772] tracking-wider uppercase">
            Strict Confidentiality • No High-Pressure Pitch • Direct Strategic Diagnosis
          </div>

        </div>
      </section>

    </div>
  );
};
