import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
  <div className='w-screen h-screen flex justify-center flex-col items-center'>
      <div className='text-center mb-5'>
      <h2 className='font-semibold text-xl'>Bug Tracker</h2>
      <div className='my-1 text-sm font-semibold'>
          <Link to='/login'>Login</Link>
      </div>
      </div>
      <div>
      <form action="" className='register-form'>
          <h2 className='text-center font-semibold text-blue-500 text-2xl mb-5'>Sign Up</h2>
          <div className='flex flex-row'>
              <div>
                  <input type="text" name="" 
                  id="" placeholder='FirstName'
                  className='input' 
                  />
              </div>
              <div>
                  <input type="text" name="" 
                  id="" placeholder='LastName'
                  className='input'
                  />
              </div>
          </div>
          <div className='register-input'>
              <input type="text" name="" 
              id="" placeholder='Phone Number'
              className='input w-full'
              />
          </div>
          <div className='register-input'>
              <input type="email" name="" 
              id="" placeholder='Email'
              className='input w-full'
              />
          </div>
          
          <div className='register-input'>
              <input type="password" name="" 
              id="" placeholder='Password'
              className='input w-full'
              />
          </div>
          <div className='register-input'>
              <input type="password" name="" 
              id="" placeholder='Confirm Password'
              className='input w-full'
              />
          </div>
          <div className='flex justify-center pb-3'>
          <button type="submit"
          className='btn'
          >Create Account</button>
          </div>
          
      </form>
      </div>
      
  </div>);
};

export default Register;
