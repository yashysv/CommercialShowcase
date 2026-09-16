import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { AGENCY_CONTACT } from '../../data/agencyData';

export const WhatsAppFloating: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip on hover */}
      {isHovered && (
        <div className="hidden sm:flex items-center px-3.5 py-1.5 rounded-lg bg-[#151515] border border-[#C9A96E]/40 text-[#F5F5F0] text-xs font-medium shadow-[0_10px_25px_rgba(0,0,0,0.8)] backdrop-blur-md animate-fade-in pointer-events-none">
          <span>Chat with Commercial Showcase</span>
        </div>
      )}

      {/* Floating Button */}
      <a
        id="floating-whatsapp-btn"
        href={AGENCY_CONTACT.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Commercial Showcase on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-[#181818] border border-[#C9A96E]/50 text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#080808] transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_8px_30px_rgba(201,169,110,0.4)] transform hover:scale-105 active:scale-95"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A96E] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#C9A96E]"></span>
        </span>
        <MessageSquare className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
      </a>
    </div>
  );
};
