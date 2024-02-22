import React from 'react'
import { useState } from 'react'
import './navbar.css'

function Navbar() {
    const [menuOpen, setMenuOpen]= useState(false)
    console.log(menuOpen)
    return (
            <div id='nav-bar-wrapper' className=''>
                <div id='nav-image-wrapper'>
                    <img src='../images/IMG_1908_CROPPED_FACE.jpg' alt='profile'/>
                    
                </div>
                <div>
                        <p>Jon</p>
                        <p>Grabowski</p>
                    </div>
                <div>
                    <p onClick={()=>{setMenuOpen(!menuOpen)}}>LINKS</p>
                </div>
                <nav className={menuOpen?'menu-open':''}>
                    <ul>
                        <li>link 1</li>
                        <li>link 2</li>
                    </ul>
                </nav>
            </div>
    )
}

export default Navbar
