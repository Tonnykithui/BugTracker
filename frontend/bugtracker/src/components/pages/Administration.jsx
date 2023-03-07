import React, { useEffect } from 'react';
import Sidebar from '../sidebar/Sidebar';
import ProfileC from './ProfileC';
import SearchBar from './SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersFromEnd, showAddNew } from '../../redux';

const Administration = () => {

  const dispatch = useDispatch();

  const handleAddNewUser = (e) => {
    e.preventDefault();
    dispatch(showAddNew());
  }
  
  

  useEffect(() => {
    dispatch(fetchUsersFromEnd());
  }, [])

  const users = useSelector(state => state.users.data);
  console.log(users);
  
  return (
  <div className='flex flex-row w-full h-full'>
      <div className='px-10 flex-grow relative'>
          <SearchBar />
          <div className='administration-new'>
            <h2 className='text-2xl'>User Management</h2>
            <button className='admin-btn' onClick={handleAddNewUser}>Add User
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
            </svg>
            </button>
          </div>
          <div className='grid grid-cols-3 gap-1'>
            {
              users.map(user => (
                <ProfileC user={user} key={user.id}/>
              ))
            }
          </div>
      </div>
  </div>
);
};

export default Administration;
