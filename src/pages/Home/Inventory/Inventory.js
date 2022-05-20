import React from 'react';
import { Card, CardGroup, Figure } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Inventory = ({ item }) => {
    const { _id, name, image, about, price, quantity, supplier_name } = item;
    const navigate = useNavigate();

    const getItemDetail = id => {
        navigate(`/Inventory/${id}`)
    }
    return (
        <div className='col-8 col-md-4 col-lg-3 m-2 p-2'>
            <CardGroup>
                <Card>
                    <Figure className="figure">
                        <img src={image} className="figure-img img-fluid rounded" alt="..." />
                    </Figure>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <p style={{ textAlign: 'justify' }}>{about}</p>
                        <Card.Text><span className='fw-bold'>Price:</span> {price}</Card.Text>
                        <Card.Text><span className='fw-bold'>Quantity:</span> {quantity}</Card.Text>
                        <Card.Text><span className='fw-bold'>Supplier Name:</span> {supplier_name}</Card.Text>
                        <button onClick={() => getItemDetail(_id)} className='btn btn-success m-4'>Stock Update</button>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Inventory;