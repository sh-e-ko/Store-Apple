import React from 'react'
import style from './Headrt.module.css'
export default function Header() {
  return (
    <header className={style.header}>

        {/* prand name */}
        <div className={style.prand}>
            <h1>Apple</h1>
        </div>
        {/* offer */}
        <div className={style.text}>
            <p>sjgbsrbgjrsgbrs</p>
        </div>
        {/* btn login and sign up */}
        <div className={style.btn}>
            <button>login</button>
            <button>sign up</button>
        </div>
    </header>
  )
}
