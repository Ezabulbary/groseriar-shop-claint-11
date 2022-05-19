import React from 'react';

const InventoryAllDetails = ({ item }) => {
    const { _id, name, image, about, price, quantity, supplier_name } = item;
    return (
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
    );
};

export default InventoryAllDetails;