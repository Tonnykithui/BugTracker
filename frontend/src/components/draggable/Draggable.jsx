import React from 'react';
import './draggable.css';
import { BsThreeDotsVertical } from "react-icons/bs";

const Draggable = () => {
  return (
    <div className='draggable' onDrag>
        <div className='wrappper'>
            <div className="header">
               <h2>Title</h2>
               <BsThreeDotsVertical />
            </div>
            <div className="description">
                <p>Lorem ipsum dolor sit, amet consectetur a.</p>
            </div>
            <div className='percentage'>

            </div>
            <div className="finer-details">
                <div className='timeline'>
                </div>
                <div className='team'>
                    <div>TM</div>
                    <div>LM</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Draggable