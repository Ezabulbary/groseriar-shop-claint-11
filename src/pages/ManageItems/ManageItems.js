import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ManageItems = ({ item }) => {
    const { _id, name, image, about, price, quantity, supplier_name } = item;

    return (
        <tr>
            <th scope="row">{_id}</th>
            <td>{name}</td>
            <td>{supplier_name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><button className='rounded'>Delete</button></td>
        </tr>
    );
};

export default ManageItems;