import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Register = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleRegister = event =>{
        event.preventDefault();
        setEmail(event.target.email.value);
        setPassword(event.target.email.value);
    }

    return (
        <div className='registers'>
            <h1 className='text-center text-success mb-3'>Please Register</h1>
            <form onSubmit={handleRegister}>
                <br />
                <input type="text" name="name" id="name" placeholder='Type Your Name' />

                <br />
                <input type="email" name="email" id="email" placeholder='Type Your Email' required />

                <br />
                <input type="password" name="password" id="password" placeholder='Type Your Password' required />

                <br />
                <input type="password" name="confirm-password" id="confirm-password" placeholder='Confirm Your Password' required />

                <p className='text-danger'>{error}</p>

                <p>Already have an Account?<Link className='ms-2' to='/login'>Login</Link></p>
                <button onClick={() => createUserWithEmailAndPassword(email, password)} className='btn btn-success'>Register</button>
            </form>
        </div>
    );
};

export default Register;