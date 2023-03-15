import React from 'react';
import Button from '../button/Button';
import Draggable from '../draggable/Draggable';
import './projDetails.css';

export const buttonStyles = {
    borderRadius:'5px', 
    opacity:'0.8', 
    color:'blue', 
    border:'2px solid blue',
    height:'25px'
}

const ProjDetails = () => {
    return (
        <div className='ProjDetails-wrapper'>
            <div className="ProjectDetails">
                <div className="top">
                    <div className="title">
                        <h2>Title</h2>
                        <p>Project X</p>
                    </div>
                    <div className="meambers">
                        <div className="members-title">
                            <h2>Team</h2>
                        </div>
                        <div className="member-list">
                            <ul>
                                <li>To</li>
                                <li>Mo</li>
                                <li>Ki</li>
                                <li>To</li>
                                <li>Mo</li>
                                <li>Ki</li>
                                <li>To</li>
                                <li>Mo</li>
                                <li>Ki</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="bottom-wrapper">
                        <div className="droppable">
                            <div className="title">
                                <h2>To Do</h2>
                                {/* rounded-md bg-transparent border-solid border-2 border-blue-500 text-blue-700 */}
                                <Button style={buttonStyles}>+ New Card</Button>
                            </div>
                            <div className="droppable-items"></div>
                        </div>
                        <div className="droppable">
                            <div className="title">
                                <h2>InProgress</h2>
                                <Button style={buttonStyles}>+ New Card</Button>
                            </div>
                            <div className="droppable-items">
                                <Draggable />
                                <Draggable />
                                <Draggable />
                                <Draggable />
                                <Draggable />
                                <Draggable />
                            </div>
                        </div>
                        <div className="droppable">
                            <div className="title">
                                <h2>Completed</h2>
                                <Button style={buttonStyles}>+ New Card</Button>
                            </div>
                            <div className="droppable-items"></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjDetails