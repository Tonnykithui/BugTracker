import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../button/Button';
import Modal from '../modal/Modal';
import './project.css';
import ProjectList from './ProjectList';


const Projects = () => {
  const newProject = useSelector(state => state.addNewProjectModalReducer.open);
  const childToDisplay = 'addNewProjectModal'

  return (
    <>
      {
        newProject ?
          (
            <>
              <ProjectList />
              <Modal child={`${childToDisplay}`}
                style={{}} />
            </>
          ) :
          (
            <ProjectList />
          )
      }
    </>
  )
}

export default Projects