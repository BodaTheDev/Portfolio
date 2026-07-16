'use client';

import { motion } from 'framer-motion';

// Icon 1: The Accelerator (For POP THE HOOD)
export const AcceleratorArrow = () => (
    <div className="relative w-6 h-4 flex items-center overflow-hidden">
        {/* The Tail */}
        <motion.div
            variants={{
                initial: { width: 0, opacity: 0 },
                hover: { width: 12, opacity: 1 }
            }}
            className="h-[2px] bg-current mr-[-2px]"
        />
        {/* The Head */}
        <motion.svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="w-4 h-4"
        >
            <path d="M9 18l6-6-6-6" />
        </motion.svg>
    </div>
);

// Icon 2: The Spec Pull (For FETCH SPECS)
export const SpecPull = () => (
    <div className="relative flex items-center gap-1">
        <span className="font-mono text-[14px] leading-none opacity-40">[</span>
        <div className="relative w-3 h-4">
            <motion.svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="w-3 h-3 absolute top-0"
                variants={{
                    initial: { y: -2, opacity: 0.5 },
                    hover: { y: 4, opacity: 1 }
                }}
            >
                <path d="M19 9l-7 7-7-7" />
            </motion.svg>
        </div>
        <span className="font-mono text-[14px] leading-none opacity-40">]</span>
    </div>
);
