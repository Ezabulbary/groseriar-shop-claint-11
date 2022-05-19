import React from 'react';
import { Figure } from 'react-bootstrap';

const Category = ({ category }) => {
    const { name, image } = category;
    return (
        <div className='col-8 col-md-4 col-lg-3 col-xl-2 bg-white rounded m-2 p-2'>
            
            <Figure className="figure">
                <img src={image} className="figure-img img-fluid rounded" alt="..." />
                    <figcaption className="figure-caption">{name}</figcaption>
            </Figure>
        </div>
    );
};

export default Category;