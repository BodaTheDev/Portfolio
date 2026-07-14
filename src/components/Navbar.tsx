'use client';

import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 px-6 md:px-12 py-8 flex items-center justify-between bg-transparent">
            {/* Name / Brand */}
            <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tighter text-text-header uppercase leading-none">
                    Abdelrahman<br />Boda
                </span>
            </div>

            {/* Navigation Links - Centered */}
            <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
                {['Home', 'Work', 'Services', 'About', 'Contact'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-[11px] uppercase tracking-widest text-text-header hover:text-brand-orange transition-colors font-medium"
                    >
                        {item}
                    </a>
                ))}
            </div>

            {/* Status Badge */}
            <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-text-header">
                    Available for Projects
                </span>
            </div>
        </nav>
    );
};

export default Navbar;
