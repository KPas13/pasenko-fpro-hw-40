import React, { useState } from 'react';
import './todostyle.css';

import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteToDo, statusToDo } from "../../store/actions";

function ToDoFunctional() {

    const [todoText, setToDoText] = useState('');

    const dispatch = useDispatch();

    const todoFromStore = useSelector(state => state.todo);
    const addNewToDo = () => {
        if (todoText.trim() !== '') {
            dispatch(addTodo(todoText));
            setToDoText('');
        }
    };

    const removeTodo = (index) => {
        dispatch(deleteToDo(index));
    };

    const changeToDoState = (index) => {
        dispatch(statusToDo(index));
    };

    return (
        <div className='main-container'>
            <div className='input-container'>
                <input
                    type='text'
                    value={todoText}
                    onChange={(event) => setToDoText(event.target.value)}
                />
                <button onClick={addNewToDo}>Add task</button>
            </div>
            <div className='todo-list'>
                {todoFromStore.map((item, index) => (
                    <div className='todo-item' key={index}>
                        <input
                            type='checkbox'
                            checked={item.status}
                            onChange={() => changeToDoState(index)}
                        />
                        <span style={{ textDecoration: item.status ? 'line-through' : 'none' }}>{item.text}</span>
                        <span className='cross' onClick={() => removeTodo(index)}>❌</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ToDoFunctional;
