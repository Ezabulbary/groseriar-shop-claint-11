import { faClock, faEnvelope, faLocationDot, faMapLocationDot, faPhone, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
    return (
        <div className='row mt-5'>
            <div className='col-12 col-lg-6 contact-section'>
                <h1 className='text-success'>CONTACT US</h1>
                <p><FontAwesomeIcon className='font-icon' icon={faPhone} />+1 650-444-0000</p>
                <p><Link to='/mailto:makeup@ovon.com'><FontAwesomeIcon className='font-icon' icon={faEnvelope} />makeup@ovon.com</Link></p>
                <p><FontAwesomeIcon className='font-icon' icon={faLocationDot} />525 West Ave, CT 06850 Norwalk</p>
                <p><FontAwesomeIcon className='font-icon' icon={faClock} />Mon-Fri: 08.00 - 19.00, Sunday: Closed</p>
                <p><Link to='/'><FontAwesomeIcon className='font-icon' icon={faMapLocationDot} />Google Maps</Link></p>
            </div>
            <div className='col-12 col-lg-6 input-section'>
                <h3 className='text-success'>GET IN TOUCH</h3>
                <form>
                    <input className='form-input' type="text" placeholder='Name' />
                    <input className='form-input' type="email" placeholder='Email' required />
                    <br />
                    <textarea className='form-input' name="" id="" cols="52" rows="5" placeholder='Message' required></textarea>
                    <br />
                    <button className="btn btn-success my-btn">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;