import React, { useState } from 'react';


const AssignedMember = ({ user }) => {

    const [showDelete, setShowDelete] = useState(false);

    const handleDeleteBtn = (e) => {
        e.preventDefault();
        setShowDelete(!showDelete);
    }

    setTimeout(() => {
       setShowDelete(false); 
    }, 4000);

  return (
  <li className='flex flex-row p-2 hover:bg-blue-200'>
    <h5 className='w-1/2'>{user}</h5>
    {/* <h5 className='w-1/2'>tonny@gmail.com</h5> */}
    <div className='relative'>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
    onClick={handleDeleteBtn} 
    fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
    </svg>
    {
        showDelete && (
            <button className='absolute top-0 right-2 bg-red-400 text-white rounded px-1'>Remove</button>
        )
    }
    </div>
  </li>
  );
};

export default AssignedMember;
