import React from 'react'
import Seperator from '../../common/socials/separator/Seperator'
import { SkillsData } from '../../data/skills'
import SkillCard from './SkillCard'
import './Skills.css'

const Skills = () => {
    const data = SkillsData
    return (
        <div className='skills'>
            <Seperator />
            <label htmlFor="" className="section-title">Skills</label>
            <div className="skills-container">
                {data.map(item => {
                    return (
                        <div className='skills-section'>
                            <label htmlFor="" className='skills-section-title'>{item.type}</label>
                            <div className="skills-list">
                                {item.list.map(skill => {
                                    return (
                                        <SkillCard skill={skill}/>
                                )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills
