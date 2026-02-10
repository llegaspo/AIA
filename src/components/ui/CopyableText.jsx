import React from 'react';
import { Copy, Check } from 'lucide-react';

const CopyableText = ({ children, textToCopy, className = "" }) => {
    const [copied, setCopied] = React.useState(false);

    const handleCopy = (e) => {
        e.stopPropagation();
        const content = textToCopy || (typeof children === 'string' ? children : '');
        navigator.clipboard.writeText(content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div
            className={`group relative cursor-pointer hover:bg-aia-red/5 rounded-md transition-all duration-200 -mx-2 px-2 ${className}`}
            onClick={handleCopy}
            title="Click to copy"
        >
            <div className="flex items-start justify-between gap-4">
                <div className="flex-grow">{children}</div>
                <div className={`mt-1 transition-all duration-200 ${copied ? 'text-green-500 scale-110' : 'opacity-0 group-hover:opacity-40 text-aia-charcoal'}`}>
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                </div>
            </div>
            {copied && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-aia-charcoal text-white text-[10px] py-1 px-2 rounded pointer-events-none animate-fadeIn">
                    Copied!
                </div>
            )}
        </div>
    );
};

export default CopyableText;
