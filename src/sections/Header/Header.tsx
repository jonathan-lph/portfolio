import { Hand } from 'lucide-react'
import NavMenu from '../../components/NavMenu/NavMenu'
import Divider from '../../components/Divider/Divider'
import Container from '../../components/Container/Container'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.banner}>
        <Container className={styles.bannerInner}>
          <Hand strokeWidth={1.5} className={styles.handIcon} />
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
