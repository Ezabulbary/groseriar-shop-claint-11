import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useItems from '../../../hook/useItems';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {
    const [items] = useItems();
    const homeItems = (items.slice(4));

    const { id } = useParams();
    const navigate = useNavigate();

    const getItems = () => {
        navigate('/myItems')
    }

    return (
        <div className='text-center py-5'>
            <h2>Inventory Items</h2>
            <h4 className='pb-4'>Get Your Product from Items</h4>
            <div className='row justify-content-center align-items-center'>
                {
                    homeItems.map(item => <Inventory
                        key={item._id}
                        item={item}
                    ></Inventory>)
                }
            </div>
            <button onClick={() => getItems(id)} className='btn btn-success m-4'>All Fruits</button>
        </div>
    );
};

export default Inventories;