import { ExternalButton, MarkdownToHtml } from '@components/common/index'
import { Section } from '@components/Section'
import { about } from '@consts/about'
import styles from './About.module.sass'

export default function About(): JSX.Element {
  return (
    <Section title="About" className={styles.root}>
      <div className={styles.about}>
        {about.about.split('\n').map((para, idx) => (
          <p key={`para-${idx}`}>
            <MarkdownToHtml text={para}/>
          </p>
        ))}
      </div>
      <section className={styles.socials}>
        {about.cv &&
          <ExternalButton
            href={about.cv}
            className={styles.social}
            icon="download"
          >
            Resume
          </ExternalButton>
        }
        {about.links.map((link) => (
          <ExternalButton
            href={link.href}
            key={link.type}
            className={styles.social}
          >
            {link.type}
          </ExternalButton>
        ))}
      </section>
    </Section>
  )
}
