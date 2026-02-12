import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';
import LogoLockup from '../brand/LogoLockup';
import { VIDEO_END_FRAMES } from '../../data/videoEndFrames';

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
    const isOurBrand = location.pathname.startsWith('/our-brand');
    const isPurpose = location.pathname === '/purpose';
    const isPersonality = location.pathname === '/personality';
    const isTone = location.pathname === '/tone-of-voice';
    const isCultural = location.pathname === '/cultural-guidance';
    const isApplications = location.pathname.startsWith('/applications');
    const isVideo = location.pathname.startsWith('/video');
    const isLogos = location.pathname === '/logos';
    const isColour = location.pathname === '/colour';
    const isTypography = location.pathname === '/typography';
    const isIdentity = isLogos || isColour || isTypography;
    const isIllustration = location.pathname === '/illustration';
    const isIconography = location.pathname === '/iconography';
    const isPhotography = location.pathname === '/photography';

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

                    <SidebarSection title="Video" to="/video/end-frames" autoOpen={isVideo}>
                        <SidebarLink to="/video/end-frames" variant="page">Video End Frames</SidebarLink>
                    </SidebarSection>

                    <SidebarSection title="Our Identity" to="/logos#logos-overview" autoOpen={isIdentity}>
                        <SidebarLink to="/logos">Our Logos</SidebarLink>
                        {isLogos && (
                            <div className="ml-4 border-l border-aia-red/10 pl-2">
                                <SidebarLink to="/logos#logos-overview">Overview</SidebarLink>
                                <SidebarLink to="/logos#hlbl-logo-lockup">HLBL Logo Lockup</SidebarLink>
                                <SidebarLink to="/logos#localised-versions">Localised versions</SidebarLink>
                                <SidebarLink to="/logos#corporate-logo">Corporate Logo</SidebarLink>
                                <SidebarLink to="/logos#wordmark">Wordmark</SidebarLink>
                                <SidebarLink to="/logos#wordmark-usage">Wordmark usage</SidebarLink>
                                <SidebarLink to="/logos#logo-usage">Logo usage</SidebarLink>
                                <SidebarLink to="/logos#logo-placement">Placement</SidebarLink>
                                <SidebarLink to="/logos#logo-donts">Logo don’ts</SidebarLink>
                                <SidebarLink to="/logos#wordmark-donts">Wordmark don’ts</SidebarLink>
                            </div>
                        )}
                        <SidebarLink to="/colour">Colours</SidebarLink>
                        {isColour && (
                            <div className="ml-4 border-l border-aia-red/10 pl-2">
                                <SidebarLink to="/colour#core-colours">Core colours</SidebarLink>
                                <SidebarLink to="/colour#secondary-colours">Secondary colours</SidebarLink>
                                <SidebarLink to="/colour#core-shades">Core colour shades</SidebarLink>
                                <SidebarLink to="/colour#colour-donts">Colour don’ts</SidebarLink>
                            </div>
                        )}
                        <SidebarLink to="/typography">Typography</SidebarLink>
                        {isTypography && (
                            <div className="ml-4 border-l border-aia-red/10 pl-2">
                                <SidebarLink to="/typography#primary-english">Primary typeface</SidebarLink>
                                <SidebarLink to="/typography#system-english">System typeface</SidebarLink>
                                <SidebarLink to="/typography#primary-chinese">Chinese typeface</SidebarLink>
                                <SidebarLink to="/typography#hierarchy">Hierarchy</SidebarLink>
                                <SidebarLink to="/typography#digital-typography">Digital usage</SidebarLink>
                            </div>
                        )}
                    </SidebarSection>

                    <SidebarSection title="Visual Elements" to="/colour">
                        <SidebarLink to="/moving-mountains">Moving Mountains</SidebarLink>
                        <SidebarLink to="/photography">Photography</SidebarLink>
                        {isPhotography && (
                            <div className="ml-4 border-l border-aia-red/10 pl-2">
                                <SidebarLink to="/photography#photo-principles">Principles</SidebarLink>
                                <SidebarLink to="/photography#photo-briefs">Briefs</SidebarLink>
                                <SidebarLink to="/photography#photo-works">What works</SidebarLink>
                                <SidebarLink to="/photography#photo-donts">Don’ts</SidebarLink>
                            </div>
                        )}
                        <SidebarLink to="/illustration">Illustration</SidebarLink>
                        {isIllustration && (
                            <div className="ml-4 border-l border-aia-red/10 pl-2">
                                <SidebarLink to="/illustration#illustration-style">Style</SidebarLink>
                                <SidebarLink to="/illustration#illustration-examples">Examples</SidebarLink>
                                <SidebarLink to="/illustration#illustration-scene">Scene</SidebarLink>
                                <SidebarLink to="/illustration#illustration-integration">Integration</SidebarLink>
                                <SidebarLink to="/illustration#illustration-in-use">In use</SidebarLink>
                            </div>
                        )}
                        <SidebarLink to="/iconography">Iconography</SidebarLink>
                        {isIconography && (
                            <div className="ml-4 border-l border-aia-red/10 pl-2">
                                <SidebarLink to="/iconography#system-icons">System icons</SidebarLink>
                                <SidebarLink to="/iconography#illustrated-icons">Illustrated icons</SidebarLink>
                            </div>
                        )}
                    </SidebarSection>

                    <SidebarSection title="Applications" to="/applications/mobile-app-icon-system" autoOpen={isApplications}>
                        <SidebarLink to="/applications/mobile-app-icon-system">Mobile app icon system</SidebarLink>
                        <SidebarLink to="/applications/digital-social">Digital: social media</SidebarLink>
                        <SidebarLink to="/applications/corporate">Corporate</SidebarLink>
                        <SidebarLink to="/applications/print">Print</SidebarLink>
                        <SidebarLink to="/applications/merchandise">Merchandise</SidebarLink>
                        <SidebarLink to="/applications/environmental">Environmental</SidebarLink>
                        <SidebarLink to="/applications/events">Events</SidebarLink>
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
