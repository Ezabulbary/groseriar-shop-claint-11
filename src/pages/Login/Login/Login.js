import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../../sheard/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); 
    const [signInWithEmailAndPassword, signInUser, signInLoading, signInError] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();
    const location = useLocation();

    let from = location?.state?.from?.pathname || "/";

    if (signInUser) {
        navigate(from, { replace: true });
    }

    if (signInLoading) {
        return <Loading></Loading>
    }

    if (signInError) {
        setError(error.message)
    }

    if (sending) {
        return <Loading></Loading>
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

    const handleSignIn = event => {
        event.preventDefault();
    }

    const resetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }

    return (
        <div className='container r-container'>
            <h1 className='text-center text-success mb-3'>Please Register</h1>
            <SocialLogin></SocialLogin>
            <h5 className='d-flex justify-content-center'>or</h5>
            <form onSubmit={handleSignIn}>
                <br />
                <label className='m-2'>Email</label>
                <br />
                <input onChange={handleEmailBlur} type="email" name="email" id="email" placeholder='Type Your Email' required />

                <br />
                <label className='m-2'>Password</label>
                <br />
                <input onChange={handlePasswordBlur} type="password" name="password" id="password" placeholder='Type Your Password' required />

                <p className='text-danger'>{error}</p>

                <p>Don't have an Account?<Link className='ms-2' to='/register'>Register</Link></p>
                <p>Forget Password?<button onClick={resetPassword} className='btn text-primary ms-1'>Reset Password</button></p>
                <ToastContainer />

                <button onClick={() => signInWithEmailAndPassword(email, password)} className='btn btn-success'>Login</button>
            </form>
        </div>
    );
};

export default Login;