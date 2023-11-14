import {Form, Field, Formik, ErrorMessage} from 'formik';
import {useState} from "react";

import './form-component.css';

export default function FormComponent() {
    const [regStatus, setRegStatus] = useState(false);

    const registerFunc = (values) => {
        console.log(values);
        setRegStatus(true);
    }

    const validateFields = (values) => {
        const errors = {};

        if(!values.name) {
            errors.name = 'This filed is required';
            setRegStatus(false);
        }

        if (!values.email) {
            errors.email = 'This field is required';
            setRegStatus(false);
        } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
            errors.email = 'Wrong email format';
            setRegStatus(false);
        }

        if (!values.phone) {
            errors.phone = 'This field is required';
            setRegStatus(false);
        } else if (!/^\d{12}$/.test(values.phone)) {
            errors.phone = 'Enter 12 digits';
            setRegStatus(false);
        }

        return errors;

    }

    return (
        <div className='main-container'>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                }}
                validate={validateFields}
                onSubmit={(registerFunc)}
            >
                <Form>
                    <div className='form'>
                        <h1>Register Form</h1>
                        <div className='form-items'>
                            <span>Name:</span>
                            <Field type='text' name='name'/>
                        </div>
                        <ErrorMessage name='name' />
                        <div className='form-items'>
                            <span>Email:</span>
                            <Field type='email' name='email'/>
                        </div>
                        <ErrorMessage name='email' />
                        <div className='form-items'>
                            <span>Phone:</span>
                            <Field type='tel' name='phone'/>
                        </div>
                        <ErrorMessage name='phone' />
                        <button className='signBtn' type='submit'>Confirm</button>
                        {regStatus && (
                            <div className='success-message'>
                                <span>Registration succesful</span>
                            </div>
                        )}
                    </div>
                </Form>
            </Formik>


        </div>
    )
}