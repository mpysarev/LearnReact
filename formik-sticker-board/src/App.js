import React, {useEffect} from 'react'
import NoteList from './components/noteList/NoteList';
import {fetchNoteList, setNote} from './store/actions/notes';
import { connect } from 'react-redux';
import './App.css';


function App({fetchNoteList, setNote}) {

  
  useEffect(fetchNoteList, []);
    

  function onAddBtnClick() {
    setNote(EMPTY_NOTE);
    
    const modal = document.querySelector('.modal-bg');
    modal.style.display = "block";
  }
  
  return (
    <>
        <header className="app-header">
          Formik Sticker Board
        </header>
        <div className="sticker-board-header">
          <button onClick={onAddBtnClick}>Add sticker</button>
        </div>
        <div className="sticker-board">
          <NoteList /> 
        </div>
    </>
  );
}

const mapDispatchToProps = {
  fetchNoteList,
  setNote
}

const EMPTY_NOTE = {
  title: '',
  description: ''
}



export default connect(null, mapDispatchToProps)(App);
