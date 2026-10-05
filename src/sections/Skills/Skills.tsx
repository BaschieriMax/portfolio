import { Section } from '../../components/Section/Section'
import { TagList } from '../../components/TagList/TagList'
import { skillGroups } from '../../data/skills'
import { useTranslation } from '../../i18n/useTranslation'
import styles from './Skills.module.css'

export const Skills = () => {
  const { t, locale } = useTranslation()

  return (
    <Section id="skills" title={t.sections.skills}>
      <div className={styles.grid}>
        {skillGroups.map((group) => (
          <div key={group.id} className={styles.group}>
            <h3 className={styles.groupTitle}>{group.title[locale]}</h3>
            <TagList items={group.items} label={group.title[locale]} />
          </div>
        ))}
      </div>
    </Section>
  )
}
