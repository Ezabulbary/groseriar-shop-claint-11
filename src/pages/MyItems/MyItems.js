import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getMyItems = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/myItem?email=${email}`;
            try {
                // const { data } = await axiosPrivate.get(url);
                // setMyItems(data)
            }
            catch (error) {
                console.log(error);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }

        getMyItems()
    }, [user]);

    return (
        <div className='w-50 mx-auto text-center'>
            <h2>This is my orders: {myItems.length}</h2>
            {
                myItems.map(item => <div key={item._id}>
                    <p>{item.email} : {item.service}</p>
                </div>)
            }
        </div>
    );
};

export default MyItems;