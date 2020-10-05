import React from 'react';
import './App.css';

import ContactList from './components/contactList/ContactList';
import ContactForm from './components/contactForm/ContactForm';

class App extends React.Component {
  state = {
    selectedContact: this.getEmptyContact(),
    contacts: [],
  };

  componentDidMount(){
    this.setState({
      contacts: this.restoreState()
    });
  }

  getEmptyContact() {
    return {
      age: '',
      name: '',
      surname: '',
      phone: '',
    };
  }

  onAddBtnClick = () => {
    this.setState({
      selectedContact: this.getEmptyContact(),
    });
  };

  onContactSelect = (contact) => {
    this.setState({
      selectedContact: contact,
    });
  };

  onDelete = (contact) => {
    this.setState((state) => {
      const contacts = state.contacts.filter((el) => el !== contact);

      this.saveState(contacts);
      return {
        contacts,
        selectedContact: this.getEmptyContact()
      };
    });
  };

  onSave = (contact) => {
    if (contact.id) {
      this.updateContact(contact);
    } else {
      this.createContact(contact);
    }

    this.saveState();
  };

  createContact(contact) {
    contact.id = Date.now();
    
    this.setState((state) => {
      const contacts = [...state.contacts, contact];

      this.saveState(contacts);
      return {
        contacts,
        selectedContact: contact,
      };
    });
  }

  updateContact(contact) {
    this.setState((state) => {
      const contacts = state.contacts.map((el) =>
        el.id === contact.id ? contact : el
      );

      this.saveState(contacts);
      return {
        contacts,
        selectedContact: contact,
      };
    });
  }

  saveState(contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  restoreState() {
    const data = localStorage.getItem('contacts');

    return data ? JSON.parse(data) : [];
  }

  render() {
    return (
      <>
        <header className="app-header">Contacts App</header>
        <div className="contact-list-container">
            <ContactList
                contacts={this.state.contacts}
                onSelect={this.onContactSelect}
            ></ContactList>
            <button
                onClick={this.onAddBtnClick}
                className="add-btn"
            >
                Add new
            </button>
        </div>
        <div className="contact-form-container">
            <ContactForm
                key={this.state.selectedContact.id}
                contact={this.state.selectedContact}
                onDelete={this.onDelete}
                onSave={this.onSave}
            ></ContactForm>
        </div>
      </>
    );
  }
}

export default App;
