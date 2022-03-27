import styles from './styles.module.sass'

export default function Jumbotron() {
  return (
    <section className={styles.profile}>
      <div className={styles.jumbo}>
        <img src="/image/profile.jpg" className={styles.jumboImg}/>
        <div className={styles.jumboTitle}>
          <h1>
            Jonathan Lam
          </h1>
          <h2>
            Front-end Developer / UI Designer
          </h2>
        </div>
        <svg viewBox="0 0 203 34" fill="none" className={styles.arrowDown}>
          <path d="M202 1L101.5 32.5L1 1"/>
        </svg>
      </div>
    </section>
  )
}