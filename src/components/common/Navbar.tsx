import React, { useState, useEffect } from 'react';
import { PageRoute } from '../../types';
import { CTAButton } from './CTAButton';
import { Menu, X, ArrowUpRight, Phone, Mail } from 'lucide-react';
import { AGENCY_CONTACT } from '../../data/agencyData';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navItems: { label: string; page: PageRoute }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Programs', page: 'programs' },
    { label: 'Case Studies', page: 'case-studies' },
    { label: 'Insights', page: 'insights' },
    { label: 'Contact', page: 'contact' }
  ];

  const handleNavClick = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080808]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-transparent py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Refined Typographic Logo */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick('home')}
            className="group text-left cursor-pointer focus:outline-none flex flex-col"
          >
            <span className="font-['Manrope',sans-serif] text-base sm:text-lg font-extrabold tracking-[0.2em] text-[#F5F5F0] group-hover:text-[#C9A96E] transition-colors duration-200">
              COMMERCIAL
            </span>
            <span className="font-['Manrope',sans-serif] text-[10px] sm:text-[11px] font-semibold tracking-[0.32em] text-[#A6A6A0] group-hover:text-[#E4C98D] transition-colors duration-200">
              SHOWCASE
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  id={`nav-link-${item.page}`}
                  onClick={() => handleNavClick(item.page)}
                  className={`relative py-1 text-sm font-medium transition-colors duration-200 cursor-pointer focus:outline-none ${
                    isActive
                      ? 'text-[#E4C98D]'
                      : 'text-[#A6A6A0] hover:text-[#F5F5F0]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C9A96E] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <CTAButton
              id="nav-cta-work-with-us"
              size="sm"
              variant="primary"
              onClick={() => handleNavClick('contact')}
            >
              WORK WITH US
            </CTAButton>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-[#151515] border border-white/15 text-[#F5F5F0] hover:text-[#C9A96E] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-overlay"
          className="fixed inset-0 z-40 bg-[#080808]/98 backdrop-blur-xl flex flex-col justify-between pt-24 pb-8 px-6 lg:hidden overflow-y-auto"
        >
          <div className="flex flex-col space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9A96E]">
              Navigation
            </p>
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = currentPage === item.page;
                return (
                  <button
                    key={item.page}
                    id={`mobile-nav-link-${item.page}`}
                    onClick={() => handleNavClick(item.page)}
                    className={`flex items-center justify-between py-3 border-b border-white/5 text-xl font-bold tracking-tight text-left cursor-pointer transition-colors ${
                      isActive ? 'text-[#E4C98D]' : 'text-[#F5F5F0] hover:text-[#C9A96E]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className={`w-5 h-5 ${isActive ? 'text-[#C9A96E]' : 'text-[#777772]'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Footer & Quick Actions */}
          <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
            <CTAButton
              id="mobile-nav-cta-work"
              variant="primary"
              className="w-full"
              onClick={() => handleNavClick('contact')}
            >
              WORK WITH US
            </CTAButton>

            <div className="pt-2 text-xs text-[#A6A6A0] space-y-2">
              <a
                href={`mailto:${AGENCY_CONTACT.email}`}
                className="flex items-center gap-2 text-[#A6A6A0] hover:text-[#C9A96E]"
              >
                <Mail className="w-3.5 h-3.5 text-[#C9A96E]" />
                {AGENCY_CONTACT.email}
              </a>
              <a
                href={`tel:${AGENCY_CONTACT.phoneClean}`}
                className="flex items-center gap-2 text-[#A6A6A0] hover:text-[#C9A96E]"
              >
                <Phone className="w-3.5 h-3.5 text-[#C9A96E]" />
                {AGENCY_CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
