import clsx from 'clsx'
import { Fragment } from 'react'
import { Icon } from '@components/common'
import formatMarkdown from '@util/formatMarkdown'
import type { LinkObject } from '@util/formatMarkdown'
import styles from './MarkdownToHtml.module.sass'

export default function MarkdownToHtml({
  text,
  aClass,
}: MarkdownToHtmlProps): JSX.Element {
  return (
    <>
      {formatMarkdown(text).map((section, idx) =>
        idx % 2 === 0 ? (
          <Fragment key={idx}>
            {section as string}
          </Fragment>
        ) : (
          <a
            href={(section as LinkObject).href}
            target="_blank"
            className={clsx(styles.link, aClass && aClass)}
          >
            {(section as LinkObject).text}
            <Icon icon="arrow_outward" className={styles.icon} />
          </a>
        )
      )}
    </>
  )
}

interface MarkdownToHtmlProps {
  text: string
  aClass?: string
}
