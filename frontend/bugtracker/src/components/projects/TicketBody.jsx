import React from 'react';
import { useDispatch } from 'react-redux';
import { dispatchProj } from '../../redux';

const TicketBody = ({ ticket }) => {

  const dispatch = useDispatch();

  return (

      <li className='flex flex-row cursor-pointer hover:bg-blue-200 p-2' 
      onClick={() => dispatch(dispatchProj(ticket))}
      >
          <p className='w-1/4'>{ticket.ticketTitle}</p>
          <p className='w-2/4'>{ticket.ticketDescription}</p>
          <p className='w-1/4'>{ticket.ticketOwned}</p>
          <div>
           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
           </svg>
          </div>
      </li>
    
);
};

export default TicketBody;
