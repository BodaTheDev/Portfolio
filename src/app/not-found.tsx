'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 text-center overflow-hidden relative">

            {/* Background Grid */}
            <div className="absolute inset-0 arch-grid opacity-10 pointer-events-none" />

            {/* Your Custom Animated SVG Container */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 mb-12"
            >
                <div className="relative group">
                    {/* The SVG File */}
                    <img
                        src="/404-animation.svg"
                        alt="System Error"
                        className="w-full max-w-[400px] h-auto drop-shadow-[0_0_30px_rgba(233,84,32,0.3)] group-hover:drop-shadow-[0_0_50px_rgba(233,84,32,0.5)] transition-all duration-500"
                    />

                    {/* Scanning Laser Line (Optional Decorative Overlay) */}
                    <motion.div
                        animate={{ top: ['0%', '100%', '0%'] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-[1px] bg-brand-orange/30 blur-sm pointer-events-none"
                    />
                </div>
            </motion.div>

            {/* Terminal Manifesto */}
            <div className="relative z-10 space-y-6">
                <div className="inline-block border border-brand-orange/30 px-3 py-1 bg-brand-orange/5">
                    <h1 className="text-[10px] font-mono text-brand-orange tracking-[0.4em] uppercase">
                        [ STATUS: 404_SEGMENTATION_FAULT ]
                    </h1>
                </div>

                <p className="text-text-body max-w-md mx-auto text-sm leading-relaxed font-medium">
                    The requested technical coordinate does not exist.
                    The system link has been severed or moved to a secured directory.
                </p>

                <div className="pt-8">
                    <Link
                        href="/"
                        aria-label="Return to the main home page"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-brand-orange text-white font-bold uppercase text-[10px] tracking-[0.3em] hover:bg-white hover:text-black transition-all group"
                    >
                        GET BACK TO SAFETY
                    </Link>
                </div>
            </div>

            {/* Bottom Logic ID */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20">
                <p className="font-mono text-[8px] uppercase tracking-[0.5em] text-text-body">
                    Error_ID: 404_NOT_FOUND
                </p>
            </div>
        </div>
    );
}
