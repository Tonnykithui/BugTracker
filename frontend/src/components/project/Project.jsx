import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../button/Button';
import Input from '../input/Input';
import './project.css';
import { addNewProjectThunk, closeBugSuccess } from '../../redux';
import { useDispatch, useSelector } from 'react-redux';

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

const Project = () => {

    const users = useSelector(state => state.usersFetchReducer.users.data);
    const [projectName, setProjectName] = useState('');
    const [description, setDescription] = useState('');
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOptionChange = (event) => {
        const selectedValues = Array.from(
            event.target.selectedOptions,
            (option) => option.value
        );
        setSelectedOptions(selectedValues);
    };

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        let project ={
            name:projectName,
            description,
            selectedOptions
        };
        dispatch(addNewProjectThunk(project))
    };

    return (
        <>
            <div className='bg-slate-300 p-2'>
                <h2 className='add-project'>Add Project</h2>
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
                            <Button children='Submit' style={addBtn} onClick={(e) => handleSubmit(e)} />
                            <Button children='Cancel' style={cancelBtn} onClick={() => dispatch(closeBugSuccess())}/>
                        </div>
                    </form>

                </div>
            </div>
        </>
    );
};

export default Project;
