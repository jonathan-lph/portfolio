import { ArrowUp } from 'lucide-react'
import styles from './BackToTop.module.css'

function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button type="button" className={styles.button} onClick={scrollToTop} aria-label="Back to top">
      <ArrowUp strokeWidth={1.0} />
    </button>
  )
}

export default BackToTop
