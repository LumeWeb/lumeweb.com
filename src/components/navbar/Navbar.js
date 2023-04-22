import React, {useState} from 'react'
import { Twirl as Hamburger } from 'hamburger-react'
import { BrowserRouter, Route, Link } from "react-router-dom";

import './NavbarStyles.css'

function Navbar() {
    const [isOpen, setOpen] = useState(false)
    const [nav, setNav] = useState(false)
    const toggleNav = () => setNav(!nav)
    const toggleHam = () => setOpen(!isOpen)

    return (
        <div className='navbar'>
            <div className="logo">
            </div>
            <ul className="nav-menu">
                <li><Link to="home">Home</Link></li>
                <li><Link to="vision">Vision</Link></li>
                <li><Link to="w3">What is Web3</Link></li>
                <li>Donate</li>
                <div className='download-btn-container'>
                    <a className="download-btn" href="#">Download Extension</a>
                </div>
            </ul>

            <div className="hamburger" onClick={toggleNav}>
                <Hamburger id="hamburger" className='icon' duration={0.6} toggled={isOpen} toggle={setOpen}/>
            </div>
            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav"  onClick={toggleHam}>
                    <li onClick={toggleNav}><a href="#" onClick={toggleHam}>Home</a></li>
                    <li onClick={toggleNav}><a href="#vision" title="Vision" onClick={toggleHam}>Vision</a></li>
                    <li onClick={toggleNav}><a href="#whatisweb3" title="What is Web3" onClick={toggleHam}>What is Web3</a></li>
                    <li onClick={toggleNav}><a href="#donate" onClick={toggleHam}>Donate</a></li>
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
