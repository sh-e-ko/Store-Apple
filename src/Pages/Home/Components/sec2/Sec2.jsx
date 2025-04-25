import React from 'react'
import style from './Sec2.module.css'
import { Link } from 'react-router-dom';
import img1 from '../../../../assets/o.png'
import img2 from '../../../../assets/o.png'

export default function Sec2()
{
    const arr = [

        { img: `${img1}`, name: "Mac", price: " just starting at $5000", path: "/mac", },
        { img: `${img2}`, name: "iPhone", price: " just starting at 6000$", path: "/iPhone" },
    ]
    return (
        <div className={style.container} >
            <div className={style.containt}>

                {arr.map((item, i) =>
                {
                    return (
                        <div className={style.crud} key={i}>
                            <p>{item.price} </p>
                            <h3> {item.name} </h3>
                            <Link to={item.path}> {item.name} </Link>
                            <img src={item.img} />
                        </div>
                    )

                })}

            </div>
        </div>
    )
}
