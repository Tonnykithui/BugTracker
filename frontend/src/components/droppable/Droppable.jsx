import React from 'react'
import Draggable from '../draggable/Draggable';
import './droppable.css';

const Droppable = () => {

  const cards = [
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
,
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
  ]
  const updateCardDetails = card => {
  }

  return (
    <div className='droppable' onDragOver={e => e.preventDefault()} onDrop={updateCardDetails}>
      {
        cards.map((card) => (
          <div className='droppable-container'>
            <Draggable />
          </div>
        ))
      }
    </div>
  )
}

export default Droppable