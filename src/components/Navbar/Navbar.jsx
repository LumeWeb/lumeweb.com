import React, {useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'

import './NavbarStyles.css'

function Navbar() {
    const [nav, setNav] = useState(false)
    const toggleNav = () => setNav(!nav)

    return (
        <div class='w-full h-20 flex justify-between items-center whitespace-nowrap gap-9 bg-[#031418] pt-[75px] pb-[3%] px-[7%]'>
            <div class="bg-[url(../../src/assets/lume-logo.webp)] bg-no-repeat bg-contain h-[55px] min-w-[210px] z-[998] ml-[5px]">
            </div>
            <ul class='transition-opacity duration-150 ease-out md:max-lg:opacity-0 lg:opacity-100 nav-menu'>
                <li><a href="#">Home</a></li>
                <li><a href="#vision">Vision</a></li>
                <li><a href="#whatisweb3">What is Web3</a></li>
                <li>Donate</li>
                <div class='download-btn-container class="transition duration-[0.3s]"'>
                    <a class='download-btn' href="#">Download Extension</a>
                </div>
            </ul>

            <div class="transition-opacity duration-150 ease-out nav-menu hamburger" onClick={toggleNav}>
                <HiOutlineMenuAlt4 class='icon'/>
            </div>
            <div class={nav ? 'mobile-menu active class="transition duration-[0.55s] linear"' : 'mobile-menu class="transition duration-[0.55s] linear"'}>
                <ul class="mobile-nav">
                    <li onClick={toggleNav}><a href="#">Home</a></li>
                    <li onClick={toggleNav}><a href="#vision">Vision</a></li>
                    <li onClick={toggleNav}><a href="#whatisweb3">What is Web3</a></li>
                    <li onClick={toggleNav}>Donate</li>
                    <div class='download-btn-container'>
                        <a class="download-btn" href="#">Download Extension</a>
                    </div>
                </ul>
                <div class="mobile-menu-btn"></div>
            </div>
        </div>
    )
}

export default Navbar