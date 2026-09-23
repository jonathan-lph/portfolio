import BackToTop from '../../components/BackToTop/BackToTop'
import ContactList from '../../components/ContactList/ContactList'
import Container from '../../components/Container/Container'
import Divider from '../../components/Divider/Divider'
import ResumeButton from '../../components/ResumeButton/ResumeButton'
import SectionLabel from '../../components/SectionLabel/SectionLabel'
import styles from './Contact.module.css'

function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className={styles.contact}>
      <Container className={styles.row}>
        <div className={styles.illustration}>
          <SectionLabel id="contact-heading" label="contact" />
        </div>
        <div className={styles.details}>
          <ContactList />
          <ResumeButton />
        </div>
      </Container>
      <Container className={styles.end}>
        <BackToTop />
      </Container>
      <Divider />
    </section>
  )
}

export default Contact
