import React, { useState, useEffect, useRef } from 'react';
import { Search as SearchIcon, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const searchIndex = [
    { title: 'Welcome', path: '/', category: 'Introduction' },
    { title: 'Brand Standards', path: '/brand-standards', category: 'Introduction' },
    { title: 'Our Purpose', path: '/purpose', category: 'Our Brand' },
    { title: 'Our Personality', path: '/personality', category: 'Our Brand' },
    { title: 'Tone of Voice', path: '/tone-of-voice', category: 'Our Brand' },
    { title: 'Cultural Guidance', path: '/cultural-guidance', category: 'Our Brand' },
    { title: 'Our Logos', path: '/logos', category: 'Our Identity' },
    { title: 'Colours', path: '/colour', category: 'Our Identity' },
    { title: 'Typography', path: '/typography', category: 'Our Identity' },
    { title: 'Moving Mountains', path: '/moving-mountains', category: 'Visual Elements' },
    { title: 'Photography', path: '/photography', category: 'Visual Elements' },
    { title: 'Illustration', path: '/illustration', category: 'Visual Elements' },
    { title: 'Iconography', path: '/iconography', category: 'Visual Elements' },
    { title: 'Digital', path: '/digital', category: 'Applications' },
    { title: 'Print', path: '/print', category: 'Applications' },
    { title: 'Merchandise', path: '/merchandise', category: 'Applications' },
];

const Search = ({ variant = 'global', className = "" }) => {
    const [query, setQuery] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [results, setResults] = useState([]);
    const navigate = useNavigate();
    const dropdownRef = useRef(null);

    const isHero = variant === 'hero';

    useEffect(() => {
        if (query.trim() === "") {
            setResults([]);
            return;
        }

        const filtered = searchIndex.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered.slice(0, 5));
    }, [query]);

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
        navigate(path);
        setQuery("");
        setIsFocused(false);
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
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    placeholder={isHero ? "Search the AIA Brand Hub..." : "Search..."}
                    className={`flex-1 bg-transparent border-none outline-none font-sans ${isHero ? 'text-xl' : 'text-sm'
                        } text-aia-charcoal placeholder:text-gray-300`}
                />
                <AnimatePresence>
                    {query && (
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            onClick={() => setQuery("")}
                            className="p-2 text-gray-400 hover:text-aia-red transition-colors"
                        >
                            <X size={isHero ? 20 : 16} />
                        </motion.button>
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
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 right-0 mt-4 bg-white rounded-3xl shadow-2xl border border-gray-100 p-4 z-50 overflow-hidden"
                    >
                        <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold px-4 mb-2">Results for "{query}"</div>
                        <div className="space-y-1">
                            {results.map(item => (
                                <button
                                    key={item.path}
                                    onClick={() => handleSelect(item.path)}
                                    className="w-full text-left px-4 py-3 hover:bg-aia-grey rounded-xl border border-transparent hover:border-aia-red/10 transition-all flex justify-between items-center group"
                                >
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-aia-charcoal group-hover:text-aia-red">{item.title}</span>
                                        <span className="text-[10px] text-gray-400 group-hover:text-aia-red/60 uppercase tracking-widest">{item.category}</span>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-aia-red translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Search;
