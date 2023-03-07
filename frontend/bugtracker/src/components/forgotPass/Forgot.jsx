import React from 'react';
import { Link } from 'react-router-dom';

const Forgot = () => {
  return (
    <div className='w-screen h-screen flex justify-center flex-col items-center'>
    <h2 className='text-center text-2xl text-white py-3'>Forgot Password?</h2>
    <div className='mt-2'>
        <Link to='/login' className=''>Login</Link>
    </div>
    <form action="" className='login-form w-96 pt-8 mt-2'>
        <div className='login-div-input'>
            <input type="text" name="" 
            id="" placeholder='Email'
            className='input w-full'/>
        </div>
        <div className='flex justify-center pb-3'>
        <button type="submit"
        className='btn'
        >Submit</button>
        </div>
    </form>
</div>
);
};

export default Forgot;
