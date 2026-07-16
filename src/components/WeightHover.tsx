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
    // Shared styling and CSS hook
    const commonProps = {
        className: `btn-weight-morph group relative z-[110] flex items-center gap-3 select-none transition-all duration-300 cursor-pointer touch-manipulation ${className}`,
        style: { WebkitTapHighlightColor: 'transparent', textDecoration: 'none' } as React.CSSProperties,
    };

    const content = (
        <>
            <span className="flex pointer-events-none">
                {label.split("").map((char, i) => (
                    <span key={i} className="letter inline-block whitespace-pre">
                        {char}
                    </span>
                ))}
            </span>
            {icon && (
                <div className="flex items-center pointer-events-none">
                    {icon}
                </div>
            )}
        </>
    );

    // If href is provided, render as an Anchor <a>
    if (href) {
        return (
            <a href={href} {...commonProps}>
                {content}
            </a>
        );
    }

    // Otherwise, render as a Button <button>
    return (
        <button
            type="button"
            onClick={(e) => {
                e.preventDefault();
                onClick?.();
            }}
            {...commonProps}
        >
            {content}
        </button>
    );
};
