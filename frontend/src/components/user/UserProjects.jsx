import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOtherUserProjects } from '../../redux';
import UserCard from '../projects/UserCard';

const UserProjects = () => {
  const projects = useSelector(state => state.OtherUserProjectsReducer.projects.data);
  const isEmpty = projects.length;
  return (
    <div className=''>
      {isEmpty == 0 ? (
        <div className='flex justify-center h-full w-full'>
          <h1 className='text-xl font-semibold'>No projects</h1>
        </div>
      ) : (
        projects.map(item => (
          <ul className=''>
            <li className='bg-slate-100 p-1'>
              <UserCard project={item} />
            </li>
          </ul>
        ))
      )}
    </div>
  );
};

export default UserProjects;

// grid grid-cols-2 gap-2 bg-slate-100 p-2 h-full overflow-auto