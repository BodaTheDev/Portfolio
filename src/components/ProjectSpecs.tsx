'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Mermaid } from './Mermaid';

interface SpecsProps {
    content: string;
    diagram: string;
}

export const ProjectSpecs = ({ content, diagram }: SpecsProps) => {
    return (
        <div className="p-6 md:p-12 space-y-10 max-w-4xl mx-auto">
            {/* 1. Mermaid Diagram Section */}
            <div className="space-y-4">
                <h4 className="text-[10px] font-mono text-brand-orange uppercase tracking-[0.3em]">// System_Architecture_Flow</h4>
                <div className="bg-surface border border-border-muted p-4 overflow-x-auto">
                    <Mermaid chart={diagram} />
                </div>
            </div>

            {/* 2. Markdown Content (Table & Code) */}
            <div className="prose prose-invert prose-orange max-w-none">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        table: ({ ...props }) => (
                            <div className="overflow-x-auto mb-8 border border-border-muted">
                                <table className="w-full border-collapse text-xs font-mono" {...props} />
                            </div>
                        ),
                        th: ({ ...props }) => (
                            <th className="border border-border-muted bg-black/40 p-3 text-brand-orange uppercase text-[10px] text-left" {...props} />
                        ),
                        td: ({ ...props }) => (
                            <td className="border border-border-muted p-3 text-text-body" {...props} />
                        ),
                        code: ({ node, ...props }) => (
                            <code className="bg-surface border border-border-muted p-1 px-2 rounded-none text-brand-orange text-[11px]" {...props} />
                        ),
                        pre: ({ ...props }) => (
                            <pre className="bg-black border border-border-muted p-6 rounded-none overflow-x-auto text-[11px] font-mono leading-relaxed mb-8" {...props} />
                        ),
                        blockquote: ({ ...props }) => (
                            <blockquote
                                className="border-l-2 border-brand-orange bg-brand-orange/5 p-4 italic text-sm text-text-body mb-8 not-italic quotes-none"
                                {...props}
                            />
                        )
                    }}
                >
                    {content}
                </ReactMarkdown>
            </div>
        </div>
    );
};
