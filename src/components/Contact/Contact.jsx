
import { ImUser, ImPhone } from "react-icons/im";
import css from './Contact.module.css';

export default function Contact({ contact, onClick}) {
  return (
      <div className={css.listItem}>
          <div className={css.box}>
            <span><ImUser />{contact.name}</span>
            <span><ImPhone />{contact.number}</span>
          </div>
          <button type='button' className={css.btn} onClick={() => {onClick(contact.id)}}>Delete</button></div>
  )
}
