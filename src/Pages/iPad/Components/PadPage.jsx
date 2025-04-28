import React, { useEffect, useState } from 'react';
import MainLayouts from '../../../Layouts/MainLayouts'
import { useParams } from 'react-router-dom';
import style from './PadPage.module.css'


export default function PadPage()
{
    const { id } = useParams()
    const [IPadData, setIPadData] = useState([]);

    useEffect(() =>
    {

        fetch('/Api/ipads.json')
            .then((response) => response.json())
            .then((data) =>
            {

                const iPad = data.find(item => item.id === id)
                if (iPad)
                {
                    setIPadData(iPad);
                } else
                {
                    console.error('Product not found')
                    setIPadData(null);
                }
            })
            .catch((error) =>
            {
                console.error("Error fetching data:", error)
                setIPadData(null);
            });
    }, [id]);
    if (!IPadData)
    {
        return <div>Loading or Product Not Found...</div>
    }

    return (
        <MainLayouts>
            <div className={style.container}>
                <div className={style.crud}>
                    <h3>{IPadData.name}</h3>
                </div>
            </div>
        </MainLayouts>
    );
}

