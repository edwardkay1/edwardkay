import React, { useRef } from 'react';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import { projectsData } from '../data/projects';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const listProjects = projectsData.filter(p => !p.isDesign);
  const designProjects = projectsData.filter(p => p.isDesign);
  
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      // Adjusted scroll amount: use container width for better responsiveness
      const scrollAmount = direction === 'right' 
        ? carouselRef.current.offsetWidth 
        : -carouselRef.current.offsetWidth;
      
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container max-w-6xl px-4 mx-auto">
        

        <h2 className="mb-12 text-4xl font-bold text-white md:text-5xl">
          Selected Client Work
        </h2>
        
        <div className="mb-20 space-y-4">
          {listProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* 2. Creative Designs Carousel */}
        <div className="flex flex-col mb-8 md:flex-row md:items-end md:justify-between">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Additional Client Projects
          </h2>
          
          <div className="flex mt-6 space-x-4 md:mt-0">
            <button 
              onClick={() => scrollCarousel('left')}
              className="p-3 text-white transition duration-300 border border-gray-800 rounded-full hover:bg-teal-500 hover:border-teal-500 active:scale-95"
              aria-label="Scroll Left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollCarousel('right')}
              className="p-3 text-white transition duration-300 border border-gray-800 rounded-full hover:bg-teal-500 hover:border-teal-500 active:scale-95"
              aria-label="Scroll Right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div 
            ref={carouselRef}
            // "scrollbar-hide" requires a plugin, added overflow-x-auto for native support
            className="flex pb-4 space-x-4 overflow-x-auto md:space-x-8 snap-x snap-mandatory no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
          >
            {designProjects.map(project => (
              <div key={project.id} className="flex-shrink-0 snap-start w-[85vw] md:w-auto">
                <ProjectCard project={project} isDesign={true} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;