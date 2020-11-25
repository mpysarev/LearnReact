import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';


function ContactListItem({contact, onSelect}) {
    return (
        <ListItem 
            onClick={()=> onSelect(contact)}
            button
        >
            <ListItemAvatar>
                <Avatar />
            </ListItemAvatar>
            <ListItemText>
                {contact.name} {contact.surname}
            </ListItemText>            
        </ListItem>
        
    )
}

export default ContactListItem
