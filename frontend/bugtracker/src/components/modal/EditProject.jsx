import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {  hideEditProject } from '../../redux';
import CancelBtn from './CancelBtn';

const EditProject = () => {

    const [project, setProject] = useState('');
    const [description, setDescription] = useState('');
    const [authors, setAuthors] = useState();

    const users = useSelector(state => state.users.data);
    const showModal = useSelector(state => state.modal.editProject);
    const projToEdit = useSelector(state => state.modal.editProjectData);
    const dispatch = useDispatch();
    console.log(projToEdit);
    //const { Project } = projToEdit;

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

        //dispatch(createProjectThunk(projectData))
    }
   
  return (
  <div className={styling}>
      <form action="" className='register-form relative'>
        <h2 className='text-center font-semibold 
        text-blue-500 text-2xl mb-5'>EDIT PROJECT</h2>
        <div onClick={() => dispatch(hideEditProject())} >
        <CancelBtn />
        </div>
        
        <div className='flex flex-col'>
            <div className='mb-2'>
                <input type="text" name="" 
                id=""  placeholder={projToEdit.projectName}
                className='w-80 h-10'  value={project} 
                onChange={(e) => setProject(e.target.value)}
                />
            </div>
            <div>
                <textarea name="" id="" cols="30" rows="10" className='w-80'
                placeholder={projToEdit.description} value={description}
                onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </div>
        </div>
        <div className='register-input'>
            <span>
                {
                <li>{projToEdit.Assigned}</li>
                }
            </span>
            <select name="" id="" className='w-80'  multiple={true} 
            onChange={handleChange}
            >
            {
                users.map(user => (
                    <option value={user.firstName} key={user.id}>{user.firstName}
                    </option>
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

export default EditProject;
