import styles from './SectionLabel.module.css'

type SectionLabelProps = {
  label: string
  flip?: boolean
}

function SectionLabel({ label, flip = false }: SectionLabelProps) {
  const containerClassName = flip ? `${styles.container} ${styles.flip}` : styles.container

  return (
    <div className={containerClassName}>
      <div className={styles.backdrop} />
      <div className={styles.card}>
        <p className={styles.label}>{label}</p>
      </div>
    </div>
  )
}

export default SectionLabel
