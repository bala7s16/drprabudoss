import React from 'react';
import Services from '../components/Services';


const TreatmentsPage = () => {
    return (
        <div className="pt-24">
            <div className="bg-primary text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Treatments & Services</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                        Advanced surgical and gastroenterological care tailored to your needs.
                    </p>
                </div>
            </div>
            <Services />

        </div>
    );
};

export default TreatmentsPage;
