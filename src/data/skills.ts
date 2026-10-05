import type { SkillGroup } from '../types/content'

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: { it: 'Front-end', en: 'Front-end' },
    items: ['React', 'Next.js', 'TypeScript', 'HTML5', 'CSS3 / SCSS', 'Tailwind CSS', 'Redux'],
  },
  {
    id: 'backend',
    title: { it: 'Back-end', en: 'Back-end' },
    items: ['C#', 'ASP.NET Core', 'Node.js'],
  },
  {
    id: 'database',
    title: { it: 'Database', en: 'Databases' },
    items: ['SQL Server', 'MongoDB', 'Prisma'],
  },
  {
    id: 'tools',
    title: { it: 'Strumenti', en: 'Tools' },
    items: ['Git', 'VS Code', 'Figma', 'SEO', 'Responsive design'],
  },
]
