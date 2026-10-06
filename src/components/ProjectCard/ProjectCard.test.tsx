import { render, screen } from '@testing-library/react'
import { useLanguageStore } from '../../stores/languageStore'
import type { Project } from '../../types/content'
import { ProjectCard } from './ProjectCard'

const baseProject: Project = {
  id: 'sample',
  title: 'Sample',
  description: { it: 'Descrizione', en: 'Description' },
  stack: ['React'],
  status: 'completed',
}

describe('ProjectCard', () => {
  beforeEach(() => useLanguageStore.setState({ locale: 'it' }))

  it('opens external project links in a new tab safely', () => {
    render(<ProjectCard project={{ ...baseProject, repoUrl: 'https://github.com/example/repo' }} />)
    const codeLink = screen.getByRole('link', { name: /Codice/ })

    expect(codeLink).toHaveAttribute('href', 'https://github.com/example/repo')
    expect(codeLink).toHaveAttribute('target', '_blank')
    expect(codeLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders no links when the project has neither code nor demo', () => {
    render(<ProjectCard project={baseProject} />)

    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  it('labels work projects with the company in the active language', () => {
    useLanguageStore.setState({ locale: 'en' })
    render(
      <ProjectCard
        project={{ ...baseProject, company: { it: 'MTS per CNH', en: 'MTS for CNH' } }}
      />,
    )

    expect(screen.getByText('Work project · MTS for CNH')).toBeInTheDocument()
  })
})
