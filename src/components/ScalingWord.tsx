'use client';

import React from 'react';

export const ScalingWord = () => {
    return (
        <span className="scaling-container">
            <span className="inline-block">S</span>
            <span className="inline-block">C</span>

            {/* THE SCALING 'A' - Logic moved to CSS */}
            <span className="char-a">
                A
            </span>

            {/* THE SHIFTING 'LE' - Logic moved to CSS */}
            <span className="suffix">
                <span className="inline-block">L</span>
                <span className="inline-block">E</span>
            </span>
        </span>
    );
};
