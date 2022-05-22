import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);

    useEffect(() => {
        const getMyItems = async () => {
            const email = user?.email;
            if (email) {
                const url = `https://whispering-ravine-60008.herokuapp.com/items/item/${email}`;
                const { data } = await axios.get(url);
                console.log(data)
                setMyItems(data)
            }
        }

        getMyItems()
    }, [user]);

    const deleteItems = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://whispering-ravine-60008.herokuapp.com/items/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = myItems.filter(item => item._id !== id)
                    setMyItems(remaining);
                });
        }
    }

    return (
        <div className='container mx-auto text-center'>
            <h2 className='my-4'>My All Items {myItems.length}</h2>
            {
                myItems.map(item => <div key={item._id} className='table-responsive'>
                    <table class="table table-success table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Email</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Item Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Button</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{user?.email}</td>
                                <td>{item?.supplier_name}</td>
                                <th scope="row">{item?.name}</th>
                                <td>{item?.price}</td>
                                <td>{item?.quantity}</td>
                                <td><button onClick={() => deleteItems(item._id)} className='btn btn-danger'>Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>)
            }
        </div>
    );
};

export default MyItems;