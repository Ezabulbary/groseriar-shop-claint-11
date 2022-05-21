import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useItems from '../../../hook/useItems';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {
    const [items] = useItems();
    const homeItems = (items.slice(2, 8));

    const { inventoryId } = useParams();
    const navigate = useNavigate();

    const getItems = () => {
        navigate('/manageAllItems')
    }

    return (
        <div className='text-center py-5'>
            <h2>Inventory Items</h2>
            <h5 className='pb-4'>Get Your Product from Items</h5>
            <div className='row justify-content-center align-items-center'>
                {
                    homeItems.map(item => <Inventory
                        key={item._id}
                        item={item}
                    ></Inventory>)
                }
            </div>
            <button onClick={() => getItems(inventoryId)} className='btn btn-success m-4'>All Items</button>
        </div>
    );
};

export default Inventories;