import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import style from './Slider.module.css'


export default function Slider()
{

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) =>
    {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>

            <Carousel.Item>
                {/* <ExampleCarouselImage text="First slide" /> */}
                <img
                    src="/src/assets/WhatsApp Image 2025-03-14 at 06.18.19_a3a36c57.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                {/* <ExampleCarouselImage text="Second slide" /> */}
                <img
                    src="/src/assets/WhatsApp Image 2025-03-14 at 06.18.19_a3a36c57.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                {/* <ExampleCarouselImage text="Third slide" /> */}
                <img
                    src="/src/assets/WhatsApp Image 2025-03-14 at 06.18.19_a3a36c57.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                {/* <ExampleCarouselImage text="Third slide" /> */}
                <img
                    src="/src/assets/WhatsApp Image 2025-03-14 at 06.18.19_a3a36c57.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>4 slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>

            </Carousel.Item>

            <Carousel.Item>
                {/* <ExampleCarouselImage text="Third slide" /> */}
                <img
                    src="/src/assets/WhatsApp Image 2025-03-14 at 06.18.19_a3a36c57.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>5 slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    )
}
