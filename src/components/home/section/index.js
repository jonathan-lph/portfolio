import clsx from 'clsx'
import styles from './styles.module.sass'

export default function Section({title, children, className}) {
  return (
    <section className={styles.root}>
      <h1 className={styles.title}>
        {title}
      </h1>
      <div className={clsx(className && className)}>
        {children}
      </div>
    </section>
  )
}