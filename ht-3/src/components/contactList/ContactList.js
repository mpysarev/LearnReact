import React, { Component } from 'react';
import './ContactList.css';

import ContactListItem from '../contactListItem/ContactListItem';

export class ContactList extends Component {
    render() {
        return (
            <ul className="contacts-list">
                {this.props.contacts.map(contact => (
                    <ContactListItem
                        contact={contact}
                        key={contact.id}
                        onSelect={this.props.onSelect}
                    ></ContactListItem>
                ))}
            </ul>
        );
    }
}

export default ContactList;