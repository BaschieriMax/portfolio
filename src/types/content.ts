import type { Localized } from '../i18n/types'

export interface ExperienceItem {
  id: string
  role: Localized
  company: Localized
  period: Localized
  description: Localized
  technologies: string[]
}

export type ProjectStatus = 'in-progress' | 'completed'

export interface Project {
  id: string
  title: string
  description: Localized
  stack: string[]
  status: ProjectStatus
  /** Set for work projects: the company (and client) it was built for. */
  company?: Localized
  repoUrl?: string
  demoUrl?: string
}

export interface SkillGroup {
  id: string
  title: Localized
  items: string[]
}

export interface EducationItem {
  id: string
  title: Localized
  institution: Localized
  period: Localized
  description: Localized
}

export interface LanguageSkill {
  id: string
  name: Localized
  level: Localized
}

export interface Interest {
  id: string
  category: Localized
  detail: Localized
}

export type ContactLinkIcon = 'mail' | 'linkedin' | 'github' | 'location'

export interface ContactLink {
  id: string
  label: Localized
  icon: ContactLinkIcon
  href?: string
}
