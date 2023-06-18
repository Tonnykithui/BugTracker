import React from 'react'
import './user.css';
import Button from '../button/Button';

const EditUser = () => {
    return (
        <div className='h-full'>
            <div className="edit-user-details grid grid-rows-3 p-2">
                <div className="top h-full col-span-1 flex flex-row w-full row-span-full">
                    <div className="edit-user w-full">
                        <label htmlFor="firstname">Firstname</label>
                        <input type="text" name="" id="" placeholder='Enter firstname' />
                    </div>
                    <div className="edit-user w-full">
                        <label htmlFor="lastname">Lastname</label>
                        <input type="text" name="" id="" placeholder='Enter lastname' />
                    </div>
                    <div className="edit-user w-full">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="" id="" placeholder='Enter Email' />
                    </div>
                </div>
                <div className="middle flex flex-row gap-2 p-2 w-full h-full">
                    <div className="role w-full">
                        <label htmlFor="">Role</label>
                        <select name="" id="" className='middle-select'>
                            <option value="">Developer</option>
                            <option value="">Project Manager</option>
                            <option value="">Tester</option>
                        </select>
                    </div>
                    <div className='mobile w-full h-full'>
                        <label htmlFor="">Phone Number</label>
                        <input type="text" name="" id=""/>
                    </div>
                </div>
                <div className="submit h-full row-span-1 p-2 mt-5 flex justify-end items-center">
                    <Button children='Submit' 
                    style={{background:'blue', borderRadius: '5px', color: 'white', padding:'8px'}}
                    />
                </div>
            </div>
        </div>
    )
}

export default EditUser