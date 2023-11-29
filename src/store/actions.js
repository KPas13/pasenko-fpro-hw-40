export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const STATUS_TODO = 'STATUS_TODO';

export const addTodo = text => ({
    type: ADD_TODO,
    payload: {text},
});

export const deleteToDo = index => ({
    type: DELETE_TODO,
    payload: {index}
});

export const statusToDo = index => ({
    type: STATUS_TODO,
    payload: {index}
});