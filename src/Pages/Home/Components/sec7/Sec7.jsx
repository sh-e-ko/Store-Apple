import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import style from '../Css/AllCss.module.css'
// import img1 from '../../../../assets/o.png'
// import img2 from '../../../../assets/o.png'
// import img3 from '../../../../assets/o.png'
// import img4 from '../../../../assets/o.png'
// import img5 from '../../../../assets/o.png'

export default function Sec7()
{

    const [tvhData, setTvData] = useState([]);
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
            .then((data) => setTvData(data));
    }, []);
    return (
        <div className={style.container}>
            <div className={style.text}>
                <h2>Tv</h2>
                <Link to='/tv'> show all Tv</Link>
            </div>
            <div className={style.containt}>
                {tvhData.slice(0, 5).map((tv, i) => (
                    <div className={style.crud} key={i}>
                        <h3>{tv.name}</h3>
                        <p>{tv.price}</p>
                    </div>
                ))}
            </div>


        </div>
    )
}
