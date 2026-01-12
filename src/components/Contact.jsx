import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-primary font-bold uppercase tracking-wider text-sm">Get in Touch</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-4">Book Your Appointment</h2>
                    <p className="text-gray-600">
                        We are here to help you. Reach out to us for any queries or to schedule an appointment with Dr. Prabu Doss.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Contact Info Cards */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-light p-8 rounded-2xl shadow-sm border border-gray-100">
                            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                                <MapPin size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-dark mb-2">Our Location</h3>
                            <p className="text-gray-600">Plot no.8, 2nd Lane, Officers Colony, Varadharajapuram, Velachery, Chennai - 600042</p>
                        </div>

                        <div className="bg-light p-8 rounded-2xl shadow-sm border border-gray-100">
                            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                                <Phone size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-dark mb-2">Phone Number</h3>
                            <p className="text-gray-600 mb-1">+91 63818 93236</p>
                            <p className="text-gray-600">+91 92821 33313</p>
                        </div>

                        <div className="bg-light p-8 rounded-2xl shadow-sm border border-gray-100">
                            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                                <Mail size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-dark mb-2">Email Address</h3>
                            <p className="text-gray-600">drprabudoss@gmail.com</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2 bg-light p-8 md:p-10 rounded-3xl shadow-lg relative overflow-hidden">
                        {/* Decorative blob */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>

                        <h3 className="text-2xl font-bold text-dark mb-8 relative z-10">Send us a Message</h3>

                        <form className="relative z-10 space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="+91 98765 43210" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white">
                                        <option>Book Appointment</option>
                                        <option>General Inquiry</option>
                                        <option>Feedback</option>
                                        <option>Emergency</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="How can we help you?"></textarea>
                            </div>

                            <button type="button" className="w-full md:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-primary/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
                                <Send size={18} />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
