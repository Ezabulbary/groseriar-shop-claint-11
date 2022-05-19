import React from 'react';
import useItems from '../../hook/useItems';
import MyItem from '../MyItem/MyItem';

const MyItems = () => {
    const [items] = useItems();
    // const { name, image, } = item;
    return (
        <div className='text-center my-2'>
            <h2>My Items</h2>
            <div className='row justify-content-center align-items-center'>
                {
                    items.map(item => <MyItem
                        key={item._id}
                        item={item}
                    ></MyItem>)
                }
            </div>
        </div>
    );
};

export default MyItems;