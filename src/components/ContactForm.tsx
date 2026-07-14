'use client';

import { motion } from 'framer-motion';
import { Send, Mail } from 'lucide-react';
import { ProfitText } from './ProfitText';

// Custom SVG Components for Brand Icons to bypass library export issues
const GithubIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const ContactForm = () => {
    return (
        <footer id="contact" className="py-24 px-6 bg-black border-t border-border-muted relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left: Manifesto */}
                    <div>
                        <h2 className="text-sm font-mono text-brand-orange tracking-[0.3em] mb-8 uppercase">
              // Final Transaction
                        </h2>
                        <h3 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8">
                            LET'S BUILD SOMETHING
                            <ProfitText text="PROFITABLE" />.
                        </h3>
                        <p className="text-text-body text-lg max-w-md leading-relaxed mb-12">
                            Whether you need a Technical Lead to manage the vision or a Senior Engineer to build the engine, I am ready to deliver enterprise-grade performance.
                        </p>

                        <div className="flex gap-6">
                            {[
                                { Icon: GithubIcon, href: "https://github.com/", label: "Source" },
                                { Icon: LinkedinIcon, href: "https://linkedin.com/in/", label: "Network" },
                                { Icon: Mail, href: "mailto:hello@boda.dev", label: "Email" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-text-body hover:text-brand-orange transition-colors"
                                >
                                    <social.Icon className="w-4 h-4" />
                                    {social.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right: Transaction Form */}
                    <div className="bg-surface border border-border-muted p-8 md:p-12 relative">
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-orange/20" />

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-2">
                                <label className="text-[10px] font-mono uppercase text-brand-orange tracking-widest">Identify Context</label>
                                <input
                                    type="text"
                                    placeholder="NAME / ORGANIZATION"
                                    className="w-full bg-black border border-border-muted p-4 text-sm font-mono focus:border-brand-orange outline-none transition-colors rounded-none text-white placeholder:text-neutral-700"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-mono uppercase text-brand-orange tracking-widest">Return Address</label>
                                <input
                                    type="email"
                                    placeholder="EMAIL_ADDRESS@SERVER.COM"
                                    className="w-full bg-black border border-border-muted p-4 text-sm font-mono focus:border-brand-orange outline-none transition-colors rounded-none text-white placeholder:text-neutral-700"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-mono uppercase text-brand-orange tracking-widest">System Requirements</label>
                                <textarea
                                    rows={4}
                                    placeholder="DESCRIBE THE SCOPE..."
                                    className="w-full bg-black border border-border-muted p-4 text-sm font-mono focus:border-brand-orange outline-none transition-colors rounded-none resize-none text-white placeholder:text-neutral-700"
                                />
                            </div>

                            <button type="submit" className="w-full bg-brand-orange hover:bg-[#ff6a38] text-white py-4 font-mono text-xs uppercase tracking-[0.3em] font-bold flex items-center justify-center gap-3 transition-all group">
                                Initialize Connection
                                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-24 pt-8 border-t border-border-muted flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[9px] font-mono text-text-body uppercase tracking-[0.2em]">
                        © 2024 ARCHITECT.BODA — SYSTEM_VERSION_1.0.4
                    </p>
                    <div className="flex gap-4">
                        <span className="text-[9px] font-mono text-text-body uppercase tracking-[0.2em]">Latency: 14ms</span>
                        <span className="text-[9px] font-mono text-text-body uppercase tracking-[0.2em]">Status: Ready</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ContactForm;
