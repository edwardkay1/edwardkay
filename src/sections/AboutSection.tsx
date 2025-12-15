import React from 'react';

const AboutSection: React.FC = () => {
  return (
    // 5. About/Profile Section (Refined from previous placeholder)
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl flex flex-wrap md:flex-nowrap gap-12 items-center">
        
        {/* Image (shami.png) */}
        <div className="w-full md:w-1/3">
          <img 
            src="/assets/images/shami.png" 
            alt="Edward Kay Profile" 
            className="w-full object-cover rounded-lg shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:shadow-teal-500/50" 
          />
        </div>
        
        {/* Bio */}
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold text-white mb-4">
            I am Edward Kay, a full stack web developer and a programmer working remotely in my home at Dhaka, Bangladesh
          </h2>
          <div className="text-gray-400 space-y-4 text-base">
            <p>
              I've spent the last 5+ years learning and working across different areas of web development, focusing on modern front-end frameworks (React, Vue) and efficient back-end systems (Node, Python). I am currently learning to integrate AI/ML services into web applications.
            </p>
            <p>
              My mission is to help small and medium-sized businesses grow their digital presence by providing them a stylish and modern-looking, fully functional website.
            </p>
          </div>
          <div className="mt-6 flex space-x-4">
             <a 
                href="/path-to-your-resume.pdf" 
                className="px-6 py-2 border border-white text-white font-medium hover:bg-white hover:text-black transition duration-300 text-sm"
              >
                My Resume
              </a>
               <button 
                className="px-6 py-2 border border-gray-700 text-gray-300 hover:border-teal-400 hover:text-teal-400 transition duration-300 text-sm"
              >
                Hire me
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;