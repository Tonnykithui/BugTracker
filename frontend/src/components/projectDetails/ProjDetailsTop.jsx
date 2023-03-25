import React from 'react'
import Button from '../button/Button'
import './projDetails.css';

const newMembersStyling = {
    background: 'blue',
    padding: '2px',
    borderRadius: '8px',
    border: 'none',
    color: 'white',
    height: '20px',
    width: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px'
}

const ProjDetailsTop = () => {
    return (
        <div className="top">
            <div className="title">
                <h2>Title</h2>
                <p>Project X</p>
            </div>
            <div className="meambers">
                <div className="members-title flex flex-row justify-between mb-1">
                    <h2>Team</h2>
                    <Button style={newMembersStyling}>+</Button>
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
    )
}

export default ProjDetailsTop