import { ArrowRight } from 'lucide-react'
import { Button } from '../../components/Button/Button'
import { profile } from '../../data/profile'
import { useTranslation } from '../../i18n/useTranslation'
import styles from './Hero.module.css'

/** Name, role, short intro and the two calls to action at the top of the page. */
export const Hero = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.hero}>
      <div className={styles.heading}>
        <h1 className={styles.name}>{profile.name}</h1>
        <p className={styles.role}>{t.hero.role}</p>
      </div>
      <p className={styles.intro}>{t.hero.intro}</p>
      <div className={styles.actions}>
        <Button href="#contact" icon={<ArrowRight size={18} aria-hidden="true" />}>
          {t.hero.ctaContact}
        </Button>
        <Button href="#projects" variant="outline">
          {t.hero.ctaProjects}
        </Button>
      </div>
    </div>
  )
}
