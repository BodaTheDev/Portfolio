"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { gsap } from "gsap";

type Effect = { id: string; x: number; y: number };

export default function MouseEffects() {
    // Configuration locked to "Burst" Arancio Xanto specs
    const color = "#E95420";
    const duration = 0.3;
    const strokeWidth = 2;
    const effectSize = 90;
    const rotation = 351;

    const containerRef = useRef<HTMLDivElement>(null);
    const [bursts, setBursts] = useState<Effect[]>([]);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const container = containerRef.current;
            if (!container) return;

            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const id = `${e.timeStamp}-${Math.round(x)}-${Math.round(y)}`;

            setBursts((prev) => [...prev, { id, x, y }]);
        };

        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    const svgStyle = (x: number, y: number): CSSProperties => ({
        position: "absolute",
        left: x - effectSize / 2,
        top: y - effectSize / 2,
        width: effectSize,
        height: effectSize,
        pointerEvents: "none",
        overflow: "visible",
        transform: `rotate(${rotation}deg)`,
        transformOrigin: "center",
        zIndex: 9999, // Ensure it's always on top of the UI
    });

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 pointer-events-none overflow-visible z-[9999]"
            style={{ pointerEvents: 'none' }}
        >
            {bursts.map((burst) => (
                <svg
                    key={burst.id}
                    style={svgStyle(burst.x, burst.y)}
                    ref={(el) => {
                        if (!el) return;
                        const lines = el.querySelectorAll("line");
                        lines.forEach((line, index) => {
                            const angle = [45, 80, 115, 150][index] * (Math.PI / 180);
                            const centerX = effectSize / 2;
                            const centerY = effectSize / 2;
                            const startX = centerX + effectSize * 0.1 * Math.cos(angle);
                            const startY = centerY - effectSize * 0.1 * Math.sin(angle);
                            const endX = centerX + effectSize * 0.25 * Math.cos(angle);
                            const endY = centerY - effectSize * 0.25 * Math.sin(angle);

                            gsap.set(line, {
                                attr: { x1: startX, y1: startY, x2: endX, y2: endY },
                                strokeWidth,
                            });

                            gsap.timeline()
                                .to(line, {
                                    attr: { x1: endX, y1: endY, x2: endX, y2: endY },
                                    translateX: (effectSize / 4) * Math.cos(angle),
                                    translateY: (-effectSize / 4) * Math.sin(angle),
                                    duration,
                                    ease: "power2.out",
                                    onComplete: () =>
                                        setBursts((prev) => prev.filter((b) => b.id !== burst.id)),
                                })
                                .to(line, {
                                    strokeWidth: 0,
                                    duration: duration * 0.4,
                                    ease: "linear",
                                }, duration * 0.6);
                        });
                    }}
                >
                    {[45, 80, 115, 150].map((_, index) => (
                        <line
                            key={index}
                            x1={effectSize / 2}
                            y1={effectSize / 2}
                            x2={effectSize / 2}
                            y2={effectSize / 2}
                            stroke={color}
                            strokeWidth={strokeWidth}
                            strokeLinecap="square"
                        />
                    ))}
                </svg>
            ))}
        </div>
    );
}
