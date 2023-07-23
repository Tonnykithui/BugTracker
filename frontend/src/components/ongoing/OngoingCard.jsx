import React, { useState } from 'react'

const OngoingCard = ({ project }) => {

    const [open, setOpen] = useState(false);

    return (
        <div className='bg-slate-200 rounded-md p-1 m-1'>
            <div>
                <div className='flex flex-row justify-between h-full items-center'>
                    <h3>{project.name}</h3>
                    <p className='text-center text-blue-500 text-2xl cursor-pointer' onClick={() => setOpen(!open)}>
                        {
                            open ? '-' : '+'
                        }
                    </p>
                </div>
                {
                    open && (
                        <div>
                            <h5>{project.description}</h5>
                            <h5>{project.creationDate.slice(0, 10)}</h5>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default OngoingCard