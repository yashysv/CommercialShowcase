import React from 'react';
import { PageRoute } from '../types';
import { SectionHeading } from '../components/common/SectionHeading';
import { CTAButton } from '../components/common/CTAButton';
import { AGENCY_PRINCIPLES, TEAM_ROLES, ASSET_IMAGES } from '../data/agencyData';
import { Target, Cpu, Check, Users, Sparkles } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 md:pt-32">
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-white/10 bg-[#080808] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151515] border border-white/10 text-xs font-semibold text-[#C9A96E] uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
              ABOUT COMMERCIAL SHOWCASE
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#F5F5F0] tracking-tight leading-[1.08] mb-6 font-['Manrope',sans-serif]">
              Strategy. Creativity. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F0] via-[#E4C98D] to-[#C9A96E]">
                Technology. Growth.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#A6A6A0] leading-relaxed font-light">
              Commercial Showcase is an AI-driven digital marketing and growth agency that bridges the gap between commercial strategy and creative execution. We engineer systematic acquisition architectures that convert attention into sustainable enterprise value.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section id="founder-story" className="py-20 md:py-28 bg-[#101010] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Founder Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#181818] shadow-2xl group">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img
                    src={ASSET_IMAGES.founder}
                    alt="Yash Virulkar - Founder & Director, Commercial Showcase"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-75" />
                </div>
                
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#080808]/90 backdrop-blur-md border border-white/10">
                  <h3 className="text-lg font-bold text-[#F5F5F0] font-['Manrope',sans-serif]">
                    Yash Virulkar
                  </h3>
                  <p className="text-xs font-semibold text-[#C9A96E] uppercase tracking-wider">
                    Founder & Director, Commercial Showcase
                  </p>
                </div>
              </div>
            </div>

            {/* Founder Narrative */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="text-xs uppercase tracking-widest font-semibold text-[#C9A96E] mb-3">
                FOUNDER'S PERSPECTIVE
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold text-[#F5F5F0] mb-6 font-['Manrope',sans-serif] leading-tight">
                "Marketing should be connected to business outcomes, not just content output."
              </h2>

              <div className="space-y-4 text-base text-[#A6A6A0] leading-relaxed font-light mb-8">
                <p>
                  Yash built Commercial Showcase around a straightforward conviction: the digital agency industry had become obsessed with decorative outputs while losing touch with underlying unit economics. Far too many businesses were encouraged to produce endless social posts without a rigorous customer hypothesis, clear positioning, or reliable attribution.
                </p>
                <p>
                  As a marketing strategist, growth-focused brand builder, and AI-driven marketing professional, Yash approaches marketing as an integrated commercial operating system. By combining deep qualitative market research with disciplined creative testing and cutting-edge AI workflows, Commercial Showcase helps founders identify their ideal buyers and engineer scalable conversion funnels.
                </p>
                <p>
                  Under his leadership, the agency combines high-impact client engagements with practical training programs—ensuring that modern marketing skills, AI tools, and commercial accountability are shared with the next generation of marketing leaders.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10 text-xs font-semibold uppercase tracking-wider text-[#777772]">
                <span className="flex items-center gap-1.5 text-[#E4C98D]">
                  <Check className="w-3.5 h-3.5" /> Market Research
                </span>
                <span className="flex items-center gap-1.5 text-[#E4C98D]">
                  <Check className="w-3.5 h-3.5" /> AI Integration
                </span>
                <span className="flex items-center gap-1.5 text-[#E4C98D]">
                  <Check className="w-3.5 h-3.5" /> Performance Media
                </span>
                <span className="flex items-center gap-1.5 text-[#E4C98D]">
                  <Check className="w-3.5 h-3.5" /> Funnel Systems
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-28 bg-[#080808] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#C9A96E] block mb-4">
              AGENCY MISSION
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#F5F5F0] mb-8 font-['Manrope',sans-serif] leading-tight">
              Make Better Marketing Accessible. <br className="hidden sm:inline" />
              Make Growth More Strategic.
            </h2>
            <p className="text-lg text-[#A6A6A0] leading-relaxed font-light mb-10">
              We exist to demystify digital growth. By establishing clear market positioning, crafting purpose-driven creative, leveraging modern AI tooling, and adhering to measurable conversion data, we empower businesses and practitioners to build marketing systems that endure.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div className="p-6 rounded-xl bg-[#141414] border border-white/10">
                <Target className="w-6 h-6 text-[#C9A96E] mb-3" />
                <h3 className="text-base font-bold text-[#F5F5F0] mb-2 font-['Manrope',sans-serif]">
                  Commercial Rigor
                </h3>
                <p className="text-xs text-[#A6A6A0] leading-relaxed">
                  Every ad dollar, creative concept, and campaign angle is tested against verified revenue impact.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#141414] border border-white/10">
                <Cpu className="w-6 h-6 text-[#C9A96E] mb-3" />
                <h3 className="text-base font-bold text-[#F5F5F0] mb-2 font-['Manrope',sans-serif]">
                  AI Leverage
                </h3>
                <p className="text-xs text-[#A6A6A0] leading-relaxed">
                  Deploying generative models to rapidly test variations and distill complex consumer research.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#141414] border border-white/10">
                <Users className="w-6 h-6 text-[#C9A96E] mb-3" />
                <h3 className="text-base font-bold text-[#F5F5F0] mb-2 font-['Manrope',sans-serif]">
                  Capability Building
                </h3>
                <p className="text-xs text-[#A6A6A0] leading-relaxed">
                  Equipping marketing talent with hands-on, job-ready training rooted in real commercial workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 What Makes Us Different Principles */}
      <section className="py-20 md:py-28 bg-[#101010] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="OUR PRINCIPLES"
            headline="What Makes Us Different."
            supportingText="Five non-negotiable convictions that govern our client relationships, creative production, and strategic guidance."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AGENCY_PRINCIPLES.map((p) => (
              <div
                key={p.number}
                className="p-8 rounded-2xl bg-[#151515] border border-white/10 hover:border-[#C9A96E]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black font-mono text-[#C9A96E] mb-4 block">
                    {p.number}
                  </span>
                  <h3 className="text-lg font-bold text-[#F5F5F0] mb-3 font-['Manrope',sans-serif]">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#A6A6A0] leading-relaxed font-light">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Team Introduction Section (Professional Role-Based Structure) */}
      <section className="py-20 md:py-28 bg-[#080808] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="ORGANIZATIONAL ARCHITECTURE"
            headline="Cross-Functional Agency Structure."
            supportingText="Our multidisciplinary framework unites leadership, creative production, media buying, data analytics, and client success."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_ROLES.map((role, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#121212] border border-white/10 hover:border-[#C9A96E]/40 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-xs font-mono font-bold text-[#C9A96E] mb-4">
                  {role.role.split(' ').map(w => w[0]).slice(0, 2).join('')}
                </div>
                
                <h3 className="text-base font-bold text-[#F5F5F0] mb-1 font-['Manrope',sans-serif]">
                  {role.role}
                </h3>
                
                <div className="text-xs font-semibold text-[#C9A96E] mb-3">
                  {role.department}
                </div>

                <p className="text-xs text-[#A6A6A0] leading-relaxed mb-4">
                  {role.responsibility}
                </p>

                <div className="pt-3 border-t border-white/5 text-[11px] text-[#777772]">
                  Focus: <span className="text-[#E4C98D]">{role.focus}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Page CTA */}
      <section className="py-20 bg-[#0c0c0c] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F5F0] mb-4 font-['Manrope',sans-serif]">
            Ready to Build a Strategic Growth System?
          </h2>
          <p className="text-base text-[#A6A6A0] mb-8 font-light">
            Schedule a strategic discovery session to evaluate your current customer acquisition channels.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTAButton variant="primary" onClick={() => onNavigate('contact')}>
              WORK WITH US
            </CTAButton>
            <CTAButton variant="secondary" onClick={() => onNavigate('services')}>
              EXPLORE SERVICES
            </CTAButton>
          </div>
        </div>
      </section>

    </div>
  );
};
