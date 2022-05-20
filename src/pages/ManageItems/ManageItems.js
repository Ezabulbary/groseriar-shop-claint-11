import React from 'react';
import useItems from '../../hook/useItems';

const ManageItems = ({ item }) => {
    const { _id, name, price, quantity, supplier_name } = item;
    const [items, setItems] = useItems

    const deleteItems = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/items/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        const remaining = items.filter(item => item._id !== id)
                        setItems(remaining);
                    });
        }
    }

    return (
        <tr>
            <th scope="row">{_id}</th>
            <td>{name}</td>
            <td>{supplier_name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><button onClick={() => deleteItems(item._id)} className='rounded'>Delete</button></td>
        </tr>
    );
};

export default ManageItems;