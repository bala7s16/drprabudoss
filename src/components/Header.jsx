import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, Mail, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import logo from '../assets/logo.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Know Your Doctor', path: '/know-your-doctor' },
        { name: 'Services', path: '/treatments' },
        { name: 'Blog', path: '/blog' },


    ];

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'top-0' : 'top-0'}`}>

            {/* Top Bar - Hidden on mobile, visible on desktop */}
            <div className={`bg-primary text-white py-2 text-sm hidden md:block transition-all duration-300 ${scrolled ? 'h-0 overflow-hidden py-0 opacity-0' : 'h-auto opacity-100'}`}>
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex-1 flex items-center justify-start overflow-hidden px-4">
                        <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
                            <a href="tel:+916381893236" className="flex items-center hover:text-secondary transition-colors font-bold text-lg">
                                <Phone size={16} className="mr-2" />
                                <span>+91 63818 93236</span>
                            </a>
                            <a href="tel:+919282133313" className="flex items-center hover:text-secondary transition-colors font-bold text-lg">
                                <Phone size={16} className="mr-2" />
                                <span>+91 92821 33313</span>
                            </a>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-6 shrink-0 z-10 bg-primary pl-4">
                        <a href="mailto:info@drprabudoss.com" className="flex items-center hover:text-secondary transition-colors">
                            <Mail size={14} className="mr-2" />
                            <span>info@drprabudoss.com</span>
                        </a>
                    </div>
                    <div className="flex items-center space-x-4 ml-6 shrink-0 bg-primary">
                        <a href="https://facebook.com/drprabudoss" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><Facebook size={16} /></a>
                        <a href="https://instagram.com/drgsprabudoss" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><Instagram size={16} /></a>
                        <a href="https://x.com/drgsprabudoss" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><Twitter size={16} /></a>
                        <a href="https://youtube.com/@drprabudoss" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><Youtube size={16} /></a>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div className={`bg-white/95 backdrop-blur-sm shadow-md transition-all duration-300 ${scrolled ? 'py-3' : 'py-4'}`}>
                <div className="container mx-auto px-4 flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <img
                            src={logo}
                            alt="Dr. Prabu Doss"
                            className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            link.path.startsWith('/') ? (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="text-gray-600 hover:text-primary font-medium transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <a
                                    key={link.name}
                                    href={location.pathname === '/' ? link.path : `/${link.path}`}
                                    className="text-gray-600 hover:text-primary font-medium transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
                                >
                                    {link.name}
                                </a>
                            )
                        ))}
                        <Link
                            to="/contact"
                            className="flex items-center space-x-2 bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
                        >
                            <Calendar size={18} />
                            <span>Book Appointment</span>
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-gray-600 hover:text-primary p-2 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                link.path.startsWith('/') ? (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className="text-lg text-gray-700 font-medium py-3 border-b border-gray-50 hover:text-primary hover:pl-2 transition-all"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ) : (
                                    <a
                                        key={link.name}
                                        href={location.pathname === '/' ? link.path : `/${link.path}`}
                                        className="text-lg text-gray-700 font-medium py-3 border-b border-gray-50 hover:text-primary hover:pl-2 transition-all"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                )
                            ))}

                            {/* Mobile Contact Info */}
                            <div className="pt-4 space-y-3">
                                <a href="tel:+919840093945" className="flex items-center text-gray-600 hover:text-primary">
                                    <Phone size={18} className="mr-3 text-primary" />
                                    <span>+91 98400 93945</span>
                                </a>
                                <a href="mailto:info@drprabudoss.com" className="flex items-center text-gray-600 hover:text-primary">
                                    <Mail size={18} className="mr-3 text-primary" />
                                    <span>info@drprabudoss.com</span>
                                </a>
                                <div className="flex items-center space-x-6 pt-2">
                                    <a href="https://facebook.com/drprabudoss" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary"><Facebook size={20} /></a>
                                    <a href="https://instagram.com/drgsprabudoss" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary"><Instagram size={20} /></a>
                                    <a href="https://youtube.com/@drprabudoss" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary"><Youtube size={20} /></a>
                                </div>
                            </div>

                            <Link
                                to="/contact"
                                className="block w-full text-center bg-primary text-white py-4 rounded-xl font-bold shadow-md mt-4 active:scale-95 transition-transform"
                                onClick={() => setIsOpen(false)}
                            >
                                Book Appointment
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
