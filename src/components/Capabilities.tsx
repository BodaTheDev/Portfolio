'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Target, Cpu } from 'lucide-react';
import { WeightHover } from './WeightHover';
import { SpecPull } from './KineticIcons';
import dynamic from 'next/dynamic';

const Drawer = dynamic(() => import('./Drawer').then(mod => mod.Drawer), {
    ssr: false
});

const ResumeView = dynamic(() => import('./ResumeView').then(mod => mod.ResumeView), {
    ssr: false,
    loading: () => <div className="h-screen bg-black animate-pulse" />
});

const coreSteps = [
    {
        num: "01",
        title: "TECHNICAL LEADERSHIP",
        sub: "Bridging Vision & Execution",
        copy: "I act as the technical anchor between stakeholders and engineering squads. I translate complex, vague business requirements into concrete architectural blueprints and technical roadmaps ensuring system delivery is reliable, on-schedule, and fully aligned with your business goals."
    },
    {
        num: "02",
        title: "SYSTEM ARCHITECTURE",
        sub: "High-Performance Core Engines",
        copy: "I design and build the underlying engines that power your application. Specializing in modular NestJS and Express ecosystems, I architect secure, event-driven backends capable of handling high concurrency, massive data payloads, and complex transactional logic."
    },
    {
        num: "03",
        title: "STRATEGIC OPTIMIZATION",
        sub: "Performance & Efficiency Audits",
        copy: "I specialize in auditing legacy infrastructures to eliminate performance bottlenecks, patch security vulnerabilities, and optimize query pathways. I replace fragile third-party dependencies with highly efficient, self-hosted alternatives to maximize performance and scale."
    }
];

const pillars = [
    {
        title: "FINANCIAL PRECISION",
        description: "Architecting bulletproof transactional and ledger-based systems. I implement strict ACID transactions, double-entry bookkeeping logic, and database-level locks to ensure zero data loss and prevent race conditions.",
        icon: Shield
    },
    {
        title: "HIGH-FREQUENCY SCALE",
        description: "Designing systems that thrive under heavy load. Utilizing Redis, MQTT brokers, and asynchronous event-driven architectures, I build low-latency pipelines capable of managing thousands of simultaneous tracking devices.",
        icon: Zap
    },
    {
        title: "DEFENSE IN DEPTH",
        description: "Security is integrated at the foundation, never patched on top. From secure JWT-based role isolation (RBAC) and strict input schema validation to zero-trust secrets management, every layer is strictly hardened.",
        icon: Target
    },
    {
        title: "SOVEREIGN INFRASTRUCTURE",
        description: "Drastically reducing reliance on expensive third-party platforms. I engineer containerized, self-hosted environments with Docker and Nginx slashing cloud infrastructure costs by up to 95% while keeping control.",
        icon: Cpu
    }
];

const Capabilities = () => {
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    return (
        <section id="capabilities" className="py-24 px-6 border-t border-border-muted bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                {/* Left Column: Core Identity Hierarchy */}
                <div className="space-y-16">
                    <div>
                        <h2 className="text-sm font-mono text-brand-orange tracking-[0.3em] mb-12 uppercase">
                            // Core Capabilities
                        </h2>

                        <div className="space-y-12">
                            {coreSteps.map((step, i) => (
                                <div key={i} className="group relative">
                                    <div className="flex items-start gap-6">
                                        <span className="text-3xl font-mono text-[#6A6A6A] group-hover:text-brand-orange transition-colors pt-1">
                                            {step.num}
                                        </span>
                                        <div className="space-y-3">
                                            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-text-header">
                                                {step.title}
                                            </h3>
                                            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-orange/80">
                                                [ {step.sub} ]
                                            </p>
                                            <p className="text-text-body text-sm leading-relaxed max-w-lg opacity-70 group-hover:opacity-100 transition-opacity">
                                                {step.copy}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Specification Action */}
                        <div className="mt-16 pt-8 border-t border-border-muted/30">
                            <p className="text-[10px] font-mono text-text-body uppercase tracking-[0.2em] mb-6">
                                [ Manual Data Extraction Available ]
                            </p>
                            <WeightHover
                                label="VIEW FULL SPECIFICATION"
                                onClick={() => setIsResumeOpen(true)}
                                icon={<SpecPull />}
                                className="text-brand-orange hover:text-white transition-colors uppercase text-[11px] tracking-[0.3em] group"
                            />
                        </div>
                    </div>

                    <div className="p-8 bg-surface border border-border-muted relative hidden md:block">
                        <div className="absolute top-0 right-0 p-2 font-mono text-[10px] text-border-muted">STRICT_AUTH_v2</div>
                        <p className="text-text-body leading-relaxed italic text-sm">
                            "I don't just write code; I architect systems that survive the pressures of real-world scale and financial complexity."
                        </p>
                    </div>
                </div>

                {/* Right Column: Methodology Grid */}
                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {pillars.map((pillar, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0.5, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 bg-surface border border-border-muted hover:border-brand-orange/50 transition-all duration-500 group relative overflow-hidden"
                            >
                                {/* Decorative BG Number */}
                                <span className="absolute -right-2 -bottom-4 text-7xl font-black text-white/[0.02] pointer-events-none select-none">
                                    0{index + 1}
                                </span>

                                <pillar.icon className="w-6 h-6 text-brand-orange mb-6 group-hover:scale-110 transition-transform" />
                                <h4 className="text-sm font-bold mb-4 text-text-header group-hover:text-brand-orange transition-colors uppercase tracking-widest leading-tight">
                                    {pillar.title}
                                </h4>
                                <p className="text-[13px] text-text-body leading-relaxed font-medium">
                                    {pillar.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Visual Vertical line decoration */}
                    <div className="absolute -left-12 top-0 bottom-0 w-px bg-border-muted/30 hidden lg:block" />
                </div>
            </div>

            {/* Side Drawer for Resume - File Name Updated */}
            <Drawer
                isOpen={isResumeOpen}
                onClose={() => setIsResumeOpen(false)}
                title="AlMeshwady_Resume.PDF"
                downloadUrl="/documents/abdelrahman_al-meshwady_resume.pdf"
            >
                <ResumeView />
            </Drawer>
        </section>
    );
};

export default Capabilities;
