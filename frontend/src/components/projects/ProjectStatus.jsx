import React from 'react';
import './projStatus.css';

const ProjectStatus = () => {
  
  return (
    <div className='proj-status'>
        <div className='proj-status-items'>
            <h2 className='font-semibold'>All</h2>
            <p className='bg-slate-300 rounded-lg p-2'>10</p>
        </div>
        <div className='proj-status-items'>
            <h2 className='font-semibold'>Started</h2>
            <p className='bg-slate-300 rounded-lg p-2'>4</p>
        </div>
        <div className='proj-status-items'>
            <h2 className='font-semibold'>Completed</h2>
            <p className='bg-slate-300 rounded-lg p-2'>2</p>
        </div>
    </div>
  )
}

export default ProjectStatus