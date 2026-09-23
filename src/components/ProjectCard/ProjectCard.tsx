import { useId } from 'react'
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
  const titleId = useId()

  return (
    <article className={styles.card} aria-labelledby={titleId}>
      <div className={styles.body}>
        <div className={styles.bottomPart}>
          <h3 id={titleId} className={styles.title}>
            {title}
          </h3>
          <div className={styles.info}>
            <span>{tags}</span>
            <span>{date}</span>
          </div>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.links}>
        {links.github && (
          <a
            className={styles.link}
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} GitHub repository (opens in new tab)`}
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
            aria-label={`${title} website (opens in new tab)`}
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
            aria-label={`${title} case study (opens in new tab)`}
          >
            <ArrowDownRight strokeWidth={1.0} />
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
