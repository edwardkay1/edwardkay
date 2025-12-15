import ServiceCard from '../components/ServiceCard';
import { servicesData } from '../data/services'; // Ensure this path is correct

const ServicesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Column: Heading (omitted for brevity) */}
          <div className="md:sticky md:top-20 h-full">
            {/* ... */}
          </div>
          
          {/* Right Column: Service Cards */}
          <div className="space-y-6">
            {servicesData.map((service, index) => (
              <ServiceCard 
                key={index}
                // FIX: Pass the entire 'service' object as the prop
                service={service} 
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;