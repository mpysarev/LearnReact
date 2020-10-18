import React from 'react'
import {useState, useEffect} from 'react';
import NoteList from './components/noteList/NoteList'
import noteService from './note-service';
import './App.css';

function App() {

  const [noteList, setNoteList] = useState([]);
  
  useEffect(()=>{
    noteService.get('/')
    .then(({data}) => setNoteList(data))
  }, []);
  
  
  function addNote() {
    const newNote = {
      description: '',
    }

    noteService.post('/', newNote).then(({data}) => {
      setNoteList([...noteList, data])
    })
  }

  function deleteNote(note) {
    noteService.delete('/' + note.id);

    let newList = noteList.filter((item) => item.id !== note.id);
    setNoteList(newList);
  }

  function saveNote(note) {

    noteService.put('/' + note.id, note).then(({data})=> {
      let newNoteList = noteList.map((item) => item.id === data.id ? data : item)
      
      setNoteList(newNoteList);
    })

  }

  return (
    <>
    <header 
      className="app__header"
      style={appHeaderStyle}  
    >
      Note List v1.0

      <div 
        className="buttons"
        style={buttonsStyle}  
      >
        <button 
          className="add-btn"
          onClick={addNote}
          style={addBtnStyle}  
        >Add note</button>
      </div>
    </header>
    <div 
      className="notes__container"
      style={notesContainerStyle}
    >
      <NoteList 
        noteList={noteList}
        onNoteDelete={deleteNote}
        onNoteBlur={saveNote}
      />
    </div>
    </>
  )
}

const notesContainerStyle = {
  minHeight: "150vh",
  userSelect: "none",
  marginTop: "50px",
}

const appHeaderStyle = {
  backgroundColor: "#282c34",
  textAlign: "center",
  padding: "10px 0",
  font: "400 26px sans-serif",
  color: "white"
}

const addBtnStyle = {
  padding: "4px 7px",
  fontSize: "18px"
}

const buttonsStyle = {
  marginTop: "10px"
}

export default App
