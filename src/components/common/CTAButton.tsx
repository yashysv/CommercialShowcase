import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'gold';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  external?: boolean;
  className?: string;
  showArrow?: boolean;
  size?: 'sm' | 'md' | 'lg';
  id?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  variant = 'primary',
  children,
  onClick,
  href,
  external = false,
  className = '',
  showArrow = true,
  size = 'md',
  id
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-semibold tracking-wider',
    md: 'px-6 py-3.5 text-sm font-semibold tracking-wider',
    lg: 'px-8 py-4 text-base font-semibold tracking-wider'
  };

  const variantClasses = {
    primary: 
      'bg-[#F5F5F0] text-[#080808] hover:bg-[#E4C98D] hover:text-[#080808] border border-transparent shadow-[0_4px_20px_rgba(255,255,255,0.06)] hover:shadow-[0_8px_30px_rgba(201,169,110,0.25)]',
    secondary: 
      'bg-[#101010]/80 text-[#F5F5F0] border border-white/15 hover:border-[#C9A96E]/60 hover:bg-[#181818] hover:text-[#E4C98D]',
    gold:
      'bg-[#C9A96E] text-[#080808] hover:bg-[#E4C98D] hover:text-[#080808] border border-transparent shadow-[0_4px_24px_rgba(201,169,110,0.3)]'
  };

  const baseClasses = `group inline-flex items-center justify-center gap-2.5 rounded-[10px] uppercase font-['Manrope',sans-serif] transition-all duration-300 transform active:scale-[0.98] cursor-pointer text-center select-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      <span className="transition-transform duration-200 group-hover:-translate-x-0.5">{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
      )}
    </>
  );

  if (href) {
    return (
      <a
        id={id}
        href={href}
        onClick={onClick}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={baseClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button id={id} type="button" onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
};
