import React from 'react';
// NOTE: Adjust the path below if your services type is not in a 'data' folder
import type { Service } from '../data/services'; 

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = service.icon; // Assuming the icon is a Lucide React component

  return (
    <div className="p-6 md:p-8 border border-gray-800 rounded-lg bg-gray-950 transition-all duration-300 hover:border-teal-400 group cursor-pointer">
      <div className="flex space-x-4 items-start">
        {/* Icon */}
        <div className="flex-shrink-0 p-3 rounded-full bg-gray-800 group-hover:bg-teal-400 transition-colors duration-300">
          <Icon className="w-6 h-6 text-teal-400 group-hover:text-black transition-colors duration-300" />
        </div>
        
        {/* Content */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2 transition-colors duration-300 group-hover:text-teal-400">
            {service.title}
          </h3>
          <p className="text-gray-400 text-sm">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;