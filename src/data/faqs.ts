export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const faqsData: FAQ[] = [
  {
    id: 1,
    question: 'Who are you, and what do you do?',
    answer: 'I am Edward Kay, a full-stack web developer specializing in creating modern, high-performance websites and digital experiences using React, TypeScript, and Tailwind CSS.',
  },
  {
    id: 2,
    question: 'What services do you provide?',
    answer: 'I offer Front-End Development, Back-End Development (APIs & databases), UI/UX Design, and Performance Optimization (SEO, speed).',
  },
  {
    id: 3,
    question: 'What technologies do you work with?',
    answer: 'My core stack includes JavaScript/TypeScript, React, Node.js, Express, and Tailwind CSS. I also frequently use Git, MongoDB/PostgreSQL, and Figma.',
  },
  {
    id: 4,
    question: 'How do you approach a new project?',
    answer: 'My process starts with a discovery phase (understanding goals), followed by design (wireframing/mockups), development, testing, deployment, and post-launch support.',
  },
  {
    id: 5,
    question: 'Can you redesign an existing website?',
    answer: 'Absolutely. I can audit your current site for performance and usability, and then redesign and rebuild it using modern technologies for better results.',
  },
  {
    id: 6,
    question: 'How can I collaborate with you on a project?',
    answer: 'You can reach out via the Contact section to schedule a consultation. We can discuss your project scope, timeline, and requirements to see if we are a good fit.',
  },
];