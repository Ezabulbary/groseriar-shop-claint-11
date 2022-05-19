import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useItems from '../../../hook/useItems';
import InventoryAllDetails from '../InventoryAllDetails/InventoryAllDetails';

const InventoryAll = () => {
    const [items] = useItems();
    const { id } = useParams();
    const navigate = useNavigate();

    const getItems = () => {
        navigate('/manageAllItems')
    }
    return (
        <div className='container text-center py-5'>
            <div style={{ width: '50%', margin: '0 auto' }}>
                <div class="input-group mb-3">
                    <input type="number" class="form-control" placeholder="Add Quantity" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button class="btn btn-outline-secondary" type="button">Button</button>
                </div>
            </div>
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