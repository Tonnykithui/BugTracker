import React from 'react'
import Button from '../button/Button'
import './projDetails.css';
import { useDispatch, useSelector } from 'react-redux';
import { addNewUserToProjSuc } from "../../redux/index"

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

    const dispatch = useDispatch();
    // const addNewUser = useSelector(state => state.addUserToProjReducer.open);
    const project = useSelector(state => state.projectSingleReducer.project.data.project);
    const assignedUsers = useSelector(state => state.projectSingleReducer.project.data.assignedProjectMembers);

    console.log(project)
    return (
        <div className="top">
            <div className="title">
                <h2>Title</h2>
                <p>{project.name}</p>
            </div>
            <div className="meambers">
                <div className="members-title flex flex-row justify-between mb-1">
                    <h2>Team</h2>
                    <Button style={newMembersStyling} onClick={() => dispatch(addNewUserToProjSuc())}>+</Button>
                </div>
                <div className="member-list">
                    <ul>
                        {
                            assignedUsers.map((user) => (
                                <li>{user.firstname.slice(0,1)}{user.lastname.slice(0,1)}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProjDetailsTop