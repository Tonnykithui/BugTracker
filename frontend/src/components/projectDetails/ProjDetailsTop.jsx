import React, { useState, useEffect } from 'react';
import Button from '../button/Button';
import './projDetails.css';
import { useDispatch, useSelector } from 'react-redux';
import { addNewUserToProjSuc, fetchUsersInProject } from "../../redux/index";
import { useParams } from 'react-router-dom';
import Top from './Top';

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

const ProjDetailsTop = ({ project, assignedUsers }) => {

    const [showUser, setShowUser] = useState(false);
    const [userDetails, setUserDetails] = useState();
    // const userFromUserDetails = assignedUsers.find((user) => user.id == userDetails);
    
    const dispatch = useDispatch();
    const { id } = useParams();

    const handleBtnClick = () => {
        dispatch(fetchUsersInProject(id))
        dispatch(addNewUserToProjSuc())
    }

    return (
        <>
            <div>
                {
                    <div className="top">
                        <div className="title">
                            <h2>Title</h2>
                            <p>{project.name}</p>
                        </div>
                        <div className="meambers">
                            <div className="members-title flex flex-row justify-between mb-1 w-full items-center gap-2">
                                <h2>Team</h2>
                                <Button
                                    style={newMembersStyling}
                                    onClick={
                                        () => handleBtnClick()}>+</Button>
                            </div>
                            <div className="member-list">
                                <ul>
                                    {
                                        assignedUsers ?
                                            assignedUsers.map((user) => (
                                                <>
                                                    <li
                                                        key={user.id}
                                                        // onMouseOver={() => {setShowUser(true); setUserDetails(user.id)}}
                                                        // onMouseLeave={() => {setShowUser(false); setUserDetails()}}
                                                        className='cursor-pointer'
                                                    >
                                                        {user.firstname?.slice(0, 1)}{user.lastname?.slice(0, 1)}
                                                    </li>
                                                </>
                                            )) :
                                            (
                                                <p>Loading</p>
                                            )
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    );
};

export default ProjDetailsTop;