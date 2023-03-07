import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideTicketModal } from '../../redux';
import CancelBtn from './CancelBtn';


const NewTicket = () => {

  const showModal = useSelector(state => state.modal.addTicket);
  const dispatch = useDispatch();

  const styling = [];

  if(showModal){
    styling.push('modal')
  } else {
    styling.push('hideEditModal')
  }

  return (
  <div className={styling}>
    <form className='bg-slate-100 p-6 relative'>
      <h2 className='uppercase text-center text-2xl text-blue-400'>Create ticket</h2>
      <div onClick={() => dispatch(hideTicketModal())}>
      <CancelBtn />
      </div>
      
      <div className='w-96 my-2'>
        <label>Title</label>
        <input type="text" placeholder='Ticket Title' className='newTicket-input w-full h-9'/>
      </div>
      <div className='w-96 my-2'>
        <label>Description</label>
        <input type="text" placeholder='Ticket Description' className='newTicket-input w-full h-9'/>
      </div>
      <div className='flex flex-row w-96'>
        <div className='w-1/2 my-2 mr-2'>
          <label>Assigne</label>
          <select name="" id="" multiple={true} className="newTicket-input w-full">
            <option value="">Jemo</option>
            <option value="">Jemo</option>
            <option value="">Jemo</option>
          </select>
        </div>
        <div className='w-1/2 my-2'>
          <label>Time Estimated(Hours)</label>
          <input type="text" placeholder='Ticket Estimated Time' className='newTicket-input'/>
          <label>Due Date</label>
          <input type="text" placeholder='Due' className='newTicket-input'/>
        </div>
      </div>
      <div className='flex flex-row w-96'>
        <div className='w-1/2 my-2'>
          <label>Priority</label>
          <select name="" id="" className='newTicket-input'>
            <option value="">Low</option>
            <option value="">Medium</option>
            <option value="">High</option>
          </select>
        </div>
        <div className='w-1/2 my-2'>
          <label>Status</label>
          <select name="" id="" className='newTicket-input'>
            <option value="">Open</option>
            <option value="">Inprogress</option>
            <option value="">Closed</option>
          </select>
        </div>
      </div>
      <button className='btn-new-proj mt-3 mx-auto'>SUBMIT</button>
    </form>
  </div>
);
};

export default NewTicket;
