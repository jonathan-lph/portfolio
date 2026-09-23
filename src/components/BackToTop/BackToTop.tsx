import { ArrowUp } from 'lucide-react'
import { useHandedness } from '../../context/HandednessContext'
import styles from './BackToTop.module.css'

/* A link rather than a button so the browser also moves keyboard focus to the top. */
function BackToTop() {
  const { leftHanded } = useHandedness()

  return (
    <a
      className={`${styles.link} ${leftHanded ? styles.left : ''}`}
      href="#top"
      aria-label="Back to top"
    >
      <ArrowUp strokeWidth={1.0} />
    </a>
  )
}

export default BackToTop
