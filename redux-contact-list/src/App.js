import React from 'react';
import ContactForm from './components/contactForm/ContactForm';
import ContactList from './components/contactList/ContactList';
import { connect } from 'react-redux';
import { resetForm } from './store/actions'

import './App.css';

function App({resetForm}) {

  function onAddBtnClick() {
    resetForm();
  }

  return (
    <>
      <header className="app-header">Redux Contact List</header>

      <div className="contact-list-container">
        <ContactList />

        <button 
          className="add-btn"
          onClick={onAddBtnClick}
        >Add new</button>
      </div>

      <div className="contact-form-container">
      <ContactForm/>

      </div>
    </>
  )
}

function mapStateToProps(state) {
  return state
}

const mapDispatchToProps = {
  resetForm
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
