import React from 'react';

const base = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor',
  strokeWidth: 2.4, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;

export const Check: React.FC = () => (
  <svg {...base} aria-hidden><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
);
export const Basura: React.FC = () => (
  <svg {...base} aria-hidden className="basura">
    <path d="M4 7h16M10 11v6M14 11v6M6 7l1 12h10l1-12M9 7V4h6v3" />
  </svg>
);
export const Lupa: React.FC = () => (
  <svg {...base} aria-hidden><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
);
