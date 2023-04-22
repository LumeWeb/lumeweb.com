import React from 'react'
import './Whatisweb3Styles.css'

function Whatisweb3() {
    return (
        <div className='centered'>
            <div className='Whatisweb3-container'>
                <div className='Whatisweb3-wrapper'>
                    <div className='img-left'/>
                    <div className='w3-container'>
                        <span id="whatisweb3"></span>
                        <h2>what is the web?</h2>
                        <h3>Why Web3 matters</h3>
                        <h4 className='w3-transluscent'>Web3 gives people control over their data, privacy, and ownership. Lume's affordable Web3 tech aims to speed up the transition
                                    from Web2 to Web3, which matters for privacy and security.</h4>
                        <div className='w3-btn-container'>
                            <a className='w3-btn' href="#">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whatisweb3
