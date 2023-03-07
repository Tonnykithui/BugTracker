import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { showConfirm, showEditUser } from '../../redux';

const ProfileC = ({ user }) => {

  const [showButtons, setShowButtons] = useState(false);
  const dispatch = useDispatch();

  if(showButtons){
    setTimeout(() => {
      setShowButtons(false)
    }, 5000);
  }
  
  return (
  <div className='mt-5 relative'>
    <div className='grid grid-cols-3 relative py-3 shadow-lg w-80 items-center'>
        <div className='h-16 w-16 ml-3 rounded-full overflow-hidden 
                items-center
        '>
            <img src="../.././img/three.jpg" alt="" className='object-contain'/>
        </div>
        <div>
            <h3 className='text-blue-400 text-lg'>{user.firstName} {user.lastName}</h3>
            <p className='text-gray-400'>{user.email}</p>
            <h3 className='text-lg text-slate-700 font-semibold'>{user.role}</h3>
        </div>
        <div className='absolute top-0 right-0 rounded-full hover:bg-slate-400'>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" 
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
            onClick={() => setShowButtons(!showButtons)}
            >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
        </div>
    </div>
    {
      showButtons && (
          <div className='edit-delete-btn-user'>
            <button className='user-edit-btn' onClick={() => dispatch(showEditUser(user))}>Edit</button>
            <button className='user-delete-btn' onClick={() => dispatch(showConfirm(user))}>Delete</button>
          </div>
      )
    }
  </div>
  );
};

export default ProfileC;
