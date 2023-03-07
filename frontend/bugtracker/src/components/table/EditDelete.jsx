import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProjectThunk, showEditProject } from '../../redux';

const EditDelete = ({id}) => {

    const [showButtons, setShowButtons] = useState(false);
    const projects = useSelector(state => state.fetchProject.data);
    const project = projects.find(project => project.id == id);

    const handleButtons = (e) => {
        e.preventDefault();
        setShowButtons(!showButtons);
        console.log(id);
    }

    if(showButtons){
        setTimeout(() => {
            setShowButtons(false)
        }, 5000);
    }

    const dispatch = useDispatch();

  return <div className='w-1  pr-2 cursor-pointer relative ml-3'>
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
  onClick={handleButtons} 
  viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
  </svg>
  {
      showButtons && (
        <div className='absolute top-1 right-2 flex flex-row'>
           <button className='bg-blue-400 rounded text-white p-1'
           onClick={() => dispatch(showEditProject(project))}
           >Edit</button>
           <button 
           className='bg-red-400 rounded text-white ml-1 p-1'
           onClick={() => dispatch(deleteProjectThunk(id))}
           >Delete</button>
        </div>
      )
  }
  
  </div>;
};

export default EditDelete;
