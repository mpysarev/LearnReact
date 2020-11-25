import api from '../api';

export const SET_CONTACT_LIST = 'SET_CONTACT_LIST';
export const fetchContacts = () => (dispatch) => {
    api.get().then(({data}) => dispatch({
        type: SET_CONTACT_LIST,
        payload: data
    }))
}

export const SET_EMPTY_CONTACT = 'SET_EMPTY_CONTACT';
export function resetForm() {
    return {
        type: SET_EMPTY_CONTACT,
        payload: {
            name: '',
            surname: '',
            phone: ''
        }
    }
}

export const SET_SELECTED_CONTACT = 'SET_SELECTED_CONTACT';
export function setContact(payload) {
    return {
        type: SET_SELECTED_CONTACT,
        payload
    }
}

export const DELETE_CONTACT = 'DELETE_CONTACT';
export const deleteContact = (id) => (dispatch) => {
    console.log(id);
    
    api.delete('/' + id).then(() => dispatch({
        type: DELETE_CONTACT,
        payload: id
    }))
} 

export const CREATE_CONTACT = 'CREATE_CONTACT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const saveContact = (contact) => (dispatch) => {
    contact.id ? updateContact(contact, dispatch) : createContact(contact, dispatch);
}

const updateContact = (contact, dispatch) => {
    api.put(`/${contact.id}`, contact).then(({data}) => dispatch({
        type: UPDATE_CONTACT,
        payload: data
    }))
}

const createContact = (contact, dispatch) => {
    api.post('', contact).then(({data}) => dispatch({
        type: CREATE_CONTACT,
        payload: data
    }))
}

