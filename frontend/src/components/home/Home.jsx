import React from 'react'
import ProjectDetails from '../projects/ProjectDetails';
import All from '../stats/All';
import Task from '../task/Task';
import './home.css';

const Home = () => {
  return (
    <div className='dashboard-wrapper'>
      {/* <div className='dashboard'>Dashboard</div> */}
      <div className='Home'>
        <All />
        <ProjectDetails />
        <Task />
      </div>
    </div>
  )
}

export default Home