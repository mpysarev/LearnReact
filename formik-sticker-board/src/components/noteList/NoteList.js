import React from 'react'
import NoteListItem from '../noteListItem/NoteListItem';
import {connect} from 'react-redux';
import Modal from '../modal/Modal';
import './NoteList.css';
import '../modal/Modal.css';

function NoteList({list}) {

    
    return (
        <>
            {list.map(note => <NoteListItem 
                key={note.id} 
                note={note} 
            />)}
            <Modal />
        </>
    )
}

const mapStateToProps = ({notes: {list}}) => {
    console.log(list);

    return {list};
}


export default connect(mapStateToProps)(NoteList)
