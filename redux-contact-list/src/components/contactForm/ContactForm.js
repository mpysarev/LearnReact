import React from 'react';
import {connect} from 'react-redux';
import contactService from '../../contact-service';
import {    
            setContact, 
            saveContact, 
            deleteContact, 
            resetForm, 
            updateContact
        } 
from '../../store/actions';

import './ContactForm.css';


function ContactForm({selectedContact, 
                      setContact, 
                      saveContact, 
                      deleteContact, 
                      resetForm, 
                      updateContact}) {

    function onInputChange(e) {
        let refreshContact = {...selectedContact, [e.target.name]: e.target.value}
        setContact(refreshContact)
    }

    function onFormSubmit(e) {
        e.preventDefault();
        onContactSave({...selectedContact});
        
    }

    function onContactSave(newContact) {
        if(selectedContact.id) {
            updateCurrentContact(newContact);
        } else {
            createContact(newContact);
            resetForm();
        }

    }

    function createContact (contact) {
        contactService.post('/', contact).then(({data}) => saveContact(data));
    }

    function updateCurrentContact(contact) {
        contactService.put('/' + selectedContact.id, contact).then(({data}) => updateContact(data));
    }

    function onDeleteBtnClick() {
        contactService.delete('/' + selectedContact.id);

        deleteContact(selectedContact.id);
        resetForm();
    }

    return (
        <form 
            className="contact-form"
            action="#"
            onSubmit={onFormSubmit}
        >
            <h2>Contact details</h2>

            <label htmlFor="nameInput">Name</label>
            <input
                type="text"
                name="name"
                value={selectedContact.name} 
                id="nameInput"
                onChange={onInputChange}
            /> <br/>
            <label htmlFor="nameInput">Surname</label>
            <input
                type="text"
                name="surname"
                value={selectedContact.surname} 
                id="surnameInput"
                onChange={onInputChange}
            /> <br/>    
            <label htmlFor="nameInput">Phone</label>
            <input
                type="text"
                name="phone"
                value={selectedContact.phone} 
                id="phoneInput"
                onChange={onInputChange}
            /> <br/>

            <div className="buttons">
                <button 
                    type="submit"
                    className="pull-right"
                >Save</button>

                {selectedContact.id ? (
                    <button 
                        type="button"
                        className="pull-left"
                        onClick={onDeleteBtnClick}
                    >Delete</button> 
                    ) : ('')
                }
            </div>    
    
        </form>
    )
}

function mapStateToProps(state) {
    return {
        selectedContact: state.selectedContact
    }
}

const mapDispatchToProps = {
    setContact,
    saveContact,
    deleteContact,
    resetForm,
    updateContact
}


export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)
