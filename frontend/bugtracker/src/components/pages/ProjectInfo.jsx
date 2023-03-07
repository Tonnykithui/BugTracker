import React, { useEffect } from 'react';
import ProjectDet from '../projects/ProjectDet';
import Ticket from '../tickets/Ticket';
import { useParams } from 'react-router-dom';
import { fetchSingleProjectThunk } from '../../redux';
import { useDispatch } from 'react-redux';

const ProjectInfo = () => {

 
    const { id } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchSingleProjectThunk(id));
      }, []);

  return (
    <div className='w-full relative bg-slate-100'>
    <div className='w-full bg-blue-400 h-40 '>
        <div className='px-10'>
          <h2 className='text-white text-xl font-semibold'>Project</h2>
        </div>
        <ProjectDet />
        <Ticket />
    </div>
   </div>
);
};

export default ProjectInfo;


