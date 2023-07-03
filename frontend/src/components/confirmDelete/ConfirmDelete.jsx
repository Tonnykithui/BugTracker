import React from 'react'
import Button from '../button/Button'
import { useDispatch, useSelector } from 'react-redux';
import { closeBugDeleteModal } from '../../redux/modal/actions/confirmDelete';
import { deleteBug } from '../../redux/bug/actions/deleteBug';
import { deleteProject } from '../../redux';

const ConfirmDelete = ({ message }) => {
  
  const toDelete = message
  const dispatch = useDispatch();
  const bugToDeleteId = useSelector(state => state.confirmBugDeleteReducer.bug);
  const bugProjectId = useSelector(state => state.projectSingleReducer.project?.data.project._id);

  const projectToDeleteId = useSelector(state => state.confirmBugDeleteReducer.bug);

  return (
    <div className='bg-white p-5'>
      <h3>Are you sure you want to delete this {toDelete}</h3>
      <div className='flex flex-row gap-1'>
        <Button
        style={{
          padding: '5px',
          background: 'red',
          color: 'white',
          borderRadius: '8px',
          width:'100%'
        }}
        onClick={() => dispatch(closeBugDeleteModal())}
        >
          Cancel
        </Button>
        <Button
        style={{
          padding: '5px',
          background: 'blue',
          color: 'white',
          borderRadius: '8px',
          width:'100%'
        }}
        onClick={
          () => message ===  'confirmDeleteBug' ? 
          dispatch(deleteBug(bugToDeleteId, bugProjectId)) : 
          dispatch(deleteProject(projectToDeleteId)) 
        }
        >
          Confirm
        </Button>
      </div>
    </div>
  )
}

export default ConfirmDelete