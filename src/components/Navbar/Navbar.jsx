import React, {useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'

import './NavbarStyles.css'

function Navbar() {
    const [nav, setNav] = useState(false)
    const toggleNav = () => setNav(!nav)

    return (
        <div className='navbar'>
            <div className="logo">
            </div>
            <ul className="nav-menu">
                <li><a href="#">Home</a></li>
                <li><a href="#vision">Vision</a></li>
                <li><a href="#whatisweb3">What is Web3</a></li>
                <li>Donate</li>
                <div className='download-btn-container'>
                    <a className="download-btn" href="#">Download Extension</a>
                </div>
            </ul>

            <div className="hamburger" onClick={toggleNav}>
                <HiOutlineMenuAlt4 className='icon items-end'/>
            </div>
            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                    <li onClick={toggleNav}><a href="#">Home</a></li>
                    <li onClick={toggleNav}><a href="#vision">Vision</a></li>
                    <li onClick={toggleNav}><a href="#whatisweb3">What is Web3</a></li>
                    <li onClick={toggleNav}>Donate</li>
                    <div className='download-btn-container'>
                        <a className="download-btn" href="#">Download Extension</a>
                    </div>
                </ul>
                <div className="mobile-menu-btn"></div>
            </div>
        </div>
    )
}

export default Navbar