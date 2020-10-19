import React from 'react'
import {useState} from 'react';

function NoteListItem({note, deleteNote, saveNote}) {

    const [sticker, setSticker] = useState(getNoteContent);
    const {description} = sticker;


    function getNoteContent() {
        return {...note}
    }

    function onDeleteBtnClick(e) {
        e.stopPropagation();
        
        deleteNote(note);
    }

    function onContentChange(e) {
        let newSticker = {...sticker, [e.target.name]: e.target.value};
        
        setSticker(newSticker);
    }

    function onNoteBlur () {
        saveNote(sticker);
    }

    return (
        <div style={noteContainerStyle}>

            <div style={noteHeaderStyle}>
                <span>{note.id}</span>
                <button onClick={onDeleteBtnClick}>X</button>
            </div>

            <textarea 
                name='description'
                value={description}
                style={noteContentStyle}
                onChange={onContentChange}
                onBlur={onNoteBlur}
            >         
            </textarea>
        </div>
    )
}

const noteContentStyle = {
    width: "190px",
    height: "165px",
    resize: "none",
    padding: "5px"
}

const noteContainerStyle = {
    width: "200px",
    height: "200px",
    display: "inline-block",
    border: "1px solid black",
    margin: "0px 0px 10px 20px",
    padding: "4px",
    backgroundColor: "lightgrey"
}


const noteHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "5px"
}


export default NoteListItem
