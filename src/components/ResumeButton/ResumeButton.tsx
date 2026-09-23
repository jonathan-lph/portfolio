import VisuallyHidden from '../VisuallyHidden/VisuallyHidden'
import styles from './ResumeButton.module.css'

function ResumeButton() {
  return (
    <a className={styles.button} href="/resume.pdf" target="_blank" rel="noopener noreferrer">
      <span className={styles.label}>Resume</span>
      <VisuallyHidden> (PDF, opens in new tab)</VisuallyHidden>
    </a>
  )
}

export default ResumeButton
