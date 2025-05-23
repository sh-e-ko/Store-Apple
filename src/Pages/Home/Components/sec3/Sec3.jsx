import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import style from '../Css/AllCss.module.css'


export default function Sec3()
{
    const [iphoneData, setIphoneData] = useState([]);


    useEffect(() =>
    {
        fetch('/Api/iphone_models.json')
            .then((response) => response.json())
            .then((data) => setIphoneData(data));
    }, []);
    return (
        <div className={style.container}>

            <div className={style.text}>
                <h2>iPhone</h2>
                <Link to='/iphone'> show all iphone</Link>
            </div>

            <div className={style.containt}>
                {iphoneData.slice(0, 5).map((iphone, i) => (
                    <div className={style.crud} key={i}>
                        <h3>{iphone.name}</h3>
                        <p>{iphone.price}</p>
                    </div>
                ))}
            </div>


        </div>
    )
}
