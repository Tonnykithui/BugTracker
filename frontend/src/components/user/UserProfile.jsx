import React from 'react'
import { CgProfile } from "react-icons/cg";
import './user.css';

const UserProfile = () => {
  return (
    <div>
        <div className="h-28 flex justify-center">
            <CgProfile className='h-24 w-16'/>
        </div>
        <div className="mb-5">
            <h2 className='font-semibold flex text-xl justify-center'>Tonny Kithui</h2>
            <p>Software Engineer and Security Analyst</p>
        </div>
        <div className="contacts mb-5">
            <h3><span>Phone:</span> 0793011434</h3>
            <h3><span>Email:</span> tonny@gmail.com</h3>
        </div>
        <div className='projects-info'>
            <h3><span>Projects Involved:</span> 2</h3>
            <h3><span>Tickets:</span> 5</h3>
            <h3><span>Tickets Closed:</span> 2</h3>
        </div>
    </div>
  )
}

export default UserProfile