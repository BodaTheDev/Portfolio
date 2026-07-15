'use client';

import { motion } from 'framer-motion';

export const ScalingWord = () => {
    return (
        <motion.span
            className="inline-flex items-baseline cursor-default"
            initial="initial"
            whileHover="hover"
        >
            <span className="inline-block">S</span>
            <span className="inline-block">C</span>

            {/* THE SCALING 'A' */}
            <motion.span
                className="inline-block"
                variants={{
                    initial: { scaleX: 1, originX: 0 },
                    hover: {
                        scaleX: 3.5,
                        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                    }
                }}
            >
                A
            </motion.span>

            {/* THE SHIFTING 'LE' */}
            {/* x: 0 in initial ensures there is NO gap in the normal state */}
            <motion.span
                className="inline-flex"
                variants={{
                    initial: { x: 0 },
                    hover: {
                        x: "1.55em",
                        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                    }
                }}
            >
                <span className="inline-block">L</span>
                <span className="inline-block">E</span>
            </motion.span>
        </motion.span>
    );
};
