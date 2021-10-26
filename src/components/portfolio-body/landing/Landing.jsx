import React from 'react'
import Socials from '../../common/socials/Socials'
import './Landing.css'

const Landing = () => {
    return (
        <div className='landing'>
            <div className="landing-top">
                <div className="info">
                    Hi there! 
                    <br />
                    I'm <span className='info-name'>Jon Robeson</span>! 😄
                </div>
                <div className="image">
                    <img src={require('../../../assests/coding.png').default} alt="jonHimself" className='jonHimself'/>
                </div>
            </div>
            <Socials />
            <span className='blurb'>MERN developer with an interest in blockchain and Dapps! </span>
        </div>
    )
}

export default Landing
