'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const faqItems = [
    {
        question: 'How is my donation used?',
        answer:
            'Donations are allocated directly to our active programs based on current community needs. The majority of funds support on-the-ground impact, while a small portion covers essential operational and compliance costs.',
    },
    {
        question: 'How do you ensure transparency?',
        answer:
            'We regularly share impact summaries, financial highlights, and project updates through our website and official communication channels, allowing supporters to stay informed without additional requests.',
    },
    {
        question: 'Can I track the impact of my support?',
        answer:
            'Yes. We publish stories, photos, and progress updates from our projects so supporters can see the collective impact their contributions help create.',
    },
    {
        question: 'Are donations tax-deductible?',
        answer:
            'Turkman Aid is registered as a charitable organization. Donation receipts are provided automatically and may be used for tax purposes depending on your local regulations.',
    },
    {
        question: 'Do you offer volunteer opportunities?',
        answer:
            'At this time, we focus on delivering programs efficiently with our local partners. Future volunteer opportunities will be announced publicly when available.',
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-3 mb-4">
                        <HelpCircle className="w-8 h-8 text-blue-700" />
                        <h2 className="text-4xl text-gray-900">Frequently Asked Questions</h2>
                    </div>
                    <p className="text-xl text-gray-600">
                        Find answers to common questions about our work and how you can help
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {faqItems.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white p-6 rounded-2xl shadow-lg cursor-pointer"
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                            >
                                {/* Question row */}
                                <div className="flex items-center justify-between gap-4">
                                    <h3 className="text-xl mb-2 text-gray-900">
                                        {item.question}
                                    </h3>

                                    <ChevronDown
                                        className={`w-5 h-5 text-blue-700 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                                            }`}
                                    />
                                </div>

                                {/* Answer */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.p
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            className="mt-3 text-gray-600 leading-relaxed overflow-hidden"
                                        >
                                            {item.answer}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-600 mb-4">Still have questions?</p>
                    <Link
                        href="#contact-form"
                        className="inline-block px-8 py-3 text-blue-700 border-2 border-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-300"
                    >
                        Contact Us Directly
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
