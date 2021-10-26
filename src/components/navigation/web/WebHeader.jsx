import React from 'react'
import './Web.css'

const WebHeader = () => {
    return (
        <div className='web'>
            <div className='web-option'>
                <a href="#project">
                    <i className="fi fi-rr-edit-alt option-icon"></i>Projects
                </a>
            </div>
            <div className='web-option'>
                <a href="#skills">
                <i className="fi fi-rr-laptop option-icon"></i>Skills
                </a>
            </div>
            <div className='web-option'>
                <a href="#aboutme">
                <i className="fi fi-rr-man-head option-icon"></i>About
                </a>
            </div>
            <div className='web-option'>
                <a href="#contact">
                <i className="fi fi-rr-paper-plane option-icon"></i>Contact
                </a>
            </div>
        </div>
    )
}

export default WebHeader
