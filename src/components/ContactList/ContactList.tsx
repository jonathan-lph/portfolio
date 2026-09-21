import { Fragment } from 'react'
import styles from './ContactList.module.css'

const CONTACTS = [
  { label: 'EMAIL', value: 'jonathan.lph98@gmail.com', href: 'mailto:jonathan.lph98@gmail.com' },
  { label: 'LINKEDIN', value: 'jonathan-lph', href: 'https://linkedin.com/in/jonathan-lph' },
  { label: 'GITHUB', value: 'jonathan-lph', href: 'https://github.com/jonathan-lph' },
]

function ContactList() {
  return (
    <div className={styles.list}>
      <dl className={styles.grid}>
        {CONTACTS.map((contact) => (
          <Fragment key={contact.label}>
            <dt className={styles.label}>{contact.label}</dt>
            <dd className={styles.value}>
              <a href={contact.href}>{contact.value}</a>
            </dd>
          </Fragment>
        ))}
      </dl>
    </div>
  )
}

export default ContactList
