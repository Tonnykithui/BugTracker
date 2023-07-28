import React, { useState } from 'react'
import Button from '../button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addUserToProject } from '../../redux/user/actions/AddUserToProject';
import { fetchUsersInProject } from '../../redux';


const addUserBtnStyling = {
    background: 'blue',
    padding: '4px',
    borderRadius: '8px',
    color: 'white',
    width: '100%',
    marginTop: '10px'
}

const AddUserToProject = () => {

    const [selectedOptions, setSelectedOptions] = useState([]);
    const dispatch = useDispatch();
    const projectId = useSelector(state => state.projectSingleReducer.project.data.project._id)

    const handleOptionChange = (event) => {
        const selectedValues = Array.from(event.target.selectedOptions, (option) => option.value);
        setSelectedOptions(selectedValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        for (let i = 0; i < selectedOptions.length; i++) {
            dispatch(addUserToProject(selectedOptions[i], projectId))
        }
        dispatch(fetchUsersInProject(projectId))
    }

    const users = useSelector(state => state.fetchUsersInProject.users);
    const allUsers = useSelector(state => state.usersFetchReducer.users.data);

    return (
        <div className='bg-slate-200 p-5 rounded-lg flex flex-row gap-10'>
            <div>
                <div>
                    <p className='font-semibold text-slate-500'>Project X</p>
                </div>
                <div>
                    <h2 className='text-black font-semibold text-lg'>Users Precent In Project</h2>
                </div>
                <div>
                    <ul>
                        {
                            users.map((user) => (
                                <li>{user.firstname} {user.lastname}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div>
                <div className="">
                    <form action="">
                        <div className="">
                            <label htmlFor="" className='text-black font-semibold'>Users</label>
                            <select name="" id="" multiple value={selectedOptions} onChange={handleOptionChange}
                                className='border-none outline-none p-2 rounded-lg w-full h-full mt-2'>
                                    {
                                        allUsers.map((user) => (
                                            <option value={user._id}>{user.firstname} {user.lastname}</option>
                                        ))
                                    }
                            </select>
                        </div>
                        <Button style={addUserBtnStyling} onClick={(e) => handleSubmit(e)}>+</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddUserToProject