import React from 'react'
import './Home.css'
import Header from './navigation/Header'
import Body from './portfolio-body/Body'
import Footer from './navigation/Footer'

const Home = () => {
    return (
        <div className='home'>
           <div>
               <Header />
           </div>
           <div>
               <Body />
           </div>
           <div>
               <Footer />
           </div>
        </div>
    )
}

export default Home
