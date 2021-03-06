import React from 'react'
import './Mobile.css'

const MobileHeader = ({isOpen, setIsOpen}) => {
    return (
        <div className='mobile'>
            <div className='close-icon' onClick={()=> setIsOpen(!isOpen)}>
                <i className="fi fi-rr-cross-circle"></i>
            </div>
            <div className='mobile-options'>
            <div className='mobile-option'>
                <a href="#project">
                    <i className="fi fi-rr-edit-alt option-icon"></i>Projects
                </a>
            </div>
            <div className='mobile-option'>
                <a href="#skills">
                <i className="fi fi-rr-laptop option-icon"></i>Skills
                </a>
            </div>
            <div className='mobile-option'>
                <a href="#aboutme">
                <i className="fi fi-rr-man-head option-icon"></i>About
                </a>
            </div>
            <div className='mobile-option'>
                <a href="#contact">
                <i className="fi fi-rr-paper-plane option-icon"></i>Contact
                </a>
            </div>
            </div>
        </div>
    )
}

export default MobileHeader
