import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowRight, Activity, Users, Award } from 'lucide-react';
import doctorImg from '../assets/doctor.png';
const bannerImports = import.meta.glob('../assets/banner/*.{png,jpg,jpeg,svg}', { eager: true });
const bannerImages = Object.values(bannerImports).map((module) => module.default);

const Hero = () => {
    // Combine imported banner images with the static doctor image if needed, or just use banner images
    const images = [...bannerImages];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-[90vh] flex items-center bg-light overflow-hidden pt-36">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-full hidden lg:block" />

            {/* Dynamic Background Image for Mobile/Tablet or Overlay */}
            <div className="absolute inset-0 bg-cover bg-center opacity-5 lg:hidden" style={{ backgroundImage: `url(${images[0]})` }} />


            <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block bg-primary/10 text-primary-dark px-4 py-2 rounded-full font-semibold mb-6">
                        <span className="flex items-center gap-2">
                            <Activity size={18} />
                            Dr. Prabu Doss - Surgical Gastroenterologist
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6 leading-tight">
                        Expert Care For <br />
                        <span className="text-primary">Gastroenterology</span> & <br />
                        Laparoscopy
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                        Providing world-class diagnostic and therapeutic services. Specializing in painless endoscopy, colonoscopy, and advanced laparoscopic surgeries with a patient-first approach.
                        <br /><br /> <span className='font-bold text-primary-dark'>Visiting Gastro Consultant to various Corporate Hospitals in Chennai.</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-primary/30"
                        >
                            <Calendar size={20} />
                            Book Appointment
                        </a>
                        <Link
                            to="/treatments"
                            className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-primary text-gray-700 hover:text-primary px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-sm hover:shadow-md"
                        >
                            Our Treatments
                            <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="mt-12 flex gap-8 border-t border-gray-200 pt-8">
                        <div>
                            <h4 className="text-3xl font-bold text-dark">20+</h4>
                            <p className="text-gray-500 text-sm">Years Experience</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-bold text-dark">5000+</h4>
                            <p className="text-gray-500 text-sm">Happy Patients</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-bold text-dark">100%</h4>
                            <p className="text-gray-500 text-sm">Success Rate</p>
                        </div>
                    </div>
                </motion.div>

                {/* Vertical/Horizontal Slider Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden lg:block relative h-[500px] w-full"
                >
                    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                        <AnimatePresence mode='wait'>
                            <motion.img
                                key={currentIndex}
                                src={images[currentIndex]}
                                alt={`Slide ${currentIndex + 1}`}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}

                                className={`absolute inset-0 w-full h-full ${currentIndex === 0 ? 'object-contain bg-white' : 'object-cover'}`}
                            />
                        </AnimatePresence>

                        {/* Slider Indicators */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-primary scale-125' : 'bg-white/50 hover:bg-white'}`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute bottom-8 left-8 bg-white p-4 rounded-xl shadow-lg flex items-center gap-4 animate-bounce-slow z-20">
                            <div className="bg-accent/10 p-3 rounded-full text-accent">
                                <Award size={32} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Best in Class</p>
                                <p className="font-bold text-dark">Surgical Excellence</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
