import {SET_CONTACT_LIST, 
        SET_EMPTY_CONTACT,
        SET_SELECTED_CONTACT,
        CREATE_CONTACT,
        UPDATE_CONTACT,
        DELETE_CONTACT } from './actions';

const initialState = {
    contactList: [],
    selectedContact: {
        name: '',
        surname: '',
        phone: ''
    }
};

export default function reducer(state = initialState, {type, payload}) {

    console.log(payload);

    switch(type) {
        case SET_CONTACT_LIST: return {
            ...state,
            contactList: payload
        }
        case SET_EMPTY_CONTACT: return {
            ...state,
            selectedContact: payload
        }
        case SET_SELECTED_CONTACT: return {
            ...state,
            selectedContact: payload
        }
        case CREATE_CONTACT: return {
            ...state,
            contactList: [...state.contactList, payload]
        }
        case UPDATE_CONTACT: return {
            ...state,
            contactList: state.contactList.map((contact) => 
                contact.id !== payload.id ? contact : payload)
        }
        case DELETE_CONTACT: return {
            ...state,
            contactList: state.contactList.filter((contact) => contact.id !== payload)
        }

        default: return state
    }
}
