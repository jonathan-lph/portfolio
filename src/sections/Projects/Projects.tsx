import BackToTop from '../../components/BackToTop/BackToTop'
import Container from '../../components/Container/Container'
import Divider from '../../components/Divider/Divider'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import { projects } from '../../data/projects'
import styles from './Projects.module.css'

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.banner}>
        <Container className={styles.bannerInner}>
          <div className={styles.box}>
            <p className={styles.label}>projects</p>
          </div>
          <svg className={styles.trapezoid} viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="10.42,0 89.58,0 100,100 0,100" vectorEffect="non-scaling-stroke" />
          </svg>
        </Container>
      </div>
      <Container className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={`${project.title}-${index}`} {...project} />
        ))}
      </Container>
      <Container className={styles.end}>
        <BackToTop />
      </Container>
      <Divider />
    </section>
  )
}

export default Projects
