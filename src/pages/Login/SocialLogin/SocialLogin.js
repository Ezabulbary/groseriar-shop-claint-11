import React from 'react';

const SocialLogin = () => {
    return (
        <div>
            <button onClick={handleGithubSignUp} className='btn social-btn'><FontAwesomeIcon className='social-icon' icon={faGithub} /></button>
            <button onClick={handleGoogleSignUp} className='btn social-btn'><FontAwesomeIcon className='social-icon' icon={faGoogle} /></button>
            <button onClick={handleFacebookSignUp} className='btn social-btn'><FontAwesomeIcon className='social-icon' icon={faFacebook} /></button>
        </div>
    );
};

export default SocialLogin;