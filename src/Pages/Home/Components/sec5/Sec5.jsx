import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import style from '../Css/AllCss.module.css'
import img1 from '../../../../assets/o.png'
import img2 from '../../../../assets/o.png'
import img3 from '../../../../assets/o.png'
import img4 from '../../../../assets/o.png'
import img5 from '../../../../assets/o.png'

export default function Sec5()
{
    const [laptopsData, setlaptopsData] = useState([]);
    const arr = [
        { img: `${img1}`, },
        { img: `${img2}`, },
        { img: `${img3}`, },
        { img: `${img4}`, },
        { img: `${img5}`, },
    ]

    useEffect(() =>
    {
        fetch('/Api/laptops.json')
            .then((response) => response.json())
            .then((data) => setlaptopsData(data));
    }, []);
    return (
        <div className={style.container}>

            <div className={style.text}>
                <h2>mac</h2>
                <Link to='/mac'> show all laptops</Link>
            </div>

            <div className={style.containt}>
                {laptopsData.slice(0, 5).map((laptop, i) => (
                    <div className={style.crud} key={i}>
                        <h3>{laptop.name}</h3>
                        <p>{laptop.price}</p>
                    </div>
                ))}
            </div>


        </div>
    )
}
