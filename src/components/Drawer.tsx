'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';
import { useEffect } from 'react';

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    downloadUrl?: string;
}

export const Drawer = ({ isOpen, onClose, title, children, downloadUrl }: DrawerProps) => {

    useEffect(() => {
        if (isOpen) {
            // Lock the body scroll
            document.body.style.overflow = 'hidden';
        } else {
            // Restore scroll
            document.body.style.overflow = 'unset';
        }

        // Cleanup function to ensure scroll is restored if component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] cursor-pointer"
                    />

                    {/* Side Panel */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full md:w-[600px] lg:w-[800px] bg-surface border-l border-border-muted z-[210] flex flex-col shadow-2xl"
                    >
                        {/* Drawer Header */}
                        <div className="flex items-center justify-between px-6 py-6 border-b border-border-muted bg-black/20">
                            <div>
                                <p className="text-[9px] font-mono text-brand-orange uppercase tracking-[0.3em] mb-1">
                                    // System_Log
                                </p>
                                <h2 className="text-l font-medium text-text-header uppercase tracking-tighter">
                                    {title}
                                </h2>
                            </div>

                            <div className="flex items-center gap-4">
                                {downloadUrl && (
                                    <a
                                        href={downloadUrl}
                                        download
                                        aria-label="Download technical specification binary"
                                        className="p-2 hover:text-brand-orange transition-colors"
                                        title="Download PDF"
                                    >
                                        <Download className="w-5 h-5" />
                                    </a>
                                )}
                                <button
                                    onClick={onClose}
                                    aria-label="Close specification panel"
                                    className="p-2 hover:bg-white/10 transition-colors rounded-none border border-border-muted"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Drawer Content */}
                        <div className="flex-grow overflow-y-auto bg-background">
                            {children}
                        </div>

                        {/* Footer Status */}
                        <div className="px-6 py-4 border-t border-border-muted bg-black/40 flex justify-between items-center">
                            <span className="text-[9px] font-mono text-text-body uppercase tracking-widest">
                                Status: Viewing_Encrypted_Data
                            </span>
                            <span className="text-[9px] font-mono text-brand-orange uppercase">
                                [ Secure Connection ]
                            </span>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
