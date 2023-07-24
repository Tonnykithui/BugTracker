import React, { useState } from 'react'
import per from "../../img/per.svg";
import './card.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchSingleUser } from '../../redux';
import Button from '../button/Button';
import { BsThreeDotsVertical } from "react-icons/bs";

const Card = ({ user }) => {
    const dispatch = useDispatch()
    const handleClick = (userId) => {
        dispatch(fetchSingleUser(userId))
    }
    // const [showHiddenOptions, setShowHiddenOptions] = useState(false);
    // setTimeout(() => {
    //     setShowHiddenOptions(false);
    // }, 5000);
    return (
        <>
            <Link to={`/user/${user._id}`} onClick={() => handleClick(user._id)}>
                <div className='employee-card'>
                    <div className='flex flex-row items-center justify-center p-2'>
                        <div className="img">
                            <img src={per} alt="" className='object-contain' />
                        </div>
                        <div className="name-role text-center w-full flex flex-col justify-center">
                            <h2>{user.firstname} {user.lastname}</h2>
                            <p className='bg-red-100 rounded-lg'>{user.role[0]}</p>
                        </div>
                    </div>
                    <div className='p-2 text-center text-lg'>
                        <p>{user.phone}</p>
                        <p>{user.email}</p>
                    </div>
                    {/* <div className="ticket-assigned">
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
                    </div> */}
                </div>
            </Link >
        </>
    )
}

export default Card