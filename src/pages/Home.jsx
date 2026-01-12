import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import CogsCentre from '../components/CogsCentre';


import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';

const Home = () => {
    // Smooth scroll for anchor links if using hash navigation within the page
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash) {
                const element = document.getElementById(hash.substring(1));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        // Hnadle initial load
        handleHashChange();

        // Listen for hash changes
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    return (
        <div className="flex flex-col">
            <Hero />
            <CogsCentre />



            <Testimonials />
            <FAQ />
            <Contact />
        </div>
    );
};

export default Home;
