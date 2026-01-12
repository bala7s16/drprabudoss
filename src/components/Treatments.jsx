import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Activity, Search, Scissors, User, Zap, Heart, AlertCircle, CheckCircle, Leaf, Sparkles, Microscope, Home, Flame, Scale, Layers, Disc, PauseCircle, Thermometer, Syringe } from 'lucide-react';

const treatments = [
    {
        icon: <Flame size={32} />,
        title: "Acidity",
        desc: "Acidity is a medical condition that is caused due to excess production of acid.",
        link: "/blog/4"
    },
    {
        icon: <AlertCircle size={32} />,
        title: "Abdominal Pain",
        desc: "Abdominal pain has many causes, some more serious than others. What feels like a stomach ache can be significant.",
        link: "/blog/13"
    },
    {
        icon: <Layers size={32} />,
        title: "Hernia",
        desc: "A hernia usually happens in your abdomen or groin, when one of your organs pushes through the muscle or tissue.",
        link: "/blog/7"
    },
    {
        icon: <Disc size={32} />,
        title: "Ulcer",
        desc: "A stomach ulcer occurs when stomach acid eats through your protective stomach lining.",
        link: "/blog/14"
    },
    {
        icon: <Thermometer size={32} />,
        title: "Jaundice",
        desc: "Jaundice is a condition where your skin, the whites of your eyes and mucous membranes turn yellow.",
        link: "/blog/15"
    },
    {
        icon: <Activity size={32} />,
        title: "Piles",
        desc: "Hemorrhoids, or piles, are a common issue. These swollen veins inside of your rectum can cause pain.",
        link: "/blog/8"
    },
    {
        icon: <Syringe size={32} />,
        title: "Fistula",
        desc: "A fistula connects two body parts that don’t normally connect. Fistulas can happen in various parts of the body.",
        link: "/blog/9"
    },
    {
        icon: <Scale size={32} />,
        title: "Obesity",
        desc: "Obesity is commonly defined as having too much body mass. A BMI of 30 or higher is considered obese.",
        link: "/blog/10"
    },
    {
        icon: <AlertCircle size={32} />,
        title: "Diarrhoea",
        desc: "Diarrhoea, a common disorder, usually resolves on its own. However, chronic cases require medical attention.",
        link: "/blog/11"
    },
    {
        icon: <PauseCircle size={32} />,
        title: "Constipation",
        desc: "Constipation is a condition in which a person has uncomfortable or infrequent bowel movements.",
        link: "/blog/12"
    }
];

const specialties = [
    {
        icon: <Search size={32} />,
        title: "Painless Endoscopy",
        desc: "Painless endoscopy refers to performing endoscopic procedures with minimal discomfort using sedation."
    },
    {
        icon: <Activity size={32} />,
        title: "Endoscopy",
        desc: "Endoscopy is a nonsurgical procedure that can be used to examine your digestive tract."
    },
    {
        icon: <Activity size={32} />,
        title: "Colonoscopy",
        desc: "A colonoscopy is an examination of the inside of your large intestine (colon) to detect abnormalities."
    },
    {
        icon: <Scissors size={32} />,
        title: "Laparoscopy",
        desc: "A laparoscopy is a minimally invasive procedure that looks inside your stomach using small incisions."
    },
    {
        icon: <Leaf size={32} />,
        title: "Detox Your Body",
        desc: "Full body detox: Get ready to eliminate all the toxins from your body with these holistic programs."
    },
    {
        icon: <Sparkles size={32} />,
        title: "Acupuncture",
        desc: "Acupuncture is a traditional Chinese method used to relieve some health conditions and symptoms."
    },
    {
        icon: <Zap size={32} />,
        title: "Ultra Sound",
        desc: "An ultrasound is an imaging test that uses sound waves to make pictures of organs, tissues, and structures."
    },
    {
        icon: <Microscope size={32} />,
        title: "Hitech Lab",
        desc: "With strict quality protocols and reliable results, Hitech has established itself as a trusted lab service."
    },
    {
        icon: <Home size={32} />,
        title: "Free Home Collection",
        desc: "When it’s time to return home after your hospital stay, outpatient procedure, or just need a checkup."
    }
];

const Treatments = () => {
    return (
        <section id="treatments" className="py-20 bg-white">
            <div className="container mx-auto px-4">

                {/* Treatments Section - Moved to Top */}
                <div className="mb-20">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-secondary font-bold uppercase tracking-wider text-sm">Common Conditions</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-4">Treatments</h2>
                        <p className="text-gray-600">
                            Expert medical and surgical management for a wide range of gastrointestinal conditions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {treatments.map((item, index) => (
                            <motion.div
                                key={`treat-${index}`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05, duration: 0.4 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-secondary hover:border-secondary/80"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="text-secondary opacity-80">
                                        {item.icon}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-dark mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                                    {item.desc}
                                </p>
                                <Link to={item.link} className="text-xs font-semibold text-secondary uppercase tracking-wide cursor-pointer hover:underline">
                                    View More
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Specialties Section - Moved to Bottom */}
                <div>
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-primary font-bold uppercase tracking-wider text-sm">Our Facilities</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-4">Specialists & Facilities</h2>
                        <p className="text-gray-600">
                            State-of-the-art diagnostic and therapeutic services for comprehensive care.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {specialties.map((service, index) => (
                            <motion.div
                                key={`spec-${index}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20"
                            >
                                <div className="bg-white group-hover:bg-primary text-primary group-hover:text-white p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 shadow-sm transition-colors duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    {service.desc}
                                </p>
                                <Link to="/contact" className="inline-flex items-center text-primary font-semibold text-sm hover:translate-x-1 transition-transform cursor-pointer">
                                    Book Appointment <span className="ml-1">→</span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Treatments;
