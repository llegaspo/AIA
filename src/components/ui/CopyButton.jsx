import React, { useState } from 'react';

const CopyButton = ({ value, size = 'sm' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (error) {
      setCopied(false);
    }
  };

  const sizeClass = size === 'xs' ? 'text-[10px] px-2 py-1' : 'text-xs px-3 py-1.5';

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`rounded-full border border-aia-red text-aia-red hover:bg-aia-red hover:text-white transition-colors uppercase tracking-wide ${sizeClass}`}
      aria-label={`Copy ${value}`}
    >
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
};

export default CopyButton;
