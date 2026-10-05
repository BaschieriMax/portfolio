import { Download, Mail, MapPin } from 'lucide-react'
import type { ReactNode } from 'react'
import avatar from '../../assets/avatar.webp'
import { BrandIcon } from '../../components/BrandIcon/BrandIcon'
import { Button } from '../../components/Button/Button'
import { Section } from '../../components/Section/Section'
import { contactLinks, interests, languages, profile } from '../../data/profile'
import { useTranslation } from '../../i18n/useTranslation'
import type { ContactLinkIcon } from '../../types/content'
import styles from './Sidebar.module.css'

const ICONS: Record<ContactLinkIcon, ReactNode> = {
  mail: <Mail size={18} aria-hidden="true" />,
  linkedin: <BrandIcon name="linkedin" />,
  github: <BrandIcon name="github" />,
  location: <MapPin size={18} aria-hidden="true" />,
}

export const Sidebar = () => {
  const { t, locale } = useTranslation()

  return (
    <aside className={styles.sidebar}>
      <img
        src={avatar}
        alt={t.sidebar.photoAlt}
        width={168}
        height={168}
        className={styles.avatar}
      />

      <Section title={t.sidebar.contacts} size="sidebar">
        <ul className={styles.contactList}>
          {contactLinks.map((link) => {
            const content = (
              <>
                <span className={styles.contactIcon}>{ICONS[link.icon]}</span>
                <span className={styles.contactLabel}>{link.label[locale]}</span>
              </>
            )
            const isExternal = link.href?.startsWith('http')
            return (
              <li key={link.id}>
                {link.href ? (
                  <a
                    href={link.href}
                    className={styles.contactItem}
                    {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
                  >
                    {content}
                  </a>
                ) : (
                  <span className={styles.contactItem}>{content}</span>
                )}
              </li>
            )
          })}
        </ul>
      </Section>

      <Button
        href={profile.cvPath}
        variant="outline"
        fullWidth
        download
        icon={<Download size={18} aria-hidden="true" />}
      >
        {t.sidebar.downloadCv}
      </Button>

      <Section title={t.sidebar.languages} size="sidebar">
        <dl className={styles.pairList}>
          {languages.map((language) => (
            <div key={language.id} className={styles.pairRow}>
              <dt>{language.name[locale]}</dt>
              <dd className={styles.muted}>{language.level[locale]}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title={t.sidebar.interests} size="sidebar">
        <dl className={styles.interestList}>
          {interests.map((interest) => (
            <div key={interest.id}>
              <dt className={styles.muted}>{interest.category[locale]}</dt>
              <dd className={styles.interestDetail}>{interest.detail[locale]}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </aside>
  )
}
