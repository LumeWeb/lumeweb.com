import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import logo from '../../../../src/assets/lume-logo.png';

function Navbar({ view }) {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    if(nav) {
      document.body.classList.remove("scroll-lock");
      setNav(false);
    } else {
      document.body.classList.add("scroll-lock");
      setNav(true);
    }
  }

  const onMenuClick = function(event) {
    if(!nav) {
      return;
    }

    if(event.pageX < event.target.offsetLeft) {
      // click outside of menu
      toggleNav();
    }
  }

  useEffect(() => {
    let resizeTimeout;
    const onResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if(nav && window.innerWidth >= 900) {
          toggleNav();
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
      <menu className={nav ? 'active' : undefined} onClick={onMenuClick}>
        <li>
          <a href="/" className={view === 'home' ? 'underline' : undefined} aria-current={view === 'home' ? 'page' : undefined}>Home</a>
        </li>
        <li>
          <a href="/vision" className={view === 'vision' ? 'underline' : undefined} aria-current={view === 'vision' ? 'page' : undefined}>Vision</a>
        </li>
        <li>
          <a href="/what-is-web3" className={view === 'what' ? 'underline' : undefined} aria-current={view === 'what' ? 'page' : undefined}>What is Web3</a>
        </li>
        <li>
          <a href="/donate" className={view === 'donate' ? 'underline' : undefined} aria-current={view === 'donate' ? 'page' : undefined}>Donate</a>
        </li>
        <li>
          <a className="btn-main download-btn" href="#">Download Extension</a>
        </li>
      </menu>
      <button className="hamburger" onClick={toggleNav}>☰</button>
    </nav>
  )
}

export default Navbar
