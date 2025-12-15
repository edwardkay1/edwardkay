import React from 'react';
// Components
import Navbar from './components/Nav/Nav'; 
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

// Sections
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection'; // NEW
import AboutSection from './sections/AboutSection'; // NEW
import FAQSection from './sections/FAQSection'; // NEW

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      
      {/* 1. Navigation */}
      <Navbar /> 

      <main>
        {/* 2. Hero Section (Home/Introduction) */}
        <section id="home">
            <Hero />
        </section>
        
        {/* 3. Services Section */}
        <ServicesSection />

        {/* 4. Projects/Designs Section */}
        <ProjectsSection />

        

<AboutSection />
        {/* 6. FAQ Section */}
        <FAQSection />

        {/* 7. Contact Section */}
        <ContactSection />
        
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
};

export default App;