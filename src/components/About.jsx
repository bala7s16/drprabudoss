import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, GraduationCap, Stethoscope, Briefcase } from 'lucide-react';
import doctorImg from '../assets/doctor.png';

const About = () => {
    return (
        <section id="about" className="py-20 bg-light overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-5/12 relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src={doctorImg}
                                alt="Dr. Prabu Doss"
                                className="w-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                                <p className="text-white font-serif italic text-lg opacity-90">"Simple & Convenient Care"</p>
                            </div>
                        </div>
                        {/* Decorative Background Blob */}
                        <div className="absolute -top-10 -left-10 w-full h-full bg-primary/10 rounded-3xl -z-10 transform -rotate-3"></div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-7/12"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-1 w-12 bg-primary"></div>
                            <span className="text-primary font-bold uppercase tracking-wider text-sm">Meet The Expert</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-dark mb-2">
                            Dr. G.S. Prabudoss
                        </h2>
                        <h3 className="text-xl md:text-2xl text-primary font-medium mb-6">
                            Surgical Gastroenterologist & Bariatric Surgeon
                        </h3>

                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            With over 20 years of surgical excellence, Dr. Prabu Doss is a distinguished figure in the field of Gastroenterology. His approach combines cutting-edge surgical techniques with a deep commitment to patient comfort and rapid recovery.
                        </p>

                        {/* Professional Highlights */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:border-primary/30 transition-colors group">
                                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                                    <Briefcase size={24} />
                                </div>
                                <h4 className="font-bold text-dark text-lg mb-2">Director</h4>
                                <p className="text-gray-600 text-sm">Chennai Obesity & Gastro Surgeons Centre (COGS)</p>
                            </div>

                            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:border-primary/30 transition-colors group">
                                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                                    <Stethoscope size={24} />
                                </div>
                                <h4 className="font-bold text-dark text-lg mb-2">Senior Consultant</h4>
                                <p className="text-gray-600 text-sm">Institute of Bariatric & Metabolic Surgery, Apollo Spectra</p>
                            </div>
                        </div>

                        <div className="space-y-3 mb-8">
                            <h4 className="font-bold text-dark text-lg mb-2 flex items-center gap-2">
                                <GraduationCap className="text-primary" size={20} /> Educational Excellence
                            </h4>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="text-accent mt-1 flex-shrink-0" size={18} />
                                <p className="text-gray-700">Specialized training in Advanced Laparoscopy</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="text-accent mt-1 flex-shrink-0" size={18} />
                                <p className="text-gray-700">Fellowship in Bariatric & Metabolic Surgery</p>
                            </div>
                        </div>

                        <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                            <p className="text-dark font-medium italic">
                                "Our mission is to provide world-class gastroenterology care that is accessible, painless, and effective for every patient we treat."
                            </p>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
