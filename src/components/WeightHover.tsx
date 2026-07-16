'use client';

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { motion, stagger, useAnimate, type AnimationOptions } from "framer-motion";

interface WeightHoverProps {
    label: string;
    onClick?: () => void;
    className?: string;
    icon?: React.ReactNode;
}

export const WeightHover = ({ label, onClick, className, icon }: WeightHoverProps) => {
    const [scope, animate] = useAnimate();
    const [isHovered, setIsHovered] = useState(false);

    const transition: AnimationOptions = {
        type: "spring",
        stiffness: 800,
        damping: 40,
        mass: 1,
    };

    const runStart = () => {
        animate(".letter", { fontWeight: 900 }, { ...transition, delay: stagger(0.02, { from: "center" }) });
    };

    const runEnd = () => {
        animate(".letter", { fontWeight: 400 }, { ...transition, delay: stagger(0.02, { from: "center" }) });
    };

    // Unifying Mouse and Touch events
    const handleActivate = () => {
        setIsHovered(true);
        runStart();
    };

    const handleDeactivate = () => {
        setIsHovered(false);
        runEnd();
    };

    return (
        <motion.button
            ref={scope}
            onClick={onClick}
            // Pointer events work for both Mouse and Touch
            onPointerEnter={handleActivate}
            onPointerLeave={handleDeactivate}
            // Mobile Specific: Ensure it triggers on touch
            whileTap={{ scale: 0.96 }}
            initial="initial"
            animate={isHovered ? "hover" : "initial"}
            className={`flex items-center gap-3 select-none transition-colors duration-300 touch-manipulation ${className}`}
        >
            <span className="flex">
                {label.split("").map((char, i) => (
                    <motion.span
                        key={i}
                        className="letter inline-block whitespace-pre"
                        style={{ fontWeight: 400 }}
                    >
                        {char}
                    </motion.span>
                ))}
            </span>
            {icon && <div className="flex items-center">{icon}</div>}
        </motion.button>
    );
};
