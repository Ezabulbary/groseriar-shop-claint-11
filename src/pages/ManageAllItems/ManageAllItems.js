import axios from 'axios';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useItems from '../../hook/useItems';

const ManageAllItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useItems();
    const navigate = useNavigate();

    const getItemDetail = id => {
        navigate(`/Inventory/${id}`)
    }

    useEffect(() => {
        const getMyItems = async () => {
            const email = user?.email;
            if (email) {
                const url = `https://whispering-ravine-60008.herokuapp.com/items/item/${email}`;
                const { data } = await axios.get(url);
                console.log(data)
                setItems(data)
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
                    const remaining = items.filter(item => item._id !== id)
                    setItems(remaining);
                });
        }
    }

    return (
        <div className='container text-center py-5'>
            <h2 className='mb-4'>Manage Items</h2>
            <div className='table-responsive'>
                <table class="table table-success table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Supplier Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Button</th>
                            <th scope="col">Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item => <tr key={item._id}>
                                <th scope="row">{item._id}</th>
                                <td>{item.name}</td>
                                <td>{item.supplier_name}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td><button onClick={() => getItemDetail(item?._id)} className='btn btn-success'>Stock Update</button></td>
                                <td><button onClick={() => deleteItems(item._id)} className='btn btn-danger'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <Link to={'/addItems'}>
                <button className='btn btn-success m-4'>Add Items</button>
            </Link>
        </div>
    );
};

export default ManageAllItems;