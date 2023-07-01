import React from 'react';
import './card.css';
import { BsClockHistory } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { fetchSingleProject } from '../../redux';
import { useDispatch } from 'react-redux';


const Card = ({ project }) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(fetchSingleProject(project._id))
  }

  return (
    <Link to={`/project/${project._id}`} onClick={handleClick}>
      <div className='project-card' >
        <div className='project-head'><h1>{project.name}</h1></div>
        <div className='h-28 overflow-y-scroll'>
          <p>{project.description}</p>
        </div>
        <div className="proj-details-bottom">
          <div className='font-semibold'>
            <p>Project Start</p>
            <div className='project-timeline'>
              <BsClockHistory />
              <p>{project.creationDate.slice(0, 10)}</p>
            </div>
          </div>
          <div className='project-details'>
            <div className='project-team'>
              <h1 className='team-heading'>Created By: </h1>
              <div className='team'>
                <div>{project.createdBy.firstname} {project.createdBy.lastname}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card