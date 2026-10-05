import { ProjectCard } from '../../components/ProjectCard/ProjectCard'
import { Section } from '../../components/Section/Section'
import { projects } from '../../data/projects'
import { useTranslation } from '../../i18n/useTranslation'
import styles from './Projects.module.css'

export const Projects = () => {
  const { t } = useTranslation()

  return (
    <Section id="projects" title={t.sections.projects}>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  )
}
