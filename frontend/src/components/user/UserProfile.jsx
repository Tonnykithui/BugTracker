import React from 'react'
import { CgProfile } from "react-icons/cg";
import './user.css';
import { useSelector } from 'react-redux';

const UserProfile = () => {

    const user = useSelector(state => state.singleUserReducer.user.data);
    const ticketCount = user.usersTickets.allClosed.length + user.usersTickets.allOpen.length + user.usersTickets.allInProgress.length;

    return (
        <div>
            <div className="h-28 flex justify-center">
                <CgProfile className='h-24 w-16' />
            </div>
            <div className="mb-5">
                <h2 className='font-semibold flex text-xl justify-center'>{user.user.firstname} {user.user.lastname}</h2>
                <p>{user.user.role[0]}</p>
            </div>
            <div className="contacts mb-5">
                <h3><span>Phone:</span> {user.user.phone}</h3>
                <h3><span>Email:</span> {user.user.email}</h3>
            </div>
            <div className='projects-info'>
                <h3><span>Projects Involved:</span> {user.usersProjects.length}</h3>
                <h3><span>Tickets:</span> {ticketCount}</h3>
                <h3><span>Tickets Closed:</span> {user.usersTickets.allClosed.length}</h3>
            </div>
        </div>
    )
}

export default UserProfile