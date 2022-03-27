import Link from "next/link"
import styles from "./styles.module.sass"

const links = ['projects', 'courseworks', 'contacts']

export default function Navigation() {
  return (
    <nav className={styles.root}>
      <h1 className={styles.title}>
        Jon Lam
      </h1>
      <ul className={styles.links}>
        {links.map(page => 
          <li key={page} className={styles.link}>
            <Link href={page}>
              {page}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}