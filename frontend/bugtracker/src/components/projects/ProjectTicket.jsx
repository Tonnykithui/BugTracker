import React from 'react';
import TicketBody from './TicketBody';
import {  useSelector } from 'react-redux';


const ProjectTicket = () => {

    
    const ticketsFromProj = useSelector(state => state.fetchSingleProject.data.projectTickets);
    console.log(ticketsFromProj);
    const projects = useSelector(state => state.fetchSingleProject);

  return projects.loading ? (<h2>Loading</h2>) :
   projects.error ? (<h2>{projects.error}</h2>) : (
  <div>
      <ul className='bg-slate-100 text-blue-400'>
          <li className='flex flex-row pl-2 '>
              <h4 className='w-1/4'>Ticket Title</h4>
              <h4 className='w-2/4'>Description</h4>
              <h4 className='w-1/4'>Author</h4>
          </li>
      </ul>
      <div className='h-64 overflow-y-scroll'>
        <ul>
            {
                ticketsFromProj && ticketsFromProj.map((ticket) => (
                <TicketBody ticket={ticket}/>
                 ))
            }
        </ul>
      </div>
  </div>
);
};

export default ProjectTicket;
