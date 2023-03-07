import React from 'react';
import Comment from './Comment';
import { useSelector } from 'react-redux';

const Ticket = () => {

    const ticketDetails = useSelector(state => state.fetchProject.ticketData);

  return (
  <div className='bg-white grid grid-cols-2 h-60 mt-4 mx-9 gap-1'>
      <div className='flex flex-row'>
          <div className='pl-2 w-2/5 h-full'>
              <div>
              <h3 className='text-slate-400'>Title : <span className='text-xl text-blue-500'>{ticketDetails.ticketTitle}</span></h3>
              </div>
              <div className='mt-1'>
                  <h3 className='text-slate-400'>Status : <span className='text-blue-500'>{ticketDetails.ticketStatus}</span></h3>
              </div>
              <div className='mt-1'>
                  <h3 className='text-slate-400'>Priority : <span className='text-blue-500'>{ticketDetails.ticketPriority}</span></h3>
              </div>
              <div className='mt-2'>
                  <h3 className='text-slate-400'>Assigned</h3>
                  {ticketDetails.ticketOwned}
              </div>
          </div>
          <div className='w-3/5'>
              <h2 className='text-slate-400'>Description</h2>
              <p>{ticketDetails.ticketDescription}</p>
          </div>
      </div>
      <div className='relative shadow-lg pl-2'>
          <h3 className='text-blue-500 text-xl border-b-2 pr-2'>Comments</h3>
          <div className='h-44 overflow-y-auto'>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          </div>
          <div className='flex flex-row absolute w-full bottom-0 p-1'>
              <input type="text" name="" id=""
               className='w-4/5 outline-none text-lg border-blue-200 border-2 pl-1' placeholder='Enter comment'
               />
              <button className='btn-new-proj w-1/5'>Comment</button>
          </div>
      </div>
  </div>
);
};

export default Ticket;
