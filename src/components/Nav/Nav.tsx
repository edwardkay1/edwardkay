import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'FAQs', href: '#faqs' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll handler (requires smooth scrolling to be enabled in CSS or a library)
  const handleNavItemClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm shadow-md transition-shadow duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo/Name */}
        <a href="#home" className="text-2xl font-bold text-white tracking-wider hover:text-teal-400 transition duration-300">
          Edward<span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500'>kay</span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 text-gray-300">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  onClick={(e) => handleNavItemClick(e, item.href)}
                  className="text-sm font-medium hover:text-teal-400 transition duration-300 relative group"
                >
                  {item.name}
                  {/* Underline Hover Effect */}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
          
          {/* Contact Button */}
          <a 
            href="#contact" 
            onClick={(e) => handleNavItemClick(e, '#contact')}
            className="ml-6 px-4 py-2 border border-white text-white text-sm font-medium hover:bg-white hover:text-black transition duration-300"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'
        } bg-black/90 border-t border-gray-800`}
      >
        <ul className="flex flex-col space-y-3 px-4 text-white">
          {navItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href} 
                onClick={(e) => handleNavItemClick(e, item.href)}
                className="block py-2 text-lg font-medium hover:text-teal-400 transition duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <a 
              href="#contact" 
              onClick={(e) => handleNavItemClick(e, '#contact')}
              className="block py-2 text-lg font-medium text-teal-400 hover:text-white transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;