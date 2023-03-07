import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjectThunk, fetchUsersFromEnd, showProjectModal } from '../../redux';
import Priority from '../stats/Priority';
import Status from '../stats/Status';
import Type from '../stats/Type';
import ProjTable from '../table/ProjTable';
import SortingT from '../table/SortingT';


const Project = () => {

  const dispatch = useDispatch();
  
  return (
    <div className='px-8 absolute text-blue-700 top-9 w-11/12 mr-10 ml-5'>
    <div className='bg-white rounded'>
    <div className='flex justify-between items-center p-2'>
      <h2 className='text-black text-xl'>Projects</h2>
      <button className='btn-new-proj' onClick={() => dispatch(showProjectModal())}>New Project</button>
    </div>
    <div className='h-72 overflow-y-scroll'>
        <SortingT />
    </div>
    </div>
    <div className='flex flex-row mt-5 h-96
     justify-between'>
        <Type />
        <Priority />
        <Status />
    </div>
  </div>
  );
};

export default Project;
