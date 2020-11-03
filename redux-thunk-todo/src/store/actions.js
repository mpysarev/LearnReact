import todoService from '../todo-service';


export const SET_TODOS = 'SET_TODOS';
const setTodos = (payload) => ({type: SET_TODOS, payload});

export const ADD_TODO = 'ADD_TODO';
const addTask = (payload) => ({type: ADD_TODO, payload});

export const DELETE_TODO = 'DELETE_TODO';
const deleteTask = (payload) => ({type: DELETE_TODO, payload});

export const TOGGLE_TODO = 'TOGGLE_TODO';
const toggleTask = (payload) => ({type: TOGGLE_TODO, payload})


export const getTodos = () => {
    return function(dispatch) {
        todoService.get('/').then(({data}) => {
            dispatch(setTodos(data));
        })
    }
}

export const createTodo = (todo) => {
    return function(dispatch) {
        todoService.post('/', todo).then(({data}) => {
            dispatch(addTask(data));
        })
    }
}

export const deleteTodo = (id) => {
    return function(dispatch) {
        todoService.delete('/' + id);
        dispatch(deleteTask(id));
    }
}

export const toggleTodo = (todo) => {
    return function(dispatch) {
        todoService.put('/' + todo.id, todo).then(({data}) => {
            dispatch(toggleTask(data))
        });
    }
}

