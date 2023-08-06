import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';
import { fetchSingleProject } from '../../redux';
import { useDispatch } from 'react-redux';


const UserCard = ({ project }) => {

    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(fetchSingleProject(project._id))
    }

    return (
        <div className='bg-white p-2 lg:max-h-20'>
            <div className=''>
                <h4 className='font-semibold'>{project.name}</h4>
            </div>
            <Link to={`/project/${project._id}`} onClick={handleClick}>
                <div className=''>
                    <p>{project.description}</p>
                </div>
            </Link>
        </div >
    )
}

export default UserCard