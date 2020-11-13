import {SET_USER_LIST, 
        UPDATE_USER, 
        CREATE_USER, 
        DELETE_USER} from '../actions/users';

const initialState = {
    userList: [],
}

export default function(state = initialState, {type, payload}) {
    switch(type) {
        case SET_USER_LIST: return {
            ...state,
            userList: payload
        }
        case CREATE_USER: return {
            ...state,
            userList: [...state.userList, payload]
        }
        case UPDATE_USER: return {
            ...state,
            userList: state.userList.map(
                user => user.id !== payload.id ? user : payload
            )
        }
        case DELETE_USER: return {
            ...state,
            userList: state.userList.filter((user) => user.id !== payload)
        }

        default: return state;
    }
}