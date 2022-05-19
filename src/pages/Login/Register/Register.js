import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../../sheard/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [createUserWithEmailAndPassword, createUser, createLoading, createError] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const navigate = useNavigate();
    const location = useLocation();

    let from = location?.state?.from?.pathname || "/";

    if (createUser) {
        navigate(from, { replace: true });
    }

    if (createLoading) {
        return <Loading></Loading>
    }

    if (createError) {
        setError(error.message)
    }

    const handleNameBlur = event => {
        setName(event.target.value)
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value);
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)) {
            return (true)
        }
        setError("You have entered an invalid email address!")
        return;
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
        if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(event.target.value)) {
            return (true)
        }
        setError("6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter!")
        return;
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    const handleRegister = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Password didn't match")
            return;
        }
    }

    return (
        <div className='container register'>
            <h1 className='text-center text-success mb-3'>Please Register</h1>
            <SocialLogin></SocialLogin>
            <h5 className='d-flex justify-content-center'>or</h5>
            <form onSubmit={handleRegister}>
                <br />
                <label className='m-2'>Name</label>
                <br />
                <input onChange={handleNameBlur} type="text" name="name" id="name" placeholder='Type Your Name' required />

                <br />
                <label className='m-2'>Email</label>
                <br />
                <input onChange={handleEmailBlur} type="email" name="email" id="email" placeholder='Type Your Email' required />

                <br />
                <label className='m-2'>Password</label>
                <br />
                <input onChange={handlePasswordBlur} type="password" name="password" id="password" placeholder='Type Your Password' required />

                <br />
                <label className='m-2'>Confirm Password</label>
                <br />
                <input onChange={handleConfirmPasswordBlur} type="password" name="confirm-password" id="confirm-password" placeholder='Confirm Your Password' required />

                <p className='text-danger'>{error}</p>

                <p>Already have an Account?<Link className='ms-2' to='/login'>Login</Link></p>
                <button onClick={() => createUserWithEmailAndPassword(email, password)} className='btn btn-success'>Register</button>
            </form>
        </div>
    );
};

export default Register;