import React from 'react'

function ContactListItem({contact, onSelect}) {

    return (
        <li onClick={()=> onSelect(contact)}>
            {contact.name} {contact.surname}
        </li>
    )
}

export default ContactListItem
