import { Hand } from 'lucide-react'
import NavMenu from '../../components/NavMenu/NavMenu'
import Divider from '../../components/Divider/Divider'
import Container from '../../components/Container/Container'
import { useHandedness } from '../../context/HandednessContext'
import styles from './Header.module.css'

function Header() {
  const { leftHanded, toggle } = useHandedness()

  return (
    <header className={styles.header}>
      <div className={styles.banner}>
        <Container className={`${styles.bannerInner} ${leftHanded ? styles.leftHanded : ''}`}>
          <button
            type="button"
            className={styles.handButton}
            onClick={toggle}
            aria-pressed={leftHanded}
            aria-label="Switch handedness of the layout"
          >
            <Hand strokeWidth={1.0} className={styles.handIcon} />
          </button>
          <NavMenu />
        </Container>
      </div>
      <Container className={styles.intro}>
        <h1 className={styles.name}>jonathan lam</h1>
        <p className={styles.description}>
          Hi there, I am Jonathan, a full-stack developer based in London, currently working in{' '}
          <a className={styles.accent} href="https://www.theodo.com/en-uk">
            Theodo UK
          </a>
          . I enjoy building technical solutions, writing proses, and documenting the small things
          in life.
        </p>
      </Container>
      <Divider />
    </header>
  )
}

export default Header
