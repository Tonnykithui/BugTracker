import React, { useState } from 'react'
import Button from '../button/Button';
import { useSelector } from 'react-redux';


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

    const handleOptionChange = (event) => {
        const selectedValues = Array.from(event.target.selectedOptions, (option) => option.value);
        setSelectedOptions(selectedValues);
    };

    const users = useSelector(state => state.fetchUsersInProject.users);

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
                                <option value="234562">Tonny Muli</option>
                                <option value='123434'>kithui Junior</option>
                                <option value="876543">Muli Kununga</option>
                            </select>
                        </div>
                        <Button style={addUserBtnStyling}>+</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddUserToProject