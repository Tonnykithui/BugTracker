import React, { useState } from 'react';
import './card.css';
import { BsClockHistory } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { createNewProjectModalSuc, fetchSingleProject, openBugDeleteModal } from '../../redux';
import { useDispatch } from 'react-redux';
import { BsThreeDotsVertical } from "react-icons/bs";
import Button from '../button/Button';


const Card = ({ project }) => {

  const [showHiddenOptions, setShowHiddenOptions] = useState(false);

  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(fetchSingleProject(project._id))
  }

  setTimeout(() => {
    setShowHiddenOptions(false);
  }, 5000);

  return (

    <div className='project-card'>
      <div className='project-head flex flex-row justify-between relative items-center'>
        <h4 className='font-semibold'>{project.name}</h4>
        <BsThreeDotsVertical onMouseOver={() => setShowHiddenOptions(true)} />
        {
          showHiddenOptions &&
          <div className='flex flex-row text-sm gap-1 absolute right-0'>
            <Button
              children='Edit'
              style={{ background: 'blue', padding: '2px', borderRadius: '8px', color: 'white' }}
              onClick={
                () => {
                  dispatch(fetchSingleProject(project._id));
                  dispatch(createNewProjectModalSuc('editProjectModal'))
                }}
            />
            <Button
              children='Delete'
              style={{ background: 'red', padding: '2px', borderRadius: '8px', color: 'white' }}
              onClick={(event) => { event.stopPropagation(); dispatch(openBugDeleteModal('confirmDeleteProject', `${project._id}`)) }}
            />
          </div>
        }
      </div>
      <Link to={`/project/${project._id}`} onClick={handleClick}>
      {/* overflow-y-scroll */}
        <div className='h-20'>
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
      </Link>
    </div >

  )
}

export default Card