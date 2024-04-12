import { useState } from 'react';
// import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import css from './App.module.css';
import initialContacts from '../../contacts.json';

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);
  // const addContact = newContact => {};
  const [search, setSearch] = useState('');

  const searchResult = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      {/* <ContactForm /> */}
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={searchResult} />
    </div>
  );
}
