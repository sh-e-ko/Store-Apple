import React, { useEffect, useState } from 'react'
import style from './Sec3.module.css'

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
        <div>
            {iphoneData.slice(0, 5).map((iphone, index) => (
                <div key={index}>
                    <h3>{iphone.name}</h3>
                    <p>{iphone.price}</p>
                </div>
            ))}

        </div>
    )
}
