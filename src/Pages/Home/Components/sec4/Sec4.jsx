import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import style from '../Css/AllCss.module.css'
// import img1 from '../../../../assets/o.png'
// import img2 from '../../../../assets/o.png'
// import img3 from '../../../../assets/o.png'
// import img4 from '../../../../assets/o.png'
// import img5 from '../../../../assets/o.png'

export default function Sec4()
{

    const [ipadData, setIpadData] = useState([]);
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
            .then((data) => setIpadData(data));
    }, []);
    return (
        <div className={style.container}>
            <div className={style.text}>
                <h2>ipad</h2>
                <Link to='/ipad'> show all ipad</Link>
            </div>
            <div className={style.containt}>
                {ipadData.slice(0, 5).map((ipad, i) => (
                    <div className={style.crud} key={i}>
                        <h3>{ipad.name}</h3>
                        <p>{ipad.price}</p>
                    </div>
                ))}
            </div>


        </div>
    )
}
