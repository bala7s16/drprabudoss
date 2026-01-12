import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: "What conditions do you treat?",
        answer: "We specialize in diagnosing and treating a wide range of digestive health conditions, including acid reflux, irritable bowel syndrome (IBS), Crohn’s disease, celiac disease, liver disorders, and more."
    },
    {
        question: "Do I need a referral to see a gastroenterologist?",
        answer: "In most cases, a referral from your primary care physician is not required. However, some insurance plans may have specific referral requirements. Please check with your insurance provider for details."
    },
    {
        question: "What should I expect during my consultation?",
        answer: "During your consultation, our gastroenterologist will review your medical history, discuss your symptoms, and may recommend diagnostic tests, such as endoscopy or colonoscopy, to accurately diagnose your condition and create a personalized treatment plan."
    },
    {
        question: "Are the procedures like endoscopy and colonoscopy safe?",
        answer: "Yes, our clinic uses the latest technology and follows strict safety protocols to ensure the safety and comfort of every patient during procedures like endoscopy and colonoscopy. Your comfort and well-being are our top priority."
    },
    {
        question: "How can I schedule an appointment?",
        answer: "You can schedule an appointment by calling our clinic or using the online booking feature on our website. Our staff will assist you in finding a convenient time for your visit."
    },
    {
        question: "Do you accept insurance?",
        answer: "We accept a variety of insurance plans. Please contact our clinic to verify if we accept your specific insurance provider."
    },
    {
        question: "What should I do if I need to reschedule my appointment?",
        answer: "If you need to reschedule, please contact our office at least 24 hours in advance to avoid any cancellation fees and to find a new time that works for you."
    },
    {
        question: "How do I prepare for a colonoscopy or endoscopy?",
        answer: "Preparation for procedures like colonoscopy and endoscopy varies depending on the procedure. Our office will provide you with detailed instructions before your appointment, including fasting guidelines and any necessary medications."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section id="faq" className="py-20 bg-light">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-secondary font-bold uppercase tracking-wider text-sm">Common Queries</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-600">
                        Find answers to common questions about our procedures, appointments, and care.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl shadow-sm overflow-hidden"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-bold text-dark text-lg flex items-center gap-3">
                                    <HelpCircle size={20} className="text-primary opacity-50" />
                                    {faq.question}
                                </span>
                                <div className={`p-2 rounded-full transition-colors ${activeIndex === index ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}>
                                    {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-gray-600 leading-relaxed pl-14">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
