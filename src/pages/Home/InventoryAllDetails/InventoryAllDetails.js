import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useItemDetail from '../../../hook/useItemDetail';

const InventoryAllDetails = () => {
    const { inventoryId } = useParams();
    const [item, setItem] = useItemDetail(inventoryId);
    const { _id, name, image, about, price, quantity, supplier_name } = item;

    const addQuantity = event => {
        event.preventDefault();
        if (event.target.quantity.value) {
            const newQuantity = quantity + parseInt(event.target.quantity.value);
            fetch(`https://whispering-ravine-60008.herokuapp.com/items/${inventoryId}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ newQuantity })
            })
                .then(res => res.json())
                .then(data => {
                    setItem(data.item)
                    console.log(data);
                    event.target.reset();
                })
        }
    };

    const handleDelivered = event => {
        if (quantity > 0) {
            const newQuantity = quantity - 1
            fetch(`https://whispering-ravine-60008.herokuapp.com/items/${inventoryId}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ newQuantity })
            })
                .then(res => res.json())
                .then(data => {
                    setItem(data.item)
                    console.log(data);
                    event.target.reset();
                })
        }
    };


    return (
        <div className='container text-center py-5'>
            <div style={{ width: '50%', margin: '0 auto' }}>
                <form onSubmit={addQuantity} class="input-group mb-3">
                    <input type="number" name="quantity" class="form-control" placeholder="Add Quantity" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <input type="submit" value="Restock" class="btn btn-outline-success" />
                </form>
            </div>
            <div className="card m-3">
                <div className="row">
                    <div className="col-lg-4">
                        <img src={image} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-lg-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text"><small className="text-muted">Id: {_id}</small></p>
                            <p className="card-text"><span className='fw-bold'>Supplier Name:</span> {supplier_name}</p>
                            <p className="card-text" style={{ textAlign: 'justify' }}>{about}</p>
                            <p className="card-text"><span className='fw-bold'>Price:</span> ${price}</p>
                            <p className="card-text"><span className='fw-bold'>Quantity:</span> {quantity} kg</p>
                            <p className="card-text"><span className='fw-bold'>Sold:</span> {0}</p>
                            <button onClick={handleDelivered} className='btn btn-success m-4'>Delivered</button>
                        </div>
                    </div>
                </div>
            </div>
            <Link to={'/manageAllItems'}>
                <button className='btn btn-success m-4'>Manage Items</button>
            </Link>
        </div>
    );
};

export default InventoryAllDetails;