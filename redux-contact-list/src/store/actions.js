export const SET_EMPTY_CONTACT_ACTION = 'SET_EMPTY_CONTACT_ACTION';
export const SET_CONTACT_LIST_ACTION = 'SET_CONTACT_LIST_ACTION';
export const SET_CONTACT_ACTION = 'SELECT_CONTACT_ACTION';
export const SAVE_CONTACT_ACTION = 'SAVE_CONTACT_ACTION';
export const UPDATE_CONTACT_ACTION = 'UPDATE_CONTACT_ACTION';
export const DELETE_CONTACT_ACTION = 'DELETE_CONTACT_ACTION';


export function setContacts(payload) {
    return {
        type: SET_CONTACT_LIST_ACTION,
        payload
    };
}

export function resetForm() {
    return {
        type: SET_EMPTY_CONTACT_ACTION,
        payload: {
            name: '',
            surname: '',
            phone: ''
        }
    }
}

export function setContact(payload) {
    return {
        type: SET_CONTACT_ACTION,
        payload
    }
}

export function saveContact(payload) {
    console.log(payload);
    return {
        type: SAVE_CONTACT_ACTION,
        payload
    }
}

export function updateContact(payload) {
    return {
        type: UPDATE_CONTACT_ACTION,
        payload
    }
}

export function deleteContact(payload) {
    console.log(payload)
    return {
        type: DELETE_CONTACT_ACTION,
        payload
    }
}

