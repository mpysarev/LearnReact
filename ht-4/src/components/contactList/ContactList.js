import React, { Component } from 'react';
import ContactListItem from '../contactListItem/ContactListItem'
import './ContactList.css';

export default class ContactList extends Component {

    render() {
        // console.log(this.props.contacts);
        return (
            <ul className="contact-list">
                {this.props.contacts.map(contact =>
                    <ContactListItem
                        contact={contact}
                        key={contact.id}
                        onSelect={this.props.onSelect}
                    ></ContactListItem>)}
            </ul>
        )
    }
}
