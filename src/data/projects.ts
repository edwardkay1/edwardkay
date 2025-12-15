// Define interfaces for type safety
export interface Project {
  id: number;
  title: string;
  client: string;
  description: string;
  liveLink: string;
  isDesign: boolean; // True for the "Creative Designs" section
  imagePath: string; // Will use shami.png for demo
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'MSCSC Website',
    client: 'MSCSC',
    description: 'A vibrant React/Node website celebrating science, math, and space exploration. The platform features engaging events, exclusive member profiles, and forums to foster community and inspire learning.',
    liveLink: '#',
    isDesign: false,
    imagePath: '/assets/images/shami.png', // Placeholder image
  },
  {
    id: 2,
    title: 'Weather Compass',
    client: 'Private Client',
    description: 'A sleek, mobile-first weather application built with a modern framework that provides real-time forecasts, radar maps, and severe weather alerts.',
    liveLink: '#',
    isDesign: false,
    imagePath: '/assets/images/shami.png', 
  },
  // --- Creative Designs ---
  {
    id: 3,
    title: 'ASTRO E-commerce Checkout',
    client: 'ASTRO Mart',
    description: 'Checkout page designed for optimizing the user purchase journey. From Astro Mart which is a high quality e-commerce website featuring new and high-quality products.',
    liveLink: '#',
    isDesign: true,
    imagePath: '/assets/images/shami.png', 
  },
  {
    id: 4,
    title: 'Admin Panel Dashboard',
    client: 'MSCSC',
    description: 'A clean and intuitive Admin Panel dashboard for MSCSC management, enabling efficient updates to events and content. A reliable and user-friendly tool for the team to keep the site dynamic.',
    liveLink: '#',
    isDesign: true,
    imagePath: '/assets/images/shami.png', 
  },
];