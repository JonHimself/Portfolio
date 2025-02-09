import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({project}) => {
    return (
        <div className='project-card'>
            <div className="project-info">
                <label className='project-title' htmlFor="">{project.title}</label>
                <div className="project-links">
                    {project.demo && 
                    <a className='project-link' href={project.demo} rel='noreferrer' target="_blank">
                        <div className='link-button'>
                        <i className="fi fi-rr-globe"></i>Demo
                        </div>
                    </a>
                    }
                    {project.github && 
                    <a className='project-link' href={project.github} rel='noreferrer' target="_blank">
                        <div className='link-button'>
                        <i className="devicon-github-original"></i>Github
                        </div>
                    </a>
                    }
                    {project.deploy && 
                    <a className='project-link' href={project.deploy} rel='noreferrer' target="_blank">
                        <div className='link-button'>
                        <i className="devicon-heroku-original"></i>Cryptid.v1
                        </div>
                    </a>
                    }
                </div>
                <p>{project.about}</p>
                <div className="project-tags">
                    {project.tags.map(tag => {
                        return (
                            <label className='tag' htmlFor="">{tag}</label>
                        )
                    })}
                </div>
            </div>
            <img src={project.image} className='project-photo' alt={project.title} />
        </div>
    )
}

export default ProjectCard
