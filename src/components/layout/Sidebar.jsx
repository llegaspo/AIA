import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';

const SidebarLink = ({ to, children, exact = false }) => (
    <NavLink
        to={to}
        end={exact}
        className={({ isActive }) =>
            `block py-2 px-4 text-sm font-medium uppercase transition-colors duration-200 ${isActive
                ? 'text-aia-red border-l-4 border-aia-red bg-aia-red/5'
                : 'text-aia-charcoal hover:text-aia-red hover:bg-aia-grey/50 border-l-4 border-transparent'
            }`
        }
    >
        {children}
    </NavLink>
);

const SidebarSection = ({ title, children, defaultOpen = true }) => {
    const [isOpen, setIsOpen] = React.useState(defaultOpen);

    return (
        <div className="mb-6">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full px-4 mb-2 text-xs font-bold text-aia-charcoal/60 uppercase tracking-wider hover:text-aia-red transition-colors"
            >
                {title}
                {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Sidebar = () => {
    return (
        <aside className="w-64 h-screen fixed left-0 top-0 bg-aia-grey border-r border-gray-200 overflow-y-auto z-50">
            <div className="p-8">
                <NavLink to="/" className="block mb-10 transition-transform hover:scale-[1.02]">
                    {/* Refined Horizontal Logo Lockup */}
                    <div className="w-full">
                        <img
                            src="/assets/logo_lockup.png"
                            alt="AIA Logo Lockup"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </NavLink>

                <nav className="space-y-2">
                    <SidebarSection title="Introduction">
                        <SidebarLink to="/" exact>Welcome</SidebarLink>
                        <SidebarLink to="/brand-standards">Brand Standards</SidebarLink>
                    </SidebarSection>

                    <SidebarSection title="Our Brand">
                        <SidebarLink to="/purpose">Our Purpose</SidebarLink>
                        <SidebarLink to="/personality">Our Personality</SidebarLink>
                        <SidebarLink to="/tone-of-voice">Tone of Voice</SidebarLink>
                        <SidebarLink to="/cultural-guidance">Cultural Guidance</SidebarLink>
                    </SidebarSection>

                    <SidebarSection title="Our Identity">
                        <SidebarLink to="/logos">Our Logos</SidebarLink>
                        <SidebarLink to="/colour">Colours</SidebarLink>
                        <SidebarLink to="/typography">Typography</SidebarLink>
                    </SidebarSection>

                    <SidebarSection title="Visual Elements">
                        <SidebarLink to="/moving-mountains">Moving Mountains</SidebarLink>
                        <SidebarLink to="/photography">Photography</SidebarLink>
                        <SidebarLink to="/illustration">Illustration</SidebarLink>
                        <SidebarLink to="/iconography">Iconography</SidebarLink>
                    </SidebarSection>

                    <SidebarSection title="Applications">
                        <SidebarLink to="/digital">Digital</SidebarLink>
                        <SidebarLink to="/print">Print</SidebarLink>
                        <SidebarLink to="/merchandise">Merchandise</SidebarLink>
                    </SidebarSection>
                </nav>

                <div className="mt-12 pt-8 border-t border-gray-200/50 text-[9px] text-aia-charcoal/40 uppercase tracking-widest font-sans flex items-center justify-between">
                    <span>AIA Global Brand Hub</span>
                    <span>v1.2</span>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
