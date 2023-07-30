import React from 'react';
import { AiFillEdit, AiOutlineEllipsis } from "react-icons/ai";
import './bugOveralls.css';
import { useSelector } from 'react-redux';

const BugOveralls = () => {
    const checkDetailsFetched = useSelector(state => state.bugSingleReducer.bug);
    const project = useSelector(state => state.projectSingleReducer.project.data.project.name);
    const assignee = useSelector(state => state.bugSingleReducer.bug?.data.assignedUsers);
    // Check if the data is not yet fetched
    const bugDetails = useSelector(state => state.bugSingleReducer.bug?.data.ticket);
    if (!checkDetailsFetched) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <div className=''>
                <h2 className='text-slate-500 font-semibold'>{project}</h2>
            </div>
            <div className='flex w-full justify-between h-full items-center mb-2'>
                <h1 className='text-black text-xl font-semibold'>{bugDetails?.title}</h1>
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
                        <h2>Status</h2> <p>{bugDetails?.status}</p>
                    </li>
                    <li >
                        <h2>Assignee</h2>
                        <p className='flex gap-1'>
                            {
                                assignee.map((user) => (
                                    <>
                                        <div className='flex flex-col bg-white rounded-lg p-2'>
                                            <p>{user.memberId.firstname}</p>
                                            <p>{user.memberId.lastname}</p>
                                        </div>
                                    </>
                                ))
                            }
                        </p>
                    </li>
                </ul>
            </div>
            <div className='mt-3'>
                <h2 className='text-xl font-semibold'>Todo</h2>
                <p className="todo-contents">
                    {bugDetails?.description}
                </p>
            </div>
        </div>
    );
}

export default BugOveralls;