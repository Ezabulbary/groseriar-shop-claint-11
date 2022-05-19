import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../../sheard/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location?.state?.from?.pathname || "/";

    

    return (
        <div>
            <button onClick={handleGithubSignUp} className='btn social-btn'><FontAwesomeIcon className='social-icon' icon={faGithub} /></button>
            <button onClick={handleGoogleSignUp} className='btn social-btn'><FontAwesomeIcon className='social-icon' icon={faGoogle} /></button>
            <button onClick={handleFacebookSignUp} className='btn social-btn'><FontAwesomeIcon className='social-icon' icon={faFacebook} /></button>
        </div>
    );
};

export default SocialLogin;