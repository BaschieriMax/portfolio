import { ResumeEntry } from '../../components/ResumeEntry/ResumeEntry'
import { Section } from '../../components/Section/Section'
import { education } from '../../data/education'
import { useTranslation } from '../../i18n/useTranslation'

export const Education = () => {
  const { t, locale } = useTranslation()

  return (
    <Section id="education" title={t.sections.education}>
      {education.map((item) => (
        <ResumeEntry
          key={item.id}
          title={item.title[locale]}
          subtitle={item.institution[locale]}
          period={item.period[locale]}
          description={item.description[locale]}
        />
      ))}
    </Section>
  )
}
