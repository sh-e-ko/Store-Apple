import React, { useEffect, useState } from 'react'
import style from './Pad.module.css'
import { Link } from 'react-router-dom';

export default function Pad()
{
    const [IPadData, setIPadData] = useState([]);

    useEffect(() =>
    {
        fetch('/Api/ipads.json')
            .then((response) => response.json())
            .then((data) => setIPadData(data));
    }, []);
    return (
        <div className={style.container}>
            <div className={style.containt}>
                {IPadData.map((iPad, i) => (
                    <div className={style.crud} key={i}>
                        <h3>{iPad.name}</h3>
                        <p>{iPad.price}</p>
                        <Link to={`/iPad/${iPad.id}`} >moer</Link>
                    </div>
                ))}
            </div>


        </div>
    )
}
