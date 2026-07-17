'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const MouseEffects = dynamic(() => import('./MouseEffects'), { ssr: false });

export function ClientProviders({ children }: { children: React.ReactNode }) {
    const [shouldLoadEffects, setShouldLoadEffects] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldLoadEffects(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {shouldLoadEffects && <MouseEffects />}
            {children}
        </>
    );
}
