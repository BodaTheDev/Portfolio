'use client';

import { Mail } from 'lucide-react';
import { ProfitText } from './ProfitText';
import { motion } from 'framer-motion';

// Custom SVG Components to bypass lucide-react export errors
const GithubIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const WhatsappIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className}>
        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
    </svg>);


const Footer = () => {
    const email = "abdelrahman.almeshwady@gmail.com";

    const socials = [
        { name: 'GitHub', href: 'https://github.com/BodaTheDev', icon: GithubIcon },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/abdelrahman-al-meshwady/', icon: LinkedinIcon },
        { name: 'WhatsApp', href: 'http://wa.me/+201116351047', icon: WhatsappIcon },
        { name: 'Mail', href: `mailto:${email}`, icon: Mail },
    ];

    const sitemap = [
        { name: 'Home', href: '#home' },
        { name: 'Capabilities', href: '#capabilities' },
        { name: 'Projects', href: '#projects' },
    ];

    return (
        <footer id="contact" className="bg-[#0A0A0A] pt-5 md:pt-24 pb-8 md:pb-12 px-6 md:px-20 border-t border-neutral-900 relative">
            <div className="max-w-[1400px] mx-auto">

                {/* TOP SECTION: Information Grid */}
                {/* COMPRESSED: Changed mb-40 to mb-16 (mobile) and mb-24 (desktop) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10 md:mb-35">

                    {/* Left: Manifesto Column */}
                    <div className="lg:col-span-8">
                        <h2 className="text-[10px] md:text-sm font-mono text-[#E95420] tracking-[0.3em] mb-4 md:mb-6 uppercase">
                            // Final Transaction
                        </h2>

                        <div className="mb-8">
                            <h3 className="text-xl md:text-5xl font-bold tracking-tighter uppercase text-white leading-tight mb-3">
                                Let’s build something <br />
                                <ProfitText text="PROFITABLE" />.
                            </h3>
                            <p className="text-neutral-500 text-xs md:text-sm max-w-sm leading-relaxed">
                                Whether you need a Technical Lead to manage the vision or a Senior Engineer to build the engine, I am ready to deliver.
                            </p>
                        </div>
                    </div>

                    {/* Right: Metadata Links */}
                    <div className="lg:col-span-4 grid grid-cols-2 gap-4 pt-0 lg:pt-2">
                        <div className="space-y-4 md:space-y-6">
                            <h4 className="text-[9px] md:text-[10px] uppercase tracking-widest text-neutral-600 font-bold">Socials</h4>
                            <ul className="space-y-2 md:space-y-3">
                                {socials.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`Connect with me on ${link.name}`}
                                            className="text-xs md:text-sm text-neutral-300 hover:text-[#E95420] transition-colors flex items-center gap-2 group"
                                        >
                                            <link.icon className="w-3 h-3 md:w-4 md:h-4 text-neutral-600 group-hover:text-[#E95420] transition-colors" />
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-4 md:space-y-6">
                            <h4 className="text-[9px] md:text-[10px] uppercase tracking-widest text-neutral-600 font-bold">Sitemap</h4>
                            <ul className="space-y-2 md:space-y-3">
                                {sitemap.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="text-xs md:text-sm text-neutral-300 hover:text-[#E95420] transition-colors">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* MIDDLE SECTION: Dual-Layer Hardware Interaction */}
                <div className="relative flex justify-center items-center py-4 md:py-8 mb-8 md:mb-12 cursor-pointer">
                    <a href={`mailto:${email}`}
                        aria-label="Initiate connection via email to start a project"
                        className="work-anchor no-underline">
                        <h3 className="relative text-[14vw] md:text-[12vw] font-bold leading-none text-transparent uppercase select-none text-center">

                            {/* LAYER 1: The Ghost (Visible by default) */}
                            <span className="layer-ghost block">
                                LET'S WORK
                            </span>

                            {/* LAYER 2: The Active (Visible on Tap/Hover) */}
                            <span className="layer-active block" aria-hidden="true">
                                LET'S WORK
                            </span>

                        </h3>
                    </a>
                </div>

                {/* BOTTOM SECTION: Metadata & Credits */}
                {/* COMPRESSED: Tightened bottom area */}
                <div className="pt-6 md:pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center md:items-end gap-4">
                    <p className="text-[8px] md:text-[10px] text-neutral-600 uppercase tracking-widest font-mono">
                        © 2026 Abdelrahman Al-Meshwady. All Rights Reserved.
                    </p>
                    <div className="text-center md:text-right space-y-1">
                        <p className="text-[8px] md:text-[10px] text-neutral-600 uppercase tracking-widest">
                            Designed with Precision
                        </p>
                        <p className="text-[8px] md:text-[10px] text-neutral-600 uppercase tracking-widest">
                            Coded with Passion
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
