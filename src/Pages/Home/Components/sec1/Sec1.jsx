import React from 'react'
import { Link } from 'react-router-dom';
import style from './Sec1.module.css'
import img1 from '../../../../assets/o.png'
// import img2 from '../../../../assets'
// import img3 from '../../../../assets'
// import img4 from '../../../../assets'
// import img5 from '../../../../assets'
// import img6 from '../../../../assets'

export default function Sec1()
{
    const arr = [

        { img: `${img1}`, path: "/mac", name: "Mac" },
        { img: `${img1}`, path: "/iPad", name: "iPad" },
        { img: `${img1}`, path: "/iPhone", name: "iPhone" },
        { img: `${img1}`, path: "/airpods", name: "Airpods" },
        { img: `${img1}`, path: "/watch", name: "Watch" },
        { img: `${img1}`, path: "/tv", name: "Tv" },
    ]
    return (
        <div className={style.container} >
            <div className={style.containt}>

                {arr.map((item, i) =>
                {
                    return (
                        <div className={style.crud} key={i}>
                            <img src={item.img} />
                            <Link to={item.path}> {item.name} </Link>
                        </div>
                    )

                })}


            </div>
        </div>
    )
}
