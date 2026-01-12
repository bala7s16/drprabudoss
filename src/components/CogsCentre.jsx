import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Users, Clock, Award } from 'lucide-react';

const centerImports = import.meta.glob('../assets/center/*.{png,jpg,jpeg,svg}', { eager: true });
const centerImages = Object.values(centerImports).map((module) => module.default);


const CogsCentre = () => {
    const images = [...centerImages];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);
    return (
        <section className="py-20 bg-dark text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <span className="text-secondary font-bold uppercase tracking-wider text-sm">Centre of Excellence</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6 leading-tight">
                            Chennai Obesity & <br />
                            <span className="text-primary">Gastro Surgeons</span> Centre
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            COGS is a premier institute dedicated to providing world-class care in surgical gastroenterology and bariatric surgery. We combine advanced technology with compassionate care to deliver the best possible outcomes for our patients.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <ShieldCheck className="text-secondary flex-shrink-0" size={32} />
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Advanced Tech</h4>
                                    <p className="text-gray-400 text-sm">Latest laparoscopic & laser equipment</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <Users className="text-secondary flex-shrink-0" size={32} />
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Expert Team</h4>
                                    <p className="text-gray-400 text-sm">Highly qualified surgeons & staff</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <Clock className="text-secondary flex-shrink-0" size={32} />
                                <div>
                                    <h4 className="font-bold text-lg mb-1">24/7 Support</h4>
                                    <p className="text-gray-400 text-sm">Round-the-clock emergency care</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <Award className="text-secondary flex-shrink-0" size={32} />
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Proven Success</h4>
                                    <p className="text-gray-400 text-sm">Thousands of successful surgeries</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 h-[500px] group">
                            <AnimatePresence initial={false} mode="popLayout">
                                <motion.img
                                    key={currentIndex}
                                    src={images[currentIndex]}
                                    alt="Cogs Centre Facility"
                                    initial={{ x: '100%', opacity: 0.5 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: '-100%', opacity: 0.5 }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                    className="w-full h-full object-cover absolute inset-0"
                                />
                            </AnimatePresence>
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent pointer-events-none"></div>
                            <div className="absolute bottom-6 left-6 z-10">
                                <div className="bg-primary text-white px-6 py-2 rounded-full inline-block font-bold mb-2">
                                    Trusted by 10,000+ Patients
                                </div>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default CogsCentre;
