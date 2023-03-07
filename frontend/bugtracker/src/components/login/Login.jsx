import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
  <div className='w-screen h-screen flex justify-center flex-col items-center'>
      <h2 className='text-center text-2xl py-3'>Sign-In</h2>
      <div className='mt-2'>
          <Link to='/register' className=''>Register</Link>
      </div>
      <form action="" className='login-form w-96 pt-8 mt-2'>
          <div className='login-div-input'>
              <input type="text" name="" 
              id="" placeholder='Email'
              className='input w-full'/>
          </div>
          <div className='login-div-input'>
              <input type="password" name="" 
              id="" placeholder='Password'
              className='input w-full'
              />
          </div>
          <div className='flex justify-center pb-3'>
          <button type="submit"
          className='btn'
          >Login</button>
          </div>
      </form>
      <div className='text-lg'>
          <h3>Forgot Password ? <Link to='/forgot'>Reset Password</Link></h3>
      </div>
  </div>
  );
};

export default Login;
