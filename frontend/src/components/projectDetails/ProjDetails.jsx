import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../button/Button';
import Draggable from '../draggable/Draggable';
import './projDetails.css';
import ProjDetailsBottom from './ProjDetailsBottom';
import ProjDetailsTop from './ProjDetailsTop';
import Modal from '../modal/Modal';
import BugDetails from '../bugDetails/BugDetails';
import Sidebar from '../sidebar/Sidebar';
import { fetchSingleProject, fetchSingleProjectFailure, fetchSingleProjectRequest, fetchSingleProjectSuccess } from '../../redux';
import axios from 'axios';

export const buttonStyles = {
    borderRadius: '5px',
    opacity: '0.8',
    color: 'blue',
    border: '2px solid blue',
    height: '25px'
}

const info = {
    title: 'This is the title',
    para: 'Long details here'
}

let project;
const ProjDetails = ({ }) => {

    const project = useSelector(state => state.projectSingleReducer);
    console.log(project.loading);

    const viewBug = useSelector(state => state.bugOpenModalReducer.open);
    const addBug = useSelector(state => state.createBugReducer.open);
    const addNewUser = useSelector(state => state.addUserToProjReducer.open);
    let childToDisplay = '';

    if (viewBug) {
        childToDisplay = 'openBug'
    } else if (addBug) {
        childToDisplay = 'createBug'
    } else {
        childToDisplay = 'addNewUserToProj'
    }

    const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated);

    return (
        <>
            {
                project.loading && <p>LOADING</p>
            }
            {
                viewBug || addBug || addNewUser ?
                    (
                        <>
                            <div className='ProjDetails-wrapper'>
                                <Sidebar />
                                <div className="ProjectDetails">
                                    <ProjDetailsTop
                                        project={!project.loading? project.project.data.project: {}}
                                        assignedUsers={!project.loading? project.project.data.assignedProjectMembers: {}}
                                    />
                                    <ProjDetailsBottom
                                        tickets={project.project.data.tickets}
                                    />
                                </div>
                            </div>
                            <Modal child={`${childToDisplay}`}
                                style={{}} />
                        </>
                    ) :
                    (
                        <div className='ProjDetails-wrapper'>
                            <Sidebar />
                            <div className="ProjectDetails">
                                <ProjDetailsTop
                                    project={!project.loading? project.project.data.project: {}}
                                    assignedUsers={!project.loading? project.project.data.assignedProjectMembers: []}
                                />
                                <ProjDetailsBottom
                                    tickets={!project.loading? project.project.data.tickets: []}
                                />
                            </div>
                        </div>
                    )
            }
        </>
    )
}

export default ProjDetails