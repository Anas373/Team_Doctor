import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="w-full bg-blue-600 text-white py-10 mt-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between px-6 gap-8">
                
                {/* Quick Links */}
                <div className="flex-1">
                    <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-200 transition-colors">Home</a></li>
                        <li><a href="#" className="hover:text-gray-200 transition-colors">Spécialité</a></li>
                        <li><a href="#" className="hover:text-gray-200 transition-colors">Réservation</a></li>
                        <li><a href="#" className="hover:text-gray-200 transition-colors">Contact Us</a></li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div className="flex-1">
                    <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
                    <p className="flex items-center gap-2"><FontAwesomeIcon icon={faPhone} /> +1 234 567 890</p>
                    <p className="flex items-center gap-2 mt-2"><FontAwesomeIcon icon={faEnvelope} /> support@medicleteam.com</p>
                    <p className="mt-4">123 Medical St., Health City, Country</p>
                </div>

                {/* Social Media */}
                <div className="flex-1">
                    <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-gray-200 transition-colors"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                        <a href="#" className="hover:text-gray-200 transition-colors"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                        <a href="#" className="hover:text-gray-200 transition-colors"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                    </div>
                </div>
            </div>
            
            <div className="mt-8 text-center text-gray-300 text-sm">
                &copy; {new Date().getFullYear()} Medicle Team. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
