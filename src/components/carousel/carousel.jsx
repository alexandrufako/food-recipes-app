import './carousel.css'
import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} >
            <Carousel.Item className='img-1'>
                <img
                    className=" d-block w-100"
                    src={require('../../img/countryside-food.jpg')}
                    alt="First slide"
                    style={{borderRadius: '10px'}}
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="img-2 d-block w-100"
                    src={require('../../img/traditional-food.jpg')}
                    alt="Second slide"
                    style={{borderRadius: '10px'}}
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="img-3 d-block w-100"
                    src={require('../../img/pizza-in-a-restaurant.jpg')}
                    alt="Third slide"
                    style={{borderRadius: '10px'}}
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="img-3 d-block w-100"
                    src={require('../../img/iranian-restaurant.jpg')}
                    alt="Fourth slide"
                    style={{borderRadius: '10px'}}
                />

                <Carousel.Caption>
                    <h3>Fourth slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="img-3 d-block w-100"
                    src={require('../../img/king-prawns.jpg')}
                    alt="Fifth slide"
                    style={{borderRadius: '10px'}}
                />

                <Carousel.Caption>
                    <h3>Fifth slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel