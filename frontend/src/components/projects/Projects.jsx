import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Modal from '../modal/Modal';
import './project.css';
import ProjectList from './ProjectList';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';

const Projects = () => {
  const newProject = useSelector(state => state.addNewProjectModalReducer.open);
  const childToDisplay = 'addNewProjectModal'

  // const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated);

  return (
    <>
      <div className="project-page">
        <Sidebar />
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
      </div>
    </>
  )
}

export default Projects