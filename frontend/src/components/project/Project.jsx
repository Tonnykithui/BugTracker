import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../button/Button';
import Input from '../input/Input';
import './project.css';
import { addNewProjectThunk, clearResourceSingleProject, closeBugSuccess } from '../../redux';
import { useDispatch, useSelector } from 'react-redux';
import { GoX } from "react-icons/go";


const cancelBtn = {
    background: 'red',
    padding: '4px',
    borderRadius: '8px',
    color: 'white',
    width: '100%',
};

const addBtn = {
    background: 'blue',
    padding: '4px',
    borderRadius: '8px',
    color: 'white',
    width: '100%',
};

// const schema = yup.object().shape({
//     name: yup.string(),
//     description: yup.string(),
// });

const Project = ({ isEdit }) => {
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 2000);
    // }, [])

    const users = useSelector(state => state.usersFetchReducer.users.data);
    const project = useSelector(state => state.projectSingleReducer.project?.data.project);
    const projectAssignedMembers = useSelector(state => state.projectSingleReducer.project?.data.assignedProjectMembers)
    const [projectName, setProjectName] = useState(isEdit ? project?.name : '');
    const [description, setDescription] = useState(isEdit ? project?.description : '');
    const [selectedOptions, setSelectedOptions] = useState(isEdit ?
        projectAssignedMembers?.map((item) => item._id)
        : []);

    const handleOptionChange = (event) => {
        const selectedValues = Array.from(
            event.target.selectedOptions,
            (option) => option.value
        );
        setSelectedOptions(selectedValues);
    };

    console.log('PROJECT LOG', project);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        let project = {
            name: projectName,
            description,
            selectedOptions
        };

        console.log('EDITED PROJECT DETAILS', project)
        console.log(selectedOptions)
        // dispatch(addNewProjectThunk(project))
    };

    // if (loading) {
    //     return <div>loading</div>
    // }
    return (
        <>

            <div className='bg-slate-300 p-2'>
                <h2 className='add-project'>{isEdit ? 'Edit project' : 'Add Project'}</h2>
                {isEdit &&
                    <>
                        <h2 className='text-center font-semibold text-xl'>Users in project</h2>
                        <div className='flex flex-row list-none w-full justify-center'>

                            {projectAssignedMembers?.map((user) => (
                                <li className='bg-white rounded-md p-1 ml-1 flex flex-row items-center'>
                                    {user?.firstname} {user?.lastname}
                                    <GoX
                                        className='text-red-600 hover:cursor-pointer'
                                        onClick={() => selectedOptions.filter((item) => item === user._id)} />
                                </li>
                            ))}
                        </div>
                    </>
                }

                <div className='add-project-wrap'>
                    <form>
                        <div className='w-full p-2'>
                            <label htmlFor='name' className='font-semibold block'>Name</label>
                            <Input styles='form-input' id='name' name='name'
                                value={projectName} onChange={(e) => setProjectName(e.target.value)}
                            />
                            {/* {errors.name && <span>{errors.name.message}</span>} */}
                        </div>
                        <div className='w-full p-2'>
                            <label htmlFor='description' className='font-semibold block'>Description</label>
                            <textarea name="" maxLength='200' id="description" className='description'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                cols="50" rows="5"></textarea>
                            {/* {errors.description && <span>{errors.description.message}</span>} */}
                        </div>
                        <div className='w-full p-2'>
                            <label htmlFor='' className='font-semibold text-left'>Assign Devs</label>
                            <select name='' id='' multiple
                                value={selectedOptions}
                                onChange={handleOptionChange}
                                className='form-input'
                            >
                                {
                                    users.map((user) => (
                                        <option value={user._id}>{user.firstname} {user.lastname}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className='add-project-btns'>
                            <Button
                                children='Submit'
                                style={addBtn}
                                onClick={(e) => handleSubmit(e)} />
                            <Button
                                children='Cancel'
                                style={cancelBtn}
                                onClick={() => { dispatch(clearResourceSingleProject()); dispatch(closeBugSuccess()) }} />
                        </div>
                    </form>

                </div>
            </div>
        </>
    );
};

export default Project;
