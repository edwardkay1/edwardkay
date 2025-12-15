import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import type { FAQ } from '../../data/faqs'; 

interface FAQItemProps {
  faq: FAQ;
}

const FAQItem: React.FC<FAQItemProps> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-4 border-b border-gray-800">
      <button 
        className="w-full flex justify-between items-center text-left text-lg font-medium text-white hover:text-teal-400 transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {faq.question}
        {isOpen ? (
          <Minus className="w-5 h-5 text-teal-400 transition-transform duration-300" />
        ) : (
          <Plus className="w-5 h-5 transition-transform duration-300" />
        )}
      </button>

      {/* Smooth Transition for Content */}
      <div 
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-400 pr-10 pt-2 text-base">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;