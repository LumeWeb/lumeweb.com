import React from 'react'
import './MemeStyles.css'

function Meme() {
  return (
        <div className='meme-container'>
            <div className="meme-wrapper">
                    <div className="meme-bg">
                <div className="meme-columns meme-translucent">
                    <h2>TITLE</h2>
                    <h3 className='left meme-bp'>Building a new world <wbr /> for your data</h3>
                    <h4 className='left'>Right now, Lume has only one full-time developer and limited helper staff! We need help from developers, fundraisers, funders, and
        contributors to bring the new internet to the masses.</h4>
                    </div>
                </div>
                <div className='img-right'></div>
            </div>
        </div>
  )
}

export default Meme