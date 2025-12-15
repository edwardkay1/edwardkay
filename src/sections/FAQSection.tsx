import React from 'react';
import FAQItem from '../components/FAQ/FAQItem';
import { faqsData } from '../data/faqs';

const FAQSection: React.FC = () => {
  return (
    <section id="faqs" className="py-20 bg-black">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Frequently Asked Questions
        </h2>
        
        {/* FAQ Grid Layout - Mimics the inspiration's two-column structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          
          {/* Column 1 (First half of FAQs) */}
          <div className="space-y-4">
            {faqsData.slice(0, Math.ceil(faqsData.length / 2)).map(faq => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
          </div>
          
          {/* Column 2 (Second half of FAQs) */}
          <div className="space-y-4">
            {faqsData.slice(Math.ceil(faqsData.length / 2)).map(faq => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;