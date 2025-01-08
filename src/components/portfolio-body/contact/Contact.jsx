import React from 'react'
import Seperator from '../../common/socials/separator/Seperator'
import Socials from '../../common/socials/Socials'
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact'>
            <Seperator />
            <label htmlFor="" className='section-title'>Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>Want to get in touch? Contact me on any of these platforms!</p>
                    <Socials />
                </div>
                <div className="download">
                    <a href={require('../../../assests/JonRobeson-Resume.pdf').default} download>
                        <i className='fi-rr-cloud-download download-icon'></i>
                        Download Resume</a>
                </div>
            </div>
        </div>
    )
}

export default Contact
