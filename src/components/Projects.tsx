'use client';

import { ScanlineText } from './ScanlineText';
import { ProjectLabCard } from './ProjectLabCard';
import { GlitchText } from './GlitchText';

const projectLogs = [
    {
        category: "Fintech / Real-Estate",
        title: "THEQA_ENGINE",
        description: "Architected a split-market logic system with Tap Payments integration. Implemented custom state machines and atomic database locks.",
        metrics: [
            { label: "Integrity", value: "Atomic Locks" },
            { label: "Concurrency", value: "Zero Double-Book" },
            { label: "Stack", value: "NestJS / Redis" }
        ]
    },
    {
        category: "IoT / Transport",
        title: "WECARE_CORE",
        description: "Engineered a proprietary OvenMediaEngine server. Scaled WebSocket infrastructure for real-time tracking with Redis Geospatial.",
        metrics: [
            { label: "Cost Save", value: "95% Reduction" },
            { label: "Latency", value: "Sub-150ms" },
            { label: "Protocol", value: "MQTT / Geo" }
        ]
    },
    {
        category: "Telehealth",
        title: "RELIVE_PLATFORM",
        description: "Developed secure Agora RTC token pipelines and action-based notification state machines for just-in-time scheduling.",
        metrics: [
            { label: "Performance", value: "Sub-Second" },
            { label: "RTC Engine", value: "Agora Tokens" },
            { label: "Queue Logic", value: "BullMQ" }
        ]
    },
    {
        category: "Logistics / Fintech",
        title: "TRIPSAWA_LOGIC",
        description: "Decoupled services using RabbitMQ and real-time tracking via Mosquitto. Built internal wallet logic with MongoDB ACID.",
        metrics: [
            { label: "Data Integrity", value: "ACID Guaranteed" },
            { label: "Messaging", value: "RabbitMQ" },
            { label: "Persistence", value: "MongoDB" }
        ]
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-black border-t border-border-muted arch-grid relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-[1600px] mx-auto px-6 relative z-10">

                {/* Lab Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
                    <div className="lg:col-span-8">
                        <h2 className="text-[10vw] font-bold leading-[0.8] tracking-tighter uppercase mb-6 text-text-header">
                            Port- <br />
                            <GlitchText text="Folio" />
                        </h2>
                    </div>

                    <div className="lg:col-span-4 flex flex-col justify-end border-l border-border-muted pl-8 pb-4">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
                            <p className="font-mono text-[10px] uppercase text-brand-orange tracking-widest">
                // System Report: {projectLogs.length} Active Deployments
                            </p>
                        </div>
                        <p className="text-text-body text-sm font-medium leading-relaxed max-w-sm">
                            Each entry represents a validated architectural solution for high-stakes digital capital, focusing on scale, security, and ledger-based precision.
                        </p>
                    </div>
                </div>

                {/* The Lab Grid Lounge */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {projectLogs.map((p, i) => (
                        <ProjectLabCard key={i} {...p} />
                    ))}

                    {/* Future Expansion Tile */}
                    <div className="border border-dashed border-border-muted p-8 flex flex-col items-center justify-center text-center opacity-40 hover:opacity-100 hover:border-brand-orange transition-all group cursor-help">
                        <div className="w-10 h-10 border border-border-muted rounded-full flex items-center justify-center mb-4 group-hover:border-brand-orange">
                            <span className="text-brand-orange">+</span>
                        </div>
                        <p className="font-mono text-[10px] uppercase tracking-widest">Awaiting Next <br /> Incubation</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
