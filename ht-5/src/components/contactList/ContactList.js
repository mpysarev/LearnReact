import React from 'react'
import ContactListItem from '../contactListItem/ContactListItem'
import './ContactList.css'

function ContactList({contacts, onSelect}) {
    return (
        <ul className="contact-list">
            {contacts.map((contact) => 
                <ContactListItem 
                    contact={contact} 
                    key={contact.id}
                    onSelect={onSelect}
                />)}
        </ul>
    )
}

export default ContactList
