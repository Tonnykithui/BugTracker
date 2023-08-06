import React from 'react';
import Draggable from '../draggable/Draggable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOtherUserTickets } from '../../redux';

const UserTickets = ({ user }) => {
  const tickets = useSelector(state => state.OtherUserTicketsReducer.tickets?.data);

  return (
    <div className=''>
      {(tickets !== null && tickets?.length > 0) ? (
        tickets.map(ticket => (
          <div className='p-1 bg-slate-100 m-2'>
            <h3 className='font-semibold'><span className='text-blue-600'>Title</span>: {ticket?.title}</h3>
            <p><span className='font-semibold text-blue-600'>Priority</span>: {ticket?.priority}</p>
            <h4><span className='font-semibold text-blue-600'>Description</span>: {ticket?.description}</h4>
          </div>
        ))
      ) : (
        <div className=' h-full w-full text-center justify-center flex'>
          <h2 className='text-xl font-semibold'>No Tickets Assigned</h2>
        </div>
      )}
    </div>
  );
};

export default UserTickets;
// grid grid-cols-2 gap-2 bg-slate-100 h-full p-2