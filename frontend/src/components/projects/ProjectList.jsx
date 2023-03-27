import React from 'react'
import { useDispatch } from 'react-redux';
import { createNewProjectModalSuc } from '../../redux';
import Button from '../button/Button';
import Card from './Card';
import ProjectStatus from './ProjectStatus';


export const buttonStyles = {
    borderRadius: '5px',
    opacity: '0.8',
    color: 'white',
    border: '2px solid blue',
    height: '25px',
    background: 'blue'
}

const projects = [
    {
      id: 1,
      name: 'Task mgt',
      progress: 34,
      team: ['Tonny', 'Skeet', 'Dreil'],
      deadline: '2 weeks'
    },
    {
      id: 2,
      name: 'Chat design app',
      progress: 76,
      team: ['Tonny', 'Skeet', 'Dreil'],
      deadline: '3 weeks'
    },
    {
      id: 3,
      name: 'Task mgt',
      progress: 34,
      team: ['Tonny', 'Skeet', 'Dreil'],
      deadline: '2 weeks'
    },
    {
      id: 4,
      name: 'Chat design app',
      progress: 76,
      team: ['Tonny', 'Skeet', 'Dreil'],
      deadline: '3 weeks'
    },
    {
      id: 5,
      name: 'Task mgt',
      progress: 34,
      team: ['Tonny', 'Skeet', 'Dreil'],
      deadline: '2 weeks'
    },
    {
      id: 6,
      name: 'Chat design app',
      progress: 76,
      team: ['Tonny', 'Skeet', 'Dreil'],
      deadline: '3 weeks'
    },
    {
      id: 7,
      name: 'Task mgt',
      progress: 34,
      team: ['Tonny', 'Skeet', 'Dreil'],
      deadline: '2 weeks'
    },
    {
      id: 8,
      name: 'Chat design app',
      progress: 76,
      team: ['Tonny', 'Skeet', 'Dreil'],
      deadline: '3 weeks'
    },
    {
      id: 9,
      name: 'Task mgt',
      progress: 34,
      team: ['Tonny', 'Skeet', 'Dreil'],
      deadline: '2 weeks'
    },
    {
      id: 10,
      name: 'Chat design app',
      progress: 76,
      team: ['Tonny', 'Skeet', 'Dreil'],
      deadline: '3 weeks'
    },
    {
      id: 11,
      name: 'Task mgt',
      progress: 34,
      team: ['Tonny', 'Skeet', 'Dreil'],
      deadline: '2 weeks'
    },
    {
      id: 12,
      name: 'Chat design app',
      progress: 76,
      team: ['Tonny', 'Skeet', 'Dreil'],
      deadline: '3 weeks'
    },
    {
      id: 13,
      name: 'Task mgt',
      progress: 34,
      team: ['Tonny', 'Skeet', 'Dreil'],
      deadline: '2 weeks'
    },
    {
      id: 14,
      name: 'Chat design app',
      progress: 76,
      team: ['Tonny', 'Skeet', 'Dreil'],
      deadline: '3 weeks'
    }
  ]

const ProjectList = () => {
    const dispatch = useDispatch();
    const btnClicked = () => {
        console.log('Button clicked');
    }

    return (
        <>
            <div className='w-screen overflow-auto overflow-y-hidden h-screen bg-slate-300'>
                <div className='w-full flex flex-row gap-10 mb-2'>
                    <h2 className='font-semibold text-2xl pl-2'>Projects</h2>
                    <div className='items-center'>
                        <ProjectStatus />
                    </div>
                </div >
                <div className='project'>
                    <div className='project-list pb-4'>
                        {
                            projects.map((project) => (
                                <Card key={project.id} />
                            ))
                        }
                    </div>
                    <div className='text-white rounded-lg font-semibold absolute top-2 right-2 p-2'>
                        <Button style={buttonStyles} onClick={() => dispatch(createNewProjectModalSuc())}>NEW PROJECT</Button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ProjectList