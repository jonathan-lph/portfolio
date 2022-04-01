import Link from "next/link"
import { Section } from "@components/home"
import Icon from "@src/svg/icon"
import PWAIcon from "@src/svg/pwa"
import { slugify } from "@util/helperFn"
import { projects } from "@util/source"
import styles from "./styles.module.sass"
 
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
              {tech[0].map(cName => {
                if (cName === 'pwa') return <PWAIcon className={styles.pwa} key={cName}/>
                else return <i className={`devicon-${cName}`} key={cName}/>
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