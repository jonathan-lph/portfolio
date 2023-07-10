import { about } from '@consts/about'
import { footer } from '@consts/footer'
import { About } from '@components/about'
import { Projects } from '@components/projects'
import styles from './page.module.sass'
import { MarkdownToHtml } from '@components/common'

export default function Home() {
  return (
    <>
      <main className={styles.root}>
        <h1 className={styles.title}>{about.name}</h1>
        <About />
        <Projects />
      </main>
      <footer className={styles.footer}>
        <MarkdownToHtml text={footer}/>
      </footer>
    </>
  )
}
