import React from 'react'
import ProjectCard from './ProjectCard';
import './ProjectDetails.css';

const ProjectDetails = () => {
    const projects = [
        {
            id:1,
            name:'Task mgt',
            progress:34,
            team:['Tonny', 'Skeet', 'Dreil'],
            deadline:'2 weeks'
        },
        {
            id:2,
            name:'Chat design app',
            progress:76,
            team:['Tonny', 'Skeet', 'Dreil'],
            deadline:'3 weeks'
        }
      ]
  return (
    <div className='projects-details'>
        {
            projects.map((project) => (
                <ProjectCard />
            ))
        }
    </div>
  )
}

export default ProjectDetails