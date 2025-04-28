import React from 'react'
import { FaApple } from "react-icons/fa";
import { Link } from 'react-router-dom';
import style from './Nav.module.css'
import { CiSearch } from "react-icons/ci";

export default function Nav()
{
    return (
        <nav className={style.nav}>
            {/* icon */}
            <div className={style.navIcon}>
                <Link to='/'> <FaApple /> </Link>
            </div>
            {/* Links */}
            <div>
                <ul className={style.navLink}>
                    <li><Link to='/mac'>Mac</Link></li>
                    <li><Link to='/iPad'>iPad</Link></li>
                    <li><Link to='/iPhone'>iPhone</Link></li>
                    <li><Link to='/airpods'>Airpods</Link></li>
                    <li><Link to='/watch'>Watch</Link></li>
                    <li><Link to='/tv'>Tv</Link></li>
                    <li><Link >Entertainment</Link></li>
                    <li><Link>Support</Link></li>
                    <li><Link>Where to buy</Link></li>
                </ul>
            </div>
            {/* input Search */}
            <div className={style.inputSearch}>
                <input type="text" placeholder='search' />
                <CiSearch className={style.inputicon} />
            </div>
        </nav>
    )
}
