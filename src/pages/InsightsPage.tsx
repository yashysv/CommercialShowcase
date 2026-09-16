import React, { useState } from 'react';
import { PageRoute, ArticleItem } from '../types';
import { SectionHeading } from '../components/common/SectionHeading';
import { CTAButton } from '../components/common/CTAButton';
import { ARTICLES } from '../data/agencyData';
import { Clock, Calendar, ArrowRight, X, BookOpen, Share2, CheckCircle2 } from 'lucide-react';

interface InsightsPageProps {
  onNavigate: (page: PageRoute) => void;
}

type ArticleCategory = 'ALL' | 'MARKETING' | 'AI' | 'BRANDING' | 'PERFORMANCE' | 'CONTENT' | 'GROWTH';

export const InsightsPage: React.FC<InsightsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<ArticleCategory>('ALL');
  const [activeArticle, setActiveArticle] = useState<ArticleItem | null>(null);

  const categories: ArticleCategory[] = [
    'ALL',
    'MARKETING',
    'AI',
    'BRANDING',
    'PERFORMANCE',
    'CONTENT',
    'GROWTH'
  ];

  const filteredArticles = selectedCategory === 'ALL'
    ? ARTICLES
    : ARTICLES.filter(a => a.category === selectedCategory);

  return (
    <div className="pt-24 md:pt-32">
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-white/10 bg-[#080808] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151515] border border-white/10 text-xs font-semibold text-[#C9A96E] uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
              EDITORIAL & ANALYSIS
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#F5F5F0] tracking-tight leading-[1.08] mb-6 font-['Manrope',sans-serif]">
              Insights For People <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F0] via-[#E4C98D] to-[#C9A96E]">
                Building Businesses.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#A6A6A0] leading-relaxed font-light">
              Strategic essays on market positioning, performance advertising architecture, real AI leverage, and commercial growth systems.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Bar */}
      <section className="py-5 bg-[#0e0e0e] border-b border-white/10 sticky top-[68px] z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
            <span className="text-xs uppercase font-bold tracking-widest text-[#777772] mr-2 shrink-0">
              TOPICS:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold tracking-wider transition-all duration-200 uppercase shrink-0 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#C9A96E] text-[#080808] shadow-[0_4px_15px_rgba(201,169,110,0.25)]'
                    : 'bg-[#151515] text-[#A6A6A0] hover:text-[#F5F5F0] hover:bg-[#1c1c1c] border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="group p-8 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#C9A96E]/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#777772] mb-5">
                    <span className="px-2.5 py-1 rounded bg-[#1c1c1c] text-[10px] font-bold tracking-wider text-[#C9A96E] border border-white/5">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readTime}
                      </span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-[#F5F5F0] mb-3 group-hover:text-[#E4C98D] transition-colors font-['Manrope',sans-serif] leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-sm text-[#A6A6A0] leading-relaxed font-light mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <button
                    onClick={() => setActiveArticle(article)}
                    className="text-xs font-bold uppercase tracking-wider text-[#F5F5F0] group-hover:text-[#C9A96E] flex items-center gap-2 cursor-pointer transition-colors"
                  >
                    <span>Read Full Essay</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="bg-[#141414] border border-white/20 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 relative text-[#F5F5F0] shadow-2xl">
            
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-[#222222] text-[#A6A6A0] hover:text-white"
              aria-label="Close reader"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 text-xs text-[#C9A96E] uppercase font-bold tracking-widest mb-4">
              <span>{activeArticle.category}</span>
              <span>•</span>
              <span>{activeArticle.readTime}</span>
              <span>•</span>
              <span>{activeArticle.date}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold mb-6 font-['Manrope',sans-serif] leading-tight">
              {activeArticle.title}
            </h2>

            {/* Key Takeaways Box */}
            <div className="p-6 rounded-2xl bg-[#1a1a1a] border border-[#C9A96E]/30 mb-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#E4C98D] mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#C9A96E]" />
                EXECUTIVE SUMMARY & KEY PRINCIPLES
              </h3>
              <ul className="space-y-2">
                {activeArticle.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F5F5F0]">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Content Paragraphs */}
            <div className="space-y-6 text-base text-[#A6A6A0] leading-relaxed font-light">
              {activeArticle.content.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#777772]">
                Published by Commercial Showcase Strategic Editorial
              </div>
              <CTAButton
                variant="gold"
                size="sm"
                onClick={() => {
                  setActiveArticle(null);
                  onNavigate('contact');
                }}
              >
                DISCUSS WITH OUR TEAM
              </CTAButton>
            </div>

          </div>
        </div>
      )}

      {/* Page CTA */}
      <section className="py-20 bg-[#0c0c0c] text-center border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F5F0] mb-4 font-['Manrope',sans-serif]">
            Turn Strategic Thinking into Live Campaigns
          </h2>
          <p className="text-base text-[#A6A6A0] mb-8 font-light">
            We partner with businesses to execute these exact systems in their daily marketing operations.
          </p>
          <CTAButton variant="primary" onClick={() => onNavigate('contact')}>
            WORK WITH US
          </CTAButton>
        </div>
      </section>

    </div>
  );
};
