import React from 'react';
import notFound from '../../images/notFound/NotFound1080.png';

const NotFound = () => {
    return (
        <div className='container'>
            <img className='img-fluid mx-auto d-block' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;