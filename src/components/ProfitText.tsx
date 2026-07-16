'use client';

import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';

const characters = "01$¢£¥€฿₿0123456789%&";

export const ProfitText = ({ text }: { text: string }) => {
    const [displayText, setDisplayText] = useState(text);
    const controls = useAnimation();

    const scramble = () => {
        controls.start({
            y: -25,
            opacity: [0, 0.4, 0],
            transition: { duration: 0.5, ease: "easeOut" }
        });

        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(prev =>
                prev.split("").map((char, index) => {
                    if (index < iteration) return text[index];
                    return characters[Math.floor(Math.random() * characters.length)];
                }).join("")
            );
            if (iteration >= text.length) clearInterval(interval);
            iteration += 1 / 2;
        }, 30);
    };

    return (
        <span
            className="relative inline-block cursor-default group touch-manipulation"
            onMouseEnter={scramble}
            onTouchStart={scramble} // Explicit Mobile Trigger
        >
            <motion.span animate={controls} initial={{ y: 0, opacity: 0 }} className="absolute inset-0 text-brand-orange font-bold pointer-events-none select-none blur-md">
                {text}
            </motion.span>
            <span className="relative z-10 font-bold text-brand-orange transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_20px_rgba(233,84,32,0.8)]">
                {displayText}
            </span>
            <motion.span className="absolute -bottom-1 left-0 h-[1px] bg-brand-orange w-0 group-hover:w-full transition-all duration-700" />
        </span>
    );
};
