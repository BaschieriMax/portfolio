import { ResumeEntry } from '../../components/ResumeEntry/ResumeEntry'
import { Section } from '../../components/Section/Section'
import { TagList } from '../../components/TagList/TagList'
import { experience } from '../../data/experience'
import { useTranslation } from '../../i18n/useTranslation'

export const Experience = () => {
  const { t, locale } = useTranslation()

  return (
    <Section id="experience" title={t.sections.experience}>
      {experience.map((item) => (
        <ResumeEntry
          key={item.id}
          title={item.role[locale]}
          subtitle={item.company[locale]}
          period={item.period[locale]}
          description={item.description[locale]}
        >
          <TagList items={item.technologies} label={t.experience.technologies} />
        </ResumeEntry>
      ))}
    </Section>
  )
}
