import styles from './NavMenu.module.css'

const LINKS = [
  { label: 'about', href: '#about' },
  { label: 'projects', href: '#projects' },
  { label: 'contact', href: '#contact' },
]

function NavMenu() {
  return (
    <nav className={styles.nav}>
      {LINKS.map((link) => (
        <a key={link.href} className={styles.link} href={link.href}>
          {link.label}
        </a>
      ))}
    </nav>
  )
}

export default NavMenu
