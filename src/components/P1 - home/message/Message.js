import React from 'react'
import './MessageStyles.css'

function Message() {
    return (
        <div className='message-container'>
            <div className="message-header">
                A message from Derrick
            </div>
            <div className="message-content">
                Web3 gives people control over their data, privacy, and ownership. Lume's affordable Web3 tech aims to speed up the transition
                        from Web2 to Web3, which matters for privacy and security.
            </div>
        </div>
    )
}

export default Message
