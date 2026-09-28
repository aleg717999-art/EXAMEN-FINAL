import React from 'react';

const ORIGEN = { transformOrigin: '32px 44px' };

const Tulipan: React.FC<{ nivel: number }> = ({ nivel }) => {
  const giro = (grados: number) => ({ ...ORIGEN, transform: `rotate(${grados * nivel}deg)` });
  return (
    <svg viewBox="0 0 64 80" className={`tulipan ${nivel === 1 ? 'lleno' : ''}`} aria-hidden>
      <path d="M32 44V78" stroke="#3E9B6B" strokeWidth="4" strokeLinecap="round" />
      <path d="M32 72C19 70 13 60 14 50c11 1 18 9 18 22Z" fill="#5CB98A" />
      <path className="petalo" style={giro(-26)} fill="#F58BB0"
        d="M32 44C18 42 14 24 22 8C30 16 34 30 32 44Z" />
      <path className="petalo" style={giro(26)} fill="#F58BB0"
        d="M32 44C46 42 50 24 42 8C34 16 30 30 32 44Z" />
      <path d="M32 46C22 38 24 18 32 4C40 18 42 38 32 46Z" fill="#E0457B" />
    </svg>
  );
};
export default Tulipan;
