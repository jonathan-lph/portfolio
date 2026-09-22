import Container from '../Container/Container'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.row}>
        <div className={styles.corridor}>
          <div className={styles.backdrop} />
          <div className={styles.card} />
        </div>
        <p className={styles.message}>more coming :)</p>
      </Container>
    </footer>
  )
}

export default Footer
