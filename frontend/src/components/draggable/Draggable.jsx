import React, { useState } from 'react';
import './draggable.css';
import { BsThreeDotsVertical } from "react-icons/bs";
import Modal from '../modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleBug, openBugDeleteModal, openBugFormSuc, openBugSuccess } from '../../redux';

const Draggable = ({ info }) => {

  const [dragStarts, onDragStartSet] = useState(false);
  const [showItems, setShowItems] = useState(false);

  const dispatch = useDispatch();

  const dragStart = (e, info) => {
    e.dataTransfer.clearData('text/plain');
    var data = e.dataTransfer.getData("text/plain");
    console.log('DRAG STARTED VALUE', data);
    e.dataTransfer.setData("text/plain", info._id);
    e.target.style.border = '2px dotted'
  }

  setTimeout(() => {
    if (showItems) {
      setShowItems(false)
    }
  }, 4000);

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
      onDoubleClick={() => { dispatch(openBugSuccess()); dispatch(fetchSingleBug(info._id)) }}
    >
      <div className='wrappper'>
        <div className="bg-red-200 p-1 rounded-sm w-20 text-black font-semibold">
          <p>{info?.priority}</p>
        </div>
        <div className="header relative">
          <h2>{info?.title}</h2>
          {/* onMouseLeave={setShowItems(false)} */}
          <BsThreeDotsVertical onMouseOver={() => setShowItems(!showItems)} />
          {
            showItems &&
            <div className='flex flex-col absolute right-0 text-sm gap-1'>
              <button
                className='bg-blue-500 rounded-lg p-1 text-white'
              onClick={() => { dispatch(openBugFormSuc('EDITTICKET')); dispatch(fetchSingleBug(info._id))}}
              >
                Edit
              </button>
              <button
                className='bg-red-500 rounded-lg p-1 text-white'
                onClick={() => dispatch(openBugDeleteModal('confirmDelete', info._id))}
              >
                Delete
              </button>
            </div>
          }
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