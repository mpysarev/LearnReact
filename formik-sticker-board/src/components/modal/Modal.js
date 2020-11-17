import React, { useState, useEffect } from 'react'
import {Formik, Form} from 'formik';
import { connect } from 'react-redux';
import { saveNote } from '../../store/actions/notes';
import './Modal.css'

const EMPTY_NOTE = {
    title: '',
    description: ''
}


function Modal({selectedNote, saveNote}) {

    const [note, setNote] = useState(selectedNote);

    useEffect(() => setNote(selectedNote), [selectedNote]);

    
    function handleInput (e) {
        setNote({
            ...note,
            [e.target.name] : e.target.value
        });
    } 
    
    
    function onFormSubmit() {

        const modal = document.querySelector('.modal-bg');

        console.log('submitting', note);

        saveNote(note);
        modal.style.display = "none";
    }

    function onCancelClick() {
        const modal = document.querySelector('.modal-bg');

        setNote(EMPTY_NOTE);
        modal.style.display = "none";
    }

    function renderModalForm(props) {

        console.log(props.values);

        return (
            <div className="modal-bg">
            <Form className="modal-form">
                <div className="modal-form-container">
                    <h2>Please enter/update data</h2>
                    <label htmlFor="noteTitle">Note title</label>
                    <input 
                        type="text" 
                        name="title" 
                        id="noteTitle"
                        className="titleInput"
                        value={note.title}
                        onChange={handleInput}
                    />
                    <label htmlFor="noteDescription">Note content</label>
                    <textarea 
                        type="text" 
                        name="description" 
                        id="noteDescription"
                        className="descriptionInput"
                        maxLength="255"
                        value={note.description}
                        onChange={handleInput}
                    />
                    <div className="buttons">
                        <button 
                            type="submit" 
                            className="button"
                        >Save</button>
                        <button 
                            type="button" 
                            className="button"
                            onClick={onCancelClick}
                        >Cancel</button>
                    </div>
                </div>
            </Form>
            </div>
        )
    }

    return (
            <Formik 
                initialValues = {note}
                onSubmit={onFormSubmit}
            >
                {renderModalForm}
            </Formik>
    )
}

function mapStateToProps({notes: {selectedNote}}) {
    const currentNote = {...selectedNote};
    return {selectedNote: currentNote ? currentNote : EMPTY_NOTE}
}

const mapDispatchToProps = {
    saveNote
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
