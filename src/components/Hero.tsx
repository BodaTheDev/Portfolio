'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { ArrowRight, Download } from 'lucide-react';
import { CyberGlitchText } from './CyberGlitchText';
import { ScalingWord } from './ScalingWord';

const Scene3D = dynamic(() => import('./Scene3D'), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-surface/20" />
});

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col-reverse lg:flex-row items-center bg-black px-6 md:px-24 pt-24 pb-12 lg:py-0 overflow-hidden">

            {/* Right-side Vertical Label - Desktop Only */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block z-0">
                <p className="rotate-90 origin-right text-[10px] uppercase tracking-[0.5em] text-text-body/40 whitespace-nowrap border-b border-border-muted pb-2">
                    Architecting Performance / 2026
                </p>
            </div>

            <div className="flex flex-col-reverse lg:flex-row w-full max-w-[1600px] mx-auto items-center justify-between gap-8 lg:gap-0">

                {/* BOTTOM (on Mobile) / LEFT (on Desktop): Typography */}
                <div className="w-full lg:w-7/12 z-30 relative">
                    <motion.div
                        initial={{ opacity: 1, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Tagline */}
                        <div className="flex items-center gap-3 mb-6 md:mb-8">
                            <div className="w-2 h-2 bg-brand-orange rounded-full" />
                            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-text-body font-bold">
                                Senior Full-Stack Architect <br />
                                <span className="text-brand-orange/60">Based in Egypt / Remote</span>
                            </p>
                        </div>

                        {/* Responsive Font Sizes */}
                        <h1 className="glitch-header text-4xl sm:text-5xl md:text-7xl lg:text-[100px] xl:text-[120px] font-bold leading-[0.9] md:leading-[0.85] tracking-tighter text-white uppercase mb-6 md:mb-10">
                            Designing<br />
                            <CyberGlitchText>Systems</CyberGlitchText><br />
                            That <ScalingWord />
                        </h1>

                        <p className="text-text-body text-sm md:text-base max-w-lg leading-relaxed mb-8 md:mb-12 font-medium opacity-70">
                            I am Abdelrahman, a Backend Engineer and Systems Architect.
                            I specialize in the critical transition from MVP to Enterprise, replacing fragmented legacy code with robust backend environments.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 md:gap-8">
                            <button className="bg-brand-orange text-white px-8 md:px-10 py-4 md:py-5 font-bold uppercase text-[10px] md:text-[11px] tracking-widest flex items-center gap-4 hover:bg-white hover:text-black transition-all group">
                                View My Work
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                            </button>

                            <button className="flex items-center gap-3 text-[10px] md:text-[11px] uppercase tracking-widest font-bold text-white hover:text-brand-orange transition-colors group">
                                Download Resume
                                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* TOP (on Mobile) / RIGHT (on Desktop): Visual Column */}
                <div className="w-full lg:w-5/12 relative h-[300px] sm:h-[400px] lg:h-[800px] flex items-center justify-center z-10">
                    {/* The Background Glow */}
                    <div className="absolute w-[200px] h-[200px] md:w-[600px] md:h-[600px] rounded-full bg-brand-orange/5 lg:bg-brand-orange/10 blur-[60px] lg:blur-[100px] z-0" />

                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                        {/* Desktop: 3D Scene */}
                        <div className="hidden lg:block w-full h-full">
                            <Scene3D />
                        </div>

                        {/* Mobile: Static WebP */}
                        <div className="block lg:hidden w-full max-w-[240px]">
                            <img
                                src="/models/avatar_static.webp"
                                alt="Abdelrahman Avatar"
                                className="w-full h-auto drop-shadow-[0_0_30px_rgba(233,84,32,0.2)]"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
