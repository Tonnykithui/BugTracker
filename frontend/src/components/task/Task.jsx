import React from 'react'
import { VscChromeClose, VscCheckAll } from "react-icons/vsc";
import './task.css';
import { useSelector } from 'react-redux';

const Task = () => {
    const pendingTickets = useSelector(state => state.pendingTicketsReducer.pendingTickets?.data);
    return (
        <>
            {
                pendingTickets ? (
                    <div className='task-wrapper'>
                        <div className="task-container">
                            <div className="task-logo">My Tasks <span>({pendingTickets.length})</span></div>
                            <div className="task-list">
                                <ul className=''>
                                    {
                                        pendingTickets.map((ticket) => (
                                            <li className='flex flex-col'>
                                                <p>{ticket.projectId.name}</p>
                                                <div className='flex flex-row justify-between w-full'>
                                                    <h2 className='text-lg font-semibold'>{ticket.title}</h2>
                                                    <div className='task-icon'>
                                                        <VscChromeClose />
                                                    </div>
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p> Loading</p >
                )
            }
        </>
    )
}

export default Task

{/* <li>
                            <p>Website remake</p><div className='task-icon'><VscChromeClose /></div>
                        </li>
                        <li>
                            <p>Logo design</p><div className='task-icon'><VscCheckAll /></div>
                        </li>
                        <li>
                            <p>Logo design</p><div className='task-icon'><VscCheckAll /></div>
                        </li>
                        <li>
                            <p>Website remake</p><div className='task-icon'><VscChromeClose /></div>
                        </li> */}