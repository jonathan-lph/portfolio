'use client'

import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { ExternalButton, Icon } from '@components/common'
import { useDelayUnmount } from '@hooks/index'
import styles from './Project.module.sass'
import type { ProjectObject } from '@_types/project'

export default function Project({
  name,
  type,
  redacted,
  categories,
  year_short,
  year_long,
  client,
  tech_stack,
  description,
  website_url,
  github_url,
  previews,
}: ProjectProps): JSX.Element {
  const [isExpanded, setIsExpanded] = useState(false)
  const [height, setHeight] = useState(0)
  const rootRef = useRef<HTMLLIElement | null>(null)
  const imagesRef = useRef<HTMLDivElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const shouldRenderContent = useDelayUnmount(isExpanded, 300)
  const shouldRenderTooltip = useDelayUnmount(isExpanded, 300 + 300)

  const toggleExpanded = (setPosition: boolean) => () => {
    setIsExpanded((_isExpanded) => !_isExpanded)
    if (setPosition && rootRef.current) {
      const rootTop = rootRef.current.getBoundingClientRect().top
      const Y_OFFSET = -40
      window.scrollTo({ top: rootTop + window.scrollY + Y_OFFSET })
    }
  }

  useEffect(() => {
    if (isExpanded)
      setHeight(contentRef.current?.getBoundingClientRect().height ?? 0)
    else setHeight(0)
  }, [shouldRenderContent])

  useEffect(() => {
    if (!rootRef.current) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && imagesRef.current) {
        imagesRef.current.childNodes.forEach(
          (node) => {(node as HTMLImageElement).loading = 'eager'}
        )
      }
    })
    observer.observe(rootRef.current)
    return () => {
      if (!rootRef.current) return
      observer.unobserve(rootRef.current)
    }
  }, [])

  return (
    <li ref={rootRef}>
      <article
        className={clsx({
          [styles.root]: true,
          [styles.expanded]: isExpanded,
        })}
        id={encodeURIComponent(name.toLocaleLowerCase().replaceAll(' ', '_'))}
      >
        <button
          className={clsx({
            [styles.listItem]: true,
            [styles.unmount]: shouldRenderTooltip,
          })}
          onClick={toggleExpanded(false)}
        >
          <div className={styles.summary}>
            <h3
              className={clsx({
                [styles.name]: true,
                [styles.stroke]: redacted,
              })}
            >
              {name}
            </h3>
            <Icon icon="expand_more" className={styles.expandIcon} />
          </div>
          <ul className={styles.techStack}>
            {tech_stack.map((tech) => (
              <li className={styles.tech} key={tech}>
                {tech}
              </li>
            ))}
          </ul>
          <span className={styles.expandHint}>
            <Icon icon={!shouldRenderTooltip ? 'expand_more' : 'expand_less'} />
            {!shouldRenderTooltip ? 'Learn More' : 'Hide'}
          </span>
        </button>
        <div
          className={clsx({
            [styles.contentWrapper]: true,
            [styles.mount]: isExpanded,
            [styles.unmount]: !isExpanded,
          })}
          style={{ height }}
        >
          <div ref={contentRef} className={styles.content}>
            <div className={styles.details}>
              <dl className={styles.infoSheet}>
                <dt>Categories</dt>
                <div className={styles.ddWrapper}>
                  {categories.map((category) => (
                    <dd key={category}>{category}</dd>
                  ))}
                </div>
                <dt>Year</dt>
                <dd>{year_long}</dd>
                {client && (
                  <>
                    <dt>Client</dt>
                    <dd>{client}</dd>
                  </>
                )}
              </dl>
              <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.links}>
              {website_url && (
                <ExternalButton
                  href={website_url}
                  tabIndex={isExpanded ? 0 : -1}
                >
                  Website
                </ExternalButton>
              )}
              {github_url && (
                <ExternalButton
                  href={github_url}
                  tabIndex={isExpanded ? 0 : -1}
                >
                  GitHub
                </ExternalButton>
              )}
            </div>
            <div className={styles.previews} ref={imagesRef}>
              {previews.map((preview, idx) => (
                <img
                  src={preview}
                  key={preview}
                  alt={`Image ${idx} for project ${name}`}
                  loading="lazy"
                />
              ))}
            </div>
            <button
              onClick={toggleExpanded(true)}
              className={styles.collapseHint}
              tabIndex={isExpanded ? 0 : -1}
            >
              <Icon icon="expand_less" />
              Hide
            </button>
          </div>
        </div>
      </article>
    </li>
  )
}

interface ProjectProps extends ProjectObject {}
