import React from 'react';
// NOTE: Adjust the path below if your projects type is not in a 'data' folder
import type { Project } from '../data/projects'; 
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  isDesign?: boolean; // Toggles layout/style for the "Creative Designs" section
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isDesign = false }) => {
  if (isDesign) {
    // Layout for the Creative Designs Carousel
    return (
      <div className="flex flex-col w-96 p-4">
        <div className="bg-gray-800 rounded-lg overflow-hidden mb-4 transition-transform duration-500 hover:scale-[1.03] group">
          <img 
            src={project.imagePath} 
            alt={project.title} 
            className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          />
        </div>
        <p className="text-gray-400 text-xs mb-1 uppercase tracking-widest">{project.client}</p>
        <h4 className="text-xl font-semibold text-white mb-2">{project.title}</h4>
        <p className="text-gray-500 text-sm mb-4">{project.description}</p>
        <a href={project.liveLink} className="text-teal-400 text-sm font-medium flex items-center hover:text-white transition-colors">
          Learn More <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    );
  }

  // Layout for the Main Projects List
  return (
    <div className="py-6 border-b border-gray-800 group hover:border-teal-500 transition-colors duration-500 cursor-pointer">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-1">{project.client}</p>
          <h4 className="text-2xl font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors duration-300">
            {project.title}
          </h4>
          <p className="text-gray-500 text-base max-w-lg">{project.description}</p>
        </div>
        <div className="w-56 h-32 ml-8 flex-shrink-0 bg-gray-800 rounded-lg overflow-hidden transition-transform duration-500 group-hover:scale-[1.03]">
          <img 
             src={project.imagePath} 
             alt={project.title} 
             className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
          />
        </div>
      </div>
      <a href={project.liveLink} className="mt-2 text-teal-400 text-sm font-medium flex items-center hover:text-white transition-colors">
        Learn More <ArrowRight className="w-4 h-4 ml-2" />
      </a>
    </div>
  );
};

export default ProjectCard;