import React, { Component } from 'react';

import './ContactForm.css';

export class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...props.contact
        };
    }

    onDeleteBtnClick = () => {
        this.props.onDelete(this.props.contact);
    };

    onContactFormSubmit = e => {
        e.preventDefault();
        this.props.onSave(this.state);
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        return (
            <form
                action="#"
                className="contact-form"
                onSubmit={this.onContactFormSubmit}
            >
                <h2>Contact Details</h2>
                <label htmlFor="nameInput">Name</label>
                <input
                    type="text"
                    name="name"
                    id="nameInput"
                    value={this.state.name}
                    onChange={this.onChange}
                />
                <br />

                <label htmlFor="surnameInput">Surname</label>
                <input
                    type="text"
                    name="surname"
                    id="surnameInput"
                    value={this.state.surname}
                    onChange={this.onChange}
                />
                <br />

                <label htmlFor="ageInput">Age</label>
                <input
                    type="text"
                    name="age"
                    id="ageInput"
                    value={this.state.age}
                    onChange={this.onChange}
                />
                <br />

                <label htmlFor="phoneInput">Phone</label>
                <input
                    type="text"
                    name="phone"
                    id="phoneInput"
                    value={this.state.phone}
                    onChange={this.onChange}
                />

                <div className="buttons">
                    <button type="submit" className="pull-right">
                        Save
                    </button>
                    {this.state.id ? (
                        <button
                            type="button"
                            className="pull-left"
                            onClick={this.onDeleteBtnClick}
                        >
                            Delete
                        </button>
                    ) : (
                        ''
                    )}
                </div>
            </form>
        );
    }
}

export default ContactForm;