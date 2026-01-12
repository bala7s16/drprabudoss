import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary-dark text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* About Column */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Dr. Prabu Doss</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Dr. G.S. Prabudoss is a renowned Surgical Gastroenterologist dedicated to providing excellence in gastro care. Director of COGS and Senior Consultant at Apollo Spectra Hospitals.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com/drprabudoss" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="https://instagram.com/drgsprabudoss" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="https://x.com/drgsprabudoss" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="https://youtube.com/@drprabudoss" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Opening Hours */}
                    <div className="md:col-span-2 lg:col-span-2">
                        <h4 className="text-xl font-semibold mb-6">Opening Hours</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300 bg-white/5 p-6 rounded-xl border border-white/10">
                            <div className="space-y-4">
                                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                    <span className="font-medium text-accent">Monday</span>
                                    <span className="text-sm">10AM-1PM & 4PM-8PM</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                    <span className="font-medium text-accent">Tuesday</span>
                                    <span className="text-sm">10AM-1PM & 4PM-8PM</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                    <span className="font-medium text-accent">Wednesday</span>
                                    <span className="text-sm">10AM-1PM & 4PM-8PM</span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                    <span className="font-medium text-accent">Thursday</span>
                                    <span className="text-sm">10AM-1PM & 4PM-8PM</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                    <span className="font-medium text-accent">Friday</span>
                                    <span className="text-sm">10AM-1PM & 4PM-8PM</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                    <span className="font-medium text-accent">Saturday</span>
                                    <span className="text-sm">10AM-1PM & 4PM-8PM</span>
                                </div>
                            </div>
                            <div className="md:col-span-2 text-center pt-2">
                                <span className="text-red-400 font-semibold">Sunday : Holiday</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-start space-x-3">
                                <MapPin className="text-accent flex-shrink-0 mt-1" size={20} />
                                <span>Plot no.8, 2nd Lane, Officers Colony, Varadharajapuram, Velachery, Chennai - 600042</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="text-accent flex-shrink-0" size={20} />
                                <div>
                                    <a href="tel:+916381893236" className="block hover:text-white">+91 63818 93236</a>
                                    <a href="tel:+919282133313" className="block hover:text-white">+91 92821 33313</a>
                                </div>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="text-accent flex-shrink-0" size={20} />
                                <a href="mailto:drprabudoss@gmail.com" className="hover:text-white">drprabudoss@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
                    <p>© {new Date().getFullYear()} Dr. Prabu Doss. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
