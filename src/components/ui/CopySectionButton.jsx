import React, { useState } from 'react';

const CopySectionButton = ({ getText, label = 'Copy to Clipboard' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const text = typeof getText === 'function' ? getText() : String(getText || '');
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="rounded-full bg-aia-red px-4 py-2 text-xs uppercase tracking-wide text-white hover:bg-aia-red/90 transition-colors shadow-sm"
      aria-label={label}
    >
      {copied ? 'Copied' : label}
    </button>
  );
};

export default CopySectionButton;
