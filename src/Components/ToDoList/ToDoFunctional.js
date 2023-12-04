import React, { useState, useEffect } from 'react';
import './todostyle.css';

import { useSelector, useDispatch } from 'react-redux';

import { addTodo, deleteTodo, updateTodo, fetchTodos } from '../../store/slices/todoSlice';

function ToDoFunctional() {
    const [todoText, setToDoText] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todoArray);

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    const addNewToDo = () => {
        if (todoText.trim() !== '') {
            dispatch(addTodo({ text: todoText, complete: false }));
            setToDoText('');
        } else {
            console.log('Todo text cannot be empty');
        }
    };

    const removeTodo = (index) => {
        dispatch(deleteTodo(index));
    };

    const changeToDoState = (index) => {
        dispatch(updateTodo(index));
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
                {todos.map((item, index) => (
                    <div className='todo-item' key={index}>
                        <input
                            type='checkbox'
                            checked={item.status}
                            onChange={() => changeToDoState(index)}
                        />
                        <span style={{ textDecoration: item.status ? 'line-through' : 'none' }}>
                            {item.title}
                        </span>
                        <span className='cross' onClick={() => removeTodo(index)}>
                            ❌
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ToDoFunctional;
