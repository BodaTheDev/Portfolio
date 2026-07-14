'use client';

import { ArrowUpRight } from 'lucide-react';

interface ProjectMetric {
    label: string;
    value: string;
}

interface LabCardProps {
    category: string;
    title: string;
    description: string;
    metrics: ProjectMetric[];
}

export const ProjectLabCard = ({ category, title, description, metrics }: LabCardProps) => {
    return (
        <div className="bg-surface border border-border-muted flex flex-col group hover:border-brand-orange transition-colors">
            {/* Card Header: Category & Type */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-border-muted bg-black/40">
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-text-body">
                    [{category}]
                </span>
                <div className="w-1.5 h-1.5 bg-brand-orange/40 rounded-full group-hover:bg-brand-orange group-hover:shadow-[0_0_8px_#E95420]" />
            </div>

            {/* Card Body: Info */}
            <div className="p-6 flex-grow border-b border-border-muted">
                <h4 className="text-xl font-bold text-text-header mb-3 uppercase tracking-tight group-hover:text-brand-orange transition-colors">
                    {title}
                </h4>
                <p className="text-xs text-text-body leading-relaxed font-medium">
                    {description}
                </p>
            </div>

            {/* Card Footer: Data Grid */}
            <div className="grid grid-cols-2 bg-border-muted gap-[1px]">
                {metrics.map((m, i) => (
                    <div key={i} className="bg-surface p-4 flex flex-col justify-center">
                        <p className="text-[8px] font-mono uppercase tracking-widest text-text-body/60 mb-1">
                            {m.label}
                        </p>
                        <p className="text-xs font-mono font-bold text-text-header">
                            {m.value}
                        </p>
                    </div>
                ))}
                {/* Action Button Integrated into Grid */}
                <div className="bg-black/20 hover:bg-brand-orange transition-all p-4 flex items-center justify-center group/btn cursor-pointer">
                    <span className="text-[9px] font-mono uppercase font-bold text-text-body group-hover/btn:text-white mr-2">Expand Specs</span>
                    <ArrowUpRight className="w-3 h-3 group-hover/btn:text-white transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </div>
            </div>
        </div>
    );
};
