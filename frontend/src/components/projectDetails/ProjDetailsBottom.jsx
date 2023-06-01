import React from 'react'
import Button from '../button/Button'
import Draggable from '../draggable/Draggable'
import './projDetails.css';
import { useDispatch } from 'react-redux';
import { openBugForm, openBugFormSuc, openBugSuccess } from '../../redux';


export const buttonStyles = {
    borderRadius: '5px',
    opacity: '0.8',
    color: 'blue',
    border: '2px solid blue',
    height: '25px'
}

const info = [
    {
        _id: "640500338bb630e9b6f9e1d3",
        projectId : "6404f897fa0b7b5be9109dbb",
        title: "Change password defect",
        description: "Students cant change their passwords",
        priority: "HIGH",
        status: "CLOSED",
        reportDate: "2023-03-05T20:43:39.234Z",
        dueDate: "2023-03-05T20:43:39.234Z",
        ticketOwner: {
        _id: "6404ebc64c69ae18f9531ba7",
        firstname: "super",
        lastname: "admin"
         },
        estimateTime: "2hrs",
        lastUpdatedBy: "6404ebc64c69ae18f9531ba7"
    },
    {
        _id: "640500338bb630e9b6f9e1d3",
        projectId : "6404f897fa0b7b5be9109dbb",
        title: "Change password defect",
        description: "Students cant change their passwords",
        priority: "HIGH",
        status: "CLOSED",
        reportDate: "2023-03-05T20:43:39.234Z",
        dueDate: "2023-03-05T20:43:39.234Z",
        ticketOwner: {
        _id: "6404ebc64c69ae18f9531ba7",
        firstname: "super",
        lastname: "admin"
         },
        estimateTime: "2hrs",
        lastUpdatedBy: "6404ebc64c69ae18f9531ba7"
    },
    {
        _id: "640500338bb630e9b6f9e1d3",
        projectId : "6404f897fa0b7b5be9109dbb",
        title: "Change password defect",
        description: "Note that you'll need to include the Tailwind CSS framework in your project to make use of the utility classes. Make sure you have the necessary setup to use Tailwind CSS, such as linking the CSS file or using a build process like PostCSS",
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
]
   let bug = {
        _id: "640500338bb630e9b6f9e1d3",
        projectId : "6404f897fa0b7b5be9109dbb",
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

function onDropItem(event, str) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text/plain");
    console.log(data);
    const id = event.target;
    console.log('DROPPED LOCATION ID', id);
    console.log('STRING FROM LOCATION OF DROP', str);
    // var draggedDiv = document.getElementById(data);
    // event.target.appendChild(draggedDiv);
    updateItem(data);
}

function updateItem(data) {
    let item = info.find((item) => item.id == data);
    // console.log(item);
    // item.
}

const ProjDetailsBottom = () => {

    const dispatch = useDispatch();
    let todo = info.filter((item) => item.status == 'OPEN');
    let inprogress = info.filter((item) => item.status == 'INPROGRESS');
    let completed = info.filter((item) => item.status == 'CLOSED')

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
                        {/* rounded-md bg-transparent border-solid border-2 border-blue-500 text-blue-700 */}
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