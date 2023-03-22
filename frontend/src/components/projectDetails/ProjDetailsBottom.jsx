import React from 'react'
import Button from '../button/Button'
import Draggable from '../draggable/Draggable'
import './projDetails.css';

export const buttonStyles = {
    borderRadius: '5px',
    opacity: '0.8',
    color: 'blue',
    border: '2px solid blue',
    height: '25px'
}

const info = {
    id:1,
    title: 'This is the title',
    para: 'Long details here'
}

function onDropItem(e) {
    e.preventDefault();
    let item = e.dataTransfer.getData('object');
    // console.log(e.dataTransfer.getData());
    console.log(item)
}

const ProjDetailsBottom = () => {
    return (
        <div className="bottom">
            <div className="bottom-wrapper">
                <div className="droppable">
                    <div className="title">
                        <h2>To Do</h2>
                        {/* rounded-md bg-transparent border-solid border-2 border-blue-500 text-blue-700 */}
                        <Button style={buttonStyles}>+ New Card</Button>
                    </div>
                    <div className="droppable-items"></div>
                </div>
                <div className="droppable"
                    droppable='true'
                    onDrop={
                        (e) => onDropItem(e)
                    }
                    onDragOver={
                        e => e.preventDefault()
                    }>
                    <div className="title">
                        <h2>InProgress</h2>
                        <Button style={buttonStyles}>+ New Card</Button>
                    </div>
                    <div className="droppable-items">
                        <Draggable info={info} />
                        <Draggable info={info} />
                        <Draggable info={info} />
                        <Draggable info={info} />
                        <Draggable info={info} />
                        <Draggable info={info} />
                        <Draggable info={info} />
                    </div>
                </div>
                <div className="droppable"
                    droppable='true'
                    onDrop={
                        (e) => onDropItem(e)
                    }
                    onDragOver={
                        e => e.preventDefault()
                    }
                >
                    <div className="title">
                        <h2>Completed</h2>
                        <Button style={buttonStyles}>+ New Card</Button>
                    </div>
                    <div className="droppable-items">

                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProjDetailsBottom