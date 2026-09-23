import styles from './SectionLabel.module.css'

type SectionLabelProps = {
  id: string
  label: string
  flip?: boolean
}

function SectionLabel({ id, label, flip = false }: SectionLabelProps) {
  const containerClassName = flip ? `${styles.container} ${styles.flip}` : styles.container

  return (
    <div className={containerClassName}>
      <div className={styles.backdrop} />
      <div className={styles.card}>
        <h2 id={id} className={styles.label}>
          {label}
        </h2>
      </div>
    </div>
  )
}

export default SectionLabel
