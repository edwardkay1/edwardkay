import React from 'react';
import { Linkedin, Github, Twitter, Facebook } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Left Column: Heading and Socials */}
          <div>
            <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">Contact me</p>
            <h2 className="text-5xl font-bold text-white mb-6">
              Get in touch
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-md">
              It is very important for us to keep in touch with you, so we are always ready to answer any question that interests you.
            </p>

            {/* Social Icons - UPDATED WITH rel="noopener noreferrer" */}
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" // <-- ADDED SECURITY
                className="p-3 border border-gray-800 text-gray-400 rounded-full hover:border-teal-400 hover:text-teal-400 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" // <-- ADDED SECURITY
                className="p-3 border border-gray-800 text-gray-400 rounded-full hover:border-teal-400 hover:text-teal-400 transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" // <-- ADDED SECURITY
                className="p-3 border border-gray-800 text-gray-400 rounded-full hover:border-teal-400 hover:text-teal-400 transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" // <-- ADDED SECURITY
                className="p-3 border border-gray-800 text-gray-400 rounded-full hover:border-teal-400 hover:text-teal-400 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Right Column: Contact Form */}
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Full name" 
                  className="bg-black border-b border-gray-700 text-white placeholder-gray-500 py-3 focus:border-teal-400 focus:outline-none transition-colors" 
                />
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-black border-b border-gray-700 text-white placeholder-gray-500 py-3 focus:border-teal-400 focus:outline-none transition-colors" 
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="bg-black border-b border-gray-700 text-white placeholder-gray-500 py-3 focus:border-teal-400 focus:outline-none transition-colors" 
                />
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="bg-black border-b border-gray-700 text-white placeholder-gray-500 py-3 focus:border-teal-400 focus:outline-none transition-colors" 
                />
              </div>
              <textarea 
                placeholder="Write your message here" 
                rows={4}
                className="w-full bg-black border-b border-gray-700 text-white placeholder-gray-500 py-3 focus:border-teal-400 focus:outline-none transition-colors resize-none"
              ></textarea>
              <button 
                type="submit" 
                className="px-8 py-3 bg-white text-black font-semibold hover:bg-teal-400 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;