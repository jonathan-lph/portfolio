import styles from "./styles.module.sass"
import personal from "@util/personal.json"

export default function Footer() {
  return (
    <footer className={styles.root}>
      {personal.name} © {new Date().getFullYear()}
    </footer>
  )
}