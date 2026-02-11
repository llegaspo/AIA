import React, { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Search from '../ui/Search';
import { motion, AnimatePresence } from 'framer-motion';
import useSearchHighlight from '../ui/useSearchHighlight';

const Layout = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const [scrolled, setScrolled] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, [location.pathname]);

    useEffect(() => {
        if (!location.hash) return;
        const id = location.hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [location.hash]);

    useSearchHighlight(contentRef);

    // Show header if not home OR if scrolled on home
    const showHeader = !isHome || scrolled;

    return (
        <div className="flex min-h-screen bg-white">
            <Sidebar />
            <main className="flex-1 ml-64 transition-all duration-300">
                <AnimatePresence>
                    {showHeader && (
                        <motion.header
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -100, opacity: 0 }}
                            className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 px-12 py-4 flex items-center justify-between"
                        >
                            <div className="flex-1 max-w-xl">
                                <Search variant="global" />
                            </div>
                            <div className="flex items-center gap-6 ml-8">
                                <button className="rounded-full border border-aia-red px-4 py-2 text-xs uppercase tracking-wide text-aia-red hover:bg-aia-red hover:text-white transition-colors">
                                    Edit site
                                </button>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-aia-red">Access Center</span>
                                <div className="w-8 h-8 rounded-full bg-aia-grey flex items-center justify-center text-aia-charcoal/40 font-bold text-xs ring-2 ring-gray-100">
                                    A
                                </div>
                            </div>
                        </motion.header>
                    )}
                </AnimatePresence>
                <div ref={contentRef} className={showHeader ? 'pt-0' : ''}>
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Layout;
