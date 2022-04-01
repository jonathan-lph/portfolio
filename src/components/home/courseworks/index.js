import { useState } from 'react'
import { courseworks } from "@src/util/source"
import Section from "@src/components/home/section"
import styles from "./styles.module.sass"
import clsx from 'clsx'

const File = ({cid, type, filename}) => {

  const getExt = (filename) => {
    return filename.split('.').slice(-1)[0].toUpperCase()
  }

  if (!filename) return null
  return (
    <a 
      href={`/source/${cid}/${filename}`}
      target="_blank"
      rel="noreferrer"
      className={styles.file}
    >
      {type} ({getExt(filename)})
    </a>
  )
}

export default function Courseworks() {

  const [project, setProject] = useState(0)

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
                  className={clsx(styles.project, idx === project && styles.selected)} 
                  onClick={() => setProject(idx)}
                >
                  <h4>
                    {idx+1}. {name}
                  </h4>
                  {idx === project &&
                    <p>
                      {preview}
                    </p>
                  }
                </li>
              )}
            </ul>
            <div className={styles.main}>
              <p>
                {projects[project].desc}
                <br/><br/>
                {projects[project].type} of {projects[project].date}
              </p>
              <div className={styles.files}>
                <File cid={cid} type="Question" filename={projects[project].question}/>
                <File cid={cid} type="Submission" filename={projects[project].answer}/>
                <File cid={cid} type="Sources" filename={projects[project].additional}/>
              </div>
            </div>
          </li>
        )}
      </ul>
    </Section>
  )
}