import React from 'react';
import emblemSrc from '../assets/brand/emblem.png';
import wordmarkSrc from '../assets/brand/wordmark.png';
import lockupSrc from '../assets/brand/lockup.png';

/** The brand green the supplied artwork is drawn on. */
export const BRAND_GREEN = '#30593f';

interface KofaLogoProps {
  variant?: 'light' | 'dark' | 'green' | 'default';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

/**
 * Sankofa emblem. The source art has transparent corners outside its cream disc,
 * so it sits cleanly on either the cream page or a green panel.
 */
export const SankofaBirdIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <img src={emblemSrc} alt="" aria-hidden="true" className={`object-contain ${className}`} />
);

/**
 * Compact KΘFA P/G wordmark. The artwork is cream, so it needs a dark or green
 * surface behind it — `KofaLogo` supplies one.
 */
export const KofaWordmark: React.FC<{ className?: string }> = ({ className = 'h-6' }) => (
  <img src={wordmarkSrc} alt="Kofa Policy Group" className={`w-auto object-contain ${className}`} />
);

/**
 * Full stacked lockup with the tagline, for footers and other roomy placements.
 */
export const KofaLockup: React.FC<{ className?: string }> = ({ className = 'h-16' }) => (
  <img
    src={lockupSrc}
    alt="Kofa Policy Group — Sustainable Investments & Communities"
    className={`w-auto object-contain ${className}`}
  />
);

/**
 * Header brand mark: Sankofa emblem beside the wordmark, on a green plate so the
 * cream wordmark reads against the light page background.
 */
export const KofaLogo: React.FC<KofaLogoProps> = ({
  className = '',
  size = 'md',
  onClick,
}) => {
  const plate = {
    sm: 'gap-2 px-2.5 py-1.5 rounded-lg',
    md: 'gap-2.5 px-3 py-2 rounded-xl',
    lg: 'gap-3 px-3.5 py-2.5 rounded-xl',
  };
  const emblem = { sm: 'w-6 h-6', md: 'w-8 h-8', lg: 'w-10 h-10' };
  const mark = { sm: 'h-3.5', md: 'h-4.5', lg: 'h-5' };

  const Tag = onClick ? 'button' : 'div';

  return (
    <Tag
      {...(onClick ? { onClick, type: 'button' as const, 'aria-label': 'Kofa Policy Group — home' } : {})}
      className={`inline-flex shrink-0 items-center bg-[#30593f] select-none ${plate[size]} ${
        onClick ? 'cursor-pointer transition-opacity hover:opacity-90' : ''
      } ${className}`}
      id="kofa-brand-logo"
    >
      <SankofaBirdIcon className={emblem[size]} />
      <KofaWordmark className={mark[size]} />
    </Tag>
  );
};
