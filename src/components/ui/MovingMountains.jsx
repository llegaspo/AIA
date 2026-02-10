import React from 'react';
import { motion } from 'framer-motion';

// Basic Mountain Shape (Triangle with rounded top)
const Mountain = ({ color = "fill-aia-red", opacity = 1, className = "", delay = 0 }) => {
    return (
        <motion.svg
            viewBox="0 0 100 100"
            className={`w-full h-full ${className}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: opacity }}
            transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
        >
            {/* 
         Triangle path:
         Bottom Left: 0,100
         Top Center: 50,0 (with curve)
         Bottom Right: 100,100
      */}
            <path
                d="M50 10 Q50 0 55 10 L95 90 Q100 100 90 100 L10 100 Q0 100 5 90 Z"
                className={color}
                style={{ opacity: opacity }} // fallback if class doesn't handle it
                fill="currentColor"
            />
        </motion.svg>
    );
};


// Three Mountains Composition
export const ThreeMountains = ({ className = "" }) => {
    return (
        <div className={`relative w-full h-full ${className}`}>
            {/* Back Mountain (Left) */}
            <div className="absolute bottom-0 left-0 w-2/3 h-3/4 text-aia-red mix-blend-multiply opacity-20">
                <svg viewBox="0 0 100 80" className="w-full h-full fill-current">
                    <path d="M50 5 L95 80 L5 80 Z" strokeLinejoin="round" strokeWidth="10" />
                </svg>
                {/* Using simple CSS shapes or SVGs might be easier to control overlap */}
            </div>
        </div>
    );
};


// Improved Implementation using pure SVG for better layering control
export const MovingMountainsOverlay = ({ variation = "three", className = "" }) => {
    // Colors and opacities based on brand standards
    // Core Moving Mountains:
    // 1st: 100% Red (Front)
    // 2nd: 60% Red (90% opacity)
    // 3rd: 40% Red (90% opacity)

    // We'll approximate the look with layered paths

    return (
        <div className={`relative ${className}`}>
            <svg viewBox="0 0 400 300" className="w-full h-full overflow-visible">
                <defs>
                    <filter id="multiply">
                        <feBlend mode="multiply" in="SourceGraphic" in2="BackgroundImage" />
                    </filter>
                </defs>

                {/* Example Layout for 3 Mountains - adjusting coordinates to match visual style */}

                {/* Back / Right - Lightest */}
                <motion.path
                    d="M250 50 L350 300 L150 300 Z"
                    fill="#D31145"
                    fillOpacity="0.2"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 0.2 }}
                    transition={{ duration: 1, delay: 0.4 }}
                />

                {/* Middle - Mid Tone */}
                <motion.path
                    d="M150 100 L250 300 L50 300 Z"
                    fill="#D31145"
                    fillOpacity="0.4"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 0.4 }}
                    transition={{ duration: 1, delay: 0.2 }}
                />

                {/* Front - Darkest/Solid (Primary Brand Color usually feels solid but standards say "Translucent and glass-like" for Vitality, 
                    but Core mountains are red tints. 
                    Let's follow the standard: 
                    "First mountain is always 100% AIA Red"
                */}
                <motion.path
                    d="M50 150 L150 300 L-50 300 Z"
                    fill="#D31145"
                    fillOpacity="0.6" // Adjusting to look like the "Red 60% tint" example
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 0.6 }}
                    transition={{ duration: 1, delay: 0 }}
                    style={{ mixBlendMode: 'multiply' }}
                />
            </svg>
        </div>
    );
};

export default MovingMountainsOverlay;
