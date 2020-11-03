import {SET_TODOS, 
        ADD_TODO, 
        DELETE_TODO, 
        TOGGLE_TODO} from './actions';

const initialState = {
    todoList: []
}

export default function reducer(state = initialState, {type, payload}) {

    switch(type) {
        case SET_TODOS: return {
            ...state,
            todoList: payload
        }
        case ADD_TODO: return {
            ...state,
            todoList: [...state.todoList, payload]
        }
        case DELETE_TODO: return {
            ...state,
            todoList: state.todoList.filter((el) => el.id !== payload)
        }
        case TOGGLE_TODO: return {
            ...state,
            todoList: state.todoList.map((el) => el.id === payload.id ? payload : el)
        }
        default: return state;
    }
}