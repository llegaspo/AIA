import React from 'react';
import MovingMountainsOverlay from '../components/ui/MovingMountains.jsx';
import Search from '../components/ui/Search';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="relative min-h-screen bg-white overflow-hidden flex items-center">
            {/* Background Mountain - Hero Style */}
            <div className="absolute top-0 right-0 w-3/4 h-full pointer-events-none opacity-10">
                <MovingMountainsOverlay className="w-full h-full text-aia-red" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 w-full max-w-5xl px-12 md:px-24 py-32 space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-8xl md:text-9xl font-condensed font-bold uppercase tracking-tighter leading-[0.85] text-aia-red mb-4">
                        AIA Brand<br />Standards
                    </h1>
                    <div className="flex items-center gap-4">
                        <div className="h-px w-12 bg-aia-red/30"></div>
                        <p className="text-xl font-sans tracking-[0.2em] uppercase opacity-40 text-aia-charcoal">
                            Version 2.0 • Digital Identity Hub
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <Search variant="hero" className="max-w-2xl" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="flex gap-12 pt-8"
                >
                    <div className="space-y-1">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-aia-red">Quick Access</p>
                        <p className="text-xs text-aia-charcoal/60">Logos, Colours, Fonts</p>
                    </div>
                    <div className="space-y-1 border-l border-gray-200 pl-12">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-aia-red">Latest Update</p>
                        <p className="text-xs text-aia-charcoal/60">Digital Mockups v2.1</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
