import BackToTop from '../../components/BackToTop/BackToTop'
import Container from '../../components/Container/Container'
import Divider from '../../components/Divider/Divider'
import SectionLabel from '../../components/SectionLabel/SectionLabel'
import styles from './About.module.css'

const PARAGRAPHS = [
  `I guess I’m like most people in that I grew up playing computer games. Unlike the classic developer origin story though, I wasnt coding from the age of six or dreaming about becoming a software engineer. I don’t have a science-related degree or a master’s — I actually studied Chinese Language and Literature at The Chinese University of Hong Kong, and only decided to take up a minor in Computer Science towards the end of my third year.`,
  `What drew me to software wasn’t just that I happened to be good at it. I was fascinated by how powerful and versatile it could be as a tool for turning ideas into something real. Since then, I’ve come to love pretty much every part of what I do — from communicating ideas with clients to scratching my head over a problem that refuses to make sense. No two challenges are quite the same, and there’s something incredibly rewarding about figuring things out and making them work.`,
  `When I’m not doing that, I’m probably reorganising my Notion pages and databases for the hundredth time, hosting a board game night, sobbing uncontrollably over a Joachim Trier film, or writing something unnecessarily emo on Instagram.`,
  `Nice to meet you 👋🏻`,
]

function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className={styles.about}>
      <Container className={styles.row}>
        <div className={styles.text}>
          {PARAGRAPHS.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className={styles.illustration}>
          <SectionLabel id="about-heading" label="about" flip />
        </div>
      </Container>
      <Container className={styles.end}>
        <BackToTop />
      </Container>
      <Divider />
    </section>
  )
}

export default About
