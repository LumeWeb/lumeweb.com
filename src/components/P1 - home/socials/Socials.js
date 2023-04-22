import React from 'react'
import './SocialsStyles.css'

function Socials() {
    return (
        <div className='centered'>
            <div>
                <h2 className='centered'>
                    get in touch
                </h2>
                <div className="centered">
                    <div className="socials-wrapper">
                        <div className='gitHub' alt="GitHub logo"/>
                        <div className='discord' alt="Discord logo"/>
                        <div className='twitter' alt="Twitter logo"/>
                        <div className='fb' alt="Facebook logo"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Socials
