import React, { useState,useEffect } from "react";
import { nanoid } from "nanoid";
import ContactFilter from "./ContactFilter/ContactFilter";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";

const useLocalStorage = (key, defaultValue) => {
  const [storage, setStorage] = useState(
    () => window.JSON.parse(localStorage.getItem(key)) ?? defaultValue
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storage));
  }, [storage, key]);

  return [storage, setStorage];
};

export const App = () => {
  const [contacts,setContacts] = useLocalStorage('contacts', []);

  const [filter,setFilter] = useState('');

  const onSubmitHandler = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const existentName = contacts.find(user => user.name === contact.name);
    if (existentName) {
      alert(`${contact.name} is already in contacts`);
    } else {
      setContacts(prevContacts => [contact, ...prevContacts]);
    }
  };

  const handleChange = event => {
    const {value} = event.target;
    setFilter(value);
  };

  const handleDelete = id => {
    const newContactList = contacts.filter(contact => contact.id !== id);
    setContacts(newContactList);
  };

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  

  return (
    <div
      style={{
        height: '100vh',       
        fontSize: 40,
        color: '#010101',
        margin: 'auto',
        width: 400
      }}
    >
      <h2 
        style={{color: '#fff'}}>Phonebook</h2>
      <ContactForm onSubmit={onSubmitHandler}/>
      <ContactFilter value={filter} onChange={handleChange}/>
      <ContactList contacts={filterContacts} onDelete={handleDelete}/>      
    </div>
  );
};
