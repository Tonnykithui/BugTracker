import React from 'react'
import per from "../../img/per.svg";
import './card.css';

const Card = () => {
    return (
        <div className='employee-card'>
            <div className="img">
                <img src={per} alt="" className='object-contain' />
            </div>
            <div className="name-role">
                <h2>James Gosling</h2>
                <p>Developer</p>
            </div>
            <div className="ticket-assigned">
                <div className="tickets">
                    <h2>Tickets</h2>
                    <p>22</p>
                </div>
                <div className="done">
                    <h2>Done</h2>
                    <p>8</p>
                </div>
                <div className="inprogress">
                    <h2>Open</h2>
                    <p>4</p>
                </div>
            </div>
            {/* <div className="percentage">
            </div> */}
        </div>
    )
}

export default Card