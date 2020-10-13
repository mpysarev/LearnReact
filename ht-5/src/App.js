import React from 'react';
import {useState, useEffect} from 'react';
import ContactList from './components/contactList/ContactList';
import ContactForm from './components/contactForm/ContactForm';
import contactService from './contact-service';
import './App.css'

function App() {

  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(getEmptyContact);


  useEffect(() => {
    contactService.get('/')
    .then(({data}) => setContacts(data))
  }, [])

  function onContactSelect(contact) {
    setSelectedContact(contact);
  }

  function onAddBtnClick() {
    setSelectedContact(getEmptyContact);
  }

  function onContactSave(newContact) {

    if(selectedContact.id) {
      updateContact(newContact)
    } else {
      createContact(newContact)
    }
  }

  function onContactDelete(contact) {
    
    contactService.delete('/' + contact.id);

    let newList = contacts.filter(item => item.id !== contact.id)

    setContacts(newList);
    setSelectedContact(getEmptyContact)
  }

  function createContact(contact) {

    contactService.post('/', contact).then(({data}) => { 
      setContacts([...contacts, data])
    })
  }

  function updateContact(contact) {

    contactService.put('/' + selectedContact.id, contact).then(({data}) => {
      let newList = contacts.map((item) => item.id === data.id ? data : item);

      setContacts(newList);
    })
  }


  return (
    <>
    <header className="app-header">FN Component Contact List</header>
    <div className="contact-list-container">
      <ContactList 
        contacts={contacts}
        onSelect={onContactSelect}
      />
      <button className="add-btn" onClick={onAddBtnClick}>Add new</button>
    </div>
    <div className="contact-form-container">
      <ContactForm
        key={selectedContact.id}
        contact={selectedContact}
        onSave={onContactSave}
        onDelete={onContactDelete}
      />
    </div>
    </>
  )
}

function getEmptyContact() {
  return {
    name: '',
    surname: '',
    phone: ''
  }
}


export default App
