import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ManageItems = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const addItems = () => {
        navigate('/addItems')
    }

    return (
        <div className='text-center my-2'>
            <h2>Manage Items</h2>


            <button onClick={() => addItems(id)} className='btn btn-success m-4'>Add Items</button>
        </div>
    );
};

export default ManageItems;