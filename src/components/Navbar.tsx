'use client';

import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 px-6 md:px-12 py-6 md:py-8 flex items-center justify-between bg-black/50 backdrop-blur-md lg:bg-transparent">

            {/* Branding - Stacked Name for better mobile fit */}
            <div className="flex flex-col">
                <span className="font-bold text-sm md:text-lg tracking-tighter text-text-header uppercase leading-none">
                    Abdelrahman<br />
                    <span className="text-[10px] md:text-sm opacity-80">Ahmed Al-Meshwady</span>
                </span>
            </div>

            {/* Navigation Links - Centered (Desktop only) */}
            <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
                {['Home', 'Capabilities', 'Projects', 'Contact'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-[11px] uppercase tracking-widest text-text-header hover:text-brand-orange transition-colors font-medium"
                    >
                        {item}
                    </a>
                ))}
            </div>

            {/* Status Badge - Shorthand implemented via 'hidden md:inline' */}
            <div className="flex items-center gap-2 md:gap-3 border border-border-muted md:border-none px-2 py-1 md:p-0 bg-surface md:bg-transparent">
                <div className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                    <motion.span
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"
                    />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-brand-orange" />
                </div>
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.1em] md:tracking-[0.2em] font-bold text-text-header">
                    Available <span className="hidden md:inline">for Projects</span>
                </span>
            </div>
        </nav>
    );
};

export default Navbar;
