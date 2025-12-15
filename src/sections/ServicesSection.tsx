import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { servicesData } from '../data/services'; // Ensure this path is correct

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Column: Heading, Text, and PICTURE */}
          <div className="md:sticky md:top-20 h-full">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              My Services
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-md">
              Explore my services that do more than just beautiful —
              I build websites that are visually stunning, fully functional, and perfectly tailored to your business goals.
            </p>
            
            {/* 🖼️ NEW: Image Block replacing the button */}
            <div className="w-full h-auto mt-8 rounded-xl overflow-hidden shadow-2xl shadow-teal-900/30">
                <img 
                    src="/path-to-your-service-image.jpg" // ⚠️ REPLACE THIS PATH!
                    alt="Web Development and Design Process Diagram" 
                    className="w-full h-auto object-cover"
                />
            </div>
          </div>
          
          {/* Right Column: Service Cards */}
          <div className="space-y-6">
            {servicesData.map((service, index) => (
              <ServiceCard 
                key={index}
                service={service} 
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;