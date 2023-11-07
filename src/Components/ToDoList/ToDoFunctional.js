import React, { useState } from 'react';
import './todostyle.css';

function ToDoFunctional() {

    const [todoItem, setToDo] = useState([
        {text: 'Buy milk', status: true },
        {text: 'Write some code', status: false},
        {text: 'Read a book', status: true}
    ]);
    const [todoText, setToDoText] = useState('');

    const addToDo = () => {
        if (todoText.trim() !== '') {
            const newToDoList = [...todoItem, { text: todoText, status: false }];
            setToDo(newToDoList);
            setToDoText('');
        }
    };

    const deleteToDo = (index) => {
        const updatedToDoList = [...todoItem];
        updatedToDoList.splice(index, 1);
        setToDo(updatedToDoList);
    };

    const changeToDoState = (index) => {
        const updatedToDoList = [...todoItem];
        const todoToNewList = updatedToDoList[index];
        if (todoToNewList) {
            todoToNewList.status = !todoToNewList.status;
            setToDo(updatedToDoList);
        }
    };

    return (
        <div className='main-container'>
            <div className='input-container'>
                <input
                    type='text'
                    value={todoText}
                    onChange={(event) => setToDoText(event.target.value)}
                />
                <button onClick={addToDo}>Add task</button>
            </div>
            <div className='todo-list'>
                {todoItem.map((item, index) => (
                    <div className='todo-item' key={index}>
                        <input
                            type='checkbox'
                            checked={item.status}
                            onChange={() => changeToDoState(index)}
                        />
                        <span style={{ textDecoration: item.status ? 'line-through' : 'none' }}>{item.text}</span>
                        <span className='cross' onClick={() => deleteToDo(index)}>❌</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ToDoFunctional;
