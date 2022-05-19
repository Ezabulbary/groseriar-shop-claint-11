import React from 'react';
import AboutImg from '../../../images/about/about.png';
import { useNavigate, useParams } from 'react-router-dom';

const About = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const getAbout = () => {
        navigate('/about')
    }
    
    return (
        <div className='container text-center py-5 rounded' style={{ background: '#FCE6DF' }}>
            <div className='d-xl-flex align-items-center justify-content-center'>
                <div>
                    <h2>About Us</h2>
                    <p className='p-2'>
                        A warehouse web is a media for storing goods. warehouse web is used by manufacturers, importers, exporters, wholesalers, transport businesses, customs, etc. All the products that are available here are grocery stock, spice warehouse, fruits warehouse, books, perfumes, dresses, gym equipment, bikes, electronics (TV, fridge, microwave, laptop, computer, smartphone, etc.), furniture, hiking gears, sports gear, outdoor camping gears, Vehicle/fleet inventory (car, truck, motorbike, bicycle), toys, etc.

                        A warehouse web is an activity of electronically buying or selling
                        wholesale products on online services or over the Internet. warehouse draws on technologies such as mobile commerce, electronic funds transfer, supply chain management, Internet marketing, online transaction processing, electronic data interchange (EDI), and inventory management systems. The warehouse is in turn driven by the technological advances of the semiconductor industry and is the largest sector of the electronics industry.
                    </p>
                    <button onClick={() => getAbout(id)} className='btn btn-success m-4'>About More</button>
                </div>
                <img
                    className='rounded img-fluid '
                    src={AboutImg}
                    alt="aboutImage"
                />
            </div>
        </div>
    );
};

export default About;