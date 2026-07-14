'use client';

import { motion } from 'framer-motion';

export const ScalingWord = () => {
    return (
        <motion.span
            className="inline-flex whitespace-nowrap cursor-default"
            initial="initial"
            whileHover="hover"
        >
            {/* Static prefix */}
            <span className="inline-block text-text-header">S</span>
            <span className="inline-block text-text-header">C</span>

            {/* The Scaling 'A' */}
            <motion.span
                variants={{
                    initial: { scaleX: 1, originX: 0 },
                    hover: {
                        scaleX: 3.5,
                        originX: 0,
                        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                    }
                }}
                className="inline-block text-text-header"
            >
                A
            </motion.span>

            {/* Shifting Suffix */}
            <motion.span
                variants={{
                    initial: { x: 0 },
                    hover: {
                        x: 195, // Adjust this value based on how much 'A' scales
                        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                    }
                }}
                className="inline-flex"
            >
                <span className="text-text-header">L</span>
                <span className="text-text-header">E</span>
            </motion.span>
        </motion.span>
    );
};
