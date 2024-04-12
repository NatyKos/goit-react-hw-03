// import { useState } from 'react';
// import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import contacts from '../../contacts.json';

export default function App() {
  // const [contacts, setContacts] = useState(initsalContacts);
  // const addContact = newContact => {};
  return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm /> */}
      {/* <SearchBox /> */}
      <ContactList contacts={contacts} />
    </div>
  );
}
