'use client';

import * as React from "react";

interface WeightHoverProps {
    label: string;
    href?: string;    // For navigation/scrolling
    onClick?: () => void; // For functional actions like opening the drawer
    className?: string;
    icon?: React.ReactNode;
}

export const WeightHover = ({ label, href, onClick, className, icon }: WeightHoverProps) => {
    const letters = label.split("");
    const centerIndex = (letters.length - 1) / 2;

    // Shared styling and CSS hook
    const commonClasses = `btn-weight-morph group relative z-40 flex items-center gap-3 select-none transition-all duration-300 cursor-pointer touch-manipulation ${className}`;

    const commonStyle: React.CSSProperties = {
        WebkitTapHighlightColor: 'transparent',
        textDecoration: 'none'
    };

    const content = (
        <>
            <span className="flex pointer-events-none">
                {letters.map((char, i) => {
                    // Calculate distance from center (e.g., 0, 1, 2...)
                    const distance = Math.abs(i - centerIndex);
                    // 0.03s is the "speed" of the stagger wave
                    const weightDelay = `${(distance * 0.03).toFixed(3)}s`;

                    /* High-performance easing */
                    const transitionOverride = `
                        font-weight 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${weightDelay},
                        font-variation-settings 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${weightDelay},
                        color 0.2s ease 0s
                        `;


                    return (
                        <span
                            key={i}
                            className="letter whitespace-pre"
                            style={{ transition: transitionOverride }}
                        >
                            {char}
                        </span>
                    );
                })}
            </span>
            {icon && (
                <div className="kinetic-icon-wrap transition-transform duration-300 pointer-events-none">
                    {icon}
                </div>
            )}
        </>
    );

    if (href) {
        return (
            <a href={href} className={commonClasses} style={commonStyle}>
                {content}
            </a>
        );
    }

    // If it's an action (Capabilities button)
    return (
        <button
            type="button"
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation(); // Prevent event bubbling
                if (onClick) onClick();
            }}
            className={commonClasses}
            style={commonStyle}
        >
            {content}
        </button>
    );
};
