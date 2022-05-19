import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useItems from '../../../hook/useItems';
import InventoryAllDetails from '../InventoryAllDetails/InventoryAllDetails';

const InventoryAll = () => {
    const [items] = useItems();
    const { id } = useParams();
    const navigate = useNavigate();

    const getItems = () => {
        navigate('/manageItems')
    }
    return (
        <div className='container text-center py-5'>
            <div className='row justify-content-center align-items-center'>
                {
                    items.map(item => <InventoryAllDetails
                        key={item._id}
                        item={item}
                    ></InventoryAllDetails>)
                }
            </div>
            <button onClick={() => getItems(id)} className='btn btn-success m-4'>Manage Items</button>
        </div>
    );
};

export default InventoryAll;