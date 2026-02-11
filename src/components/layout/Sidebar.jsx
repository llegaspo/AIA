import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';
import LogoLockup from '../brand/LogoLockup';

const SidebarLink = ({ to, children, exact = false, variant = 'section' }) => {
    const location = useLocation();
    const [path, hash] = to.split('#');
    const isHashMatch = hash ? location.pathname === path && location.hash === `#${hash}` : false;

    return (
        <NavLink
            to={to}
            end={exact}
            className={({ isActive }) => {
                const active = hash ? isHashMatch : isActive;
                const sizeClass = variant === 'page' ? 'text-sm' : 'text-xs';
                return `block py-2 px-4 ${sizeClass} font-medium uppercase transition-colors duration-200 ${active
                    ? 'text-aia-red font-bold'
                    : 'text-aia-charcoal hover:text-aia-red'
                    }`;
            }}
        >
            {children}
        </NavLink>
    );
};

const SidebarSection = ({ title, children, defaultOpen = false, autoOpen = false, to = null }) => {
    const [isOpen, setIsOpen] = React.useState(defaultOpen);
    const navigate = useNavigate();
    React.useEffect(() => {
        setIsOpen(autoOpen);
    }, [autoOpen]);

    return (
        <div className="mb-6">
            <button
                onClick={() => {
                    setIsOpen(!isOpen);
                    if (to) navigate(to);
                }}
                className="flex items-center justify-between w-full px-4 mb-2 text-sm font-bold text-aia-charcoal/70 uppercase tracking-wider hover:text-aia-red transition-colors"
            >
                {title}
                {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <Motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                    >
                        {children}
                    </Motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Sidebar = () => {
    const location = useLocation();
    const isOurBrand = location.pathname === '/our-brand';
    const isPurpose = location.pathname === '/purpose';
    const isPersonality = location.pathname === '/personality';
    const isTone = location.pathname === '/tone-of-voice';
    const isCultural = location.pathname === '/cultural-guidance';
    const isApplications = location.pathname.startsWith('/applications');

    return (
        <aside className="w-64 h-screen fixed left-0 top-0 bg-aia-grey border-r border-gray-200 overflow-y-auto z-50">
            <div className="p-8">
                <NavLink to="/" className="block mb-10 transition-transform hover:scale-[1.02]">
                    <LogoLockup className="w-full" logoClassName="h-10" />
                </NavLink>

                <nav className="space-y-2">
                    <SidebarSection
                        title="Our Brand"
                        to="/our-brand#welcome"
                        autoOpen={isOurBrand || isPurpose || isPersonality || isTone || isCultural}
                    >
                        {isOurBrand && (
                            <div className="ml-4 border-l border-aia-red/10 pl-2">
                                <SidebarLink to="/our-brand#welcome">Welcome</SidebarLink>
                                <SidebarLink to="/our-brand#contents">Contents</SidebarLink>
                            </div>
                        )}

                        <SidebarLink to="/purpose#why-our-purpose" variant="page">Our Purpose</SidebarLink>
                        {isPurpose && (
                            <div className="ml-4 border-l border-aia-red/10 pl-2">
                                <SidebarLink to="/purpose#why-our-purpose">Why our Purpose?</SidebarLink>
                                <SidebarLink to="/purpose#active">Active</SidebarLink>
                                <SidebarLink to="/purpose#customer-centric">Customer-centric</SidebarLink>
                                <SidebarLink to="/purpose#personal">Personal</SidebarLink>
                                <SidebarLink to="/purpose#our-ambition">Our ambition</SidebarLink>
                            </div>
                        )}

                        <SidebarLink to="/personality#why-a-mentor" variant="page">Our Personality</SidebarLink>
                        {isPersonality && (
                            <div className="ml-4 border-l border-aia-red/10 pl-2">
                                <SidebarLink to="/personality#why-a-mentor">Why a mentor?</SidebarLink>
                                <SidebarLink to="/personality#why-a-persona">Why a persona?</SidebarLink>
                                <SidebarLink to="/personality#what-a-mentor-is">What a mentor is</SidebarLink>
                                <SidebarLink to="/personality#personality-traits">Our personality traits</SidebarLink>
                                <SidebarLink to="/personality#company-values">Company Values</SidebarLink>
                                <SidebarLink to="/personality#summary">Summary</SidebarLink>
                            </div>
                        )}

                        <SidebarLink to="/tone-of-voice#introduction" variant="page">Tone of Voice</SidebarLink>
                        {isTone && (
                            <div className="ml-4 border-l border-aia-red/10 pl-2">
                                <SidebarLink to="/tone-of-voice#introduction">Introduction</SidebarLink>
                                <SidebarLink to="/tone-of-voice#principles">Principles</SidebarLink>
                                <SidebarLink to="/tone-of-voice#principles-in-use">Principles in use</SidebarLink>
                                <SidebarLink to="/tone-of-voice#spectrum">Spectrum</SidebarLink>
                                <SidebarLink to="/tone-of-voice#spectrum-in-use">Spectrum in use</SidebarLink>
                            </div>
                        )}

                        <SidebarLink to="/cultural-guidance#introduction" variant="page">Cultural Guidance</SidebarLink>
                        {isCultural && (
                            <div className="ml-4 border-l border-aia-red/10 pl-2">
                                <SidebarLink to="/cultural-guidance#introduction">Introduction</SidebarLink>
                                <SidebarLink to="/cultural-guidance#clusters">Cultural clusters</SidebarLink>
                                <SidebarLink to="/cultural-guidance#application">Our brand across markets</SidebarLink>
                                <SidebarLink to="/cultural-guidance#exploration">Exploration</SidebarLink>
                                <SidebarLink to="/cultural-guidance#empowerment">Empowerment</SidebarLink>
                                <SidebarLink to="/cultural-guidance#expression">Expression</SidebarLink>
                                <SidebarLink to="/cultural-guidance#emancipation">Emancipation</SidebarLink>
                            </div>
                        )}
                    </SidebarSection>

                    <SidebarSection title="Our Identity" to="/logos">
                        <SidebarLink to="/logos">Our Logos</SidebarLink>
                        <SidebarLink to="/colour">Colours</SidebarLink>
                        <SidebarLink to="/typography">Typography</SidebarLink>
                    </SidebarSection>

                    <SidebarSection title="Visual Elements" to="/colour">
                        <SidebarLink to="/moving-mountains">Moving Mountains</SidebarLink>
                        <SidebarLink to="/photography">Photography</SidebarLink>
                        <SidebarLink to="/illustration">Illustration</SidebarLink>
                        <SidebarLink to="/iconography">Iconography</SidebarLink>
                    </SidebarSection>

                    <SidebarSection title="Applications" to="/applications/digital" autoOpen={isApplications}>
                        <SidebarLink to="/applications/mobile-app-icon-system">Mobile app icon system</SidebarLink>
                        <SidebarLink to="/applications/digital">Digital</SidebarLink>
                        <SidebarLink to="/applications/digital-social">Digital: social media</SidebarLink>
                        <SidebarLink to="/applications/corporate">Corporate</SidebarLink>
                        <SidebarLink to="/applications/print">Print</SidebarLink>
                        <SidebarLink to="/applications/merchandise">Merchandise</SidebarLink>
                        <SidebarLink to="/applications/environmental">Environmental</SidebarLink>
                        <SidebarLink to="/applications/events">Events</SidebarLink>
                    </SidebarSection>

                    <SidebarSection title="AIA One Billion" to="/aia-one-billion#introduction">
                        <SidebarLink to="/aia-one-billion#introduction">Introduction</SidebarLink>
                        <SidebarLink to="/aia-one-billion#logo">Logo</SidebarLink>
                        <SidebarLink to="/aia-one-billion#localised">Localised versions</SidebarLink>
                        <SidebarLink to="/aia-one-billion#usage-hlbl">Usage with HLBL</SidebarLink>
                        <SidebarLink to="/aia-one-billion#video">Video usage</SidebarLink>
                        <SidebarLink to="/aia-one-billion#examples">Examples</SidebarLink>
                        <SidebarLink to="/aia-one-billion#assets">AOB assets</SidebarLink>
                        <SidebarLink to="/aia-one-billion#mirror">Mirror Moving Mountains</SidebarLink>
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
