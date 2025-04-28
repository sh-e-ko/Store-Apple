import React, { useEffect } from 'react';
import background from '../../../assets/mm.jpg';
import phone from '../../../assets/phone.png';
import style from './Sec0.module.css';

export default function Sec0()
{


    return (
        <div className={style.container}>
            <img src={background} alt="background" className={style.img} />
            <div className={style.content}>
                <div>
                    <p className={`${style.text}`}>Welcome to  Apple Store </p>
                    <p className={`${style.text}`}>Here are all the products you are looking for.</p>
                </div>
                <img src={phone} alt="phone" className={style.phoneImg} />
            </div>
        </div>
    );
}
