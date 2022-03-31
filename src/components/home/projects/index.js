import { Section } from "@components/home"
import Icon from "@src/svg/icon"
import PWAIcon from "@src/svg/pwa"
import clsx from "clsx"
import Link from "next/link"
import styles from "./styles.module.sass"
import { slugify } from "@util/helperFn"
import { projects } from "@util/source"
 
export default function Projects({ showing }) {
  return (
    <Section title={<>Featured<br/>Projects</>} className={styles.root}>
      <ul className={styles.projects}>
        {projects.slice(0, showing).map(({name, date, preview, link, desc, tech}) => 
          <li className={styles.project} key={name}>

            <h2 className={styles.name}>
              <a href={`https://${link[0]}`} target="_blank" rel="noreferrer">
                {name}
                <br/>
                <Icon icon="arrow-out-noborder" className={styles.icon}/>
              </a>
            </h2>

            <p className={styles.desc}>
              {desc}
              <Link href={`/project/${slugify(name)}`}>
                <a className={styles.learnMore}>
                  Learn more
                </a>
              </Link>
              
            </p>

            <div className={styles.image}>
              <img src={`/image/${preview}.png`} />
            </div>

            <date className={styles.date}>
              {date[0]}
            </date>
              
            <div className={styles.icons}>
              {tech.map(cName => {
                if (cName === 'pwa') return <PWAIcon className={styles.pwa}/>
                else return <i className={`devicon-${cName}`}/>
              })}
              {/* <a href={link} target="_blank" className={styles.link}>
                learn more
              </a> */}
              
            </div>

            
          </li>
        )}
      </ul>
      {/*showing <= projects.length &&
        <div className={styles.more}>
          <Link href="/projects">
            See All Projects 
          </Link>
        </div>
      */}
    </Section>
  )
}