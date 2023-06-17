import React from 'react'
import ProjectDetails from '../projects/ProjectDetails';
import All from '../stats/All';
import Task from '../task/Task';
import './home.css';
import Sidebar from '../sidebar/Sidebar';
import { useDispatch } from 'react-redux';
import { fetchProject, fetchUsers } from '../../redux';

const Home = () => {

  const dispatch = useDispatch()
  dispatch(fetchUsers());
  dispatch(fetchProject());

  return (
    <div className='dashboard-wrapper'>
      {/* <div className='dashboard'>Dashboard</div> */}
      <div className='Home'>
        <Sidebar />
        <div className="home-contents">
          <All />
          <ProjectDetails />
          <Task />
        </div>
      </div>
    </div>
  )
}

export default Home