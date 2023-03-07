import React from 'react';
import Tick from './Tick';

const SelfTickets = () => {
  return (
  <div className='absolute w-11/12 ml-12 mx-4 
  bg-white h-full rounded top-9
   shadow-md
  '>
      <div className='p-2'>
      <h2 className='text-black text-xl'>Ticket</h2>
      </div>
      <div className='flex flex-row text-center bg-slate-100'>
        <h2 className='w-1/6'>Project</h2>
        <h2 className='w-1/6'>Ticket</h2>
        <h2 className='w-1/6'>Status</h2>
        <h2 className='w-1/6'>Priority</h2>
        <h2 className='w-1/6'>Entry Date</h2>
        <h2 className='w-1/6'>Due Date</h2>
      </div>
      <div>
        <ul>
          <Tick />
          <Tick />
          <Tick />
          <Tick />
          <Tick />
        </ul>
      </div>
  </div>
);
};


export default SelfTickets;
