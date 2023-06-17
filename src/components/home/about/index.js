import styles from './styles.module.sass'
import devicon from 'devicon'
import { Section } from '@components/home'
import personal from '@util/personal.json'

export default function About() {

  return (
    <Section title='About' className={styles.root}>
      <p className={styles.about}> 
        {personal.about}
      </p>
      <div className={styles.specialties}>
        {personal.skills.map(({title, icons}) => 
          <div className={styles.category} key={title}>
            <h6 className={styles.categoryTitle}>
              {title}
            </h6>
            <div className={styles.icons}>
              {icons.map(cName =>
                <i 
                  key={cName.split('-')[0]}
                  title={cName.split('-')[0]}
                  className={`devicon-${cName}`} 
                /> 
              )}
            </div>
          </div>
        )}
      </div>
    </Section>
  )
}