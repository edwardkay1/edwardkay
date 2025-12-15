import React, { useRef } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projects';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const listProjects = projectsData.filter(p => !p.isDesign);
  const designProjects = projectsData.filter(p => p.isDesign);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      // Scroll by approximately the width of two cards and gap (adjust based on design)
      const scrollAmount = direction === 'right' ? 800 : -800;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Main Projects List */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Projects I've Created for My Clients
        </h2>
        
        <div className="space-y-4 mb-20">
          {listProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Creative Designs Carousel */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Creative Designs Made for My Clients
        </h2>
        
        <div className="relative">
          {/* Scrollable Container */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-scroll snap-x snap-mandatory space-x-8 pb-4 scrollbar-hide"
            style={{ WebkitOverflowScrolling: 'touch' }} // For smoother iOS scrolling
          >
            {designProjects.map(project => (
              <div key={project.id} className="snap-start flex-shrink-0">
                <ProjectCard project={project} isDesign={true} />
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <div className="absolute top-0 right-0 flex space-x-4">
            <button 
              onClick={() => scrollCarousel('left')}
              className="p-3 border border-gray-800 text-white rounded-full hover:bg-gray-800 transition duration-300"
              aria-label="Scroll Left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollCarousel('right')}
              className="p-3 border border-gray-800 text-white rounded-full hover:bg-gray-800 transition duration-300"
              aria-label="Scroll Right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;