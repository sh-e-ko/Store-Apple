import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import style from './Slider.module.css'
import AppleWatch from '../../../../assets/Apple Watch.jpg'
import ApplePhone from '../../../../assets/Appple Phone .jpg'
import AppleAirpods from '../../../../assets/Airpods.jpg'
import mac from '../../../../assets/mac.jpg'
import tv from '../../../../assets/tv.jpg'
export default function Slider()
{

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) =>
    {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>

            {/* AppleWatch */}
            <Carousel.Item>
                <img src={AppleWatch} alt="First slide" />
                <Carousel.Caption className={style.Caption}>
                    <h3>Apple Watch</h3>
                    <Link to='/Watch'>Show All products</Link>
                </Carousel.Caption>
            </Carousel.Item>

            {/* ApplePhone */}
            <Carousel.Item>
                <img src={ApplePhone} alt="Second slide" />
                <Carousel.Caption className={style.Caption}>
                    <h3>iPhone</h3>
                    <Link to='/iPhone'>Show All products</Link>
                </Carousel.Caption>
            </Carousel.Item>

            {/* AppleAirpods */}
            <Carousel.Item>
                {/* <ExampleCarouselImage text="Third slide" /> */}
                <img src={AppleAirpods} alt="AppleAirpods"/>
                <Carousel.Caption className={style.Caption}>
                    <h3>Airpods</h3>
                    <Link to='/airpods'>Show All products</Link>
                </Carousel.Caption>
            </Carousel.Item>

            {/* mac */}
            <Carousel.Item >
                {/* <ExampleCarouselImage text="Third slide" /> */}
                <img src={mac} alt="Third slide" />
                <Carousel.Caption className={style.Caption}>
                    <h3>Mac</h3>
                    <Link to='/mac'>Show All products</Link>
                </Carousel.Caption>

            </Carousel.Item>

            <Carousel.Item>
                {/* <ExampleCarouselImage text="Third slide" /> */}
                <img
                    src={tv}alt="Third slide" />
                <Carousel.Caption className={style.Caption}>
                    <h3>TV</h3>
                    <Link to='/tv'>Show All products</Link>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    )
}
