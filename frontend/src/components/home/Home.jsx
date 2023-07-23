import React from 'react'
import All from '../stats/All';
import Task from '../task/Task';
import './home.css';
import Sidebar from '../sidebar/Sidebar';
import { useDispatch } from 'react-redux';
import { fetchPendingTickets, fetchProject, fetchTicketTypes, fetchTicketsByPriority, fetchTicketsByStatus, fetchUserTickets, fetchUsers } from '../../redux';
import Ongoing from '../ongoing/Ongoing';

const Home = () => {

  const dispatch = useDispatch()
  dispatch(fetchUsers());
  dispatch(fetchProject());
  dispatch(fetchUserTickets())
  dispatch(fetchPendingTickets())
  dispatch(fetchTicketTypes())
  dispatch(fetchTicketsByStatus())
  dispatch(fetchTicketsByPriority())
  
  return (
    <div className='dashboard-wrapper'>
      <div className='Home'>
        <Sidebar />
        <div className="home-contents">
          <All />
          <Task />
          <Ongoing />
        </div>
      </div>
    </div>
  )
}

export default Home