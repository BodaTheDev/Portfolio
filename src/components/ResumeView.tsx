'use client';

import { FileText, ExternalLink, ShieldCheck } from 'lucide-react';

export const ResumeView = () => {
    const resumePath = "/documents/abdelrahman_al-meshwady_resume.pdf";

    return (
        <div className="w-full h-full flex flex-col bg-background">

            {/* Header Status Bar */}
            <div className="p-6 border-b border-border-muted bg-black/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <ShieldCheck className="w-4 h-4 text-brand-orange" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-body">
                        Protocol: SPEC_VIEW_v2.0
                    </span>
                </div>
                <a
                    href={resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open full resume in a new browser tab"
                    className="text-[10px] font-mono text-brand-orange hover:text-white transition-colors flex items-center gap-2"
                >
                    FULL_SCREEN <ExternalLink className="w-3 h-3" />
                </a>
            </div>

            {/* The Preview Engine */}
            <div className="flex-grow w-full bg-[#0F0F11] relative overflow-hidden">
                <iframe
                    src={`${resumePath}#view=FitH&toolbar=0&navpanes=0`}
                    className="w-full h-full border-none"
                    title="Technical Specification"
                />

                {/* Mobile/Incompatibility Fallback Overlay */}
                <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center p-8 text-center">
                    <div className="p-4 border border-border-muted bg-surface max-w-xs space-y-4">
                        <FileText className="w-8 h-8 text-brand-orange mx-auto opacity-50" />
                        <p className="text-xs text-text-body font-mono uppercase tracking-widest leading-relaxed">
                            Data stream restricted by browser policy.
                        </p>
                        <a
                            href={resumePath}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Access technical specification via external browser stream"
                            className="block w-full py-3 bg-brand-orange text-white text-[10px] font-bold uppercase tracking-[0.2em]"
                        >
                            Open External Stream
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};
