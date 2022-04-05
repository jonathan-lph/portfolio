import devicon from "devicon"
import styles from "./styles.module.sass"
import PWAIcon from "@src/svg/pwa"


export default function Info({
  name,
  desc,
  tech,
  date, link, source,
}) {
  return (
    <section className={styles.root}>
      <h1>{name}</h1>
      <p className={styles.desc}>
        {desc}
      </p>
      <div className={styles.versions}>
        {date.reverse().map((_date, idx) => 
          <div className={styles.version} key={idx}>
            <div className={styles.versionNum}>
              ver. {date.length-idx} - {_date}
            </div>
            <div className={styles.icons}>
              {tech[idx].map(cName => {
                if (cName === 'pwa') return <PWAIcon className={styles.pwa} key={cName}/>
                else return <i className={`devicon-${cName}`} key={cName}/>
              })}
            </div>
            {link[idx] &&
              <a href={`https://${link[idx]}`}>
                {link[idx]}
              </a>
            }
            {source[idx] &&
              <a href={`https://${source[idx]}`}>
                source code
              </a>
            }
          </div>
        )}
      </div>
    </section>
  )
}