import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import style from '../Css/AllCss.module.css'
// import img1 from '../../../../assets/o.png'
// import img2 from '../../../../assets/o.png'
// import img3 from '../../../../assets/o.png'
// import img4 from '../../../../assets/o.png'
// import img5 from '../../../../assets/o.png'

export default function Sec8()
{

    const [WatchData, setWatchData] = useState([]);
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
            .then((data) => setWatchData(data));
    }, []);
    return (
        <div className={style.container}>
            <div className={style.text}>
                <h2>Watch</h2>
                <Link to='/Watch'> show all Watch</Link>
            </div>
            <div className={style.containt}>
                {WatchData.slice(0, 5).map((Watch, i) => (
                    <div className={style.crud} key={i}>
                        <h3>{Watch.name}</h3>
                        <p>{Watch.price}</p>
                    </div>
                ))}
            </div>


        </div>
    )
}
