import React, { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Search from '../ui/Search';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import useSearchHighlight from '../ui/useSearchHighlight';
import Modal from '../ui/Modal';

const Layout = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const [scrolled, setScrolled] = useState(false);
    const contentRef = useRef(null);
    const [isAdminOpen, setIsAdminOpen] = useState(false);

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
        // Only auto-scroll on route/page change; hash updates during scroll-spy
        // should not fight the user's manual scrolling.
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'auto', block: 'start' });
        }
    }, [location.pathname]);

    useSearchHighlight(contentRef);

    // Show header if not home OR if scrolled on home
    const showHeader = !isHome || scrolled;

    return (
        <div className="flex min-h-screen bg-white">
            <Sidebar />
            <main className="flex-1 ml-64 transition-all duration-300">
                <AnimatePresence>
                    {showHeader && (
                        <Motion.header
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -100, opacity: 0 }}
                            className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 px-12 py-4 flex items-center justify-between"
                        >
                            <div className="flex-1 max-w-xl">
                                <Search variant="global" />
                            </div>
                            <div className="flex items-center gap-6 ml-8">
                                <button
                                    className="rounded-full border border-aia-red px-4 py-2 text-xs uppercase tracking-wide text-aia-red hover:bg-aia-red hover:text-white transition-colors"
                                    onClick={() => setIsAdminOpen(true)}
                                >
                                    Admin login
                                </button>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-aia-red">Access Center</span>
                                <div className="w-8 h-8 rounded-full bg-aia-grey flex items-center justify-center text-aia-charcoal/40 font-bold text-xs ring-2 ring-gray-100">
                                    A
                                </div>
                            </div>
                        </Motion.header>
                    )}
                </AnimatePresence>
                <div ref={contentRef} className={showHeader ? 'pt-0' : ''}>
                    <Outlet />
                </div>
            </main>

            <Modal isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} title="Admin Login">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-aia-red font-bold uppercase text-sm">Admin Access</h4>
                        <p className="mt-3 text-sm text-aia-charcoal/70">
                            This is a decorative login panel for the brand hub. No authentication is performed.
                        </p>
                        <div className="mt-6 rounded-2xl border border-aia-red/20 bg-aia-grey/40 p-6 text-xs text-aia-charcoal/70">
                            <p className="font-semibold text-aia-red">Demo credentials</p>
                            <p className="mt-2">Username: `brand-admin`</p>
                            <p>Password: `aia-2026`</p>
                        </div>
                    </div>
                    <div className="rounded-2xl border border-gray-100 p-6">
                        <label className="block text-xs uppercase tracking-widest text-aia-charcoal/60">Username</label>
                        <input
                            type="text"
                            placeholder="brand-admin"
                            className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-aia-red focus:outline-none"
                        />
                        <label className="mt-6 block text-xs uppercase tracking-widest text-aia-charcoal/60">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-aia-red focus:outline-none"
                        />
                        <button
                            type="button"
                            className="mt-6 w-full rounded-full bg-aia-red px-4 py-3 text-xs uppercase tracking-wide text-white hover:bg-aia-red/90"
                        >
                            Sign in
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Layout;
