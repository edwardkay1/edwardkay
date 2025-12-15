// src/data/services.ts

// 1. Use 'import type' for LucideIcon, as it is only used as a type.
// All the icon components (Code, Monitor, Zap) are values, so they use the standard import.
import { Code, Monitor, } from 'lucide-react'; 
import type { LucideIcon } from 'lucide-react';

// 2. Define and EXPORT the Service interface
export interface Service {
  // Use LucideIcon as the type for the icon component
  icon: LucideIcon; 
  title: string;
  description: string;
}

// 3. Export the data array
export const servicesData: Service[] = [
  {
    icon: Code,
    title: 'Front-End Dev',
    description: 'I design responsive, efficient, and optimized code. I build responsive, interactive, and user-friendly web applications using the latest front-end technologies like React and Tailwind.'
  },
// ... (rest of your servicesData array)
  {
    icon: Monitor,
    title: 'UI/UX Design',
    description: 'I design intuitive and visually compelling user interfaces that enhance engagement. My approach focuses on user behavior, accessibility, and aesthetics to deliver a premium digital experience.'
  }
];