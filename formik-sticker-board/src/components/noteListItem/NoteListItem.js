import React from 'react';
import { connect } from 'react-redux';
import { setNote, deleteNote } from '../../store/actions/notes';



function NoteListItem({note, setNote, deleteNote}) {

    function onDeleteBtnClick () {
        deleteNote(note.id)
    }

    function onEditClick() {

        
        setNote(note);
        
        const modal = document.querySelector('.modal-bg');
        modal.style.display = "block";
    }

    return (
        <div className="note">
            <div className="note-header">
                <span>{note.title}</span>
                <div>
                <span onClick={onEditClick} className="note-edit">[Edit]</span>
                <button 
                    onClick={onDeleteBtnClick} 
                    className="deleteBtn"
                >X</button>
                </div>
            </div>

            <div
                className="note-description" 
                name='description'
            >
                {note.description}        
            </div>

        </div>
    )
}

const mapDispatchToProps = {
    setNote,
    deleteNote
}

export default connect(null, mapDispatchToProps)(NoteListItem)
