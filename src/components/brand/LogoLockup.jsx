import React from 'react';

const LogoLockup = ({ className = '', logoClassName = 'h-10', textClassName = '' }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img src="/assets/assets/logo_cropped_transparent.png" alt="AIA Logo" className={`w-auto ${logoClassName} logo-clean`} />
      <div className={`text-[10px] uppercase tracking-widest text-aia-red ${textClassName}`}>
        <div>Healthier, Longer,</div>
        <div>Better Lives</div>
      </div>
    </div>
  );
};

export default LogoLockup;
