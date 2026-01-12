import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingActions = () => {
    // WhatsApp number (without +) and Phone number
    const whatsappNumber = "916381893236";
    const phoneNumber = "+916381893236";

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
            {/* WhatsApp Button */}
            <motion.a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ delay: 0.5 }}
                className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center relative group"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle size={28} fill="white" />
                <span className="absolute right-full mr-4 bg-white text-dark px-3 py-1 rounded-lg text-sm font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Chat with us
                </span>
            </motion.a>

            {/* Phone Button */}
            <motion.a
                href={`tel:${phoneNumber}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ delay: 0.6 }}
                className="bg-primary text-white p-4 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center relative group"
                aria-label="Call Now"
            >
                <Phone size={28} />
                <span className="absolute right-full mr-4 bg-white text-dark px-3 py-1 rounded-lg text-sm font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Call Now
                </span>
            </motion.a>
        </div>
    );
};

export default FloatingActions;
