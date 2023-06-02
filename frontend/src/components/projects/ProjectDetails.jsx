import React, { useState, useEffect } from 'react'
import ProjectCard from './ProjectCard';
import './ProjectDetails.css';

const ProjectDetails = () => {
    const projects = [
        {
            id: 1,
            name: 'Task mgt',
            progress: 34,
            title: 'Am the tide',
            team: ['Tonny', 'Skeet', 'Dreil'],
            deadline: '2 weeks'
        },
        {
            id: 2,
            name: 'Chat design app',
            progress: 76,
            title: 'Cant find the right words',
            team: ['Tonny', 'Skeet', 'Dreil'],
            deadline: '3 weeks'
        },
        {
            id: 4,
            name: 'School mgt project',
            progress: 24,
            title: 'Manage school info for students',
            team: ['Skeet', 'Dreil'],
            deadline: '2 weeks'
        },
        {
            id: 5,
            name: 'This is some other heading',
            progress: 96,
            title: 'This is just some random project',
            team: ['Tonny', 'Skeet'],
            deadline: '2 weeks'
        },
        ,
        {
            id: 6,
            name: 'Some interesting project in .net core',
            progress: 100,
            title: 'This is just some random project',
            team: ['Tonny', 'Skeet'],
            deadline: '2 weeks'
        }
    ]
    const [projectIndex, setProjectIndex] = useState(0);
    const [displayedProjects, setDisplayedProjects] = useState([
        projects[projectIndex],
        projects[projectIndex + 1]
    ]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newIndex = (projectIndex + 2) % projects.length;
            setProjectIndex(newIndex);
            setDisplayedProjects([projects[newIndex], projects[newIndex + 1]]);
        }, 30000);
        return () => clearInterval(intervalId);
    }, [projectIndex, projects]);

    return (
        <div className='projects-details'>
            {
                displayedProjects.map((project) => (
                    <ProjectCard />
                ))
            }
        </div>
    )
}

export default ProjectDetails