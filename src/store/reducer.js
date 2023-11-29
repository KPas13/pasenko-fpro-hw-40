import {ADD_TODO, DELETE_TODO, STATUS_TODO} from "./actions";

const  initialState = {
    todo: [{text: 'Say \'Hello there\' at least 100 times', status: false},
        {text: 'Stay on the high ground', status: false }]
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return{...state, todo: [...state.todo, {text: action.payload.text}]};
        case 'DELETE_TODO':
            return{
                ...state,
                todo: state.todo.filter((todo, index) => index !== action.payload.index),
            }
        case 'STATUS_TODO':
            return {
                ...state,
                todo: state.todo.map((todo, index) =>
                    index === action.payload.index ? { ...todo, status: !todo.status } : todo)
            }
        default:
            return initialState;
    }
}

export default todoReducer;