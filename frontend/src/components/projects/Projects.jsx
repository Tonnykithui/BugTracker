import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Modal from '../modal/Modal';
import './project.css';
import ProjectList from './ProjectList';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import { ToastContainer } from 'react-toastify';

const Projects = () => {
  const newProject = useSelector(state => state.addNewProjectModalReducer.open);
  const displayConfirmDelProj = useSelector(state => state.confirmBugDeleteReducer.modalOpen);
  const childToDispFromConfirmModal = useSelector(state => state.confirmBugDeleteReducer.child);
  const editProjectChild = useSelector(state => state.addNewProjectModalReducer.child);

  const childToDisplay1 = 'addNewProjectModal'
  const childToDisplay2 = 'confirmDeleteProject'
  let childToDisplay = '';
  if (childToDispFromConfirmModal == childToDisplay2) {
    childToDisplay = childToDisplay2
  } else if (editProjectChild == 'editProjectModal') {
    childToDisplay = 'editProjectModal'
  }
  else {
    childToDisplay = childToDisplay1
  }

  return (
    <>
      <div className="project-page">
        <Sidebar />
        <ProjectList />
        {
          (newProject || displayConfirmDelProj) &&
          <>
            <Modal child={`${childToDisplay}`}
              style={{}} />
            <ToastContainer />
          </>
        }
      </div>
    </>
  )
}

export default Projects