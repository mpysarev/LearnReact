import api from '../../api';

export const SET_NOTE_LIST = 'SET_NOTE_LIST';
export const fetchNoteList = () => (dispatch) => {
    api.get().then(({data}) => dispatch({
        type: SET_NOTE_LIST,
        payload: data
    }))
}

export const SET_SELECTED_NOTE = 'GET_SELECTED_NOTE';
export const setNote = (payload) => (dispatch) => {
    dispatch({
        type: SET_SELECTED_NOTE,
        payload
    })
}

export const CREATE_NOTE = 'CREATE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const saveNote = (note) => (dispatch) => {
    note.id ? updateNote(note, dispatch) : createNote(note, dispatch);
}

const updateNote = (note, dispatch) => {
    api.put('/' + note.id, note).then(({data}) => dispatch({
        type: UPDATE_NOTE,
        payload: data
    }))
}

const createNote = (note, dispatch) => {
    api.post('', note).then(({data}) => dispatch({
        type: CREATE_NOTE,
        payload: data
    }))
}

export const DELETE_NOTE = 'DELETE_NOTE';
export const deleteNote = (id) => (dispatch) => {
    api.delete('' + id).then(() => dispatch({
        type: DELETE_NOTE,
        payload: id
    }))
}