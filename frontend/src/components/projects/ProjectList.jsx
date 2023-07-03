import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { createNewProjectModalSuc, fetchProject, fetchSingleProject, fetchUserProjects } from '../../redux';
import Button from '../button/Button';
import Card from './Card';
import ProjectStatus from './ProjectStatus';
import { useSelector } from 'react-redux';

export const buttonStyles = {
  borderRadius: '5px',
  opacity: '0.8',
  color: 'white',
  border: '2px solid blue',
  height: '25px',
  background: 'blue',
  padding: '2px'
}
const ProjectList = () => {
  const dispatch = useDispatch();
  const btnClicked = () => {
    console.log('Button clicked');
  }

  useEffect(()=> {
    dispatch(fetchProject());
    dispatch(fetchUserProjects())
  }, [])

  const projects = useSelector(state => state.projectFetchReducer.data.data);

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
              projects?.map((project) => (
                <Card key={project._id} project={project}/>
              ))
            }
          </div>
          <div className='text-white rounded-lg font-semibold absolute top-2 right-2 p-2'>
            <Button style={buttonStyles} onClick={() => dispatch(createNewProjectModalSuc('addNewProjectModal'))}>NEW PROJECT</Button>
          </div>
        </div>
      </div >
      {
        
      }
    </>
  )
}

export default ProjectList