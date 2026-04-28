import { Project, Experience, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Pulse AI',
    description: 'A real-time sentiment analysis dashboard for social media trends using deep learning.',
    tags: ['React', 'Python', 'PyTorch', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800&h=600',
    link: '#',
  },
  {
    id: '2',
    title: 'SafeGuard',
    description: 'A distributed file encryption system with secure key management and sharing.',
    tags: ['Rust', 'Tauri', 'Cryptography'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=600',
    link: '#',
  },
  {
    id: '3',
    title: 'EcoTrack',
    description: 'Mobile application to track and offset carbon footprint through gamified tasks.',
    tags: ['React Native', 'Firebase', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800&h=600',
    link: '#',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'TechCorp Solutions',
    role: 'Software Engineering Intern',
    period: 'Summer 2025',
    description: [
      'Architected a microservice for real-time data processing handling 10k+ requests per second.',
      'Reduced database query latency by 40% through strategic indexing and caching.',
      'Collaborated with cross-functional teams using Agile methodologies.',
    ],
  },
  {
    id: '2',
    company: 'Innovate Lab',
    role: 'Full Stack Intern',
    period: 'Jan 2024 - May 2024',
    description: [
      'Developed and deployed a customer-facing dashboard using Next.js and GraphQL.',
      'Implemented automated CI/CD pipelines reducing deployment time by 50%.',
      'Conducted unit testing and integration testing with 90% code coverage.',
    ],
  },
];

export const SKILLS: Skill[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'Python', 'Rust', 'Java', 'SQL'],
  },
  {
    category: 'Frameworks',
    items: ['React', 'Next.js', 'PyTorch', 'Express', 'Tauri'],
  },
  {
    category: 'Tools',
    items: ['Docker', 'AWS', 'Git', 'Kubernetes', 'PostgreSQL'],
  },
];
