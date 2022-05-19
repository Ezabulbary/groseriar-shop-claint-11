import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='text-center py-5 rounded' style={{ background: '#FCE6DF' }}>
            <h2>Categories</h2>
            <h4 className='pb-4'>Get Your Product from Category</h4>
            <div className='row justify-content-center align-items-center'>
                {
                    categories.map(category => <Category
                        key={category._id}
                        category={category}
                    ></Category>)
                }
            </div>
            <button className='btn btn-success m-4'>All Categories</button>
        </div>
    );
};

export default Categories;