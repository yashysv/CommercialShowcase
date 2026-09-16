import React, { useState } from 'react';
import { PageRoute, ProgramItem } from '../types';
import { SectionHeading } from '../components/common/SectionHeading';
import { CTAButton } from '../components/common/CTAButton';
import { PROGRAMS, ASSET_IMAGES, AGENCY_CONTACT } from '../data/agencyData';
import { 
  GraduationCap, 
  Clock, 
  CheckCircle2, 
  Briefcase, 
  Layers, 
  Cpu, 
  FolderCheck, 
  Award, 
  X, 
  MessageSquare,
  Sparkles
} from 'lucide-react';

interface ProgramsPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({ onNavigate }) => {
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);

  const handleEnrollClick = (prog: ProgramItem) => {
    setSelectedProgram(prog);
  };

  return (
    <div className="pt-24 md:pt-32">
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-white/10 bg-[#080808] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151515] border border-white/10 text-xs font-semibold text-[#C9A96E] uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
              EDUCATION & CAREER ADVANCEMENT
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#F5F5F0] tracking-tight leading-[1.08] mb-6 font-['Manrope',sans-serif]">
              Learn The Skills Businesses <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F0] via-[#E4C98D] to-[#C9A96E]">
                Actually Hire For.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#A6A6A0] leading-relaxed font-light">
              Practical programs combining AI, marketing, creative production, analytics and real-world execution. Built to transform theoretical knowledge into verified commercial execution.
            </p>
          </div>
        </div>
      </section>

      {/* Why Learn With Us Grid */}
      <section className="py-16 md:py-24 bg-[#101010] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="THE TRAINING ADVANTAGE"
            headline="Why Learn With Commercial Showcase?"
            supportingText="We do not teach outdated textbooks. Our curriculum mirrors live agency operations and the modern AI workflows used by top-tier marketing teams."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#151515] border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-[#1e1e1e] flex items-center justify-center text-[#C9A96E] mb-4">
                <FolderCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#F5F5F0] mb-2 font-['Manrope',sans-serif]">
                Practical Client Projects
              </h3>
              <p className="text-xs text-[#A6A6A0] leading-relaxed">
                Work on realistic client briefs and campaign structures rather than generic theoretical homework.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#151515] border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-[#1e1e1e] flex items-center justify-center text-[#C9A96E] mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#F5F5F0] mb-2 font-['Manrope',sans-serif]">
                AI-First Workflows
              </h3>
              <p className="text-xs text-[#A6A6A0] leading-relaxed">
                Master prompt-driven market research, ad creative synthesis, copy variation testing, and automated analytics.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#151515] border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-[#1e1e1e] flex items-center justify-center text-[#C9A96E] mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#F5F5F0] mb-2 font-['Manrope',sans-serif]">
                Industry-Oriented Curriculum
              </h3>
              <p className="text-xs text-[#A6A6A0] leading-relaxed">
                Constantly calibrated against current commercial demands across Meta, Google, and short-form algorithms.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#151515] border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-[#1e1e1e] flex items-center justify-center text-[#C9A96E] mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#F5F5F0] mb-2 font-['Manrope',sans-serif]">
                Direct Practitioner Mentorship
              </h3>
              <p className="text-xs text-[#A6A6A0] leading-relaxed">
                Receive constructive critique and strategic feedback directly from active agency strategists and producers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#151515] border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-[#1e1e1e] flex items-center justify-center text-[#C9A96E] mb-4">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#F5F5F0] mb-2 font-['Manrope',sans-serif]">
                Commercial Portfolio Building
              </h3>
              <p className="text-xs text-[#A6A6A0] leading-relaxed">
                Graduate with tangible proof-of-work: case studies, creative assets, and analytics reports you can demonstrate to employers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#151515] border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-[#1e1e1e] flex items-center justify-center text-[#C9A96E] mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#F5F5F0] mb-2 font-['Manrope',sans-serif]">
                Job-Readiness Support
              </h3>
              <p className="text-xs text-[#A6A6A0] leading-relaxed">
                Interview preparation, client proposal crafting, and freelance acquisition frameworks designed to prepare you for real opportunities.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 6 Program In-Depth Cards */}
      <section className="py-20 md:py-28 bg-[#080808] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="COURSE CATALOG"
            headline="All Available Programs."
            supportingText="Select a program to inspect syllabus modules, duration, tool mastery, and associated career pathways."
          />

          <div className="space-y-12">
            {PROGRAMS.map((prog, index) => (
              <div
                key={prog.id}
                className="p-8 md:p-12 rounded-3xl bg-[#121212] border border-white/10 hover:border-[#C9A96E]/50 transition-all duration-300 shadow-xl"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 pb-8 border-b border-white/10">
                  <div className="max-w-2xl">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full bg-[#181818] border border-white/10 text-xs font-semibold text-[#C9A96E]">
                        {prog.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-[#A6A6A0]">
                        <Clock className="w-3.5 h-3.5 text-[#C9A96E]" />
                        {prog.duration}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F5F5F0] mb-4 font-['Manrope',sans-serif]">
                      {prog.title}
                    </h2>

                    <p className="text-base text-[#A6A6A0] leading-relaxed font-light">
                      {prog.shortDescription}
                    </p>
                  </div>

                  <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
                    <CTAButton
                      variant="gold"
                      size="md"
                      onClick={() => handleEnrollClick(prog)}
                    >
                      ENROLL NOW
                    </CTAButton>
                    <a
                      href={`https://wa.me/${AGENCY_CONTACT.phoneClean}?text=Hi%20Commercial%20Showcase%2C%20I%20want%20to%20inquire%20about%20the%20${encodeURIComponent(prog.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-lg bg-[#181818] border border-white/10 text-xs font-semibold text-[#F5F5F0] hover:text-[#C9A96E] hover:border-[#C9A96E]/40 text-center flex items-center justify-center gap-2 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      Inquire on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Course Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
                  
                  {/* Column 1: What You'll Learn */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#E4C98D] mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
                      WHAT YOU'LL LEARN
                    </h3>
                    <ul className="space-y-2.5">
                      {prog.whatYouLearn.map((item, wIdx) => (
                        <li key={wIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A6A6A0]">
                          <CheckCircle2 className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 2: Skills & Who It's For */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#E4C98D] mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
                      SKILLS & TOOLS BUILT
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {prog.skillsBuilt.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded bg-[#181818] border border-white/10 text-xs text-[#F5F5F0]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#777772] mb-2">
                      WHO THIS IS FOR
                    </h4>
                    <p className="text-xs sm:text-sm text-[#A6A6A0] leading-relaxed">
                      {prog.whoItsFor}
                    </p>
                  </div>

                  {/* Column 3: Certification & Career Outcomes */}
                  <div className="p-6 rounded-2xl bg-[#0e0e0e] border border-white/5 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-[#C9A96E] mb-2">
                        CERTIFICATION
                      </div>
                      <p className="text-xs sm:text-sm text-[#F5F5F0] font-medium mb-6">
                        {prog.certification}
                      </p>

                      <div className="text-xs font-bold uppercase tracking-widest text-[#777772] mb-2">
                        CAREER PATHWAYS MAY INCLUDE
                      </div>
                      <ul className="space-y-1.5 text-xs text-[#A6A6A0]">
                        {prog.careerOutcomes.map((career, cIdx) => (
                          <li key={cIdx} className="flex items-center gap-2">
                            <span className="text-[#C9A96E]">→</span>
                            <span>{career}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-[#777772]">
                      *Curriculum designed to prepare learners for real workplace competency.
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Enrollment Quick Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-[#151515] border border-[#C9A96E]/40 rounded-2xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-[#222222] text-[#A6A6A0] hover:text-white"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold text-[#C9A96E] uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              Enrollment Inquiry
            </div>

            <h3 className="text-2xl font-bold text-[#F5F5F0] mb-2 font-['Manrope',sans-serif]">
              {selectedProgram.title}
            </h3>
            
            <p className="text-sm text-[#A6A6A0] mb-6">
              Duration: <strong className="text-[#F5F5F0]">{selectedProgram.duration}</strong> • Verified Certification
            </p>

            <div className="p-4 rounded-xl bg-[#101010] border border-white/10 mb-6 space-y-2 text-xs text-[#A6A6A0]">
              <p>• Speak directly with our admissions and mentor team.</p>
              <p>• Receive the detailed curriculum syllabus & cohort schedule.</p>
              <p>• Review flexible learning formats and hands-on project briefs.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${AGENCY_CONTACT.phoneClean}?text=Hi%20Commercial%20Showcase%2C%20I%20want%20to%20enroll%20in%20the%20${encodeURIComponent(selectedProgram.title)}.%20Please%20share%20upcoming%20batch%20dates.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-4 rounded-xl bg-[#C9A96E] text-[#080808] hover:bg-[#E4C98D] text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                Connect on WhatsApp
              </a>
              <button
                onClick={() => {
                  setSelectedProgram(null);
                  onNavigate('contact');
                }}
                className="flex-1 py-3.5 px-4 rounded-xl bg-[#202020] hover:bg-[#282828] text-white border border-white/10 text-xs font-bold uppercase tracking-wider text-center transition-colors"
              >
                Submit Web Inquiry
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Page CTA */}
      <section className="py-20 bg-[#0c0c0c] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F5F0] mb-4 font-['Manrope',sans-serif]">
            Have Questions Regarding Cohorts or In-House Training?
          </h2>
          <p className="text-base text-[#A6A6A0] mb-8 font-light">
            We also conduct custom enterprise upskilling workshops for corporate teams looking to integrate modern AI marketing workflows.
          </p>
          <CTAButton variant="primary" onClick={() => onNavigate('contact')}>
            SPEAK WITH OUR ADMISSIONS TEAM
          </CTAButton>
        </div>
      </section>

    </div>
  );
};
