import React from 'react'
import './HeaderStyles.css'
import HeaderContent from './HeaderContent.js'

function Header() {
  return (
    <div className='header-container'>
        <div className='header'>
        <h1 className='header-alignment' alt="Access to the web for the masses">
            <HeaderContent />
        </h1>
        </div>
    </div>
  )
}

export default Header