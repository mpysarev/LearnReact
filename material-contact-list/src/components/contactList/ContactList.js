import React from 'react';
import { connect } from 'react-redux';
import { setContact } from '../../store/actions';
import ContactListItem from '../contactListItem/ContactListItem';
import List from '@material-ui/core/List';



function ContactList({contactList, setContact}) {


    function onContactSelect(currentContact) {
        console.log(currentContact);
        setContact(currentContact);
    }

    return (
        <List>
            {contactList.map(contact => 
                <ContactListItem 
                    key={contact.id}
                    contact={contact}
                    onSelect={onContactSelect}
                />)} 
        </List>
    )
}

function mapStateToProps({contactList}) {
    return {contactList}
}

const mapDispatchToProps = {
    setContact
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
