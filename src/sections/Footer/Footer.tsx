import { profile } from '../../data/profile'
import { useTranslation } from '../../i18n/useTranslation'
import styles from './Footer.module.css'

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className={styles.footer}>
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
      <span>{t.footer.builtWith}</span>
    </footer>
  )
}
