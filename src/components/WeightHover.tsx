'use client';

import * as React from "react";

interface WeightHoverProps {
    label: string;
    href?: string;
    className?: string;
    icon?: React.ReactNode;
}

export const WeightHover = ({ label, href, className, icon }: WeightHoverProps) => {
    return (
        <a
            href={href}
            // btn-weight-morph activates the unified CSS logic
            className={`btn-weight-morph relative z-[110] flex items-center gap-3 select-none transition-all duration-300 cursor-pointer touch-manipulation ${className}`}
            style={{
                WebkitTapHighlightColor: 'transparent',
                textDecoration: 'none'
            }}
        >
            <span className="flex pointer-events-none">
                {label.split("").map((char, i) => (
                    <span
                        key={i}
                        className="letter whitespace-pre"
                    >
                        {char}
                    </span>
                ))}
            </span>
            {icon && (
                <div className="flex items-center pointer-events-none">
                    {icon}
                </div>
            )}
        </a>
    );
};
