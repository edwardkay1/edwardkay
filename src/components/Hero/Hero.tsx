import React from 'react';
import { MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="text-white py-24 md:py-32 text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <p className="flex items-center justify-center text-gray-400 mb-4 text-sm tracking-widest">
          <MapPin className="w-4 h-4 mr-2" /> Dhaka, Bangladesh
        </p>
        
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
          I'm Edward Kay <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">
            Web Developer
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          I specialize in researching and analyzing your brand and provide you a beautiful and effective 
          website for making a digital standing among your competitors.
        </p>

        <div className="flex justify-center space-x-4">
          <button className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition duration-300 ease-in-out font-medium">
            Get yours now
          </button>
          <button className="px-6 py-3 border border-gray-700 text-gray-300 hover:border-white hover:text-white transition duration-300 ease-in-out font-medium">
            See my works
          </button>
        </div>

        {/* Technologies I Use - Simplified for Hero */}
        <div className="mt-16 pt-8 border-t border-gray-800">
            <h3 className="text-gray-400 text-sm tracking-wider uppercase mb-4">Technologies I Use</h3>
            <div className="flex flex-wrap justify-center gap-4 text-gray-500 text-sm">
                <span>JavaScript</span>
                <span>Reactjs</span>
                <span>Node</span>
                <span>Express</span>
                <span>Tailwind CSS</span>
                <span>Figma</span>
                <span>Git</span>
                <span>MongoDB</span>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;