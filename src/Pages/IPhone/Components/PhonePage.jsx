import React, { useEffect, useState } from 'react';
import MainLayouts from '../../../Layouts/MainLayouts'
import { useParams } from 'react-router-dom';
import style from './PhonePage.module.css'
import { MdUpdate } from "react-icons/md";
import { MdOutlinePriceCheck } from "react-icons/md";
import { GrStorage } from "react-icons/gr";
import { MdScreenshotMonitor } from "react-icons/md";
import { GiProcessor } from "react-icons/gi";
import { FaCameraRetro } from "react-icons/fa";
import { FaBatteryThreeQuarters } from "react-icons/fa6";

export default function PhonePage()
{
    const { id } = useParams()
    const [iphoneData, setIphoneData] = useState(null)

    useEffect(() =>
    {

        fetch('/Api/iphone_models.json')
            .then((response) => response.json())
            .then((data) =>
            {

                const iphone = data.find(item => item.id === id)
                if (iphone)
                {
                    setIphoneData(iphone);
                } else
                {
                    console.error('Product not found')
                    setIphoneData(null);
                }
            })
            .catch((error) =>
            {
                console.error("Error fetching data:", error)
                setIphoneData(null);
            });
    }, [id]);
    if (!iphoneData)
    {
        return <div>Loading or Product Not Found...</div>
    }

    return (
        <MainLayouts>
            <div className={style.container}>
                <div className={style.crud}>
                    <h3>{iphoneData.name}</h3>
                    <p>{iphoneData.description}</p>
                    <p>  {<MdUpdate />} <sapn>Release Date :</sapn>  {iphoneData.release_date}</p>
                    <p> {<MdOutlinePriceCheck />} <span> price :</span> {iphoneData.price}</p>
                    <p> {<GrStorage />} <span> Storage :</span>  {iphoneData.storage.join(' , ')}</p>
                    <p> {<MdScreenshotMonitor />} <span>screen size :</span>  {iphoneData.screen_size}</p>
                    <p> {<GiProcessor />} <span>Processor:</span>  {iphoneData.processor}</p>
                    <p> {<FaCameraRetro />} <span>Camera :</span> {iphoneData.camera}</p>
                    <p> {<FaBatteryThreeQuarters />} <span>Battery :</span> {iphoneData.battery}</p>
                </div>
            </div>
        </MainLayouts>
    );
}

