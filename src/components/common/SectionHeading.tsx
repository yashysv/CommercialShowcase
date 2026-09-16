import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  headline: string;
  supportingText?: string;
  align?: 'left' | 'center';
  className?: string;
  id?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  headline,
  supportingText,
  align = 'left',
  className = '',
  id
}) => {
  return (
    <div
      id={id}
      className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center mx-auto' : 'text-left'} ${className}`}
    >
      {eyebrow && (
        <div className={`flex items-center gap-2 mb-3.5 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
          <span className="w-2 h-2 rounded-full bg-[#C9A96E]"></span>
          <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A96E] font-['Manrope',sans-serif]">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-[#F5F5F0] leading-[1.12] mb-4 md:mb-5 font-['Manrope',sans-serif]">
        {headline}
      </h2>
      {supportingText && (
        <p className={`text-base sm:text-lg text-[#A6A6A0] leading-[1.65] font-light ${align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {supportingText}
        </p>
      )}
    </div>
  );
};
