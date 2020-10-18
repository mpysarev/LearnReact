import React from 'react'
import NoteListItem from '../noteListItem/NoteListItem'

function NoteList({noteList, onNoteDelete, onNoteBlur}) {
    return (
        <div>
            {noteList.map((note) => 
                <NoteListItem 
                    key={note.id} 
                    note={note}
                    deleteNote={onNoteDelete}
                    saveNote={onNoteBlur}
                />
            )}
        </div>
    )
}

export default NoteList
