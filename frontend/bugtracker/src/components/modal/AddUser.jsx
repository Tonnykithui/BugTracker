import React, { useState } from 'react';
import CancelBtn from './CancelBtn';
import { useDispatch, useSelector } from 'react-redux';
import { hideEditUser, updateUserDetails } from '../.././redux/index'

const AddUser = () => {
    
    const editModal = useSelector(state => state.modal.editUser);

    const user = useSelector(state => state.modal.editUserData);
    console.log(user);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    const dispatch = useDispatch();

    const styling = [];

    if(editModal){
        styling.push('showEditModal')
    } else{
        styling.push('hideEditModal')
    }

    const updUser = {
        id:user.id,
        FirstName:firstName,
        LastName:lastName,
        Email:email,
        PhoneNumber:phoneNumber
    }

    const handleUpdUser = (e) => {
        e.preventDefault();
        dispatch(updateUserDetails(user.id, updUser))
    }

  return (
    <div className={styling}>
    <div>
    <form action="" className='register-form relative'>
        <h2 className='text-center font-semibold text-blue-500 text-2xl mb-5'>Edit User Account</h2>
        <div onClick={() => dispatch(hideEditUser())} >
        <CancelBtn />
        </div>
        
        <div className='flex flex-row'>
            <div>
                <input type="text" name="" 
                id="" placeholder={user.firstName}
                className='input' value={firstName} 
                onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div>
                <input type="text" name="" 
                id="" placeholder={user.lastName}
                className='input' value={lastName} 
                onChange={(e) => setLastName(e.target.value)}
                />
            </div>
        </div>
        <div className='register-input'>
            <input type="text" name="" 
            id="" placeholder={user.phone}
            className='input w-full' value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)}
            />
        </div>
        <div className='register-input'>
            <input type="email" name="" 
            id="" placeholder={user.email}
            className='input w-full' value={email} 
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className='register-input'>
            <select name="" id="" className='input w-full' 
                value={role} placeholder={user.role} 
                onChange={(e) => setRole(e.target.value)}>
                <option value="">Admin</option>
                <option value="">Developer</option>
                <option value="">Tester</option>
            </select>
        </div>
        <div className='flex justify-center pb-3'>
        <button type="submit"
        className='btn' onClick={handleUpdUser}
        >Update Account</button>
        </div>
        
    </form>
    </div>
</div>
);
};

export default AddUser;
