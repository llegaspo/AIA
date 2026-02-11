import React from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                    <Motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-aia-charcoal/60 backdrop-blur-sm"
                    />
                    <Motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-4xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                    >
                        <div className="flex items-center justify-between p-8 border-b border-gray-100">
                            <div>
                                <h3 className="text-2xl font-condensed font-bold text-aia-red uppercase tracking-tight">{title}</h3>
                                <p className="text-xs text-gray-500 font-sans italic mt-1">Technical Specifications</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-aia-grey transition-colors text-aia-charcoal/40 hover:text-aia-red"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto p-8 md:p-12">
                            {children}
                        </div>
                    </Motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
