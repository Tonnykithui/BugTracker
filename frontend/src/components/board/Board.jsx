import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Droppable from '../droppable/Droppable'
import './board.css';
import Sidebar from '../sidebar/Sidebar';

const Board = () => {
  const data = [
    {
      id: 1,
      name: 'Task mgt',
      progress: 34,
      team: ['Tonny', 'Skeet', 'Dreil'],
      deadline: '2 weeks'
    },
    {
      id: 2,
      name: 'Chat design app',
      progress: 76,
      team: ['Tonny', 'Skeet', 'Dreil'],
      deadline: '3 weeks'
    },
    {
      id: 3,
      name: 'Task mgt',
      progress: 34,
      team: ['Tonny', 'Skeet', 'Dreil'],
      deadline: '2 weeks'
    }
  ]

  const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated);

  const history = useNavigate();

  // useEffect(() => {
  //     if (!isAuthenticated) {
  //         history('http://localhost:3000/login'); // redirect to login page
  //     }
  // }, [isAuthenticated, history]);

  return (
    <div className='board'>
      <Sidebar />
      {
        data.map((item) => (
          <div className='board-droppable'>
            <Droppable />
          </div>
        ))
      }
    </div>
  )
}

export default Board