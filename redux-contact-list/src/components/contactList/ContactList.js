import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setContacts, setContact } from '../../store/actions';
import contactService from '../../contact-service';
import ContactListItem from '../contactListItem/ContactListItem';
import './ContactList.css';


function ContactList({contactList, setContacts, setContact}) {

    useEffect(() => {
        contactService.get('/').then(({data}) => setContacts(data))
    }, [])

    console.log(contactList);

    function onContactSelect(contact) {
        console.log(contact);
        setContact(contact);
    }

    return (
        <ul className="contact-list">
            {contactList.map((contact) => 
                <ContactListItem 
                    key={contact.id} 
                    contact={contact}
                    onSelect={onContactSelect}/>)
            }
        </ul>
    )
}


function mapStateToProps(state) {
    return {
        contactList: state.contactList
    }
}

const mapDispatchToProps = {
    setContacts,
    setContact
}


export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
