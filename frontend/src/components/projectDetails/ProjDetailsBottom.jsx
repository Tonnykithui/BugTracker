import React, { useState, useEffect } from 'react';
import Button from '../button/Button';
import Draggable from '../draggable/Draggable';
import './projDetails.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleBug, fetchSingleProject, openBugFormSuc, updateBug } from '../../redux';

export const buttonStyles = {
    borderRadius: '5px',
    opacity: '0.8',
    color: 'blue',
    border: '2px solid blue',
    height: '25px'
};

const ProjDetailsBottom = ({ tickets }) => {
    const [ticketAll, setTickets] = useState([]);

    useEffect(() => {
        setTickets(tickets);
    }, [tickets]);

    const dispatch = useDispatch();


    function onDropItem(event, str) {
        event.preventDefault();
        var data = event.dataTransfer.getData("text/plain");
        const updatedTickets = ticketAll.map((ticket) => {
            if (ticket._id === data) {
                return {
                    ...ticket,
                    status: str
                };
            }
            return ticket;
        });
        console.log('UPDATED', updatedTickets)
        setTickets(updatedTickets);
        updateItem(data, str);
    }


    const selectedBug = useSelector(state => state.bugSingleReducer.bug);
    let newTicket = {};

    if (selectedBug !== null) {
        newTicket = {
            ...selectedBug.data.ticket
        };
    }

    function updateItem(data, str) {
        dispatch(fetchSingleBug(data));
        newTicket.status = str;
        dispatch(updateBug(data, newTicket));
    }

    const todo = ticketAll.filter(item => item.status === 'OPEN');
    const inprogress = ticketAll.filter(item => item.status === 'INPROGRESS');
    const completed = ticketAll.filter(item => item.status === 'CLOSED');

    return (
        <div className="bottom">
            <div className="bottom-wrapper">
                <div
                    className="droppable"
                    droppable={true}
                    onDrop={e => onDropItem(e, 'OPEN')}
                    onDragOver={e => e.preventDefault()}
                >
                    <div className="title">
                        <h2>To Do</h2>
                        <Button style={buttonStyles} onClick={() => dispatch(openBugFormSuc('OPEN'))}>
                            + New Card
                        </Button>
                    </div>
                    <div className="droppable-items" id="OPEN">
                        {todo.map(item => (
                            <Draggable info={item} key={item._id} />
                        ))}
                    </div>
                </div>
                <div
                    className="droppable"
                    droppable={true}
                    onDrop={e => onDropItem(e, 'INPROGRESS')}
                    onDragOver={e => e.preventDefault()}
                >
                    <div className="title">
                        <h2>InProgress</h2>
                        <Button style={buttonStyles} onClick={() => dispatch(openBugFormSuc('INPROGRESS'))}>
                            + New Card
                        </Button>
                    </div>
                    <div className="droppable-items" id="INPROGRESS">
                        {inprogress.map(item => (
                            <Draggable info={item} key={item._id} />
                        ))}
                    </div>
                </div>
                <div
                    className="droppable"
                    droppable={true}
                    onDrop={e => onDropItem(e, 'CLOSED')}
                    onDragOver={e => e.preventDefault()}
                >
                    <div className="title">
                        <h2>Completed</h2>
                        <Button style={buttonStyles} onClick={() => dispatch(openBugFormSuc('CLOSED'))}>
                            + New Card
                        </Button>
                    </div>
                    <div className="droppable-items" id="CLOSED">
                        {completed.map(item => (
                            <Draggable info={item} key={item._id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjDetailsBottom;