import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CancelBtn from './CancelBtn';
import { createNewUser, hideAddNew } from '../../redux/index';

const NewUser = () => {

    const addUser = useSelector(state => state.modal.addNewUser);

    const dispatch = useDispatch();

    const styling = [];

    if(addUser){
        styling.push('modal');
    } else {
        styling.push('hideEditModal');
    }

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(firstName);
    const [role, setRole] = useState('developer');

    const user = {
        id:Math.random() * 3000 + 200,
        FirstName:firstName,
        LastName:lastName,
        PhoneNumber:phoneNumber,
        Email:email,
        Password:password
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createNewUser(user));

        setEmail('');
        setFirstName('');
        setLastName('');
        setPassword('');
        setPhoneNumber('');
    }
    

  return (
  <div className={styling}>
      <form className='register-form relative'>

          <div onClick={() => dispatch(hideAddNew())}>
          <CancelBtn />
          </div>
          
          <h2 className='text-center font-semibold text-blue-500 text-2xl mb-5'>Register New User</h2>
          <div className='flex flex-row'>
              <div>
                  <input type="text" name="" 
                  placeholder='FirstName'
                  className='input' value={firstName} 
                  onChange={(e) => setFirstName(e.target.value)}
                  />
              </div>
              <div>
                  <input type="text" name="" 
                  placeholder='LastName'
                  className='input' value={lastName} 
                  onChange={(e) => setLastName(e.target.value)}
                  />
              </div>
          </div>
          <div className='register-input'>
              <input type="text" name="" 
              placeholder='Phone Number'
              className='input w-full' value={phoneNumber} 
              onChange={(e) => setPhoneNumber(e.target.value)}
              />
          </div>
          <div className='register-input'>
              <input type="email" name="" 
              placeholder='Email'
              className='input w-full' value={email} 
              onChange={(e) => setEmail(e.target.value)}
              />
          </div>
          
          <div className='register-input'>
              <input type="password" name="" 
              placeholder='Password'
              className='input w-full' value={firstName} 
              onChange={(e) => setPassword(e.target.value)}
              />
          </div>
          <div className='register-input'>
            <select name="" className='input w-full' value={role}
             onChange={(e) => setRole(e.target.selectedOptions)}>
                <option value="">Admin</option>
                <option value="">Developer</option>
                <option value="">Tester</option>
            </select>
        </div>
          <div className='flex justify-center pb-3'>
          <button type="submit"
          className='btn' onClick={handleSubmit}
          >Create Account</button>
          </div>
          
      </form>
    </div>
)
};

export default NewUser;
