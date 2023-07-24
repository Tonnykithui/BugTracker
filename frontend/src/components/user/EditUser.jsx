import React, { useState } from 'react'
import './user.css';
import Button from '../button/Button';
import { updateUserDetails } from '../../redux/user/actions/updateUser';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from '../modal/Modal';


const EditUser = ({ userId }) => {
    
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [role, setRole] = useState();
    const roles = ['PROJECTMANAGER', 'TESTER', 'DEVELOPER'];

    const dispatch = useDispatch();

    const handleSubmit = () => {
        let user = {
            firstname,
            lastname,
            email,
            phone,
            role
        };
        dispatch(updateUserDetails(userId, user))
    }
    return (
        <div className='h-full'>
            <ToastContainer />
            <div className="edit-user-details grid grid-rows-3 p-2">
                <div className="top h-full col-span-1 flex flex-row w-full row-span-full">
                    <div className="edit-user w-full">
                        <label htmlFor="firstname">Firstname</label>
                        <input
                            type="text"
                            name="" id=""
                            placeholder='Enter firstname'
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                    </div>
                    <div className="edit-user w-full">
                        <label htmlFor="lastname">Lastname</label>
                        <input
                            type="text"
                            name="" id=""
                            placeholder='Enter lastname'
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                        />
                    </div>
                    <div className="edit-user w-full">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="" id=""
                            placeholder='Enter Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="middle flex flex-row gap-2 p-2 w-full h-full">
                    <div className="role w-full">
                        <label htmlFor="">Role</label>
                        <select
                            name="" id=""
                            className='middle-select'
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            {
                                roles.map(role => (
                                    <option value={role}>{role}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className='mobile w-full h-full'>
                        <label htmlFor="">Phone Number</label>
                        <input
                            type="text"
                            name="" id=""
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                </div>
                <div className="submit h-full row-span-1 p-2 mt-5 flex justify-end items-center">
                    <Button children='Submit'
                        style={{ background: 'blue', borderRadius: '5px', color: 'white', padding: '8px' }}
                        onClick={handleSubmit}
                    />
                </div>
            </div>
        </div>
    )
}

export default EditUser

{/* <option value="">Developer</option>
                            <option value="">Project Manager</option>
                            <option value="">Tester</option> */}