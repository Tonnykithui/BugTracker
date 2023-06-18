import React from 'react'
import Card from '../projects/Card'
import { useSelector } from 'react-redux';


const UserProjects = () => {
    const projects = useSelector(state => state.projectFetchReducer.data.data);
    return (
        <div className='grid grid-cols-2 gap-2 bg-slate-100 p-2 h-full overflow-auto'>
            {
                projects.map((item) => (
                    <Card project={item} />
                ))
            }
        </div>
    )
}

export default UserProjects