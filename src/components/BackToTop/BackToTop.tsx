import { ArrowUp } from 'lucide-react'
import { useHandedness } from '../../context/HandednessContext'
import styles from './BackToTop.module.css'

function BackToTop() {
  const { leftHanded } = useHandedness()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      className={`${styles.button} ${leftHanded ? styles.left : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <ArrowUp strokeWidth={1.0} />
    </button>
  )
}

export default BackToTop
