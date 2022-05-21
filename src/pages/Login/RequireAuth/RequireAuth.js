import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";
import Loading from '../../../sheard/Loading/Loading';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);
    let location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='text-center my-5'>
            <h3 className='text-danger'>Your Email is not verified</h3>
            <button className='btn btn-success'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}>Again Send Verification Email</button>
        </div>
    }

    return children;
}

export default RequireAuth;