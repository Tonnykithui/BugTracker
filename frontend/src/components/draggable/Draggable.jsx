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
    e.dataTransfer.setData("text/plain", info._id);
    e.target.style.border = '2px dotted'
    // e.target.style.opacity = 1;
  }

  return (

    <div className={dragStarts ? 'draggable beautify-draggable' : 'draggable'}
      onDragOver={(e) => e.preventDefault()}
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
        <div className="bg-red-200 p-1 rounded-sm w-20 text-black font-semibold">
          <p>{info?.priority}</p>
        </div>
        <div className="header">
          <h2>{info?.title}</h2>
          <BsThreeDotsVertical />
        </div>
        <div className="text-left">
          <p>{info?.description}</p>
        </div>
        <div className="finer-details">
          {/* <div className='text-left pt-2 font-semibold text-black'>
            Due Date: {info.dueDate.slice(0, 10)}
          </div> */}
          <div className='text-left flex flex-row'>
            <h3 className='font-semibold text-black'>Created By:</h3>{info?.ticketOwner.firstname} {info?.ticketOwner.lastname}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Draggable