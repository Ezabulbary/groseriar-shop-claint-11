import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";
import Loading from '../../../sheard/Loading/Loading';
import { toast } from 'react-toastify';

const RequireAuth = ({children}) => {
    const [sendEmailVerification] = useSendEmailVerification(auth);
    const [user, loading] = useAuthState(auth);
    let location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='text-center mt-5'>
            <h3 className='text-danger'>Your Email is not verified!!</h3>
            <h5 className='text-success'> Please Verify your email address</h5>
            <button
                className='btn btn-primary'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >
                Send Verification Email Again
            </button>
        </div>
    }

    return children;
}

export default RequireAuth;