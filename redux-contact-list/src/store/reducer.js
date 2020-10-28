import 
    { 
        SET_CONTACT_ACTION, 
        SAVE_CONTACT_ACTION, 
        DELETE_CONTACT_ACTION, 
        UPDATE_CONTACT_ACTION,
        SET_EMPTY_CONTACT_ACTION,
        SET_CONTACT_LIST_ACTION 
    } 
from './actions';



const initialState = {
    contactList: [],
    selectedContact: {
        id: '',
        name: '',
        surname: '',
        phone: ''
    }
};


export default function reducer(state = initialState, {type, payload}) {

    // console.log(type, payload);

    switch(type) {
        case SET_CONTACT_LIST_ACTION: return {
            ...state,
            contactList: payload 
        }
        case SET_EMPTY_CONTACT_ACTION: return {
            ...state,
            selectedContact: payload
        }
        case SET_CONTACT_ACTION: return {
            ...state,
            selectedContact: payload
        }
        case SAVE_CONTACT_ACTION: return {
            ...state,
            contactList: [...state.contactList, payload]
        }
        case DELETE_CONTACT_ACTION: return {
            ...state,
            contactList: state.contactList.filter((el) => el.id !== payload)
        }
        case UPDATE_CONTACT_ACTION: return {
            ...state,
            contactList: state.contactList.map((el) => el.id === payload.id ? payload : el)
        }

        default: return state
    }
} 