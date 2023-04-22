import React from 'react'
import './CtoStyles.css'

function Cto() {
    return (
        <div className='cto-container'>
            <div className="cto-geometric-bg">
                <div className='cto-shadow'>
                    <span id="cto"></span>
                    <div className="shadowdrop">
                    <h2>community-powered</h2>
                    <h3 className='cto-bp'>Building a new world <wbr /> for your data</h3>
                    <h4 className='left'>
                        Right now, Lume has only one full-time developer and limited helper staff! We need help from developers, fundraisers, funders, and
                                                                                                                                                                     contributors to bring the new internet to the masses.</h4>
                    <div className="cto-mini-bio">
                        <div className='cto-info'>
                            <h5 className='cto-name'>Derrick Hammer</h5>
                            <h6 className='cto-title'>CTO</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cto
