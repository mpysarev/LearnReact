import React from 'react';
import { connect } from 'react-redux';
import UserListItem from './UserListItem';


function UserList({userList}) {

    return (
        <ul style={userListStyle}>
            {userList.map((user) => 
            <UserListItem 
                key={user.id} 
                user={user}
            />)}
        </ul>
    )
}

const userListStyle = {
    padding: '0px'
}

const mapStateToProps = ({users: {userList}}) => {
    return {userList};
}


export default connect(mapStateToProps)(UserList)
