import React from 'react';
import AssignedTeam from './AssignedTeam';
import ProjectTicket from './ProjectTicket';
import { useDispatch } from 'react-redux';
import { showTicketModal } from '../../redux';


const ProjectDet = () => {

  const dispatch = useDispatch();

  return (
  <div className='grid grid-cols-3 h-80 px-10 gap-1'>
      <div className='col-span-1 bg-white w-full rounded relative'>
          <div className='flex justify-between p-1'>
              <h2 className='text-black'>Team</h2>
              <button className='btn-new-proj' 
              
              >New Member</button>
          </div>
          <div className=''>
          <AssignedTeam />
          </div>
      </div>
      <div className='col-span-2 bg-white w-full rounded'>
          <div className='flex justify-between p-1'>
              <h2 className='text-black'>Tickets</h2>
              <button className='btn-new-proj' 
              onClick={() => dispatch(showTicketModal())}>New Ticket</button>
          </div>
          <div>
              <ProjectTicket />
          </div>
      </div>
  </div>
);
};

export default ProjectDet;
