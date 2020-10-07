import React, { Component } from 'react';
import ContactForm from '../../ht-4/src/components/contactForm/ContactForm';
import ContactList from '../../ht-4/src/components/contactList/ContactList';
import contactService from './contact-service';
import './App.css';

export default class App extends Component {

  state = {
    contacts: [],
    selectedContact: this.getEmpyContact()
  }

  getEmpyContact() {
    return {
      name: '',
      surname: '',
      phone: ''
    }
  }

  onContactSelect = (contact) => {
    this.setState({
      selectedContact: contact
    })
  }

  onAddBtnClick = () => {
    this.setState({
      selectedContact: this.getEmpyContact()
    })
  }

  onSave = (contact) => {
    if(contact.id) {
      this.updateContact(contact)
    } else {
      this.createContact(contact)
    }
  }

  createContact = (contact) => {
    contactService.post('/', contact).then(({data}) => {

      console.log(data, 'created');

      this.setState({
        contacts: [...this.state.contacts, data]
      })
    })
  }

  updateContact = (contact) => {

    contactService.put('/' + contact.id, contact).then(({data}) => {

      console.log(data, 'updated');

      this.setState((state) => {
        const contacts = state.contacts.map((el) => el.id === data.id ? data : el);

        return {
          contacts,
          selectedContact: contact
        }
      })
    })
  }

  onDelete = (contact) => {
    contactService.delete('/' + contact.id);
    
    this.setState({
      contacts: this.state.contacts.filter((item) => item.id !== contact.id),
      selectedContact: this.getEmpyContact()
    })    
  }

  componentDidMount() {
    contactService.get('/')
      .then(({data}) => this.setState({
        contacts: data
      }))
  }

  render() {
    return (
      <>
        <header className="app-header">Contact App 2.0</header>
        <div className="contact-list-container">
          <ContactList
            contacts={this.state.contacts}
            onSelect={this.onContactSelect}
          ></ContactList>
          <button className="add-btn" onClick={this.onAddBtnClick}>Add new</button>
        </div>
        <div className="contact-form-container">
          <ContactForm 
            key={this.state.selectedContact.id}
            contact={this.state.selectedContact}
            onSave={this.onSave}
            onDelete={this.onDelete}></ContactForm>
        </div>
      </>
    )
  }
}
