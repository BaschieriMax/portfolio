import styles from './TagList.module.css'

interface TagListProps {
  items: string[]
  /** Accessible name for the list (e.g. "Technologies"). */
  label: string
  size?: 'sm' | 'md'
}

export const TagList = ({ items, label, size = 'md' }: TagListProps) => (
  <ul aria-label={label} className={`${styles.list} ${styles[size]}`}>
    {items.map((item) => (
      <li key={item} className={styles.tag}>
        {item}
      </li>
    ))}
  </ul>
)
