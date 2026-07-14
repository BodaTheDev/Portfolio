'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


export const GlitchText = ({ text }: { text: string }) => {
    const [displayText, setDisplayText] = useState(text);
    const [isHovered, setIsHovered] = useState(false);
    const characters = displayText;

    // Decipher Effect: Cycles random characters on hover
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isHovered) {
            interval = setInterval(() => {
                setDisplayText(
                    text
                        .split('')
                        .map(() => characters[Math.floor(Math.random() * characters.length)])
                        .join('')
                );
            }, 50);
        } else {
            setDisplayText(text);
        }
        return () => clearInterval(interval);
    }, [isHovered, text]);

    // Jitter animation variants
    const jitterTop = {
        hover: {
            x: [0, -3, 3, -1, 0],
            transition: { repeat: Infinity, duration: 0.1 }
        }
    };

    const jitterBottom = {
        hover: {
            x: [0, 3, -3, 1, 0],
            transition: { repeat: Infinity, duration: 0.1 }
        }
    };

    return (
        <div
            className="relative inline-block cursor-pointer group leading-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Invisible Base (Sets the layout size) */}
            <span className="opacity-0">{text}</span>

            {/* TOP SLICE */}
            <motion.span
                variants={jitterTop}
                animate={isHovered ? "hover" : ""}
                className="absolute inset-0 text-text-header z-20"
                style={{ clipPath: 'inset(0 0 50% 0)' }}
            >
                {displayText}
            </motion.span>

            {/* BOTTOM SLICE */}
            <motion.span
                variants={jitterBottom}
                animate={isHovered ? "hover" : ""}
                className="absolute inset-0 text-text-header z-10"
                style={{
                    clipPath: 'inset(50% 0 0 0)',
                    color: isHovered ? '#E95420' : 'white' // Flash orange on glitch
                }}
            >
                {displayText}
            </motion.span>

            {/* DECORATIVE CENTER SLICE (RED/ORANGE LINE) */}
            <motion.div
                animate={isHovered ? { opacity: [0, 1, 0], x: [-10, 10] } : { opacity: 0 }}
                transition={{ repeat: Infinity, duration: 0.2 }}
                className="absolute top-1/2 left-0 w-full h-[2px] bg-brand-orange z-30 -translate-y-1/2"
            />
        </div>
    );
};
