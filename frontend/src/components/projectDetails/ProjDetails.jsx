import React from 'react';
import Button from '../button/Button';
import Draggable from '../draggable/Draggable';
import './projDetails.css';
import ProjDetailsBottom from './ProjDetailsBottom';
import ProjDetailsTop from './ProjDetailsTop';
import { useSelector } from 'react-redux';
import Modal from '../modal/Modal';
import BugDetails from '../bugDetails/BugDetails';

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

const ProjDetails = () => {

    const modal = useSelector(state => state.bugOpenModalReducer.open);

    return (
        <>
            {
                modal ?
                    (
                        <Modal children={<BugDetails />}/>
                    ) :
                    (
                        <div className='ProjDetails-wrapper'>
                            <div className="ProjectDetails">
                                <ProjDetailsTop />
                                <ProjDetailsBottom />
                            </div>
                        </div>
                    )
            }
        </>
    )
}

export default ProjDetails

// <Draggable />
//                                 <Draggable />
//                                 <Draggable />
//                                 <Draggable />
//                                 <Draggable />