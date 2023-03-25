import React from 'react';
import { AiFillEdit, AiOutlineEllipsis } from "react-icons/ai";
import './bugOveralls.css';

const BugOveralls = () => {
    return (
        <div>
            <div className=''>
                <h2 className='text-slate-500 font-semibold'>Project X</h2>
            </div>
            <div className='flex w-full justify-between h-full items-center mb-2'>
                <h1 className='text-black text-xl font-semibold'>This is the title for the Ticket</h1>
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
                        <h2>Status</h2> <p>In Progress</p>
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
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur voluptate eius tenetur laborum, cupiditate debitis error quasi dolorem quaerat officia molestiae, autem inventore ratione distinctio similique deserunt unde exercitationem impedit!
                    Recusandae tenetur, necessitatibus nesciunt in nobis asperiores id dolorem hic tempore nisi, officiis quos, rerum ut omnis! Incidunt, reiciendis quia ad consequuntur asperiores sapiente quos neque tenetur, aliquid deleniti labore?
                    Sed nulla amet tenetur veritatis ab exercitationem fuga cupiditate, quasi quae quidem quos asperiores dignissimos eaque doloribus voluptatem, doloremque quisquam nemo aspernatur optio temporibus omnis adipisci laborum ducimus voluptate! Quo.
                    Molestiae natus dolorem quae iste perferendis neque placeat illum impedit asperiores reprehedelectus accusantium facere nemo quam veniam placeat impedit. Assumenda dignissimos architecto eveniet? Aliquid nisi veniam maiores corrupti quis? Similique at modi ratione voluptates itaque. Corporis.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur voluptate eius tenetur laborum, cupiditate debitis error quasi dolorem quaerat officia molestiae, autem inventore ratione distinctio similique deserunt unde exercitationem impedit!
                    Recusandae tenetur, necessitatibus nes
                </p>
            </div>
        </div>
    )
}

export default BugOveralls