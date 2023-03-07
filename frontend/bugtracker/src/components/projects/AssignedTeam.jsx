import React from 'react';
import AssignedMember from './AssignedMember';
import { useSelector } from 'react-redux';

const AssignedTeam = () => {

    const users = useSelector(state => state.fetchSingleProject.data.assignedUsers);

  return (
  <div>
      <ul className='pl-1'>
          <li className='flex flex-row bg-slate-100 text-blue-400'>
              <h4 className='w-1/2'>Name</h4>
              <h4 className='w-1/2'>Email</h4>
          </li>
      </ul>
      <div className='h-64 overflow-y-scroll'>
      <ul className='text-slate-600 pl-1'>
          {/* {
              users.map((user) => (
                <AssignedMember user={user}/>
              ))
          } */}
      </ul>
      </div>
  </div>
);
};

export default AssignedTeam;
