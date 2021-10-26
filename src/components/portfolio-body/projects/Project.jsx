import React from 'react'
import Seperator from '../../common/socials/separator/Seperator'
import { ProjectData } from '../../data/projects'
import './Project.css'
import ProjectCard from './ProjectCard'

const Project = () => {
    const data = ProjectData
    return (
        <div className='projects'>
            <Seperator />
            <label className='section-title' htmlFor="">Projects</label>
            <div>
                {data.map(project => {
                    return <ProjectCard project={project}/>
                })}
            </div>
        </div>
    )
}

export default Project
