import React, { useState } from 'react';
import './draggable.css';
import { BsThreeDotsVertical } from "react-icons/bs";
import Modal from '../modal/Modal';
import { useDispatch } from 'react-redux';
import { openBugSuccess } from '../../redux';

const Draggable = ({ info }) => {

  const [dragStarts, onDragStartSet] = useState(false);
  const dispatch = useDispatch();

  const dragStart = (e, info) => {
    // console.log(info);
    e.dataTransfer.setData("object", info);
    e.target.style.border = '2px dotted'
    // e.target.style.opacity = 1;
  }

  return (

    <div className={dragStarts ? 'draggable beautify-draggable' : 'draggable'}
      onDragStart={
        (e) => {
          onDragStartSet(!dragStarts);
          dragStart(e, info)
        }}
      draggable={true
      }
      onDragEnd={
        e => {
          e.target.style.border = "";
          onDragStartSet(!dragStarts)
        }
      }
      onDoubleClick={() => dispatch(openBugSuccess())}
    >
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