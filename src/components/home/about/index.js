import styles from './styles.module.sass'
import devicon from 'devicon'
import { Section } from '@components/home'

const specialties = [{
  title: 'Front-end Development',
  icons: [
    'nextjs-plain-wordmark',
    'react-original',
    // 'html5-plain-wordmark',
    // 'css3-plain-wordmark',
    // 'javascript-plain',
    'typescript-plain',
    'jquery-plain-wordmark',
    'sass-original',
    'materialui-plain'
  ]
}, {
  title: 'Back-end Development',
  icons: [
    'nodejs-plain',
    'express-original',
    // 'graphql-plain',
    'mongodb-plain-wordmark',
    'socketio-original',
    'discordjs-plain',
    'firebase-plain',
    'wordpress-plain'
  ]
}, {
  title: 'Languages / Libraries',
  icons: [
    'cplusplus-plain',
    'java-plain',
    'lua-plain-wordmark',
    'python-plain',
    'tensorflow-original'
  ]
}, {
  title: 'Design Tools',
  icons: [
    'figma-plain',
    'illustrator-plain',
    'photoshop-plain',
    'premierepro-plain'
  ]
}]

export default function About() {

  return (
    <Section title='About' className={styles.root}>
      <p className={styles.about}>
        Born and raised in Hong Kong, I am passionate about design and programming.
        My specialty are web-based websites and applications developed with React.js or Next.js,
        presented in simplisitic and minimalist designs with a focus on typography.
        I also have a keen interest in language, sociology, and gaming, 
        developing online games or adaptations of boardgames to promote these fields of study.
      </p>
      <div className={styles.specialties}>
        {specialties.map(({title, icons}) => 
          <div className={styles.category}>
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