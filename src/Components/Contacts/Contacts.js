import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";

import './contacts.css';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

export default function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setContacts(data))
            .catch((error) => console.error("Error fetching contacts:", error));
    }, []);

    const deleteContact = (id) => {
        const updatedContacts = contacts.filter((contact) => contact.id !== id);
        setContacts(updatedContacts);
    };

    const openContactForm = () => {
        setShowForm(true);
    };

    return (
        <div className='main-container'>
            <div className='contacts-div'>
                <h1 className='title'>Contacts</h1>
                <table className='contacts-table'>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Phone Number</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {contacts.map((contact) => (
                        <tr key={contact.id}>
                            <td>{contact.name}</td>
                            <td>{contact.username}</td>
                            <td>{contact.phone}</td>
                            <td>
                                <button onClick={() => deleteContact(contact.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <button className='addBtn' onClick={openContactForm}>
                    Add contact
                </button>
            </div>

            {showForm && (
                <Formik
                    initialValues={{ name: '', username: '', phone: '' }}
                    onSubmit={(values, { resetForm }) => {
                        setContacts([...contacts, { ...values, id: contacts.length + 1 }]);
                        resetForm();
                        setShowForm(false);
                    }}
                >
                    <Form className='form-container'>
                        <div className='form-field'>
                            <h3>Name:</h3>
                            <Field type='text' id='name' name='name'/>
                        </div>
                        <div className='form-field'>
                            <h3>Surname:</h3>
                            <Field type='text' id='username' name='username'/>
                        </div>
                        <div className='form-field'>
                            <h3>Phone:</h3>
                            <Field type='tel' id='phone' name='phone'/>
                        </div>
                        <div className='form-btns'>
                            <button className='add-btn' type='submit'>Save</button>
                            <button type='button' onClick={() => setShowForm(false)}>Close</button>
                        </div>
                    </Form>
                </Formik>
            )}
        </div>
    );
}

