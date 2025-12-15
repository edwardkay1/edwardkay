import React from 'react';
// NOTE: Adjust the path below if your data file location is different
import { skillsData } from '../../data/skills'; 
import type { SkillCategory } from '../../data/skills'; 

// --- START: Individual Skill Card Component ---
// This component renders a single box containing a category title and its skills.

// You will need to import 'type' for LucideIcon in your skills.ts file
// and pass the Icon component here.
const SkillCard: React.FC<{ category: SkillCategory }> = ({ category }) => {
    // We assume category.icon is a React component (like a Lucide icon)
    const Icon = category.icon;
    
    return (
        <div className="p-6 border border-gray-800 rounded-lg bg-gray-950 transition-all duration-300 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-900/50">
            <div className="flex items-center mb-4">
                {/* Icon rendering */}
                <Icon className="w-6 h-6 text-teal-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                    <span 
                        key={index} 
                        className="px-3 py-1 text-xs font-medium text-gray-300 bg-gray-800 rounded-full hover:bg-teal-500 hover:text-black transition-colors duration-200"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};
// --- END: Individual Skill Card Component ---


const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Technologies I Master
        </h2>
        
        {/* Grid layout for the skill categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map(category => (
            <SkillCard key={category.id} category={category} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <p className="text-gray-400">
                Looking for something specific? I'm always eager to learn new tools and frameworks.
            </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;