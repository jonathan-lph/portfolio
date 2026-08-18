import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <svg className={styles.corridor} viewBox="0 0 251 485" preserveAspectRatio="none">
        <rect x="0.5" y="0.5" width="250" height="484" className={styles.frame} />
        <path d="M0.5 0.5V404.634L250.5 484.315V0.5H0.5Z" className={styles.wedge} />
      </svg>
      <p className={styles.message}>more coming :)</p>
    </footer>
  )
}

export default Footer
