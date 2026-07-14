'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { ArrowRight, Download } from 'lucide-react';
import { CyberGlitchText } from './CyberGlitchText';
import { ScalingWord } from './ScalingWord'; // Import the new component

const Scene3D = dynamic(() => import('./Scene3D'), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-surface/20" />
});

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center bg-black px-6 md:px-24 pt-20 overflow-hidden">

            {/* Right-side Vertical Label */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
                <p className="rotate-90 origin-right text-[10px] uppercase tracking-[0.5em] text-text-body/40 whitespace-nowrap border-b border-border-muted pb-2">
                    Architecting Performance / 2026
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 w-full max-w-[1600px] mx-auto items-center">

                {/* LEFT COLUMN: Typography & Action */}
                <div className="lg:col-span-7 z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Tagline */}
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-2 h-2 bg-brand-orange rounded-full" />
                            <p className="text-[11px] uppercase tracking-[0.2em] text-text-body font-bold">
                                Senior Full-Stack Architect <br />
                                <span className="text-brand-orange/60">Based in Egypt / Remote</span>
                            </p>
                        </div>

                        {/* Updated Massive Headline */}
                        <h1 className="glitch-header text-6xl md:text-[100px] xl:text-[120px] font-bold leading-[0.85] tracking-tighter text-text-header uppercase mb-10">
                            Designing<br />
                            <CyberGlitchText>Systems</CyberGlitchText><br />
                            That <ScalingWord />
                        </h1>

                        {/* Subtext */}
                        <p className="text-text-body text-sm md:text-base max-w-lg leading-relaxed mb-12 font-medium opacity-80">
                            I am Abdelrahman, a Backend Engineer and Systems Architect. <br />
                            I specialize in the critical transition from MVP to Enterprise, replacing fragmented legacy code with robust, self-hosted, and type-safe backend environments built to endure heavy operational loads.
                        </p>

                        {/* CTA Group */}
                        <div className="flex flex-wrap items-center gap-8">
                            <button className="bg-brand-orange text-white px-10 py-5 font-bold uppercase text-[11px] tracking-widest flex items-center gap-4 hover:bg-white hover:text-black transition-all group">
                                View My Work
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                            </button>

                            <button className="flex items-center gap-3 text-[11px] uppercase tracking-widest font-bold text-text-header hover:text-brand-orange transition-colors group">
                                Download Resume
                                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* RIGHT COLUMN: 3D Visual focal point */}
                <div className="lg:col-span-5 relative h-[500px] lg:h-[800px] flex items-center justify-center mt-12 lg:mt-0">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="absolute w-[300px] h-[300px] md:w-[700px] md:h-[700px] rounded-full bg-brand-orange/10 blur-[100px] z-0"
                    />
                    <div className="relative z-10 w-full h-full">
                        <Scene3D />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
