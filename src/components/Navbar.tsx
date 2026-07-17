'use client';

import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 px-4 md:px-12 py-3 md:py-4 flex items-center justify-between bg-black/30 backdrop-blur-[6px] lg:bg-transparent">

            {/* BRANDING: Logo + Name (Added flex-shrink-0 to prevent squishing) */}
            <a href="#home"
                aria-label="Back to top"
                className="flex items-center gap-3 md:gap-4 group no-underline flex-shrink-0">
                <div className="relative w-8 h-8 md:w-10 md:h-10 flex-shrink-0">
                    <img
                        src="/logo.svg"
                        alt="Boda Architect Logo"
                        className="w-full h-full object-contain transition-all duration-500 group-hover:drop-shadow-[0_0_10px_#E95420]"
                    />
                </div>

                <div className="flex flex-col">
                    <span className="font-bold text-sm md:text-base tracking-tighter text-text-header uppercase leading-none transition-colors group-hover:text-brand-orange">
                        Abdelrahman<br />
                        <span className="text-[9px] md:text-xs opacity-80 font-medium group-hover:opacity-100">
                            Ahmed Al-Meshwady
                        </span>
                    </span>
                </div>
            </a>

            {/* NAVIGATION LINKS: Adaptive Gaps */}
            {/* Reduced gap on 'lg' screens (1024px+) to prevent overlap with status */}
            <div className="hidden md:flex items-center md:gap-5 lg:gap-5 xl:gap-10 absolute left-1/2 -translate-x-1/2">
                {['Home', 'Capabilities', 'Projects', 'Contact'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        aria-label={item}
                        className="text-[10px] xl:text-[11px] uppercase tracking-widest text-text-header hover:text-brand-orange transition-colors font-medium whitespace-nowrap"
                    >
                        {item}
                    </a>
                ))}
            </div>

            {/* STATUS BADGE: Linked to Footer + Adaptive Shorthand */}
            <a
                href="#contact"
                aria-label="System Status: Available for Projects. Click to jump to contact section."
                className="flex items-center gap-2 md:gap-3 border border-border-muted md:border-none px-2 py-1.5 md:p-0 bg-surface md:bg-transparent select-none group/status hover:opacity-80 transition-opacity flex-shrink-0"
            >
                <div className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                    <motion.span
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"
                    />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-brand-orange" />
                </div>

                {/* 
                   SHORTHAND LOGIC: 
                   1. Default: "AVAILABLE"
                   2. XL Breakpoint (1280px+): Restore "for Projects"
                */}
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.1em] md:tracking-[0.2em] font-bold text-text-header group-hover/status:text-brand-orange transition-colors whitespace-nowrap">
                    Available <span className="hidden lg:inline">for Projects</span>
                </span>
            </a>
        </nav>
    );
};

export default Navbar;
