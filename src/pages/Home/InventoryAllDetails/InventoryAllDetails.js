import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useItemDetail from '../../../hook/useItemDetail';

const InventoryAllDetails = () => {
    const [item] = useItemDetail();
    const { _id, name, image, about, price, quantity, supplier_name } = item;

    const { id } = useParams();

    return (
        <div>
            <div style={{ width: '50%', margin: '0 auto' }}>
                <div class="input-group mb-3">
                    <input type="number" class="form-control" placeholder="Add Quantity" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button class="btn btn-outline-success" type="button">Restock</button>
                </div>
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
                            <p className="card-text" style={{ textAlign: 'justify' }}>{about}</p>
                            <p className="card-text"><span className='fw-bold'>Price:</span> {price}</p>
                            <p className="card-text"><span className='fw-bold'>Quantity:</span> {quantity}</p>
                            <p className="card-text"><span className='fw-bold'>Supplier Name:</span> {supplier_name}</p>
                            <button className='btn btn-success m-4'>Delivered</button>
                        </div>
                    </div>
                </div>
            </div>
            <Link to={`/checkout/${id}`}>
                <button className='btn btn-success m-4'>Manage Items</button>
            </Link>
        </div>
    );
};

export default InventoryAllDetails;