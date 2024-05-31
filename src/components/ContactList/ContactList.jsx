import css from './ContactList.module.css'
import Contact from '../Contact/Contact'

export default function ContactList({ contacts, onClick }) {
  return (<ul className={css.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={css.contactItem}>
        <Contact contact={contact} onClick={onClick} />
        </li>
      ))}
    </ul>);
}
  

