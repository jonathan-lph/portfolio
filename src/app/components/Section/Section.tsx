'use client'

import clsx from 'clsx'
import { ReactNode, useRef, useEffect } from 'react'
import styles from './Section.module.sass'

export default function Section({
  title,
  children,
  className,
}: SectionProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const options = { rootMargin: '-20px' }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) entry.target.classList.add(styles.enter)
    }, options)
    observer.observe(ref.current)
    return () => {
      if (!ref.current) return
      observer.unobserve(ref.current)
    }
  }, [])

  return (
    <section className={styles.root} ref={ref}>
      <hr className={styles.hr} />
      <h2 className={styles.title}>{title}</h2>
      <div className={clsx(styles.content, className && className)}>
        {children}
      </div>
    </section>
  )
}

interface SectionProps {
  title: string
  children: ReactNode
  className?: string
}
