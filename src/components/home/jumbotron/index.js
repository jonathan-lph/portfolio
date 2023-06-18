import personal from "@util/personal.json";
import styles from "./styles.module.sass";

export default function Jumbotron() {
  return (
    <section className={styles.profile}>
      <div className={styles.jumbo}>
        <div className={styles.inner}>
          <div className={styles.imgWrapper}>
            <img src="/image/profile.jpg" className={styles.jumboImg} />
          </div>
          <div className={styles.jumboTitle}>
            <h1>{personal.name}</h1>
            <h2>{personal.title}</h2>
          </div>
        </div>
        <svg viewBox="0 0 203 34" fill="none" className={styles.arrowDown}>
          <path d="M202 1L101.5 32.5L1 1" />
        </svg>
      </div>
    </section>
  );
}
