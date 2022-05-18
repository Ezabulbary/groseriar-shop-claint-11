import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Img1 from '../../../images/banar/slider1.png';
import Img2 from '../../../images/banar/slider2.png';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
                <Carousel.Item>
                    <img className="d-block w-100" src={Img1} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Img2} alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default ControlledCarousel;