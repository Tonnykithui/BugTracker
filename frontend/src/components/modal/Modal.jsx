import React from 'react'
import './modal.css';
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { closeBugSuccess } from '../../redux';
import BugDetails from '../bugDetails/BugDetails';
import BugForm from '../bug/BugForm';
import AddUserToProject from '../addUser/AddUserToProject';


const Modal = ({ child, style }) => {
  
  const dispatch = useDispatch();
  let childToDisplay;
  if(child == 'openBug'){
    childToDisplay = <BugDetails />
  } else if(child == 'createBug'){
    childToDisplay = <BugForm />
  } else {
    childToDisplay = <AddUserToProject />
  }
  
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
            <AiOutlineClose onClick={() => dispatch(closeBugSuccess())}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal