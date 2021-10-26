import React, { useState} from 'react'
import WebHeader from './web/WebHeader'
import MobileHeader from './mobile/MobileHeader'
import './Header.css'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='header'>
            <div className='logo'>{`@jonHimself`}</div>
            <div className='menu'>
                <div className='web-menu'>
                    <WebHeader />
                </div>
                <div className='mobile-menu'>
                    <div onClick={() => setIsOpen(!isOpen)}>
                        <i className='fi-rr-apps menu-icon'></i>
                    </div>
                    {isOpen && <MobileHeader isOpen={isOpen} setIsOpen={setIsOpen}/>}
                </div>
            </div>
        </div>
    )
}

export default Header
