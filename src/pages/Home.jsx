import React from 'react';
import MovingMountainsOverlay from '../components/ui/MovingMountains.jsx';
import Search from '../components/ui/Search';
import { motion as Motion } from 'framer-motion';
import CopySectionButton from '../components/ui/CopySectionButton';
import CopyButton from '../components/ui/CopyButton';

const Home = () => {
    return (
        <div className="relative min-h-screen bg-white overflow-hidden flex items-center">
            {/* Background Mountain - Hero Style */}
            <div className="absolute top-0 right-0 w-3/4 h-full pointer-events-none opacity-10">
                <MovingMountainsOverlay className="w-full h-full text-aia-red" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 w-full max-w-5xl px-12 md:px-24 py-32 space-y-12">
                <Motion.div
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
                </Motion.div>

                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <Search variant="hero" className="max-w-2xl" />
                </Motion.div>

                <Motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="pt-8"
                >
                    <div className="flex flex-col gap-10">
                        <div className="space-y-1">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-aia-red">Quick Access</p>
                            <p className="text-xs text-aia-charcoal/60">Copy brand tone, values, and primary colours.</p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl w-full">
                            <div className="rounded-2xl border border-gray-100 p-6">
                                <h3 className="text-sm font-semibold text-aia-charcoal">Brand Personality</h3>
                                <p className="mt-2 text-xs text-aia-charcoal/60">Copy brand personality, tone of voice, or the combined prompt.</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    <CopySectionButton
                                        label="Copy Personality"
                                        getText={() =>
                                            `Brand Personality (AIA as a Mentor)\n\nSummary:\n- Our personality is how our customers experience our brand. It applies to how we come across visually and how we communicate - in person and on the page.\n\nTraits:\n- Compassionate: Compassion is about being empathetic. It means standing in our customers’ shoes and seeing things from their point of view. We are never judgemental.\n- Straightforward: We speak simply and to the point. No matter how complex the subject, we are easy to understand. We are direct and respectful, not long-winded or insensitive.\n- Positive: We are optimistic, enthusiastic and focused on opportunity. We project an infectious sense of energy while staying grounded, practical and realistic.\n- Confident: Confidence means feeling proud of our long-standing history and unrivalled expertise. We are knowledgeable without being arrogant or showing off.\n- Encouraging: Encouraging means being gently supportive, instilling confidence and positivity in our customers. We are never harsh or too directive. We seek to encourage a ‘can do’ mentality.\n- Motivating: Motivation is about being inspiring. We lead by example, always showing, not telling, and providing evidence wherever we can.\n- Guiding: Guiding means indicating a way forward, exercising a subtle influence and providing options. We are instructive but not prescriptive.\n- On your side: On your side means championing the causes that matter to our customers. It means being inclusive, accepting and celebrating individuals, not alienating them.`
                                        }
                                    />
                                    <CopySectionButton
                                        label="Copy Tone of Voice"
                                        getText={() =>
                                            `Tone of Voice (Mentor)\n\nSummary:\n- Bring our brand and persona to life through words.\n- Say the right thing in the right moment to demonstrate mentor qualities.\n\nPrinciples:\n- Use simple language: short sentences, simple words, avoid jargon.\n- Speak to the individual: refer to “you”, respect individuality and culture.\n- Strengthen with proof: show evidence, avoid vague statements.\n- Focus on the future: highlight how today shapes tomorrow.\n- Be positive and inclusive: optimistic, bold, welcoming and never negative.`
                                        }
                                    />
                                    <CopySectionButton
                                        label="Copy Full Prompt"
                                        getText={() =>
                                            `AIA Brand Prompt (Personality + Values + Tone)\n\nBrand Personality (AIA as a Mentor):\n- Compassionate\n- Straightforward\n- Positive\n- Confident\n- Encouraging\n- Motivating\n- Guiding\n- On your side\n\nCompany Values:\n- Customer First\n- Integrity\n- Excellence\n- Care & Empathy\n- Collaboration\n- Innovation\n\nTone of Voice Principles:\n- Use simple language\n- Speak to the individual\n- Strengthen with proof\n- Focus on the future\n- Be positive and inclusive\n\nInstruction:\nWrite content that feels like a helpful mentor—clear, confident, encouraging, and future‑focused. Keep language simple, speak directly to the reader, back up statements with proof, and stay positive and inclusive.`
                                        }
                                    />
                                </div>
                            </div>
                            <div className="rounded-2xl border border-gray-100 p-6">
                                <h3 className="text-sm font-semibold text-aia-charcoal">Company Values</h3>
                                <p className="mt-2 text-xs text-aia-charcoal/60">Copy the values block for quick use.</p>
                                <div className="mt-4">
                                    <CopySectionButton
                                        label="Copy Values"
                                        getText={() =>
                                            `Company Values\n\n- Customer First: We serve people and communities by putting customer needs at the center of every decision.\n- Integrity: We act with honesty, transparency, and accountability.\n- Excellence: We deliver quality, consistency, and continual improvement.\n- Care & Empathy: We listen, support, and guide with humanity.\n- Collaboration: We work as one team across markets and functions.\n- Innovation: We adapt and create to help people live Healthier, Longer, Better Lives.`
                                        }
                                    />
                                </div>
                            </div>
                            <div className="rounded-2xl border border-gray-100 p-5">
                                <h3 className="text-sm font-semibold text-aia-charcoal">Primary Colours</h3>
                                <p className="mt-2 text-xs text-aia-charcoal/60">Tap to copy core hex codes.</p>
                                <div className="mt-4 grid grid-cols-3 gap-2">
                                    {[
                                        { name: 'Red', hex: '#D31145' },
                                        { name: 'White', hex: '#FFFFFF' },
                                        { name: 'Charcoal', hex: '#333D47' },
                                    ].map((swatch) => (
                                        <div key={swatch.name} className="rounded-lg border border-gray-100 px-2 py-2 flex flex-col items-center gap-2 min-w-0">
                                            <div className="h-8 w-8 rounded" style={{ background: swatch.hex }} />
                                            <div className="text-center">
                                                <p className="text-[10px] font-semibold text-aia-charcoal leading-tight">{swatch.name}</p>
                                                <p className="text-[10px] text-aia-charcoal/60">{swatch.hex}</p>
                                            </div>
                                            <CopyButton value={swatch.hex} size="xs" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Motion.div>
            </div>
        </div>
    );
};

export default Home;
