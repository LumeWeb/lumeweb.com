import React, { useState, useEffect } from 'react';
import './NavbarStyles.css';
import logo from '../../../src/assets/lume-logo.png';

function Navbar({ view }) {
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(!nav);

  useEffect(() => {
    let resizeTimeout;
    const onResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if(nav && window.innerWidth > 940) {
          setNav(false);
        }
      }, 25);
    };

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, [nav]);

  return (
    <nav>
      <div className="logo">
        <a href="/">
          <img src={logo.src} alt="Lume" />
        </a>
      </div>
      <menu className={nav ? 'active' : undefined}>
        <li>
          <a href="/" className={view === 'home' ? 'underline' : undefined} aria-current={view === 'home' ? 'page' : undefined}>Home</a>
        </li>
        <li>
          <a href="/vision" className={view === 'vision' ? 'underline' : undefined} aria-current={view === 'vision' ? 'page' : undefined}>Vision</a>
        </li>
        <li>
          <a href="/what-is-web3" className={view === 'what-is-web3' ? 'underline' : undefined} aria-current={view === 'what-is-web3' ? 'page' : undefined}>What is Web3</a>
        </li>
        <li>
          <a href="/donate" className={view === 'donate' ? 'underline' : undefined} aria-current={view === 'donate' ? 'page' : undefined}>Donate</a>
        </li>
        <li>
          <a className='btn-main download-btn' href="#">Download Extension</a>
        </li>
      </menu>
      <button className="hamburger" onClick={toggleNav}>☰</button>
    </nav>
  )
}

export default Navbar
