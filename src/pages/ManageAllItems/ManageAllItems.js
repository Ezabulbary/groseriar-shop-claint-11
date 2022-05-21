import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../hook/useItems';

const ManageAllItems = () => {
    const [items, setItems] = useItems();

    const deleteItems = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/items/${id}`;
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
                                <td><button onClick={() => deleteItems(item._id)} className='rounded'>Delete</button></td>
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