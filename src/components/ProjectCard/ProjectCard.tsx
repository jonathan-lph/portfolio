import { GitFork, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import styles from './ProjectCard.module.css'

export type ProjectCardLinks = {
  github?: string
  website?: string
  caseStudy?: string
}

type ProjectCardProps = {
  title: string
  description: string
  tags: string
  date: string
  links: ProjectCardLinks
}

function ProjectCard({ title, description, tags, date, links }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.body}>
        <p className={styles.description}>{description}</p>
        <div className={styles.bottomPart}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.info}>
            <span>{tags}</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
      <div className={styles.links}>
        {links.github && (
          <a
            className={styles.link}
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} GitHub repository`}
          >
            <GitFork strokeWidth={1.0} />
          </a>
        )}
        {links.website && (
          <a
            className={styles.link}
            href={links.website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} website`}
          >
            <ArrowUpRight strokeWidth={1.0} />
          </a>
        )}
        {links.caseStudy && (
          <a
            className={styles.link}
            href={links.caseStudy}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} case study`}
          >
            <ArrowDownRight strokeWidth={1.0} />
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
