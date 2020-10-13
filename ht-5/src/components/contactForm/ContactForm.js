import React from 'react';
import {useState} from 'react';
import './ContactForm.css';

function ContactForm({contact, onSave, onDelete}) {

    const [inputs, setInputs] = useState(getInputsValue);
    
    const {name, surname, phone} = inputs;

    function getInputsValue() {
        return {...contact}
    }

    function onInputChange(e) {
        let refreshContact = {...inputs, [e.target.name]: e.target.value}
        setInputs(refreshContact)
    }

    // const [name, setName] = useState(contact.name);
    // const [surname, setSurname] = useState(contact.surname);
    // const [phone, setPhone] = useState(contact.phone);
    
    // let newContact = {
    //     name: name,
    //     surname: surname,
    //     phone: phone
    // }
    

    // function onNameChange(e) {
    //     setName(e.target.value);
    // }

    // function onSurnameChange(e) {
    //     setSurname(e.target.value);
    // }

    // function onPhoneChange(e) {
    //     setPhone(e.target.value);
    // }

    function onContactFormSubmit(e) {
        e.preventDefault();
        onSave({...inputs});
    }

    function onDeleteBtnClick() {
        onDelete(contact);
    }


    return (
        <form 
            className="contact-form"
            action="#"
            onSubmit={onContactFormSubmit}
        >
            <h2>Contact Details</h2>
            <label htmlFor="nameInput">Name</label>
            <input 
                type="text" 
                name="name"
                id="nameInput"
                value={name}
                onChange={onInputChange}
            />
            <br/>
            <label htmlFor="surnameInput">Surname</label>
            <input 
                type="text"
                name="surname"
                id="surnameInput"
                value={surname}
                onChange={onInputChange}
            />
            <br/>
            <label htmlFor="phoneInput">Phone</label>
            <input 
                type="text"
                name="phone"
                id="phoneInput"
                value={phone}
                onChange={onInputChange}
            />
            <br/>
            <div className="buttons">
            <button 
                type="submit"
                className="pull-right"
            >Save
            </button>
            {contact.id ? (
                <button 
                    className="pull-left"
                    type="button"
                    onClick={onDeleteBtnClick}
                >Delete</button>
                ) : ('')
            }

            </div>
        </form>
    )
}

export default ContactForm
