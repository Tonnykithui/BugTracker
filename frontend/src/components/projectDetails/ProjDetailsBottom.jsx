import React from 'react'
import Button from '../button/Button'
import Draggable from '../draggable/Draggable'
import './projDetails.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleBug, openBugForm, openBugFormSuc, openBugSuccess, updateBug } from '../../redux';


export const buttonStyles = {
    borderRadius: '5px',
    opacity: '0.8',
    color: 'blue',
    border: '2px solid blue',
    height: '25px'
}

// const tickets = [
//     {
//         _id: "640500338bb630e9b6f9e1d3",
//         projectId: "6404f897fa0b7b5be9109dbb",
//         title: "Change password defect",
//         description: "Students cant change their passwords",
//         priority: "HIGH",
//         status: "CLOSED",
//         reportDate: "2023-03-05T20:43:39.234Z",
//         dueDate: "2023-03-05T20:43:39.234Z",
//         ticketOwner: {
//             _id: "6404ebc64c69ae18f9531ba7",
//             firstname: "super",
//             lastname: "admin"
//         },
//         estimateTime: "2hrs",
//         lastUpdatedBy: "6404ebc64c69ae18f9531ba7"
//     },
//     {
//         _id: "640500338bb630e9b6f9e1d3",
//         projectId: "6404f897fa0b7b5be9109dbb",
//         title: "Change password defect",
//         description: "Students cant change their passwords",
//         priority: "HIGH",
//         status: "CLOSED",
//         reportDate: "2023-03-05T20:43:39.234Z",
//         dueDate: "2023-03-05T20:43:39.234Z",
//         ticketOwner: {
//             _id: "6404ebc64c69ae18f9531ba7",
//             firstname: "super",
//             lastname: "admin"
//         },
//         estimateTime: "2hrs",
//         lastUpdatedBy: "6404ebc64c69ae18f9531ba7"
//     },
//     {
//         _id: "640500338bb630e9b6f9e1d3",
//         projectId: "6404f897fa0b7b5be9109dbb",
//         title: "Change password defect",
//         description: "Note that you'll need to include the Tailwind CSS framework in your project to make use of the utility classes. Make sure you have the necessary setup to use Tailwind CSS, such as linking the CSS file or using a build process like PostCSS",
//         priority: "HIGH",
//         status: "OPEN",
//         reportDate: "2023-03-05T20:43:39.234Z",
//         dueDate: "2023-03-05T20:43:39.234Z",
//         ticketOwner: {
//             _id: "6404ebc64c69ae18f9531ba7",
//             firstname: "super",
//             lastname: "admin"
//         },
//         estimateTime: "2hrs",
//         lastUpdatedBy: "6404ebc64c69ae18f9531ba7"
//     }
// ]
let bug = {
    _id: "640500338bb630e9b6f9e1d3",
    projectId: "6404f897fa0b7b5be9109dbb",
    title: "Change password defect",
    description: "Students cant change their passwords",
    priority: "HIGH",
    status: "OPEN",
    reportDate: "2023-03-05T20:43:39.234Z",
    dueDate: "2023-03-05T20:43:39.234Z",
    ticketOwner: {
        _id: "6404ebc64c69ae18f9531ba7",
        firstname: "super",
        lastname: "admin"
    },
    estimateTime: "2hrs",
    lastUpdatedBy: "6404ebc64c69ae18f9531ba7"
}

const ProjDetailsBottom = ({ tickets }) => {

    const dispatch = useDispatch();
    function onDropItem(event, str) {
        event.preventDefault();
        var data = event.dataTransfer.getData("text/plain");
        console.log(data);
        const id = event.target;
        console.log('DROPPED LOCATION ID', id);
        console.log('STRING FROM LOCATION OF DROP', str);
        // var draggedDiv = document.getElementById(data);
        // event.target.appendChild(draggedDiv);
        updateItem(data, str);
    }

    let ticket = useSelector(state => state.bugSingleReducer.bug.data.ticket);
    console.log(ticket)

    function updateItem(data, str) {
        dispatch(fetchSingleBug(data));
        if(str == 'todo'){
            str = 'OPEN'
        } else if(str == 'inprogress'){
            str = 'INPROGRESS'
        } else {
            str = 'CLOSED'
        }

        // console.log(ticket.data.ticket.status)
        
        let newTicket = {
            ...ticket,
            status: str
        }

        console.log('UPDATED TICKET',newTicket)
        dispatch(updateBug(data, newTicket));
    }
    
    
    
    let todo = tickets.filter((item) => item.status == 'OPEN');
    let inprogress = tickets.filter((item) => item.status == 'INPROGRESS');
    let completed = tickets.filter((item) => item.status == 'CLOSED')

    return (
        <div className="bottom">
            <div className="bottom-wrapper">
                <div
                    className="droppable"
                    droppable={true}
                    onDrop={
                        (e) => onDropItem(e, 'todo')
                    }
                    onDragOver={
                        e => e.preventDefault()
                    }
                >
                    <div className="title">
                        <h2>To Do</h2>
                        <Button style={buttonStyles} onClick={() => dispatch(openBugFormSuc())}>+ New Card</Button>
                    </div>
                    <div className="droppable-items" id='todo'>
                        {
                            todo.map((item) => (
                                <Draggable info={item} />
                            ))
                        }
                    </div>
                </div>
                <div
                    className="droppable"
                    droppable={true}
                    onDrop={
                        (e) => onDropItem(e, 'inprogress')
                    }
                    onDragOver={
                        e => e.preventDefault()
                    }>
                    <div className="title">
                        <h2>InProgress</h2>
                        <Button style={buttonStyles} onClick={() => dispatch(openBugFormSuc())}>+ New Card</Button>
                    </div>
                    <div className="droppable-items" id='inprogress'>
                        {
                            inprogress.map((item) => (
                                <Draggable info={item} />
                            ))
                        }
                    </div>
                </div>
                <div
                    className="droppable"
                    droppable={true}
                    onDrop={
                        (e) => onDropItem(e, 'completed')
                    }
                    onDragOver={
                        e => e.preventDefault()
                    }
                >
                    <div className="title">
                        <h2>Completed</h2>
                        <Button style={buttonStyles} onClick={() => dispatch(openBugFormSuc())}>+ New Card</Button>
                    </div>
                    <div className="droppable-items" id='completed'>
                        {
                            completed.map((item) => (
                                <Draggable info={item} />
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProjDetailsBottom