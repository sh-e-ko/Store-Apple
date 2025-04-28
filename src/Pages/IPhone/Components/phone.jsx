import React, { useEffect, useState } from 'react'
import style from './Phone.module.css'
import { Link } from 'react-router-dom';
export default function phone()
{
    const [iphoneData, setIphoneData] = useState([]);
    // const arr = [
    //     { img: `${img1}`, },
    //     { img: `${img2}`, },
    //     { img: `${img3}`, },
    //     { img: `${img4}`, },
    //     { img: `${img5}`, },
    // ]

    useEffect(() =>
    {
        fetch('/Api/iphone_models.json')
            .then((response) => response.json())
            .then((data) => setIphoneData(data));
    }, []);
    return (
        <div className={style.container}>
            <div className={style.containt}>
                {iphoneData.map((iphone, i) => (
                    <div className={style.crud} key={i}>
                        <h3>{iphone.name}</h3>
                        <p>{iphone.price}</p>
                        <Link to={`/iphone/${iphone.id}`} >moer</Link>
                    </div>
                ))}
            </div>


        </div>
    )
}
