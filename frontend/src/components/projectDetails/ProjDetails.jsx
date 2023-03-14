import React from 'react';
import './projDetails.css';


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
                            <h2>Todo</h2>
                        </div>
                        <div className="droppable">
                            <h2>InProgress</h2>
                        </div>
                        <div className="droppable">
                            <h2>Completed</h2>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjDetails