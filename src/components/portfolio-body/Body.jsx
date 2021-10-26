import React from 'react'
import Landing from './landing/Landing'
import Project from './projects/Project'
import Skills from './skills/Skills'
import AboutMe from './about/AboutMe'
import Contact from './contact/Contact'
import './Body.css'

const Body = () => {
    return (
        <div className='body'>
           <section id='landing'>
                <Landing />
           </section>
           <section id='project'>
               <Project />
           </section>
           <section id='skills'>
               <Skills />
           </section>
           <section id='aboutme'>
               <AboutMe />
           </section>
           <section id='contact'>
               <Contact />
           </section>
        </div>
    )
}

export default Body
