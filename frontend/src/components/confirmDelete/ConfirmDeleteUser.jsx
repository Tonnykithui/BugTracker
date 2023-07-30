import React from 'react'
import Button from '../button/Button'
import { useDispatch, useSelector } from 'react-redux';
import { closeUserDeleteModal } from '../../redux/modal/actions/confirmUserDelete';
import { deleteUser } from '../../redux/user/actions/deleteUser';
import { useNavigate } from 'react-router-dom';

const ConfirmDeleteUser = ({ message }) => {

  const toDelete = message
  const dispatch = useDispatch();
  const userId = useSelector(state => state.confirmUserDeleteReducer.user);
  const navigate = useNavigate();

  return (
    <div className='bg-white p-5'>
      <h3>Are you sure you want to delete this User</h3>
      <div className='flex flex-row gap-1'>
        <Button
          style={{
            padding: '5px',
            background: 'red',
            color: 'white',
            borderRadius: '8px',
            width: '100%'
          }}
          onClick={() => dispatch(closeUserDeleteModal())}
        >
          Cancel
        </Button>
        <Button
          style={{
            padding: '5px',
            background: 'blue',
            color: 'white',
            borderRadius: '8px',
            width: '100%'
          }}
          onClick={
            () => {
              dispatch(deleteUser(userId));
              navigate('/teams');
            }
          }
        >
          Confirm
        </Button>
      </div>
    </div>
  )
}

export default ConfirmDeleteUser