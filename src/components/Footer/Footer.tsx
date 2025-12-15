import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 mt-20">
      <div className="container mx-auto px-4 py-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-12">
          
          {/* Col 1: Bio & Resume (No changes here, as the resume link doesn't use target="_blank") */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">Edward Kay</h3>
            <p className="text-sm mb-4">
              I'm a web developer with 5+ years of experience in front-end, back-end, and UI/UX design, creating modern, functional websites for businesses globally.
            </p>
            <a 
                href="/path-to-your-resume.pdf" 
                className="px-4 py-2 border border-teal-500 text-teal-500 text-sm font-medium hover:bg-teal-500 hover:text-black transition duration-300"
            >
                My Resume
            </a>
          </div>

          {/* Col 2: Contact Info (No external link issues here) */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Contact me</h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-start">
                <Mail className="w-4 h-4 mr-3 mt-1 text-teal-400 flex-shrink-0" />
                <a href="mailto:edwardkay@email.com" className="hover:text-white transition-colors">edwardkay@email.com</a>
              </p>
              <p className="flex items-start">
                <Phone className="w-4 h-4 mr-3 mt-1 text-teal-400 flex-shrink-0" />
                <a href="tel:+8801700000000" className="hover:text-white transition-colors">+880 1700 000 000</a>
              </p>
              <p className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-1 text-teal-400 flex-shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </p>
            </div>
          </div>

          {/* Col 3: Menu Links (No external link issues here) */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#designs" className="hover:text-white transition-colors">Designs</a></li>
              <li><a href="#faqs" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center text-xs">
          
          {/* Social Icons - FIX APPLIED HERE */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
          </div>
          
          {/* Copyright */}
          <p className="text-center md:text-right">
            Copyright &copy; 2025 Edward Kay. All rights reserved. | Designed By: Edward
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;