import { useTheme } from "@src/context/ThemeContext"
import Icon from "@src/svg/icon"
import Link from "next/link"
import styles from "./styles.module.sass"

const links = ['projects', 'courseworks', 'contacts']

export default function Navigation() {
  const { dark, toggleTheme } = useTheme()

  return (
    <nav className={styles.root}>
      <Link href="/">
        <h1 className={styles.title}>
            Jon Lam
        </h1>
      </Link>
      {/* <ul className={styles.links}>
        {links.map(page => 
          <li key={page} className={styles.link}>
            <Link href={page}>
              {page}
            </Link>
          </li>
        )}
      </ul> */}
      {dark
        ? <Icon 
            icon="light-mode"
            onClick={toggleTheme}
          />
        : <Icon 
            icon="dark-mode"
            onClick={toggleTheme}
          />

      }
    </nav>
  )
}