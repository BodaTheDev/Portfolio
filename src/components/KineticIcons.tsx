'use client';

import React from 'react';

// Icon 1: The Accelerator (For POP THE HOOD)
export const AcceleratorArrow = () => (
    <div className="relative w-7 h-4 flex items-center overflow-hidden pointer-events-none">
        {/* The Tail: Controlled by .kinetic-tail in CSS */}
        <div className="kinetic-tail h-[2px] bg-current mr-[-1px] rounded-full" />

        {/* The Head: Controlled by .kinetic-arrow-head in CSS */}
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="kinetic-arrow-head w-4 h-4"
        >
            <path d="M9 18l6-6-6-6" />
        </svg>
    </div>
);

// Icon 2: The Spec Pull (For FETCH SPECS)
export const SpecPull = () => (
    <div className="relative flex items-center gap-1 pointer-events-none">
        <span className="font-mono text-[14px] leading-none opacity-40">[</span>
        <div className="relative w-3 h-4">
            {/* The Arrow: Controlled by .kinetic-spec-icon in CSS */}
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="kinetic-spec-icon w-3 h-3 absolute top-0"
            >
                <path d="M19 9l-7 7-7-7" />
            </svg>
        </div>
        <span className="font-mono text-[14px] leading-none opacity-40">]</span>
    </div>
);
