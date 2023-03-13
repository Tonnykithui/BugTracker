import React from 'react'
import Droppable from '../droppable/Droppable'
import './board.css';

const Board = () => {
  const data = [
    {
      id:1,
      name:'Task mgt',
      progress:34,
      team:['Tonny', 'Skeet', 'Dreil'],
      deadline:'2 weeks'
  },
  {
      id:2,
      name:'Chat design app',
      progress:76,
      team:['Tonny', 'Skeet', 'Dreil'],
      deadline:'3 weeks'
  },
  {
    id:3,
    name:'Task mgt',
    progress:34,
    team:['Tonny', 'Skeet', 'Dreil'],
    deadline:'2 weeks'
  }
]
  return (
    <div className='board'>
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