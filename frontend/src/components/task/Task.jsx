import React from 'react'
import { VscChromeClose,VscCheckAll } from "react-icons/vsc";
import './task.css';

const Task = () => {
  return (
    <div className='task-wrapper'>
        <div className="task-container">
            <div className="task-logo">My Tasks <span>(05)</span></div>
            <div className="task-list">
                <ul>
                    <li>
                        <p>Logo design</p><div className='task-icon'><VscCheckAll /></div>
                    </li>
                    <li>
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
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Task