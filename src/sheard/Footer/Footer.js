import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-secondary text-center text-white py-2'>
            <p>Copyright <FontAwesomeIcon icon={faCopyright} /> 2022 grocariar-bd.com </p>
        </div>
    );
};

export default Footer;