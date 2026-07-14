'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Target, Cpu } from 'lucide-react';

const pillars = [
    {
        title: "Financial Precision",
        description: "Ledger-based architectures, ACID transactions, and double-entry logic for zero-error financial systems.",
        icon: Shield
    },
    {
        title: "High-Frequency Scale",
        description: "Event-driven mechanics via MQTT and Redis with sub-second latency constraints for real-time data.",
        icon: Zap
    },
    {
        title: "Defense in Depth",
        description: "Secure by default. Enforced RBAC and zero-trust secrets management at every infrastructure layer.",
        icon: Target
    },
    {
        title: "Sovereign Infrastructure",
        description: "Slashing recurring cloud costs by up to 95% via proprietary containerized microservices.",
        icon: Cpu
    }
];

const Capabilities = () => {
    return (
        <section id="capabilities" className="py-24 px-6 border-t border-border-muted bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Left Column: Core Identity */}
                <div className="space-y-12">
                    <div>
                        <h2 className="text-sm font-mono text-brand-orange tracking-[0.3em] mb-4 uppercase">
              // Core Capabilities
                        </h2>
                        <div className="space-y-6">
                            {["Technical Leadership / Project Management", "System Architecture / Backend Engineering", "Strategic Optimization"].map((cap, i) => (
                                <div key={i} className="group flex items-center gap-4">
                                    <span className="text-2xl font-mono text-border-muted group-hover:text-brand-orange transition-colors">0{i + 1}</span>
                                    <h3 className="text-2xl md:text-4xl font-bold tracking-tight">{cap}</h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 bg-surface border border-border-muted relative">
                        <div className="absolute top-0 right-0 p-2 font-mono text-[10px] text-border-muted">STRICT_AUTH_v2</div>
                        <p className="text-text-body leading-relaxed italic">
                            "I don't just write code; I architect systems that survive the pressures of real-world scale and financial complexity."
                        </p>
                    </div>
                </div>

                {/* Right Column: Methodology Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="p-6 bg-surface border border-border-muted hover:border-brand-orange transition-all duration-300 group"
                        >
                            <pillar.icon className="w-6 h-6 text-brand-orange mb-4" />
                            <h4 className="text-sm font-bold mb-2 group-hover:text-brand-orange transition-colors uppercase tracking-wider">
                                {pillar.title}
                            </h4>
                            <p className="text-xs text-text-body leading-relaxed font-mono">
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>

            {/* Decorative vertical line */}
            <div className="hidden lg:block absolute top-0 left-1/2 w-[1px] h-full bg-border-muted/30" />
        </section>
    );
};

export default Capabilities;
