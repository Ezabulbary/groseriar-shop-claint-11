import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useItems from '../../hook/useItems';
import ManageItems from '../ManageItems/ManageItems';

const ManageAllItems = () => {
    const [items] = useItems();
    const { id } = useParams();
    const navigate = useNavigate();

    const addItems = () => {
        navigate('/addItems')
    }
    return (
        <div className='container text-center py-5'>
            <h2 className='mb-4'>Manage Items</h2>
            <div className='row justify-content-center align-items-center'>
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
                            items.map(item => <ManageItems
                                key={item._id}
                                item={item}
                            ></ManageItems>)
                        }
                    </tbody>
                </table>
            </div>
            <button onClick={() => addItems(id)} className='btn btn-success m-4'>Add Items</button>
        </div>
    );
};

export default ManageAllItems;