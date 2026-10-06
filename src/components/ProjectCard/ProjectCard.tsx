import { ArrowUpRight, CircleCheck, Clock, type LucideIcon } from 'lucide-react'
import { useTranslation } from '../../i18n/useTranslation'
import type { Project, ProjectStatus } from '../../types/content'
import { TagList } from '../TagList/TagList'
import styles from './ProjectCard.module.css'

/** Icon next to the status label, so the state is not conveyed by color alone. */
const STATUS_ICONS: Record<ProjectStatus, LucideIcon> = {
  'in-progress': Clock,
  completed: CircleCheck,
}

interface ProjectCardProps {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t, locale } = useTranslation()
  const StatusIcon = STATUS_ICONS[project.status]

  const links = [
    { href: project.repoUrl, label: t.projects.code },
    { href: project.demoUrl, label: t.projects.demo },
  ].filter((link): link is { href: string; label: string } => Boolean(link.href))

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{project.title}</h3>
        <span className={styles.status} data-status={project.status}>
          <StatusIcon size={14} aria-hidden="true" />
          {t.projects.status[project.status]}
        </span>
      </div>
      {project.company && (
        <p className={styles.company}>
          {t.projects.workProject} · {project.company[locale]}
        </p>
      )}
      <p className={styles.description}>{project.description[locale]}</p>
      <TagList items={project.stack} label={t.projects.stack} size="sm" />
      {links.length > 0 && (
        <div className={styles.links}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {link.label}
              <span className="visually-hidden"> {t.projects.opensInNewTab}</span>
              <ArrowUpRight size={16} aria-hidden="true" className={styles.arrow} />
            </a>
          ))}
        </div>
      )}
    </article>
  )
}
