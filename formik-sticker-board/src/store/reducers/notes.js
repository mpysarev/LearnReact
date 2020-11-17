import {SET_NOTE_LIST, SET_SELECTED_NOTE, CREATE_NOTE, UPDATE_NOTE, DELETE_NOTE} from '../actions/notes';

const initialState = {
    list: [],
    selectedNote: {
        title: '',
        description: ''
    }
}

export default function(state = initialState, {type, payload}) {
    switch(type) {
        case SET_NOTE_LIST: return {
            ...state,
            list: payload
        }
        case SET_SELECTED_NOTE: return {
            ...state,
            selectedNote: payload
        }
        case CREATE_NOTE: return {
            ...state,
            list: [...state.list, payload]
        }
        case UPDATE_NOTE: return {
            ...state,
            list: state.list.map((note) => note.id === payload.id ? payload : note)
        }
        case DELETE_NOTE: return {
            ...state,
            list: state.list.filter((note) => note.id !== payload)
        }
        
        default: return state
    }
}