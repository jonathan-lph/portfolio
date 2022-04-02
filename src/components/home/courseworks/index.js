import { useState } from 'react'
import { courseworks } from "@src/util/source"
import Section from "@src/components/home/section"
import styles from "./styles.module.sass"
import clsx from 'clsx'

const File = ({cid, type, src}) => {

  const getExt = (src) => {
    return src.split('.').slice(-1)[0].toUpperCase()
  }

  if (!src) return null
  return (
    <a 
      href={`/source/${cid}/${src}`}
      target="_blank"
      rel="noreferrer"
      className={styles.file}
    >
      {type} ({getExt(src)})
    </a>
  )
}

export default function Courseworks() {

  const [project, setProject] = useState(
    Object.fromEntries(courseworks.map(course => [course.cid, 0]))
  )

  const handleSelectProject = (course, idx) => e => {
    setProject({
      ...project,
      [course]: idx
    })
  }

  return (
    <Section title={<>Course<wbr/>works</>} className={styles.root}>
      <ul className={styles.courseworks}>
        {courseworks.map(({cid, name, lecturer, semester, projects}) => 
          <li key={cid} className={styles.course}>
            <div className={styles.info}>
              <h2 className={styles.name}>
                {name}
              </h2>
              <div className={styles.meta}>
                <h6 className={styles.meta}>
                  <span>{cid}</span>
                  <span>{lecturer}</span>
                </h6>
              </div>
            </div>
            <ul className={styles.projects}>
              {projects.map(({name, preview}, idx) => 
                <li
                  key={name}
                  className={clsx(styles.project, idx === project[cid] && styles.selected)} 
                  onClick={handleSelectProject(cid, idx)}
                >
                  <h4>
                    {idx+1}. {name}
                  </h4>
                  {idx === project[cid] &&
                    <p>
                      {preview}
                    </p>
                  }
                </li>
              )}
            </ul>
            <div className={styles.main}>
              <p>
                {projects[project[cid]].desc}
                <br/><br/>
                {projects[project[cid]].type} of {projects[project[cid]].date}
              </p>
              <div className={styles.files}>
                {projects[project[cid]].files.map((file) =>
                  <File cid={cid} {...file} key={file.type}/>
                )}
              </div>
            </div>
          </li>
        )}
      </ul>
    </Section>
  )
}