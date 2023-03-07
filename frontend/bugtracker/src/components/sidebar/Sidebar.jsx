import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
  <div className='sidebar'>
      <div>
          <div className='mb-8'>
              <Link to='/' className='sidebar-logo'>
                <img src="../.././img/bug.png" className='h-8 w-8 mr-2' alt="" />
                <h2>BugKilla</h2>
              </Link>
          </div>
          <div>
              <ul>
                  <Link to='/'><li className='sidebar-link'>Home</li></Link>
                  <Link to='/tickets'><li className='sidebar-link'>Tickets</li></Link>
                  <Link to='/administration'><li className='sidebar-link'>Administration</li></Link>
              </ul>
          </div>
      </div>
  </div>
);
};

export default Sidebar;
