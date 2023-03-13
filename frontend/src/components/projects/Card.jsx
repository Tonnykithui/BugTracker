import React from 'react';
import './card.css';
import { BsClockHistory } from "react-icons/bs";

const Card = () => {
  return (
    <div className='project-card'>
        <div className='project-head'><h1>Heading</h1></div>
        <div className='project-timeline'>
           <BsClockHistory />
           <p>1 Week Left</p>
        </div>
        <div className='project-details'>
            <div className='project-team'>
                <h1 className='team-heading'>Team Member</h1>
                <div className='team'>
                   <div>TM</div>
                   <div>LM</div>
                </div>
            </div>
            <div className='project-progress'>
                <h1 className='progress-heading'>Progress</h1>
                <div className='progress'>
                   <p>30%</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card