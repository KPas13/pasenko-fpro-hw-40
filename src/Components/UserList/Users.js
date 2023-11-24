import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './user-list.css'


const apiUrl = 'https://jsonplaceholder.typicode.com/users';

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(apiUrl).then(responce => responce.json()).then(userData => setUsers(userData));
    }, []);

    return (
        <div className='main-container'>
            <h1 className='title'>Users</h1>
            <ul className='users-list'>
                {users.map(user => (
                    <li className='users-item' key={user.id}>
                        {user.name}
                        <Link className='link' to={`/albums/${user.id}`}>Albums</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}