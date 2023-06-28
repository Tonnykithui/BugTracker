import React from 'react';
import { AiFillEdit, AiOutlineEllipsis } from "react-icons/ai";
import './bugOveralls.css';
import { useSelector } from 'react-redux';

const BugOveralls = () => {

    const project = useSelector(state => state.projectSingleReducer.project.data.project.name);
    const bugDetails = useSelector(state => state.bugSingleReducer.bug.data.ticket);

    return (
        <div>
            <div className=''>
                <h2 className='text-slate-500 font-semibold'>{project}</h2>
            </div>
            <div className='flex w-full justify-between h-full items-center mb-2'>
                <h1 className='text-black text-xl font-semibold'>{bugDetails.title}</h1>
                <div className="flex flex-row gap-1">
                    <div className="border-blue-500 border-2 p-2">
                        <AiFillEdit />
                    </div>
                    <div className="border-blue-500 border-2 p-2">
                        <AiOutlineEllipsis />
                    </div>
                </div>
            </div>
            <div className="statuses">
                <ul className=''>
                    <li>
                        <h2>Status</h2> <p>{bugDetails.status}</p>
                    </li>
                    <li >
                        <h2>Assignee</h2>
                        <p className='flex flex-row'>
                            {
                                [1, 2, 3].map((item) => {
                                    return (
                                        <li>Tonny Kithui</li>
                                    )
                                })
                            }
                        </p>
                    </li>
                    <li>
                        <h2>
                            Report date
                        </h2>
                        <p>Feb 22,2022</p>
                    </li>
                    <li>
                        <h2>Label</h2>
                    </li>
                </ul>
            </div>
            <div className='mt-3'>
                <h2 className='text-xl font-semibold'>Todo</h2>
                <p className="todo-contents">
                    {bugDetails.description}
                </p>
            </div>
        </div>
    )
}

export default BugOveralls