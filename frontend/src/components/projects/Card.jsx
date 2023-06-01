import React from 'react';
import './card.css';
import { BsClockHistory } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Card = ({ project }) => {
  return (
    <Link to='/Project/:id'>
    <div className='project-card'>
        <div className='project-head'><h1>{project.name}</h1></div>
        <div className='project-timeline'>
           <BsClockHistory />
           <p>{project.creationDate.slice(0,10)}</p>
        </div>
        <div className='project-details'>
            <div className='project-team'>
                <h1 className='team-heading'>Created By: </h1>
                <div className='team'>
                   <div>{project.createdBy.firstname} {project.createdBy.lastname}</div>
                </div>
            </div>
            {/* <div className='project-progress'>
                <h1 className='progress-heading'>Progress</h1>
                <div className='progress'>
                   <p>30%</p>
                </div>
            </div> */}
        </div>
    </div>
    </Link>
  )
}

export default Card