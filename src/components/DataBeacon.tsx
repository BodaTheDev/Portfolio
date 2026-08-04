'use client';

import { motion } from 'framer-motion';

export const DataBeacon = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative flex items-center justify-center py-12 px-8">
            {/* 1. THE ROTATING RADAR (Scanning Layer) */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute w-64 h-64 border border-dashed border-brand-orange/20 rounded-full pointer-events-none"
            />

            {/* 2. THE GEOMETRIC PING (Signal Layer) */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.5, opacity: [0, 0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                className="absolute w-48 h-48 border border-brand-orange/40 rounded-full pointer-events-none shadow-[0_0_20px_rgba(233,84,32,0.2)]"
            />

            {/* 3. FOUR CORNER BRACKETS (Targeting Layer) */}
            <div className="absolute w-40 h-40 pointer-events-none">
                {[0, 90, 180, 270].map((angle) => (
                    <div
                        key={angle}
                        style={{ transform: `rotate(${angle}deg)` }}
                        className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-orange/40"
                    />
                ))}
            </div>

            {/* THE BUTTON (Focal Point) */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};
