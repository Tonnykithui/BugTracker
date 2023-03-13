import React from 'react'
import './ProjectDetails.css';
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoStarSharp } from "react-icons/io5";

const ProjectCard = () => {
    return (
        <div className='project-details-card'>
            <div className='wrapper'>
                <div className="header">
                    <div>
                        <h2>Logo</h2>
                    </div>
                    <div className='flex flex-row items-center'>
                        <IoStarSharp className='pr-2 text-3xl text-red-500' />
                        <BsThreeDotsVertical />
                    </div>
                </div>
                <div className="project-status">
                    <div className="progress">
                        <h2>Inprogress</h2>
                    </div>
                    <div className="priority">
                        <h2>Medium</h2>
                    </div>
                </div>
                <div className='project-timeline'>
                    <div className="project-tasks">
                        <h1><span>Task Completed:</span> 20 / 45</h1>
                    </div>
                    <div className="horizontal-timeline">

                    </div>
                </div>
                <div className="project-type">
                    <h2>IOS</h2>
                    <h2>Android</h2>
                </div>
                <div className="assigned-teams">
                    <ul>
                        <li>TO</li>
                        <li>Mk</li>
                        <li>Sk</li>
                        <li>+2</li>
                    </ul>
                </div>
                <div className="project-due-date">
                    <h2>DUE DATE : 2022-04-05</h2>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard