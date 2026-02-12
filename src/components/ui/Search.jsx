import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search as SearchIcon, X, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const searchIndex = [
    { title: 'Our Brand', path: '/our-brand/welcome', category: 'Our Brand', keywords: 'welcome contents introduction brand standards' },
    { title: 'Our Purpose', path: '/purpose#why-our-purpose', category: 'Our Brand', keywords: 'purpose healthier longer better lives active customer-centric personal ambition' },
    { title: 'Our Personality', path: '/personality#why-a-mentor', category: 'Our Brand', keywords: 'persona mentor personality traits summary company values' },
    { title: 'Tone of Voice', path: '/tone-of-voice#introduction', category: 'Our Brand', keywords: 'tone voice principles spectrum mentor' },
    { title: 'Cultural Guidance', path: '/cultural-guidance#introduction', category: 'Our Brand', keywords: 'cultural clusters exploration empowerment expression emancipation' },
    { title: 'Our Logos', path: '/logos', category: 'Our Identity', keywords: 'logo lockup corporate wordmark usage clear space' },
    { title: 'Colours', path: '/colour', category: 'Our Identity', keywords: 'colours palette red charcoal white secondary shades tints' },
    { title: 'Typography', path: '/typography', category: 'Our Identity', keywords: 'typography fonts typeface hierarchy download' },
    { title: 'Moving Mountains', path: '/moving-mountains', category: 'Visual Elements', keywords: 'moving mountains shapes brand pattern' },
    { title: 'Photography', path: '/photography', category: 'Visual Elements', keywords: 'photography principles style portrait' },
    { title: 'Illustration', path: '/illustration', category: 'Visual Elements', keywords: 'illustration style examples scenes integration' },
    { title: 'Iconography', path: '/iconography', category: 'Visual Elements', keywords: 'icons system icons illustrated icons' },
    { title: 'Mobile App Icon System', path: '/applications/mobile-app-icon-system', category: 'Applications', keywords: 'mobile app icon system customer agency region tag' },
    { title: 'Digital: Social Media', path: '/applications/digital-social', category: 'Applications', keywords: 'digital social media facebook instagram examples' },
    { title: 'Corporate', path: '/applications/corporate', category: 'Applications', keywords: 'corporate daily operation stationery email signature' },
    { title: 'Print', path: '/applications/print', category: 'Applications', keywords: 'print outdoor advertising annual report brochure' },
    { title: 'Merchandise', path: '/applications/merchandise', category: 'Applications', keywords: 'merchandise branded pen tote bag phone cover' },
    { title: 'Environmental', path: '/applications/environmental', category: 'Applications', keywords: 'environmental office walls furniture waiting area' },
    { title: 'Events', path: '/applications/events', category: 'Applications', keywords: 'events rollup banner stage office event' },
];

const Search = ({ variant = 'global', className = "" }) => {
    const [query, setQuery] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [contentIndex, setContentIndex] = useState([]);
    const navigate = useNavigate();
    const dropdownRef = useRef(null);

    const isHero = variant === 'hero';

    useEffect(() => {
        const pageRouteMap = {
            2: { title: 'Welcome', path: '/our-brand/welcome', category: 'Our Brand' },
            3: { title: 'Contents', path: '/our-brand/contents', category: 'Our Brand' },
            5: { title: 'Why our Purpose?', path: '/purpose#why-our-purpose', category: 'Our Purpose' },
            6: { title: 'Active', path: '/purpose#active', category: 'Our Purpose' },
            7: { title: 'Customer-centric', path: '/purpose#customer-centric', category: 'Our Purpose' },
            8: { title: 'Personal', path: '/purpose#personal', category: 'Our Purpose' },
            9: { title: 'Our ambition', path: '/purpose#our-ambition', category: 'Our Purpose' },
            11: { title: 'Why a mentor?', path: '/personality#why-a-mentor', category: 'Our Personality' },
            12: { title: 'Why a persona?', path: '/personality#why-a-persona', category: 'Our Personality' },
            13: { title: 'What a mentor is', path: '/personality#what-a-mentor-is', category: 'Our Personality' },
            14: { title: 'Our personality traits', path: '/personality#personality-traits', category: 'Our Personality' },
            15: { title: 'Summary', path: '/personality#summary', category: 'Our Personality' },
            17: { title: 'Tone of Voice: Introduction', path: '/tone-of-voice#introduction', category: 'Tone of Voice' },
            18: { title: 'Tone of Voice: Principles', path: '/tone-of-voice#principles', category: 'Tone of Voice' },
            19: { title: 'Tone of Voice: Principles in use', path: '/tone-of-voice#principles-in-use', category: 'Tone of Voice' },
            20: { title: 'Tone of Voice: Spectrum', path: '/tone-of-voice#spectrum', category: 'Tone of Voice' },
            21: { title: 'Tone of Voice: Spectrum in use', path: '/tone-of-voice#spectrum-in-use', category: 'Tone of Voice' },
            23: { title: 'Cultural Guidance: Introduction', path: '/cultural-guidance#introduction', category: 'Cultural Guidance' },
            24: { title: 'Cultural clusters', path: '/cultural-guidance#clusters', category: 'Cultural Guidance' },
            25: { title: 'Our brand across markets', path: '/cultural-guidance#application', category: 'Cultural Guidance' },
            26: { title: 'Exploration', path: '/cultural-guidance#exploration', category: 'Cultural Guidance' },
            27: { title: 'Empowerment', path: '/cultural-guidance#empowerment', category: 'Cultural Guidance' },
            28: { title: 'Expression', path: '/cultural-guidance#expression', category: 'Cultural Guidance' },
            29: { title: 'Emancipation', path: '/cultural-guidance#emancipation', category: 'Cultural Guidance' },
            31: { title: 'Our logos', path: '/logos', category: 'Our Identity' },
            32: { title: 'HLBL Logo Lockup', path: '/logos', category: 'Our Identity' },
            33: { title: 'Localised Lockups', path: '/logos', category: 'Our Identity' },
            34: { title: 'Corporate Logo', path: '/logos', category: 'Our Identity' },
            35: { title: 'Wordmark', path: '/logos', category: 'Our Identity' },
            36: { title: 'Wordmark usage', path: '/logos', category: 'Our Identity' },
            37: { title: 'Logo usage', path: '/logos', category: 'Our Identity' },
            38: { title: 'Placement', path: '/logos', category: 'Our Identity' },
            39: { title: 'Logo don’ts', path: '/logos', category: 'Our Identity' },
            40: { title: 'Wordmark don’ts', path: '/logos', category: 'Our Identity' },
            51: { title: 'Core colours', path: '/colour', category: 'Colours' },
            52: { title: 'Secondary colours', path: '/colour', category: 'Colours' },
            53: { title: 'Background colours', path: '/colour', category: 'Colours' },
            54: { title: 'Core colours in use', path: '/colour', category: 'Colours' },
            55: { title: 'Secondary colours in use', path: '/colour', category: 'Colours' },
            56: { title: 'Colours don’ts', path: '/colour', category: 'Colours' },
            73: { title: 'Primary typeface: English', path: '/typography', category: 'Typography' },
            74: { title: 'System typeface: English', path: '/typography', category: 'Typography' },
            75: { title: 'Primary typeface: Chinese', path: '/typography', category: 'Typography' },
            76: { title: 'Typography in use: print and web', path: '/typography', category: 'Typography' },
            77: { title: 'Typography in use: digital', path: '/typography', category: 'Typography' },
            79: { title: 'Photography principles', path: '/photography', category: 'Photography' },
            80: { title: 'Photography briefs', path: '/photography', category: 'Photography' },
            81: { title: 'What works', path: '/photography', category: 'Photography' },
            82: { title: 'Photography don’ts', path: '/photography', category: 'Photography' },
            84: { title: 'Illustration introduction', path: '/illustration', category: 'Illustration' },
            85: { title: 'Illustration examples', path: '/illustration', category: 'Illustration' },
            86: { title: 'Illustration scene example', path: '/illustration', category: 'Illustration' },
            87: { title: 'Illustration integration', path: '/illustration', category: 'Illustration' },
            88: { title: 'Illustration in use', path: '/illustration', category: 'Illustration' },
            90: { title: 'System icons', path: '/iconography', category: 'Iconography' },
            91: { title: 'Illustrated icons', path: '/iconography', category: 'Iconography' },
            100: { title: 'Mobile App Icon System', path: '/applications/mobile-app-icon-system', category: 'Applications' },
            102: { title: 'Digital: Social Media', path: '/applications/digital-social', category: 'Applications' },
            103: { title: 'Corporate Daily Operation', path: '/applications/corporate', category: 'Applications' },
            104: { title: 'Print', path: '/applications/print', category: 'Applications' },
            105: { title: 'Merchandise', path: '/applications/merchandise', category: 'Applications' },
            106: { title: 'Environmental', path: '/applications/environmental', category: 'Applications' },
            107: { title: 'Events', path: '/applications/events', category: 'Applications' },
        };

        const buildIndex = async () => {
            try {
                const response = await fetch('/assets/brand_content.txt');
                if (!response.ok) return;
                const text = await response.text();
                const parts = text.split(/--- PAGE (\d+) ---/g);
                const entries = [];
                for (let i = 1; i < parts.length; i += 2) {
                    const pageNumber = parseInt(parts[i], 10);
                    if (Number.isNaN(pageNumber)) continue;
                    if (pageNumber > 116) continue;
                    const pageText = (parts[i + 1] || '').replace(/\s+/g, ' ').trim();
                    const route = pageRouteMap[pageNumber] || {
                        title: `Page ${pageNumber}`,
                        path: `/full-guide?page=${pageNumber}`,
                        category: 'Full Guide',
                    };
                    if (!pageText) continue;
                    entries.push({
                        title: route.title,
                        path: route.path,
                        category: route.category,
                        content: pageText,
                    });
                }
                setContentIndex(entries);
            } catch {
                setContentIndex([]);
            }
        };

        buildIndex();
    }, []);

    const results = useMemo(() => {
        if (query.trim() === "") {
            return [];
        }
        const lowered = query.toLowerCase();
        const merged = [...searchIndex, ...contentIndex];
        const filtered = merged
            .filter(item =>
                item.title.toLowerCase().includes(lowered) ||
                item.category.toLowerCase().includes(lowered) ||
                (item.keywords || '').toLowerCase().includes(lowered) ||
                (item.content || '').toLowerCase().includes(lowered)
            )
            .map((item) => {
                const content = (item.content || '').toLowerCase();
                let snippet = '';
                if (content.includes(lowered)) {
                    const idx = content.indexOf(lowered);
                    const start = Math.max(0, idx - 40);
                    const end = Math.min(content.length, idx + lowered.length + 40);
                    snippet = (item.content || '').slice(start, end).trim();
                }
                return { ...item, snippet };
            });
        return filtered.slice(0, 60);
    }, [query, contentIndex]);

    const safeActiveIndex = Math.min(activeIndex, Math.max(results.length - 1, 0));

    // Handle click outside to close results
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsFocused(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (path) => {
        const withQuery = `${path}${path.includes('?') ? '&' : '?'}q=${encodeURIComponent(query)}`;
        navigate(withQuery);
        setIsFocused(false);
    };

    const handleCycle = (direction) => {
        if (results.length === 0) return;
        const nextIndex = (safeActiveIndex + direction + results.length) % results.length;
        setActiveIndex(nextIndex);
        const nextPath = results[nextIndex].path;
        const withQuery = `${nextPath}${nextPath.includes('?') ? '&' : '?'}q=${encodeURIComponent(query)}`;
        navigate(withQuery);
    };

    return (
        <div className={`relative w-full ${className}`} ref={dropdownRef}>
            <div
                className={`flex items-center transition-all duration-500 rounded-full border ${isFocused
                    ? 'border-aia-red shadow-[0_0_0_4px_rgba(211,17,69,0.1)] ring-1 ring-aia-red'
                    : 'border-gray-200 shadow-sm'
                    } ${isHero ? 'bg-white/95 backdrop-blur-md p-2' : 'bg-white p-1'}`}
            >
                <div className={`flex items-center justify-center ${isHero ? 'w-16 h-12' : 'w-10 h-8'}`}>
                    <SearchIcon className={`${isHero ? 'w-6 h-6' : 'w-4 h-4'} ${isFocused ? 'text-aia-red' : 'text-gray-400'}`} />
                </div>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setActiveIndex(0);
                    }}
                    onFocus={() => setIsFocused(true)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            handleCycle(e.shiftKey ? -1 : 1);
                        }
                    }}
                    placeholder={isHero ? "Search the AIA Brand Hub..." : "Search..."}
                    className={`flex-1 bg-transparent border-none outline-none font-sans ${isHero ? 'text-xl' : 'text-sm'
                        } text-aia-charcoal placeholder:text-gray-300`}
                />
                    {query && results.length > 0 && (
                        <div className="flex items-center gap-1 px-2">
                        <button
                            onClick={() => handleCycle(-1)}
                            className="p-1 rounded-full border border-gray-200 hover:border-aia-red hover:text-aia-red text-gray-400 transition-colors"
                            aria-label="Previous match"
                        >
                            <ChevronLeft size={14} />
                        </button>
                        <button
                            onClick={() => handleCycle(1)}
                            className="p-1 rounded-full border border-gray-200 hover:border-aia-red hover:text-aia-red text-gray-400 transition-colors"
                            aria-label="Next match"
                        >
                            <ChevronRight size={14} />
                        </button>
                        <span className="text-[10px] text-gray-400 px-1">
                            {safeActiveIndex + 1}/{results.length}
                        </span>
                    </div>
                )}
                <AnimatePresence>
                    {query && (
                        <Motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            onClick={() => setQuery("")}
                            className="p-2 text-gray-400 hover:text-aia-red transition-colors"
                        >
                            <X size={isHero ? 20 : 16} />
                        </Motion.button>
                    )}
                </AnimatePresence>
                {isHero && (
                    <button className="bg-aia-red text-white p-4 rounded-full hover:bg-aia-red/90 transition-colors ml-2 shadow-lg group">
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </button>
                )}
            </div>

            <AnimatePresence>
                {isFocused && query && results.length > 0 && (
                    <Motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 right-0 mt-4 bg-white rounded-3xl shadow-2xl border border-gray-100 p-4 z-50 overflow-hidden"
                    >
                        <div className="flex items-center justify-between px-4 mb-2">
                            <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                                Results for "{query}" ({results.length})
                            </div>
                            {results.length > 1 && (
                                <div className="flex items-center gap-1">
                                    <button
                                        onClick={() => handleCycle(-1)}
                                        className="p-1 rounded-full border border-gray-200 hover:border-aia-red hover:text-aia-red text-gray-400 transition-colors"
                                        aria-label="Previous match"
                                    >
                                        <ChevronLeft size={14} />
                                    </button>
                                    <button
                                        onClick={() => handleCycle(1)}
                                        className="p-1 rounded-full border border-gray-200 hover:border-aia-red hover:text-aia-red text-gray-400 transition-colors"
                                        aria-label="Next match"
                                    >
                                        <ChevronRight size={14} />
                                    </button>
                                </div>
                            )}
                        </div>
                        <div className="space-y-1">
                            {results.map((item, index) => (
                                <button
                                    key={item.path}
                                    onClick={() => handleSelect(item.path)}
                                    className={`w-full text-left px-4 py-3 rounded-xl border transition-all flex justify-between items-center group ${index === safeActiveIndex ? 'border-aia-red/20 bg-aia-grey' : 'border-transparent hover:border-aia-red/10 hover:bg-aia-grey'}`}
                                >
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-aia-charcoal group-hover:text-aia-red">{item.title}</span>
                                        <span className="text-[10px] text-gray-400 group-hover:text-aia-red/60 uppercase tracking-widest">{item.category}</span>
                                        {item.snippet && (
                                            <span className="mt-1 text-[11px] text-aia-charcoal/60">
                                                ...{item.snippet}...
                                            </span>
                                        )}
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-aia-red translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </button>
                            ))}
                        </div>
                    </Motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Search;
