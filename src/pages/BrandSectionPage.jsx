import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Download, Check, Info, Sparkles } from 'lucide-react';
import CopyableText from '../components/ui/CopyableText';
import Modal from '../components/ui/Modal';
import LogoLockup from '../components/brand/LogoLockup';

const CopyForAIButton = ({ prompt, label = "Copy for AI", className = "" }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(prompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            onClick={handleCopy}
            className={`flex items-center gap-2 px-6 py-3 bg-aia-charcoal text-white rounded-xl hover:bg-aia-red transition-all duration-300 group shadow-lg ${className}`}
        >
            {copied ? (
                <Check className="w-4 h-4 text-green-400" />
            ) : (
                <Sparkles className="w-4 h-4 text-aia-red group-hover:text-white" />
            )}
            <span className="text-sm font-bold uppercase tracking-wider">{copied ? "Copied!" : label}</span>
        </button>
    );
};

const LogoSpecSVG = ({ type = 'lockup' }) => {
    if (type === 'wordmark') {
        return (
            <div className="flex flex-col items-center">
                <div className="bg-white p-12 border border-gray-100 rounded-2xl relative mb-8 w-full max-w-2xl flex justify-center overflow-hidden">
                    <div className="relative border border-dashed border-gray-300 p-12 bg-aia-red/5">
                        <img src="/assets/logo_wordmark.svg" alt="AIA Wordmark" className="h-12 w-auto" />
                        <div className="absolute top-0 left-0 right-0 h-px border-t border-aia-red/30"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-px border-b border-aia-red/30"></div>
                        <div className="absolute left-0 top-0 bottom-0 w-px border-l border-aia-red/30"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-px border-r border-aia-red/30"></div>
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-aia-red bg-white px-2">0.35 Y</div>
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-aia-red bg-white px-2">0.35 Y</div>
                        <div className="absolute top-1/2 -left-10 -translate-y-1/2 text-[10px] font-bold text-aia-red bg-white px-2 -rotate-90">0.35 Y</div>
                        <div className="absolute top-1/2 -right-10 -translate-y-1/2 text-[10px] font-bold text-aia-red bg-white px-2 rotate-90">0.35 Y</div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-8 w-full max-w-2xl">
                    <div className="p-6 bg-aia-grey rounded-xl text-center">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-aia-red block mb-2">Min Size Print</span>
                        <span className="text-3xl font-condensed font-bold text-aia-charcoal">3mm</span>
                    </div>
                    <div className="p-6 bg-aia-grey rounded-xl text-center">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-aia-red block mb-2">Min Size Digital</span>
                        <span className="text-3xl font-condensed font-bold text-aia-charcoal">15px</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center">
            <div className="bg-white p-12 border border-gray-100 rounded-2xl relative mb-8 w-full max-w-2xl flex justify-center overflow-hidden">
                <div className="relative border border-dashed border-gray-300 p-8 bg-aia-red/5">
                    {type === 'lockup' ? (
                        <LogoLockup logoClassName="h-10" />
                    ) : (
                        <img src="/assets/logo_std_transparent.png" alt="AIA Logo" className="h-16 w-auto logo-clean" />
                    )}
                    <div className="absolute top-0 left-0 right-0 h-px border-t border-aia-red/30"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-px border-b border-aia-red/30"></div>
                    <div className="absolute left-0 top-0 bottom-0 w-px border-l border-aia-red/30"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-px border-r border-aia-red/30"></div>
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-aia-red bg-white px-2">0.25 Y</div>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-aia-red bg-white px-2">0.25 Y</div>
                    <div className="absolute top-1/2 -left-10 -translate-y-1/2 text-[10px] font-bold text-aia-red bg-white px-2 -rotate-90">0.25 Y</div>
                    <div className="absolute top-1/2 -right-10 -translate-y-1/2 text-[10px] font-bold text-aia-red bg-white px-2 rotate-90">0.25 Y</div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-8 w-full max-w-2xl">
                <div className="p-6 bg-aia-grey rounded-xl text-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-aia-red block mb-2">Min Size Print</span>
                    <span className="text-3xl font-condensed font-bold text-aia-charcoal">10mm</span>
                </div>
                <div className="p-6 bg-aia-grey rounded-xl text-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-aia-red block mb-2">Min Size Digital</span>
                    <span className="text-3xl font-condensed font-bold text-aia-charcoal">24px</span>
                </div>
            </div>
        </div>
    );
};

const DownloadButton = ({ assetPath, fileName, label = "Download", className = "" }) => {
    const [downloading, setDownloading] = useState(false);

    const handleDownload = (e) => {
        e.stopPropagation();
        const link = document.createElement('a');
        link.href = assetPath;
        link.download = fileName || assetPath.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setDownloading(true);
        setTimeout(() => setDownloading(false), 2000);
    };

    return (
        <button
            onClick={handleDownload}
            className={`flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-aia-red text-current rounded-full transition-all duration-300 border border-current/20 hover:border-aia-red group ${className}`}
        >
            {downloading ? (
                <Check className="w-4 h-4 text-green-400 group-hover:text-white" />
            ) : (
                <Download className="w-4 h-4 group-hover:text-white" />
            )}
            <span className="text-xs font-bold uppercase tracking-widest group-hover:text-white">{label}</span>
        </button>
    );
};

const ColorCard = ({ name, hex, pantone, rgb, cmyk, dark, border, small, tints }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="group flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
            <div
                className={`w-full ${small ? 'h-24' : 'h-40'} flex items-center justify-center relative cursor-pointer group-hover:opacity-95 transition-opacity`}
                style={{ backgroundColor: hex, border: border ? '1px solid #e5e7eb' : 'none' }}
                onClick={() => copyToClipboard(hex)}
            >
                {copied && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-[2px] animate-fadeIn">
                        <span className={`text-xs font-bold uppercase tracking-widest ${dark ? 'text-white' : 'text-aia-charcoal'}`}>
                            Copied!
                        </span>
                    </div>
                )}
            </div>
            <div className="p-5 flex flex-col flex-grow">
                <h4 className="font-condensed font-bold text-aia-charcoal uppercase tracking-wide mb-3">{name}</h4>
                <div className="space-y-2 text-[10px] font-sans font-medium uppercase tracking-wider text-gray-500">
                    <div className="flex justify-between items-center border-b border-gray-50 pb-1">
                        <span>HEX</span>
                        <button onClick={() => copyToClipboard(hex)} className="font-bold text-aia-charcoal hover:text-aia-red transition-colors">{hex}</button>
                    </div>
                    {rgb && <div className="flex justify-between border-b border-gray-50 pb-1"><span>RGB</span><span className="text-aia-charcoal">{rgb}</span></div>}
                    {cmyk && <div className="flex justify-between border-b border-gray-50 pb-1"><span>CMYK</span><span className="text-aia-charcoal">{cmyk}</span></div>}
                    {pantone && <div className="flex justify-between"><span>Pantone</span><span className="text-aia-charcoal">{pantone}</span></div>}
                </div>
                {tints && (
                    <div className="mt-4 pt-4 border-t border-gray-50 flex gap-1">
                        {tints.map((tintHex, idx) => (
                            <button
                                key={tintHex}
                                onClick={() => copyToClipboard(tintHex)}
                                className="flex-grow h-6 rounded-sm transition-transform hover:scale-110"
                                style={{ backgroundColor: tintHex }}
                                title={`${100 - (idx + 1) * 20}% Tint: ${tintHex}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const TypeSpecimen = ({ name, weights, sampleText, isPrimary }) => (
    <div className={`p-8 rounded-2xl ${isPrimary ? 'bg-aia-red text-white' : 'bg-white border border-gray-100 text-aia-charcoal'}`}>
        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 mb-8">{name} Specimen</h4>
        <div className="space-y-4 mb-12">
            <p className="brand-headline !text-current leading-none m-0">Aa</p>
            <p className="text-xs opacity-80 font-sans tracking-wide">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz<br />1234567890!@#$%^&*</p>
        </div>
        <div className="space-y-3">
            {weights.map(weight => (
                <div key={weight} className="flex items-baseline gap-4">
                    <span className="text-[9px] font-bold uppercase opacity-50 w-20">{weight}</span>
                    <span className={`text-xl truncate ${weight.includes('Bold') ? 'font-bold' : ''} ${weight === 'Condensed' ? 'font-condensed' : ''}`}>{sampleText}</span>
                </div>
            ))}
        </div>
    </div>
);

const BrandSectionPage = () => {
    const location = useLocation();
    const [activeModal, setActiveModal] = useState(null);

    const sectionKey = location.pathname.split('/').pop();

    const contentMap = {
        'purpose': {
            title: 'Our Purpose',
            content: (
                <div className="space-y-6">
                    <CopyableText textToCopy="Healthier, Longer, Better Lives"><h2 className="text-3xl font-condensed font-bold text-aia-red">Healthier, Longer, Better Lives</h2></CopyableText>
                    <CopyableText><p>This is our Purpose. Why? Because Asia is getting wealthier, not healthier. 75% of all deaths are linked to lifestyle-related illnesses.*</p></CopyableText>
                    <CopyableText textToCopy="For more than a century, AIA has strived to make a significant, positive impact...">
                        <blockquote className="border-l-4 border-aia-red pl-4 italic my-6 text-xl">"For more than a century, AIA has strived to make a significant, positive impact for our customers and communities across Asia... to help millions of people live Healthier, Longer, Better Lives."</blockquote>
                    </CopyableText>
                    <p className="text-sm text-gray-500">*Source: World Health Organization, NCD Country Profiles, 2018</p>
                </div>
            )
        },
        'personality': {
            title: 'Our Personality',
            content: (
                <div className="space-y-8">
                    <div className="flex justify-between items-start">
                        <CopyableText textToCopy="A Mentor"><h2 className="text-3xl font-condensed font-bold text-aia-red">A Mentor</h2></CopyableText>
                        <CopyForAIButton
                            prompt={`Act as an AIA Brand personality expert. Our brand is characterized as a 'Mentor'. Our core traits are: Compassionate, Encouraging, Straightforward, Motivating, Positive, Guiding, Confident, and On your side. Please ensure the following communication embodies these traits while remaining professional and guiding.`}
                            label="Copy Personality for AI"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <CopyableText><p>Our persona helps us show just what it means to strive for Healthier, Longer, Better Lives.</p></CopyableText>
                            <CopyableText><p>Thinking of AIA as a mentor enables us to see our brand as a collection of attitudes, behaviours and traits.</p></CopyableText>
                        </div>
                        <div className="bg-aia-grey p-6 rounded-lg">
                            <h3 className="font-bold uppercase mb-4 text-aia-red">A Mentor Is:</h3>
                            <ul className="grid grid-cols-2 gap-2">
                                {['Compassionate', 'Encouraging', 'Straightforward', 'Motivating', 'Positive', 'Guiding', 'Confident', 'On your side'].map(trait => (
                                    <li key={trait}><CopyableText className="-mx-1 px-1"><span className="text-sm">• {trait}</span></CopyableText></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        'tone-of-voice': {
            title: 'Tone of Voice',
            content: (
                <div className="space-y-8">
                    <div className="flex justify-between items-start">
                        <CopyableText><p className="text-lg">Our tone of voice is how we bring our brand and persona to life through words.</p></CopyableText>
                        <CopyForAIButton
                            prompt={`Act as an AIA Tone of Voice specialist. Our communication principles are: Simple Language (Avoid jargon), Speak to the Individual (Be personal), Strengthen with Proof (Use facts), Focus on the Future (Be aspirational), and Positive & Inclusive (Include everyone). Please rewrite or refine the following text according to these principles.`}
                            label="Copy Tone for AI"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Simple Language', desc: 'Avoid jargon and complexity.' },
                            { title: 'Speak to the Individual', desc: 'Be personal and relatable.' },
                            { title: 'Strengthen with Proof', desc: 'Use facts and data.' },
                            { title: 'Focus on the Future', desc: 'Be aspirational.' },
                            { title: 'Positive & Inclusive', desc: 'Include everyone.' }
                        ].map(p => (
                            <div key={p.title} className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
                                <CopyableText textToCopy={`${p.title}: ${p.desc}`}><h4 className="font-bold text-aia-red uppercase mb-2">{p.title}</h4><p className="text-sm opacity-70">{p.desc}</p></CopyableText>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        'logos': {
            title: 'Our Logos',
            content: (
                <div className="space-y-24">
                    <section>
                        <div className="flex items-baseline justify-between mb-12 border-b border-gray-100 pb-4">
                            <h3 className="text-3xl font-condensed font-bold text-aia-red uppercase tracking-tight">Governance & Lockups</h3>
                            <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                                <Info size={12} className="text-aia-red" /><span>Click logos for technical specs</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                            {[
                                { id: 'lockup', name: 'HLBL Logo Lockup', img: '/assets/logo_lockup_transparent.png', desc: 'The HLBL Logo Lockup is our preferred logo and should be used in most circumstances.' },
                                { id: 'std', name: 'Corporate Logo', img: '/assets/logo_std_transparent.png', desc: "The AIA Corporate Logo is a recognisable symbol of our brand's heritage, success and longevity." },
                                { id: 'wordmark', name: 'Wordmark', img: '/assets/logo_wordmark.svg', desc: 'The AIA Wordmark addresses issues of legibility and is also used for creating sub-brands.' }
                            ].map(logo => (
                                <div key={logo.id} className="space-y-8 flex flex-col items-center">
                                    <div
                                        onClick={() => setActiveModal(logo.id)}
                                        className="h-48 w-full flex items-center justify-center p-4 bg-aia-grey/20 rounded-2xl relative group overflow-hidden cursor-pointer hover:bg-aia-red/5 transition-colors ring-1 ring-transparent hover:ring-aia-red/20"
                                    >
                                        <img src={logo.img} alt={logo.name} className={`max-h-full object-contain group-hover:scale-105 transition-transform ${logo.id === 'wordmark' ? 'w-32' : ''}`} />
                                        <div className="absolute inset-x-0 bottom-0 p-4 bg-white/95 translate-y-full group-hover:translate-y-0 transition-transform flex gap-2">
                                            <DownloadButton assetPath={logo.img} className="w-full justify-center text-aia-charcoal" />
                                        </div>
                                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="bg-white p-2 rounded-full shadow-lg text-aia-red"><Info size={16} /></div>
                                        </div>
                                    </div>
                                    <div className="space-y-4 px-4">
                                        <h4 className="text-sm font-bold uppercase tracking-widest text-aia-charcoal">{logo.name}</h4>
                                        <CopyableText><p className="text-[13px] leading-relaxed opacity-70">{logo.desc}</p></CopyableText>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    <Modal isOpen={!!activeModal} onClose={() => setActiveModal(null)} title={activeModal === 'lockup' ? "HLBL Logo Lockup" : activeModal === 'wordmark' ? "AIA Wordmark" : "Corporate Logo"}>
                        <LogoSpecSVG type={activeModal} />
                    </Modal>

                    <section className="bg-aia-grey/40 p-12 rounded-[2.5rem] border border-gray-100">
                        <div className="flex items-baseline justify-between mb-8 border-b border-aia-charcoal/10 pb-4">
                            <h3 className="text-2xl font-condensed font-bold text-aia-red uppercase tracking-tight">Logo Color Variants</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white border border-gray-100 rounded-2xl p-12 flex flex-col items-center justify-center group hover:bg-gray-50 transition-all relative overflow-hidden">
                                <img src="/assets/logo_std_transparent.png" alt="Standard" className="h-20 object-contain mb-8 group-hover:scale-105 transition-transform logo-clean" />
                                <DownloadButton assetPath="/assets/logo_std_transparent.png" className="text-aia-charcoal" />
                            </div>
                            <div className="bg-aia-charcoal rounded-2xl p-12 flex flex-col items-center justify-center group hover:bg-black transition-all relative overflow-hidden">
                                <img src="/assets/logo_rev_transparent.png" alt="Reverse" className="h-20 object-contain mb-8 group-hover:scale-105 transition-transform brightness-0 invert" />
                                <DownloadButton assetPath="/assets/logo_rev_transparent.png" className="text-white" />
                            </div>
                        </div>
                    </section>
                </div>
            )
        },
        'colour': {
            title: 'Colours',
            content: (
                <div className="space-y-16">
                    <section>
                        <div className="flex items-baseline justify-between mb-8 border-b border-gray-100 pb-4">
                            <h3 className="text-3xl font-condensed font-bold text-aia-red uppercase tracking-tight">Core Palette</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { name: 'AIA Red', hex: '#D31145', pantone: '200C', rgb: '211, 17, 69', cmyk: '0, 100, 63, 12', dark: true, tints: ['#DB406A', '#E4708F', '#ED9FB4', '#F6CFD9'] },
                                { name: 'White', hex: '#FFFFFF', pantone: '-', rgb: '255, 255, 255', cmyk: '0, 0, 0, 0', border: true },
                                { name: 'AIA Charcoal', hex: '#333D47', pantone: '432C', rgb: '51, 61, 71', cmyk: '78, 62, 49, 51', dark: true, tints: ['#5B636B', '#848A90', '#ADB1B5', '#D6D8DA'] }
                            ].map(c => <ColorCard key={c.name} {...c} />)}
                        </div>
                    </section>

                    <section>
                        <div className="flex items-baseline justify-between mb-8 border-b border-gray-100 pb-4">
                            <h3 className="text-3xl font-condensed font-bold text-aia-red uppercase tracking-tight">Secondary Palette</h3>
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Used for accents and data visualization</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            {[
                                { name: 'AIA Salmon', hex: '#FF7A85' },
                                { name: 'AIA Cerise', hex: '#BA0361', dark: true },
                                { name: 'AIA Orange', hex: '#FF754D' },
                                { name: 'AIA Yellow', hex: '#F7C926' },
                                { name: 'AIA Purple', hex: '#4C4794', dark: true },
                                { name: 'AIA Lavender', hex: '#A199BA' },
                                { name: 'AIA Blue', hex: '#1F78AD', dark: true },
                                { name: 'AIA Green', hex: '#88B943' },
                                { name: 'AIA Silver', hex: '#D3CAC3' },
                                { name: 'AIA Gold', hex: '#CAAF78' }
                            ].map(c => <ColorCard key={c.name} {...c} small />)}
                        </div>
                    </section>

                    <section className="bg-aia-grey/20 p-8 rounded-3xl">
                        <div className="flex items-baseline justify-between mb-8 border-b border-aia-charcoal/10 pb-4">
                            <h3 className="text-xl font-condensed font-bold text-aia-charcoal uppercase tracking-tight">Neutral Palette</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ColorCard name="AIA Light Grey" hex="#F4F4F4" border />
                            <div className="p-6 flex flex-col justify-center">
                                <p className="text-sm opacity-60 leading-relaxed italic">The neutral palette is used primarily for backgrounds, borders, and UI elements where brand colors might be distracting.</p>
                            </div>
                        </div>
                    </section>
                </div>
            )
        },
        'typography': {
            title: 'Typography',
            content: (
                <div className="space-y-16">
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <div className="bg-aia-red text-white p-8 rounded-2xl">
                                <h3 className="text-xl font-bold uppercase tracking-widest mb-4">Primary Typeface</h3>
                                <h4 className="text-5xl font-condensed font-bold mb-6">AI Sans Condensed</h4>
                                <p className="text-sm opacity-80 leading-relaxed">Our primary font for headlines and impactful brand statements. Bold, confident, and highly legible.</p>
                            </div>
                            <div className="p-6 bg-aia-grey rounded-2xl">
                                <h3 className="text-xs font-bold uppercase tracking-widest text-aia-red mb-4">Usage Rules</h3>
                                <ul className="space-y-2 text-xs text-aia-charcoal/70">
                                    <li>• Always use Extra Bold for primary headlines.</li>
                                    <li>• Maintain a strict hierarchy of X (Headline), 1/3 X (Subhead), and 1/6 X (Body).</li>
                                    <li>• Opt for Inter as the digital system font fallback.</li>
                                </ul>
                            </div>
                        </div>
                        <TypeSpecimen name="AI Sans Condensed" weights={['Extra Bold', 'Bold', 'Condensed']} sampleText="Healthier, Longer, Better Lives." isPrimary={false} />
                    </section>

                    <section className="pt-12 border-t border-gray-100">
                        <div className="flex items-baseline justify-between mb-8">
                            <h3 className="text-2xl font-condensed font-bold text-aia-red uppercase tracking-tight">Standard Hierarchy</h3>
                        </div>
                        <div className="space-y-12">
                            <div className="p-8 border border-gray-100 rounded-3xl hover:shadow-lg transition-shadow bg-white">
                                <span className="text-[10px] font-bold text-aia-red uppercase tracking-widest block mb-4">Headline Level 1 (X)</span>
                                <h1 className="brand-headline text-aia-charcoal">Leading the way in Asia</h1>
                            </div>
                            <div className="p-8 border border-gray-100 rounded-3xl hover:shadow-lg transition-shadow bg-white">
                                <span className="text-[10px] font-bold text-aia-red uppercase tracking-widest block mb-4">Subheading (1/3 X)</span>
                                <h3 className="brand-subheading text-aia-charcoal">Supporting millions of families across the region to live healthy.</h3>
                            </div>
                            <div className="p-8 border border-gray-100 rounded-3xl hover:shadow-lg transition-shadow bg-white">
                                <span className="text-[10px] font-bold text-aia-red uppercase tracking-widest block mb-4">Body Copy (1/6 X)</span>
                                <p className="brand-body text-aia-charcoal opacity-70 max-w-2xl leading-relaxed">
                                    Our visual language is a tool to help us achieve our Purpose. It is through these principles that we create a consistent and powerful brand presence that resonates with our customers and communities.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            )
        },
        'moving-mountains': {
            title: 'Moving Mountains',
            content: (
                <div className="space-y-24">
                    <section>
                        <div className="flex items-baseline justify-between mb-12 border-b border-gray-100 pb-4">
                            <h3 className="text-3xl font-condensed font-bold text-aia-red uppercase tracking-tight">The Wedge</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <p className="text-lg opacity-70">The 10° angle of our wedge represents progress and the upward trajectory of a healthy life. It is derived from the AIA mountain peak.</p>
                                <DownloadButton assetPath="/assets/wedge_graphics.zip" label="Download Wedge Assets" className="text-aia-charcoal border-gray-200" />
                            </div>
                            <div className="bg-aia-grey/20 rounded-[3rem] p-12 relative overflow-hidden group">
                                <img src="/assets/wedge_diagram.png" alt="Wedge Diagram" className="w-full relative z-10 group-hover:scale-110 transition-transform duration-700" />
                            </div>
                        </div>
                    </section>
                </div>
            )
        },
        'photography': {
            title: 'Photography',
            content: (
                <div className="space-y-16">
                    <section>
                        <div className="flex items-baseline justify-between mb-12 border-b border-gray-100 pb-4">
                            <h3 className="text-3xl font-condensed font-bold text-aia-red uppercase tracking-tight">Visual Style</h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {[1, 2, 3, 4, 5, 6].map(i => (
                                <div key={i} className="aspect-[4/5] bg-aia-grey rounded-2xl overflow-hidden relative group">
                                    <img src={`/assets/photo_${i}.jpg`} alt={`Style ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            )
        },
        'digital': {
            title: 'Digital Applications',
            content: (
                <div className="p-12 bg-aia-grey rounded-[3rem] text-center max-w-4xl mx-auto border border-gray-100 relative group">
                    <h3 className="text-4xl font-condensed font-bold text-aia-red uppercase mb-8">Web & Mobile</h3>
                    <div className="rounded-2xl overflow-hidden shadow-2xl mb-8"><img src="/assets/digital_app.png" alt="Digital" className="w-full" /></div>
                    <DownloadButton assetPath="/assets/digital_app.png" label="Download Web Mockup" className="text-aia-charcoal border-gray-300" />
                </div>
            )
        },
        'print': {
            title: 'Print Applications',
            content: (
                <div className="p-12 bg-white rounded-[3rem] text-center max-w-4xl mx-auto border border-gray-100 shadow-sm relative group">
                    <h3 className="text-4xl font-condensed font-bold text-aia-red uppercase mb-8">Stationary & Collateral</h3>
                    <div className="rounded-2xl overflow-hidden shadow-2xl mb-8"><img src="/assets/print_app.png" alt="Print" className="w-full" /></div>
                    <DownloadButton assetPath="/assets/print_app.png" label="Download Print Files" className="text-aia-red border-aia-red/10" />
                </div>
            )
        },
        'merchandise': {
            title: 'Merchandise',
            content: (
                <div className="p-12 bg-aia-charcoal rounded-[3rem] text-center max-w-4xl mx-auto overflow-hidden relative group">
                    <h3 className="text-4xl font-condensed font-bold text-white uppercase mb-8 relative z-10">Branded Gear</h3>
                    <div className="rounded-2xl overflow-hidden shadow-2xl mb-8 relative z-10"><img src="/assets/merch_app.png" alt="Merchandise" className="w-full group-hover:scale-105 transition-transform" /></div>
                    <DownloadButton assetPath="/assets/merch_app.png" label="Download Merch Concept" className="bg-aia-red text-white border-none" />
                </div>
            )
        }
    };

    const section = contentMap[sectionKey] || {
        title: sectionKey?.replace(/-/g, ' ').toUpperCase() || 'SECTION',
        content: <p className="animate-pulse">Building high-fidelity content for {sectionKey?.replace(/-/g, ' ')}...</p>
    };

    return (
        <div className="p-12 max-w-5xl mx-auto animate-fadeIn min-h-screen">
            <h1 className="text-7xl font-condensed font-bold text-aia-red uppercase mb-16 tracking-tighter leading-none">{section.title}</h1>
            <div className="prose prose-xl max-w-none text-aia-charcoal font-sans">
                {section.content}
            </div>
        </div>
    );
};

export default BrandSectionPage;
