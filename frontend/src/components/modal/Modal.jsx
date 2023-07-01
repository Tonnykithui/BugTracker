import React from 'react'
import './modal.css';
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { clearResource, closeBugSuccess } from '../../redux';
import BugDetails from '../bugDetails/BugDetails';
import BugForm from '../bug/BugForm';
import AddUserToProject from '../addUser/AddUserToProject';
import Project from '../project/Project';
import ConfirmDelete from '../confirmDelete/ConfirmDelete';


const Modal = ({ child, style }) => {
  console.log('CHILD TO DISPLAY', child);
  const dispatch = useDispatch();
  let childToDisplay;
  if (child == 'openBug') {
    childToDisplay = <BugDetails />
  } else if (child == 'createBug') {
    childToDisplay = <BugForm />
  } else if (child == 'addNewUserToProj') {
    childToDisplay = <AddUserToProject />
  } else if (child == 'confirmDelete') {
    childToDisplay = <ConfirmDelete />
  }
  else {
    childToDisplay = <Project />
  }
  console.log('CHILD TO DISPLAY', childToDisplay);
  return (
    <div className={`${style} modal`}>
      <div className="modal-outer-wrapper">
        <div className="modal-inner-wrapper">
          <div className="children">
            {
              childToDisplay
            }
          </div>
          <div className="close-icon">
            <AiOutlineClose onClick={() => { dispatch(closeBugSuccess()); dispatch(clearResource()) }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal