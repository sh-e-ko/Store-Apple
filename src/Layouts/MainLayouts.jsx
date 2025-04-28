import React from 'react'
import Nav from '../Components/NavBar/Nav'

export default function MainLayouts({ children })
{
    return (
        <div>

            <Nav />
            {children}
        </div>
    )
}
