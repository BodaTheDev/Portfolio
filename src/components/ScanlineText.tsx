'use client';

import { motion } from 'framer-motion';

export const ScanlineText = ({ text }: { text: string }) => {
    return (
        <span className="relative inline-block group">
            {/* Base Text */}
            <span className="relative z-10 text-brand-orange drop-shadow-[0_0_8px_rgba(233,84,32,0.3)]">
                {text}
            </span>

            {/* Glitch/Scanline Overlays */}
            <span className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity">
                <span className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
            </span>

            {/* The "Stretch" Distortion (Horizontal Pixel Blur) */}
            <motion.span
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.5, x: [0, -2, 2, 0] }}
                className="absolute inset-0 z-0 text-brand-orange/30 blur-[2px] select-none translate-x-[2px]"
            >
                {text}
            </motion.span>
        </span>
    );
};
