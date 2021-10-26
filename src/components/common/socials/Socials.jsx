import React from 'react'
import { SocialData } from '../../data/social'
import './Socials.css'

const Socials = () => {
    const data = SocialData
    return (
        <div className='social-contact'>
            {data.map(item => {
                return (
                    <a href={item.link} rel='noreferrer' target="_blank">
                        <div className='social-icon-div'>
                            <img src={item.icon} alt="social icon" className='social-icon'/>
                        </div>
                    </a>
                )
            })}
        </div>
    )
}

export default Socials
