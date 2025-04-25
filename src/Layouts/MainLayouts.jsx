import React from 'react'
import Header from '../Components/Header/Header'
import Nav from '../Components/NavBar/Nav'
import style from './MainLayouts.module.css'
export default function MainLayouts({ children })
{
    return (
        <div>
            <div className={style.main}>
                <Header />
                <hr/>
                <Nav />
            </div>

            {children}
        </div>
    )
}
