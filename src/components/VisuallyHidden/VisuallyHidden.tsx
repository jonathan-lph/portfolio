import type { ReactNode } from 'react'
import styles from './VisuallyHidden.module.css'

function VisuallyHidden({ children }: { children: ReactNode }) {
  return <span className={styles.visuallyHidden}>{children}</span>
}

export default VisuallyHidden
