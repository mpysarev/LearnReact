import api from '../../api';

export const SET_USER_LIST = 'SET_USER_LIST';
export const fetchUsers = () => (dispatch) => {
    api.get('users').then(({data}) => dispatch({
        type: SET_USER_LIST,
        payload: data
    }))
}

export const UPDATE_USER = 'UPDATE_USER';
export const CREATE_USER = 'CREATE_USER';
export const saveUser = (user) => (dispatch) => {
    user.id ? updateUser(user, dispatch) : addUser(user, dispatch);
}

const updateUser = (user, dispatch) => {
    api.put(`users/${user.id}`, user).then(({data}) => dispatch({
        type: UPDATE_USER, 
        payload: data
    }))
}

const addUser = (user, dispatch) => {
    api.post(`users`, user).then(({data}) => dispatch({
        type: CREATE_USER,
        payload: data
    }))
}

export const DELETE_USER = 'DELETE_USER';
export const deleteUser = (id) => (dispatch) => {
    api.delete(`users/${id}`).then(() => dispatch({
        type: DELETE_USER,
        payload: id
    }))
}