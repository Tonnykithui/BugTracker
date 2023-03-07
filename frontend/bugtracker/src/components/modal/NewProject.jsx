import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createProjectThunk, hideProjectModal } from '../../redux';
import CancelBtn from './CancelBtn';

const NewProject = () => {

    const [project, setProject] = useState('');
    const [description, setDescription] = useState('');
    const [authors, setAuthors] = useState([]);

    const showModal = useSelector(state => state.modal.addProject);
    const users = useSelector(state => state.users.data);
    const dispatch = useDispatch();
    
    const styling = [];
    if(showModal){
        styling.push('modal');
    } else{
        styling.push('hideEditModal');
    }

    const handleChange = (e) => {
        let value = Array.from(e.target.selectedOptions, option => option.value);
        
        setAuthors(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const projectData = {
            id:Math.random() * 5,
            Project:project,
            Description:description,
            Assigned:authors
        }

        setProject('');
        setDescription('');
        setAuthors([]);

        dispatch(createProjectThunk(projectData))
    }

  return (
  <div className={styling}>
      <form action="" className='register-form relative'>
        <h2 className='text-center font-semibold text-blue-500 text-2xl mb-5'>CREATE PROJECT</h2>
        <div onClick={() => dispatch(hideProjectModal())} >
        <CancelBtn />
        </div>
        
        <div className='flex flex-col'>
            <div className='mb-2'>
                <input type="text" name="" 
                id="" placeholder='Project'
                className='w-80 h-10' value={project} 
                onChange={(e) => setProject(e.target.value)}
                />
            </div>
            <div>
                <textarea name="" id="" cols="30" rows="10" className='w-80'
                placeholder='Description' value={description}
                onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </div>
        </div>
        <div className='register-input'>
            <select name="" id="" className='w-80'  multiple={true} 
            onChange={handleChange}
            >
            {
                users.map(user => (
                    <option value={user.firstName + " " + user.fastName} key={user.id}>{user.firstName} {user.lastName}</option>
                ))
            }
            </select>
        </div>
        
        
        <div className='flex justify-center pb-3'>
        <button type="submit"
        className='btn' onClick={handleSubmit}
        >Update Account</button>
        </div>
        
    </form>
  </div>
);
};

export default NewProject;
