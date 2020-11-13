import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
import {deleteUser, saveUser} from '../../store/actions/users';

const EMPTY_USER ={
    name: "",
    username: "",
}

function UserForm({currentUser, saveUser, deleteUser}) {


    const [user, setUser] = useState(currentUser);

    useEffect(()=>setUser(currentUser), [currentUser]);
    
    const {goBack} = useHistory();


    function onInputChange(e) {
        setUser({...user, [e.target.name]: e.target.value})
    }

    function onFormSubmit(e) {
        e.preventDefault();
        console.log(user);

        saveUser(user);
        goBack();
    }

    function onDeleteBtnClick() {
        deleteUser(user.id);
        goBack();
    }


    return (
        <form 
            className="user-form"
            action="#"
            onSubmit={onFormSubmit}
        >
            <h2>User details</h2>

            <label htmlFor="nameInput">Name:</label>
            <input
                type="text"
                name="name"
                value={user.name}
                id="nameInput"
                style={inputStyle}
                onChange={onInputChange}
            /> <br/>
            <label htmlFor="usernameInput">Username:</label>
            <input
                type="text"
                name="username"
                value={user.username} 
                id="usernameInput"
                style={inputStyle}
                onChange={onInputChange}
            /> <br/>    

            <div className="buttons">
                <button 
                    type="submit"
                    className="pull-right"
                >Save</button>

                {currentUser.id ? (
                    <button
                        style={buttonStyle} 
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

const inputStyle = {
    marginBottom: '10px',
    marginLeft: '10px',
    display: 'inline-block',
    width: '200px'
}

const buttonStyle = {
    marginLeft: '15px'
}

const mapStateToProps = ({users: {userList}}, {match: {params: {id}}}) => {

    const currentUser = userList.find(user => user.id == id);

    return {currentUser: currentUser ? currentUser : EMPTY_USER};
}

const mapDispatchToProps = {
    saveUser,
    deleteUser
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserForm))
