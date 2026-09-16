import React, { useState } from 'react';
import { PageRoute } from '../types';
import { SectionHeading } from '../components/common/SectionHeading';
import { CTAButton } from '../components/common/CTAButton';
import { SERVICES } from '../data/agencyData';
import { 
  Search, 
  Share2, 
  TrendingUp, 
  Compass, 
  Palette, 
  Layers, 
  AlertCircle, 
  CheckCircle, 
  Zap, 
  Check, 
  ArrowRight 
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<string>(SERVICES[0].id);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Search': return <Search className="w-6 h-6 text-[#C9A96E]" />;
      case 'Share2': return <Share2 className="w-6 h-6 text-[#C9A96E]" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-[#C9A96E]" />;
      case 'Compass': return <Compass className="w-6 h-6 text-[#C9A96E]" />;
      case 'Palette': return <Palette className="w-6 h-6 text-[#C9A96E]" />;
      case 'Layers': return <Layers className="w-6 h-6 text-[#C9A96E]" />;
      default: return <Zap className="w-6 h-6 text-[#C9A96E]" />;
    }
  };

  const handleContactAction = (serviceTitle: string) => {
    // Navigate to contact
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-24 md:pt-32">
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-white/10 bg-[#080808] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151515] border border-white/10 text-xs font-semibold text-[#C9A96E] uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
              CORE CAPABILITIES
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#F5F5F0] tracking-tight leading-[1.08] mb-6 font-['Manrope',sans-serif]">
              Marketing Services Built Around <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F0] via-[#E4C98D] to-[#C9A96E]">
                Business Goals.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#A6A6A0] leading-relaxed font-light">
              We design, execute, and optimize integrated marketing operations. Every engagement is rooted in rigorous research, purposeful creative assets, and clear commercial accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation Sticky Sub-Bar */}
      <div className="sticky top-[68px] z-30 bg-[#0c0c0c]/95 backdrop-blur-md border-b border-white/10 py-3 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between overflow-x-auto gap-4 scrollbar-none">
          <span className="text-xs uppercase font-bold tracking-widest text-[#777772] shrink-0">
            JUMP TO:
          </span>
          <div className="flex items-center gap-2">
            {SERVICES.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-[#A6A6A0] hover:text-[#E4C98D] hover:bg-[#181818] transition-all shrink-0 whitespace-nowrap"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 6 In-Depth Service Modules (Problem -> Solution -> Result) */}
      <div className="bg-[#080808] divide-y divide-white/10">
        {SERVICES.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className="py-20 md:py-28 scroll-mt-28"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-12 border-b border-white/10 gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono font-bold text-[#C9A96E] px-2.5 py-1 rounded bg-[#151515] border border-white/10">
                      SERVICE {service.number}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-[#777772]">
                      Integrated Growth Module
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F5F0] tracking-tight font-['Manrope',sans-serif]">
                    {service.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#C9A96E] font-medium mt-2">
                    {service.subtitle}
                  </p>
                </div>

                <CTAButton
                  variant="gold"
                  size="md"
                  onClick={() => handleContactAction(service.title)}
                  className="shrink-0"
                >
                  {service.ctaLabel}
                </CTAButton>
              </div>

              {/* 3 Strategic Columns: Problem, Solution, Result */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
                
                {/* Problem */}
                <div className="p-8 rounded-2xl bg-[#121212] border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e06c75] mb-4">
                      <AlertCircle className="w-4 h-4" />
                      <span>THE PROBLEM</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#F5F5F0] mb-3 font-['Manrope',sans-serif]">
                      What businesses struggle with:
                    </h3>
                    <p className="text-sm text-[#A6A6A0] leading-relaxed font-light">
                      {service.problem}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-[#777772]">
                    Friction Point Diagnosed
                  </div>
                </div>

                {/* Solution */}
                <div className="p-8 rounded-2xl bg-[#151515] border border-[#C9A96E]/40 shadow-[0_8px_30px_rgba(201,169,110,0.06)] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C9A96E] mb-4">
                      <Zap className="w-4 h-4" />
                      <span>OUR APPROACH</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#F5F5F0] mb-3 font-['Manrope',sans-serif]">
                      How Commercial Showcase solves it:
                    </h3>
                    <p className="text-sm text-[#F5F5F0] leading-relaxed font-light">
                      {service.solution}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-[#C9A96E]">
                    Engineered Methodology
                  </div>
                </div>

                {/* Result */}
                <div className="p-8 rounded-2xl bg-[#121212] border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#98c379] mb-4">
                      <CheckCircle className="w-4 h-4" />
                      <span>THE OUTCOME</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#F5F5F0] mb-3 font-['Manrope',sans-serif]">
                      What this is designed to improve:
                    </h3>
                    <p className="text-sm text-[#A6A6A0] leading-relaxed font-light">
                      {service.result}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-[#777772]">
                    Commercial Impact
                  </div>
                </div>

              </div>

              {/* Deliverables Scope Box */}
              <div className="p-8 rounded-2xl bg-[#101010] border border-white/10">
                <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5F5F0] mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C9A96E]" />
                  KEY DELIVERABLES & OPERATIONAL SCOPE
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {service.scope.map((item, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-[#161616] border border-white/5 text-sm text-[#A6A6A0]"
                    >
                      <Check className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>
        ))}
      </div>

      {/* Page CTA */}
      <section className="py-24 bg-[#0a0a0a] text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#F5F5F0] mb-6 font-['Manrope',sans-serif]">
            Not Sure Which Service Your Business Requires?
          </h2>
          <p className="text-base sm:text-lg text-[#A6A6A0] mb-8 font-light max-w-2xl mx-auto">
            Book an obligation-free strategy diagnosis. We evaluate your existing conversion channels and map out the highest-leverage marketing priority.
          </p>
          <CTAButton
            variant="primary"
            size="lg"
            onClick={() => onNavigate('contact')}
          >
            BOOK A STRATEGY DIAGNOSIS
          </CTAButton>
        </div>
      </section>

    </div>
  );
};
