import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import style from '../Css/AllCss.module.css'
// import img1 from '../../../../assets/o.png'
// import img2 from '../../../../assets/o.png'
// import img3 from '../../../../assets/o.png'
// import img4 from '../../../../assets/o.png'
// import img5 from '../../../../assets/o.png'

export default function Sec6()
{

    const [airpodData, setAirpod] = useState([]);
    // const arr = [
    //     { img: `${img1}`, },
    //     { img: `${img2}`, },
    //     { img: `${img3}`, },
    //     { img: `${img4}`, },
    //     { img: `${img5}`, },
    // ]

    useEffect(() =>
    {
        fetch('/Api/ipads.json')
            .then((response) => response.json())
            .then((data) => setAirpod(data));
    }, []);
    return (
        <div className={style.container}>
            <div className={style.text}>
                <h2>Airpods</h2>
                <Link to='/airpods'> show all Airpods</Link>
            </div>
            <div className={style.containt}>
                {airpodData.slice(0, 5).map((airpod, i) => (
                    <div className={style.crud} key={i}>
                        <h3>{airpod.name}</h3>
                        <p>{airpod.price}</p>
                    </div>
                ))}
            </div>


        </div>
    )
}
