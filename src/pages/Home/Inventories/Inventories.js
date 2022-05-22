import axios from 'axios';
import React, { useEffect } from 'react';
import { Card, CardGroup, Figure } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import useItems from '../../../hook/useItems';

const Inventories = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useItems();
    const homeItems = (items.slice(0, 6));

    useEffect(() => {
        const getMyItems = async () => {
            const email = user?.email;
            if (email) {
                const url = `http://localhost:5000/items/item/${email}`;
                const { data } = await axios.get(url);
                console.log(data)
                setItems(data)
            }
        }

        getMyItems()
    }, [user]);


    return (
        <div className='text-center py-5'>
            <h2>Inventory Items</h2>
            <h5 className='pb-4'>Get Your Product from Items</h5>
            <div className='row justify-content-center align-items-center'>
                {
                    homeItems.map(item => <div className='col-8 col-md-4 col-lg-3 m-2 p-2'>
                        <CardGroup>
                            <Card>
                                <Figure className="figure">
                                    <img src={item.image} className="figure-img img-fluid rounded" alt="..." />
                                </Figure>
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <p style={{ textAlign: 'justify' }}>{item.about}</p>
                                    <Card.Text><span className='fw-bold'>Price:</span> {item.price}</Card.Text>
                                    <Card.Text><span className='fw-bold'>Quantity:</span> {item.quantity}</Card.Text>
                                    <Card.Text><span className='fw-bold'>Supplier Name:</span> {item.supplier_name}</Card.Text>
                                    <Link to={`/Inventory/${item._id}`}><button className='btn btn-success m-4'>Stock Update</button></Link>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </div>)
                }
            </div>
            <Link to={'/manageAllItems'}><button className='btn btn-success m-4'>All Items</button></Link>
        </div>
    );
};

export default Inventories;