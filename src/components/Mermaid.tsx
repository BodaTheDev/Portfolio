'use client';

import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
    startOnLoad: false,
    theme: 'base',
    themeVariables: {
        primaryColor: '#0C0C0E',
        primaryTextColor: '#FFFFFF',
        primaryBorderColor: '#E95420',
        lineColor: '#E95420',
        secondaryColor: '#1C1C1E',
        tertiaryColor: '#000000',
        mainBkg: '#0C0C0E',
        nodeBorder: '#1C1C1E',
    },
    flowchart: { useMaxWidth: true, htmlLabels: true, curve: 'basis' }

});

export const Mermaid = ({ chart }: { chart: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [id] = useState(`mermaid-${Math.random().toString(36).substr(2, 9)}`);

    useEffect(() => {
        const renderChart = async () => {
            const cleanedChart = chart.trim();
            if (ref.current && cleanedChart) {
                try {
                    ref.current.innerHTML = '';
                    const { svg } = await mermaid.render(id, cleanedChart);
                    ref.current.innerHTML = svg;
                } catch (error) {
                    console.error('Mermaid render failed:', error);
                }
            }
        };

        // Delay slightly to ensure the Drawer is visible and has dimensions
        const timeout = setTimeout(renderChart, 100);
        return () => clearTimeout(timeout);
    }, [chart, id]);

    return <div ref={ref} className="flex justify-center w-full overflow-hidden my-4" />;
};
