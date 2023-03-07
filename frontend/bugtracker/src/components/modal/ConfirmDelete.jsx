import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CancelBtn from './CancelBtn';
import { hideConfirm } from '../../redux/index';
import { deleteUserFromEnd } from '../../redux/user/delete/DuserActions';

const ConfirmDelete = () => {

  const confirmDel = useSelector(state => state.modal.confirmDelete);
  const user = useSelector(state => state.modal.confirmUserData);
  const dispatch = useDispatch();

  const styling = [];
  if(confirmDel){
    styling.push('modal')
  } else{
    styling.push('hideEditModal')
  }

  const handleCancelBtn = (e) => {
    e.preventDefault();
    dispatch(hideConfirm());
  } 

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteUserFromEnd(user.id));
  }

  return (
  <div className={styling}>
    <div>
      <form action="" className='register-form relative'>
        <div>
          <h3 className='text-xl mb-3'>Are you sure you want to delete
           {user.FirstName} {user.LastName}?</h3>
          <div>
            <button className='user-edit-btn mr-2'
            onClick={handleDelete}
            >Confirm</button>
            <button className='user-delete-btn'
             onClick={handleCancelBtn }
            >Cancel</button>
          </div>
          <div onClick={() => dispatch(hideConfirm())}>
          <CancelBtn />
          </div>
        </div>
      </form>
    </div>
  </div>
);
};

export default ConfirmDelete;
