import { Section } from "@components/home"
import PWAIcon from "@src/svg/pwa"
import Link from "next/link"
import styles from "./styles.module.sass"

const projects = [{
  name: 'Stocker ver.2',
  date: '2021.12',
  link: 'https://dashboard.stocker.nanistudio.org',
  desc: 'Stock and cryptocurrency portfolio management system with real-time data. Revamped to provide cleaner layout, chart supports, and more.',
  photo: 'stocker_v2',
  tech: [
    'nextjs-plain-wordmark',
    'sass-original',
    'firebase-plain',
  ]
}, {
  name: 'WNRS Online ver.2',
  date: '2022.02',
  link: 'https://wnrs.jonathanl.dev',
  desc: "Online adaptation of the conversation card game We're Not Really Strangers. Revamped to include seeded randomizer, theme customization, and more.",
  photo: 'wnrs_v2',
  tech: [
    'nextjs-plain-wordmark',
    'sass-original',
    'pwa'
  ],
}, {
  name: 'LukHap',
  date: '2022.01',
  link: 'https://lukhap.jonathanl.dev',
  desc: 'Word game for promoting and practising JyutPing, the Cantonese romanisation system. Adapted from the popular word game Wordle to Next.JS.',
  photo: 'lukhap',
  tech: [
    'nextjs-plain-wordmark',
    'sass-original',
  ]
}, {
  name: 'Stocker ver.1',
  date: '2021.07',
  link: 'https://stocker.nanistudio.org',
  desc: 'Stock and cryptocurrency portfolio management system.',
  photo: 'stocker_v1',
  tech: [
    'nextjs-plain-wordmark',
    'materialui-plain',
    'firebase-plain',
  ]
}, {
  name: 'WNRS Online ver.1',
  date: '2021.05',
  link: null,
  desc: "Online adaptation of the conversational card game We're Not Really Strangers",
  photo: 'wnrs_v1',
  tech: [
    'react-original',
    'materialui-plain',
    'pwa'
  ]
}]

export default function Projects({ showing }) {
  return (
    <Section title={<>Featured<br/>Projects</>} className={styles.root}>
      <ul className={styles.projects}>
        {projects.slice(0, showing).map(({name, date, photo, link, desc, isWork, tech}) => 
          <li className={styles.project}>
            <div className={styles.topic}>
              <h2 className={styles.name}>
                {name}
              </h2>
              <h4 className={styles.date}>
                <date>{date}</date>{' - '}
                <a href={link} target="_blank" className={styles.link}>
                  link
                </a>
              </h4>
            </div>
            <div className={styles.image}>
              <img src={`/image/${photo}.png`} />
            </div>
            <div className={styles.info}>
              <p className={styles.desc}>
                {desc}
              </p>
              <div className={styles.icons}>
                {tech.map(cName => {
                  if (cName === 'pwa') return <PWAIcon className={styles.pwa}/>
                  else return <i className={`devicon-${cName}`}/>
                })}
              </div>
            </div>
          </li>
        )}
      </ul>
      {showing <= projects.length &&
        <div className={styles.more}>
          <Link href="/projects">
            See All Projects 
          </Link>
        </div>
      }
    </Section>
  )
}