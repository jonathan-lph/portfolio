import { projects } from '@consts/projects'
import { Section } from '@components/Section'
import { Project } from '@components/projects'
import styles from './Projects.module.sass'

export default function Projects({} : ProjectsProps): JSX.Element {
  return (
    <Section title="Projects">
      <ul className={styles.root}>
        {projects.map((project) => 
          <Project {...project} key={project.name}/>
        )}
      </ul>
    </Section>
  )
}

interface ProjectsProps {
}