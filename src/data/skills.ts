// src/data/skills.ts
import { Zap, Code, Layout, Database } from 'lucide-react'; // Icons for categories

export interface SkillCategory {
    id: number;
    title: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    skills: string[];
}

export const skillsData: SkillCategory[] = [
    {
        id: 1,
        title: 'Front-End Development',
        icon: Layout,
        skills: ['React', 'TypeScript', 'JavaScript (ES6+)', 'Redux / Zustand', 'Tailwind CSS', 'Next.js', 'HTML5 & CSS3', 'Sass/Less'],
    },
    {
        id: 2,
        title: 'Back-End & API',
        icon: Code,
        skills: ['Node.js', 'Express.js', 'Python', 'REST API Design', 'GraphQL (Apollo)', 'Authentication (JWT, OAuth)'],
    },
    {
        id: 3,
        title: 'Database & DevOps',
        icon: Database,
        skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Git & GitHub', 'CI/CD (Basic)', 'Docker', 'Vercel / Netlify'],
    },
    {
        id: 4,
        title: 'Design & Tools',
        icon: Zap,
        skills: ['Figma', 'UI/UX Principles', 'Wireframing', 'Adobe XD', 'Testing (Jest, React Testing Library)', 'Scrum/Agile'],
    },
];