import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-light text-center my-2'>
            <p><FontAwesomeIcon icon={faCopyright} />Copy Right </p>
        </div>
    );
};

export default Footer;