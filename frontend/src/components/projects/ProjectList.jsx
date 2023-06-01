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
  background: 'blue',
  padding: '2px'
}

const projects = [
  {
    _id: "6404f897fa0b7b5be9109dbb",
    name: "Leave management system",
    description: "A school based system to manage records for school",
    creationDate: "2023-03-05T20:16:23.082Z",
    createdBy: {
      _id: "6404ebc64c69ae18f9531ba7",
      firstname: "super",
      lastname: "admin"
    }
  },
  {
    _id: "6404f897fa0b7b5be9109dbb",
    name: "School management system",
    description: "A school based system to manage records for school",
    creationDate: "2023-03-05T20:16:23.082Z",
    createdBy: {
      _id: "6404ebc64c69ae18f9531ba7",
      firstname: "super",
      lastname: "admin"
    }
  },
  {
    _id: "6404f897fa0b7b5be9109dbb",
    name: "Hotel management system",
    description: "A school based system to manage records for school",
    creationDate: "2023-03-05T20:16:23.082Z",
    createdBy: {
      _id: "6404ebc64c69ae18f9531ba7",
      firstname: "super",
      lastname: "admin"
    }
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
        <div className='w-full flex flex-row gap-10 p-2'>
          <h2 className='font-semibold text-2xl pl-2'>Projects</h2>
          <div className='items-center'>
            <ProjectStatus />
          </div>
        </div >
        <div className='project'>
          <div className='project-list pb-4'>
            {
              projects.map((project) => (
                <Card key={project.id} project={project} />
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