import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import SelfTickets from '../tickets/SelfTickets';

const Tickets = () => {
  return (
  <div className='w-full h-screen relative pb-3'>
      <div className='px-10 bg-blue-400 h-40 '>
          <h2 className='text-white text-xl font-semibold uppercase'>Tickets</h2>
      </div>
      <div className=''>
      <SelfTickets />
      </div>
      
  </div>
);
};

export default Tickets;

//flex flex-row w-full bg-blue-500 h-full justify-start items-start