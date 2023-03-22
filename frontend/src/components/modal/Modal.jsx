import React from 'react'
import './modal.css';
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { closeBugSuccess } from '../../redux';


const Modal = ({ children }) => {
  
  const dispatch = useDispatch();
  
  return (
    <div className='modal'>
      <div className="modal-outer-wrapper">
        <div className="modal-inner-wrapper">
          <div className="children">
            {
              children
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