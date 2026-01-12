import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
    {
        name: "Suresh Kumar",
        text: "Dr. Prabu Doss is an excellent doctor. He explains everything in detail and makes you feel very comfortable. My hernia surgery went very smoothly.",
        rating: 5
    },
    {
        name: "Priya Ramesh",
        text: "I was suffering from severe acidity for years. Dr. Prabu identified the root cause and treated it. I am very grateful for his kind approach.",
        rating: 5
    },
    {
        name: "Anand Raj",
        text: "Best place for endoscopy. It was completely painless as promised. The staff and doctor are very professional and caring.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-primary-dark text-white relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-accent blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-accent font-bold uppercase tracking-wider text-sm">Patient Stories</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">What Our Patients Say</h2>
                    <p className="text-gray-300">
                        Real stories from patients who have experienced our care and expertise.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all">
                            <Quote className="text-accent mb-4 opacity-50" size={40} />
                            <p className="text-lg italic mb-6 leading-relaxed">"{review.text}"</p>
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-bold text-white">{review.name}</h4>
                                    <p className="text-gray-400 text-sm">Verified Patient</p>
                                </div>
                                <div className="flex text-accent">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
