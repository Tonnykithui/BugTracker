import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../button/Button';
import { addNewUserToProjSuc } from '../../redux';

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
};

const Top = () => {
    const dispatch = useDispatch();
    // const project = useSelector(state => state.projectSingleReducer.project.data?.project);
    // const assignedUsers = useSelector(state => state.projectSingleReducer.project.data?.assignedProjectMembers) || [];
    return (
        <div className="top">
            <div className="title">
                <h2>Title</h2>
                {/* <p>{project.name}</p> */}
            </div>
            <div className="meambers">
                <div className="members-title flex flex-row justify-between mb-1">
                    <h2>Team</h2>
                    <Button style={newMembersStyling} onClick={() => dispatch(addNewUserToProjSuc())}>+</Button>
                </div>
                <div className="member-list">
                    <ul>
                        {/* {assignedUsers.map((user) => (
                                <li key={user.id}>{user.firstname?.slice(0, 1)}{user.lastname?.slice(0, 1)}</li>
                            ))} */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Top