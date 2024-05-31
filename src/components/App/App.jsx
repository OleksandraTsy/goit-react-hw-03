import { useState, useEffect } from "react";
import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";

const initialData = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

export default function App() {
  const storageContacts = localStorage.getItem("savedContacts");

  const [contacts, setContacts] = useState(
    storageContacts !== null ? JSON.parse(storageContacts) : initialData
  );
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("savedContacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (newContact) => {
    setContacts((renderedContacts) => {
      return [...renderedContacts, newContact];
    });
  };

  const handleDelete = (contactId) => {
    setContacts((renderedContacts) => {
      return renderedContacts.filter(({id}) => id !== contactId)
    });
  };

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList onClick={handleDelete} contacts={filteredContacts} />
    </div>
  );
}