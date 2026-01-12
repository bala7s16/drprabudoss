import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Globe, Microscope, Award, Users } from 'lucide-react';
import About from '../components/About';

const AboutPage = () => {
    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const coreValues = [
        {
            icon: <Heart size={32} />,
            title: "Patient Care",
            description: "At our clinic, patient care is our top priority. We provide personalized treatment plans, ensuring comfort and trust throughout your journey. Our dedicated team is here to support you every step of the way to better digestive health."
        },
        {
            icon: <Shield size={32} />,
            title: "National & Ethical Practice",
            description: "We are committed to upholding the highest standards of national and ethical medical practice. Our team follows evidence-based guidelines to ensure safe, effective treatments for all patients. Integrity, professionalism, and patient-centered care are at the core of everything we do."
        },
        {
            icon: <Globe size={32} />,
            title: "International Quality",
            description: "We use the latest international medical technologies to provide world-class care. Our clinic stays at the forefront of advancements in gastroenterology to ensure the best outcomes for our patients. Quality, precision, and innovation are the pillars of our approach."
        },
        {
            icon: <Microscope size={32} />,
            title: "Research",
            description: "Our clinic is dedicated to advancing the field of gastroenterology through ongoing research. We collaborate with leading experts to explore innovative treatments and improve patient care. By integrating research with clinical practice, we strive to offer the most effective solutions."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen pt-36">
            {/* Hero Section */}


            {/* Intro Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-3xl font-bold text-dark mb-6">Welcome to Gastroenterology Clinic</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We arrange procedures such as endoscopy, colonoscopy, and other gastrointestinal treatments at some of the top hospitals across India. No matter where you are being treated, we ensure access to high-quality care and advanced medical facilities for your digestive health needs.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Doctor & Centre Section (Reused Component) */}
            <About />

            {/* Core Values Section */}
            <section className="py-16 bg-light">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-wider uppercase">Why Choose Us</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2">Our Core Values</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {coreValues.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex gap-6"
                            >
                                <div className="text-primary shrink-0">
                                    <div className="bg-primary/10 p-4 rounded-xl">
                                        {value.icon}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-dark mb-3">{value.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                                        {value.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="py-20 bg-primary/5">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-3xl shadow-lg border-l-8 border-primary relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 transform group-hover:scale-110 transition-transform duration-700">
                                <Award size={150} />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-dark mb-4 flex items-center gap-3">
                                    <Award className="text-primary" /> Our Vision
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Our vision is to be a leading center of excellence in gastroenterology, providing the highest standard of care to every patient. We aim to advance digestive health through innovation, research, and compassionate treatment. By fostering a patient-centered environment, we seek to improve overall well-being. We are committed to shaping the future of digestive care with expertise, integrity, and dedication.
                                </p>
                            </div>
                        </motion.div>

                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-primary text-white p-10 rounded-3xl shadow-lg border-l-8 border-primary-dark relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 transform group-hover:scale-110 transition-transform duration-700">
                                <Users size={150} />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <Users className="text-white" /> Our Mission
                                </h3>
                                <p className="text-white/90 leading-relaxed">
                                    Our mission is to provide exceptional, compassionate care for all digestive health concerns through personalized treatment and advanced medical practices. We are dedicated to improving the lives of our patients by offering effective solutions and ongoing support. Through continuous research and innovation, we strive to lead in gastroenterology. Our goal is to promote long-term health and well-being for every patient we serve.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
