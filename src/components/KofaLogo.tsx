import React from 'react';

interface KofaLogoProps {
  variant?: 'light' | 'dark' | 'green' | 'default';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export const SankofaBirdIcon: React.FC<{ className?: string; color?: string; bgColor?: string }> = ({
  className = 'w-6 h-6',
  color = '#2c6748',
  bgColor = '#ffffff',
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Sankofa Bird Emblem"
    >
      {/* Outer circular background */}
      <circle cx="50" cy="50" r="48" fill={bgColor} />
      
      {/* Sankofa Bird Vector: head reaching backward holding egg */}
      <g fill={color} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Head and neck curving backward */}
        <path
          d="M 52 26 C 45 22, 38 24, 34 31 C 29 39, 31 47, 36 53 C 43 59, 52 59, 61 54 C 66 51, 68 46, 68 41 C 67 34, 62 30, 52 26 Z"
          fill={color}
        />
        {/* Bird Eye (cutout) */}
        <circle cx="43" cy="30" r="3.2" fill={bgColor} stroke="none" />
        {/* Beak holding the egg */}
        <path d="M 45 35 Q 49 39 48 42" stroke={color} strokeWidth="2.5" fill="none" />
        {/* The Golden Egg / Seed */}
        <circle cx="48" cy="42" r="3.6" fill={color} stroke="none" />
        
        {/* Curved Ribs / Pattern on Bird Body */}
        <path d="M 33 46 Q 38 41 47 43" stroke={bgColor} strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <path d="M 34 50 Q 42 46 54 48" stroke={bgColor} strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <path d="M 38 55 Q 46 52 59 53" stroke={bgColor} strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <path d="M 44 60 Q 52 57 65 57" stroke={bgColor} strokeWidth="2" strokeLinecap="round" fill="none" />
        
        {/* Elaborate Tail Feathers radiating up and right */}
        <path d="M 62 45 C 68 39, 74 34, 76 28" stroke={color} strokeWidth="3" strokeLinecap="round" />
        <path d="M 64 48 C 72 44, 80 40, 83 34" stroke={color} strokeWidth="3" strokeLinecap="round" />
        <path d="M 65 52 C 73 50, 82 48, 85 43" stroke={color} strokeWidth="3" strokeLinecap="round" />
        <path d="M 63 56 C 70 56, 78 57, 81 54" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        
        {/* Wing feathers / lower ridges */}
        <path d="M 61 58 L 65 63 L 59 63 L 64 68 L 57 67" fill={color} stroke={color} strokeWidth="1" />
        
        {/* Strong Legs */}
        <path d="M 48 66 L 48 76 M 54 66 L 54 76" stroke={color} strokeWidth="3.2" strokeLinecap="square" />
      </g>
    </svg>
  );
};

export const KofaLogo: React.FC<KofaLogoProps> = ({
  variant = 'default',
  className = '',
  size = 'md',
  onClick,
}) => {
  const isDark = variant === 'dark';
  
  const sizeClasses = {
    sm: 'h-8 text-sm',
    md: 'h-10 text-base',
    lg: 'h-12 text-xl',
  };

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-2 select-none ${onClick ? 'cursor-pointer hover:opacity-90 transition-opacity' : ''} ${className}`}
      id="kofa-brand-logo"
    >
      {/* Outer framing box matching the screenshot design [ [Icon] | KɵFA P/G ] */}
      <div
        className={`flex items-center rounded-md border p-1 transition-colors ${
          isDark
            ? 'border-[#3f6750] bg-[#122e20]/80 text-[#e4f5ea]'
            : 'border-[#2c6748] bg-transparent text-[#2c6748]'
        } ${sizeClasses[size]}`}
      >
        {/* Green Square with Bird Icon */}
        <div
          className={`flex items-center justify-center rounded bg-[#2c6748] p-0.5 shadow-sm ${iconSizes[size]}`}
        >
          <SankofaBirdIcon
            className="w-full h-full"
            color="#2c6748"
            bgColor="#f4fbf6"
          />
        </div>

        {/* Text Logo: KɵFA P/G with the horizontal slashed theta O */}
        <div className="flex items-center font-bold tracking-tight px-1.5 font-display">
          <span className="text-lg md:text-xl font-extrabold tracking-tight">K</span>
          <span className="relative inline-flex items-center justify-center text-lg md:text-xl font-extrabold mx-[1px]">
            <span>O</span>
            <span className="absolute inset-x-0 top-1/2 h-[2.5px] -translate-y-1/2 bg-current rounded-full"></span>
          </span>
          <span className="text-lg md:text-xl font-extrabold tracking-tight">FA</span>
          <span className="ml-1.5 text-lg md:text-xl font-extrabold tracking-tight opacity-90">P/G</span>
        </div>
      </div>
    </div>
  );
};
